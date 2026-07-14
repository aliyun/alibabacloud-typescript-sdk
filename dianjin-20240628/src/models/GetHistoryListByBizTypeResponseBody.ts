// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHistoryListByBizTypeResponseBodyDataRecords extends $dara.Model {
  /**
   * @remarks
   * Business ID
   * 
   * @example
   * GysYBsxx
   */
  bizId?: string;
  /**
   * @remarks
   * Business type
   * 
   * @example
   * LibraryChat
   */
  bizType?: string;
  /**
   * @remarks
   * Extension information
   * 
   * @example
   * null
   */
  extraMessage?: any;
  /**
   * @remarks
   * Creation time
   * 
   * @example
   * 2024-01-01 00:00:00
   */
  gmtCreate?: string;
  /**
   * @remarks
   * Last modified time
   * 
   * @example
   * 2024-01-01 00:00:00
   */
  gmtModified?: string;
  /**
   * @remarks
   * History record ID
   * 
   * @example
   * 210
   */
  id?: number;
  /**
   * @remarks
   * Large Language Model (LLM) response
   * 
   * @example
   * 你好。
   */
  llmAnswer?: string;
  /**
   * @remarks
   * Prompt for the Large Language Model (LLM)
   * 
   * @example
   * 请使用以下上下文来回答最后的问题。\\n以下是上下文内容：
   */
  llmPrompt?: string;
  /**
   * @remarks
   * Large Language Model (LLM) type
   * 
   * @example
   * qwen-max
   */
  llmType?: string;
  /**
   * @remarks
   * Session ID
   * 
   * @example
   * null
   */
  sessionId?: string;
  /**
   * @remarks
   * User query
   * 
   * @example
   * 你是谁
   */
  userQuery?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'bizId',
      bizType: 'bizType',
      extraMessage: 'extraMessage',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      id: 'id',
      llmAnswer: 'llmAnswer',
      llmPrompt: 'llmPrompt',
      llmType: 'llmType',
      sessionId: 'sessionId',
      userQuery: 'userQuery',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      bizType: 'string',
      extraMessage: 'any',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      llmAnswer: 'string',
      llmPrompt: 'string',
      llmType: 'string',
      sessionId: 'string',
      userQuery: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHistoryListByBizTypeResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Current page number
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Number of records per page
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Records
   */
  records?: GetHistoryListByBizTypeResponseBodyDataRecords[];
  /**
   * @remarks
   * Total number of pages
   * 
   * @example
   * 10
   */
  totalPages?: number;
  /**
   * @remarks
   * Total number of records
   * 
   * @example
   * 100
   */
  totalRecords?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'currentPage',
      pageSize: 'pageSize',
      records: 'records',
      totalPages: 'totalPages',
      totalRecords: 'totalRecords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      records: { 'type': 'array', 'itemType': GetHistoryListByBizTypeResponseBodyDataRecords },
      totalPages: 'number',
      totalRecords: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.records)) {
      $dara.Model.validateArray(this.records);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHistoryListByBizTypeResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response time in milliseconds
   * 
   * @example
   * null
   */
  cost?: number;
  /**
   * @remarks
   * Response data
   */
  data?: GetHistoryListByBizTypeResponseBodyData;
  /**
   * @remarks
   * Data type
   * 
   * @example
   * null
   */
  dataType?: string;
  /**
   * @remarks
   * Error code
   * 
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @remarks
   * Error message
   * 
   * @example
   * ok
   */
  message?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 9DF9B3F3-9FFE-52CB-A8DC-F7BD5F842F0E
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request succeeded
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * Timestamp
   * 
   * @example
   * 2024-01-01 00:00:00
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      data: 'data',
      dataType: 'dataType',
      errCode: 'errCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      time: 'time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: 'number',
      data: GetHistoryListByBizTypeResponseBodyData,
      dataType: 'string',
      errCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      time: 'string',
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

