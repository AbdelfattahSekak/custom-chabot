import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { convert } from "html-to-text";
import { PuppeteerWebBaseLoader } from "langchain/document_loaders/web/puppeteer";

const splitter = new RecursiveCharacterTextSplitter({
  chunkSize: 2000,
  chunkOverlap: 100,
});

const URL_EXAMPLE = "https://www.swstock.com";

export const getDocuments = async () => {
  const loader = new PuppeteerWebBaseLoader(URL_EXAMPLE);
  console.info(`Getting URL from ${URL_EXAMPLE}`);
  const docs = await loader.load();
  return await splitter.createDocuments(
    docs.map((doc) => {
      const text = convert(doc.pageContent).replace(/\n/g, " ");
      return text;
    })
  );
};
