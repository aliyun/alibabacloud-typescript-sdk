// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHistoryListByBizTypeResponseBodyDataRecords extends $dara.Model {
  /**
   * @example
   * GysYBsxx
   */
  bizId?: string;
  /**
   * @example
   * LibraryChat
   */
  bizType?: string;
  /**
   * @example
   * null
   */
  extraMessage?: any;
  /**
   * @example
   * 2024-01-01 00:00:00
   */
  gmtCreate?: string;
  /**
   * @example
   * 2024-01-01 00:00:00
   */
  gmtModified?: string;
  /**
   * @example
   * 210
   */
  id?: number;
  llmAnswer?: string;
  llmPrompt?: string;
  /**
   * @example
   * qwen-max
   */
  llmType?: string;
  /**
   * @example
   * null
   */
  sessionId?: string;
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
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  records?: GetHistoryListByBizTypeResponseBodyDataRecords[];
  /**
   * @example
   * 10
   */
  totalPages?: number;
  /**
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
   * @example
   * null
   */
  cost?: number;
  data?: GetHistoryListByBizTypeResponseBodyData;
  /**
   * @example
   * null
   */
  dataType?: string;
  /**
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @example
   * ok
   */
  message?: string;
  /**
   * @example
   * 9DF9B3F3-9FFE-52CB-A8DC-F7BD5F842F0E
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
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

