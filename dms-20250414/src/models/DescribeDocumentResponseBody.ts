// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDocumentResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The description of the document.
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
   * The file extension of the document.
   * 
   * @example
   * md
   */
  fileExt?: string;
  /**
   * @remarks
   * The size of the document in bytes.
   * 
   * @example
   * 20307
   */
  fileSize?: number;
  /**
   * @remarks
   * The creation time of the document, in UTC.
   * 
   * @example
   * 2026-04-22 22:59:35
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The last modification time of the document, in UTC.
   * 
   * @example
   * 2026-04-24 21:22:53
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ID of the knowledge base.
   * 
   * @example
   * kb-***
   */
  kbUuid?: string;
  /**
   * @remarks
   * The keywords of the document.
   * 
   * @example
   * ["test","abc"]
   */
  keywords?: string;
  /**
   * @remarks
   * The name of the document.
   * 
   * @example
   * test.md
   */
  name?: string;
  /**
   * @remarks
   * The document state. Possible values are:
   * 
   * - **0**: Parsing complete.
   * 
   * - **-1**: Not parsed.
   * 
   * - **-2**: Parsing in progress.
   * 
   * - **-3**: Parsing failed.
   * 
   * - **-4**: Parsing canceled.
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

export class DescribeDocumentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the document.
   */
  data?: DescribeDocumentResponseBodyData;
  /**
   * @remarks
   * The error code returned when the request fails.
   * 
   * @example
   * KnowledgeBaseNotFound
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned when the request fails.
   * 
   * @example
   * Resource not found kb-***
   */
  errorMessage?: string;
  /**
   * @remarks
   * The unique request ID. Provide this ID for troubleshooting if an error occurs.
   * 
   * @example
   * 67E910F2-4B62-5B0C-ACA3-7547695C****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request succeeded. Valid values:
   * 
   * - **true**: The request succeeded.
   * 
   * - **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeDocumentResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

