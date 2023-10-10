import { fileSaver } from 'file-saver';


// get cover of novel
const getCover = (): string => {
  return document.querySelector('.novel-cover img')?.getAttribute('src') || '';
}

// get title of novel
const getTitle = (): string => {
  return document.querySelector('.novel-title')?.textContent || '';
}

// get meta of novel
const getMeta = (): string => {
  const metaList: string[] = [];
  const metaNodes = document.querySelector('.n-detail')?.children;
  if (metaNodes) {
    Array.from(metaNodes).forEach((node) => {
      metaList.push(node.textContent || '');
    });
  }
  return metaList.join('\n');
}

// get introduction of novel
const getIntro = (): string => {
  return document.querySelector('.brief')?.textContent || '';
}

// define the structure of chapter
interface Chapter {
  title: string;
  url?: string;
}

// get chapter list of novel
const getChapterList = (): Chapter[] => {
  const chapterListNode = document.querySelector('.chapter-ul');
  const childNodes = chapterListNode?.children;
  const chapters: Chapter[] = [];
  if (childNodes) {
    Array.from(childNodes).forEach((node) => {
      if (node.tagName.toLowerCase() === 'li') {
        if (node.className.toLowerCase() === 'chapter-box') {
          chapters.push({
            title: node.getAttribute('id') || '',
          });
        }

        else {
          Array.from(node?.children[0]?.children).forEach((child) => {
            if (child.tagName.toLowerCase() === 'a') {
              chapters.push({
                title: child.querySelector('span')?.textContent || '',
                url: child.getAttribute('href') || '',
              });
            }
          });
        }
      }
    });
  }
  return chapters;
};

// get document of url
const getDocument = async (url: string) => {
  const response = await fetch(url);
  const body = await response.text();

  const domParser = new DOMParser();

  const doc = domParser.parseFromString(body, 'text/html');
  return doc;
};

// get content of document
const getDocumentNovelContent = (doc: Document) => {
  const content = (doc.querySelector('.box-body') as HTMLElement)?.innerText;
  return content || '';
};

// get content of chapter by url
const getNovelContentByUrl = async (url: string) => {
  if (url === '') {
    return '';
  }
  const doc = await getDocument(url);
  const content = getDocumentNovelContent(doc);

  return content;
};

// save novel as txt file
const fileSave = (text: string, title: string) => {
  const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
  fileSaver(blob, `${title}.txt`);
};

// crawler
const crawler = () => {
  // TODO
};

export default crawler;
