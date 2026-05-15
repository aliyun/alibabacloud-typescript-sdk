// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeKnowledgeBaseStatsResponseBodyData extends $dara.Model {
  /**
   * @example
   * 100
   */
  documentCount?: number;
  /**
   * @example
   * 18
   */
  kbHits?: number;
  /**
   * @example
   * kb-***
   */
  kbUuid?: string;
  /**
   * @example
   * 10
   */
  totalChunkCount?: number;
  /**
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
  data?: DescribeKnowledgeBaseStatsResponseBodyData;
  /**
   * @example
   * Permission denied.
   */
  errorCode?: string;
  /**
   * @example
   * Knowledge base limit exceeded. Current: xxx
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

