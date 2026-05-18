// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDocumentResponseBodyData extends $dara.Model {
  /**
   * @example
   * abc
   */
  description?: string;
  /**
   * @example
   * 123
   */
  docsCount?: number;
  /**
   * @example
   * ADBPGLoader
   */
  documentLoaderName?: string;
  /**
   * @example
   * md
   */
  fileExt?: string;
  /**
   * @example
   * 20307
   */
  fileSize?: number;
  /**
   * @example
   * 2026-04-22 22:59:35
   */
  gmtCreate?: string;
  /**
   * @example
   * 2026-04-24 21:22:53
   */
  gmtModified?: string;
  /**
   * @example
   * kb-***
   */
  kbUuid?: string;
  /**
   * @example
   * ["test","abc"]
   */
  keywords?: string;
  /**
   * @example
   * test.md
   */
  name?: string;
  /**
   * @example
   * 0
   */
  state?: number;
  /**
   * @example
   * This is a test document.
   */
  summary?: string;
  /**
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
  data?: DescribeDocumentResponseBodyData;
  /**
   * @example
   * KnowledgeBaseNotFound
   */
  errorCode?: string;
  /**
   * @example
   * Resource not found kb-***
   */
  errorMessage?: string;
  /**
   * @example
   * 67E910F2-4B62-5B0C-ACA3-7547695C****
   */
  requestId?: string;
  /**
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

