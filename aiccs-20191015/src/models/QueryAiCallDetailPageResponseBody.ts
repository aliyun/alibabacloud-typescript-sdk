// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAiCallDetailPageResponseBodyDataList extends $dara.Model {
  /**
   * @example
   * 12121211111*****
   */
  batchId?: string;
  /**
   * @example
   * 示例值
   */
  callResult?: string;
  /**
   * @example
   * 0537101****
   */
  calledNumber?: string;
  /**
   * @example
   * 1748948749000
   */
  callingTime?: number;
  /**
   * @example
   * 100
   */
  conversationDuration?: number;
  /**
   * @example
   * 示例值示例值
   */
  conversationRecord?: string;
  /**
   * @example
   * 10
   */
  conversationTurnCount?: number;
  /**
   * @example
   * 12121211111*****
   */
  detailId?: string;
  /**
   * @example
   * 示例值示例值示例值
   */
  failedReason?: string;
  /**
   * @example
   * 1748948749000
   */
  importedTime?: number;
  /**
   * @example
   * A
   */
  majorIntent?: string;
  /**
   * @example
   * 示例值
   */
  options?: string;
  /**
   * @example
   * https://*******
   */
  recordingFilePath?: string;
  /**
   * @example
   * 51
   */
  status?: number;
  /**
   * @example
   * 12121211111*****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      batchId: 'BatchId',
      callResult: 'CallResult',
      calledNumber: 'CalledNumber',
      callingTime: 'CallingTime',
      conversationDuration: 'ConversationDuration',
      conversationRecord: 'ConversationRecord',
      conversationTurnCount: 'ConversationTurnCount',
      detailId: 'DetailId',
      failedReason: 'FailedReason',
      importedTime: 'ImportedTime',
      majorIntent: 'MajorIntent',
      options: 'Options',
      recordingFilePath: 'RecordingFilePath',
      status: 'Status',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchId: 'string',
      callResult: 'string',
      calledNumber: 'string',
      callingTime: 'number',
      conversationDuration: 'number',
      conversationRecord: 'string',
      conversationTurnCount: 'number',
      detailId: 'string',
      failedReason: 'string',
      importedTime: 'number',
      majorIntent: 'string',
      options: 'string',
      recordingFilePath: 'string',
      status: 'number',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAiCallDetailPageResponseBodyData extends $dara.Model {
  list?: QueryAiCallDetailPageResponseBodyDataList[];
  /**
   * @example
   * 60
   */
  pageNo?: number;
  /**
   * @example
   * 5
   */
  pageSize?: number;
  /**
   * @example
   * 2
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': QueryAiCallDetailPageResponseBodyDataList },
      pageNo: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAiCallDetailPageResponseBody extends $dara.Model {
  /**
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: QueryAiCallDetailPageResponseBodyData;
  /**
   * @example
   * 示例值
   */
  message?: string;
  /**
   * @example
   * A57441B2-8EB6-5B93-9F37-0A51B8E2C9F5
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: QueryAiCallDetailPageResponseBodyData,
      message: 'string',
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

