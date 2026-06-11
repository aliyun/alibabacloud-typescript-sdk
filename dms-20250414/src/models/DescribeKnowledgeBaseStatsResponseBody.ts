// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeKnowledgeBaseStatsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of documents in the knowledge base.
   * 
   * @example
   * 100
   */
  documentCount?: number;
  /**
   * @remarks
   * The number of hits for the knowledge base.
   * 
   * @example
   * 18
   */
  kbHits?: number;
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
   * The total number of knowledge chunks in the knowledge base.
   * 
   * @example
   * 10
   */
  totalChunkCount?: number;
  /**
   * @remarks
   * The total size of all files in the knowledge base, in bytes.
   * 
   * @example
   * 4194588751
   */
  totalFileSize?: number;
  static names(): { [key: string]: string } {
    return {
      documentCount: 'DocumentCount',
      kbHits: 'KbHits',
      kbUuid: 'KbUuid',
      totalChunkCount: 'TotalChunkCount',
      totalFileSize: 'TotalFileSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      documentCount: 'number',
      kbHits: 'number',
      kbUuid: 'string',
      totalChunkCount: 'number',
      totalFileSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeKnowledgeBaseStatsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The object that contains the knowledge base statistics.
   */
  data?: DescribeKnowledgeBaseStatsResponseBodyData;
  /**
   * @remarks
   * The error code returned if the request fails.
   * 
   * @example
   * Permission denied.
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the request fails.
   * 
   * @example
   * Knowledge base limit exceeded. Current: xxx
   */
  errorMessage?: string;
  /**
   * @remarks
   * The unique ID of the request. Use this ID to troubleshoot errors.
   * 
   * @example
   * 67E910F2-4B62-5B0C-ACA3-7547695C****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request succeeded. A value of `true` indicates success, and a value of `false` indicates failure.
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
      data: DescribeKnowledgeBaseStatsResponseBodyData,
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

