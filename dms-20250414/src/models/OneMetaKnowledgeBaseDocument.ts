// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OneMetaKnowledgeBaseDocument extends $dara.Model {
  /**
   * @remarks
   * The document description.
   * 
   * @example
   * abc
   */
  description?: string;
  /**
   * @remarks
   * The number of chunks.
   * 
   * @example
   * 123
   */
  docsCount?: number;
  /**
   * @remarks
   * The name of the document loader.
   * 
   * @example
   * ADBPGLoader
   */
  documentLoaderName?: string;
  /**
   * @remarks
   * The file extension.
   * 
   * @example
   * md
   */
  fileExt?: string;
  /**
   * @remarks
   * The file size, in bytes.
   * 
   * @example
   * 20307
   */
  fileSize?: number;
  /**
   * @remarks
   * When the document was created.
   * 
   * @example
   * 2026-04-22 22:59:35
   */
  gmtCreate?: string;
  /**
   * @remarks
   * When the document was last modified.
   * 
   * @example
   * 2026-04-24 21:22:53
   */
  gmtModified?: string;
  /**
   * @remarks
   * The knowledge base ID.
   * 
   * @example
   * kb-***
   */
  kbUuid?: string;
  /**
   * @remarks
   * Keywords extracted from the document.
   * 
   * @example
   * ["test","abc"]
   */
  keywords?: string;
  /**
   * @remarks
   * The document name.
   * 
   * @example
   * test.md
   */
  name?: string;
  /**
   * @remarks
   * The document status. Valid values are:
   * 
   * - **0**: Complete.
   * 
   * - **-1**: Unprocessed.
   * 
   * - **-2**: Parsing.
   * 
   * - **-3**: Failed.
   * 
   * - **-4**: Canceled.
   * 
   * @example
   * 0
   */
  state?: number;
  /**
   * @remarks
   * The summary of the document.
   * 
   * @example
   * This is a test document.
   */
  summary?: string;
  /**
   * @remarks
   * The name of the text splitter.
   * 
   * @example
   * ChineseRecursiveTextSplitter
   */
  textSplitterName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      docsCount: 'DocsCount',
      documentLoaderName: 'DocumentLoaderName',
      fileExt: 'FileExt',
      fileSize: 'FileSize',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      kbUuid: 'KbUuid',
      keywords: 'Keywords',
      name: 'Name',
      state: 'State',
      summary: 'Summary',
      textSplitterName: 'TextSplitterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      docsCount: 'number',
      documentLoaderName: 'string',
      fileExt: 'string',
      fileSize: 'number',
      gmtCreate: 'string',
      gmtModified: 'string',
      kbUuid: 'string',
      keywords: 'string',
      name: 'string',
      state: 'number',
      summary: 'string',
      textSplitterName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

