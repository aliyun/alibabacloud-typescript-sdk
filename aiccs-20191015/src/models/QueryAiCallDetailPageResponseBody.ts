// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAiCallDetailPageResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The batch ID.
   * 
   * @example
   * 1183**************
   */
  batchId?: string;
  /**
   * @example
   * 49
   */
  branchId?: number;
  /**
   * @example
   * example
   */
  branchName?: string;
  /**
   * @example
   * 9
   */
  branchVersionId?: number;
  /**
   * @remarks
   * The call result.
   * 
   * @example
   * 用户接通
   */
  callResult?: string;
  /**
   * @remarks
   * The called number.
   * 
   * @example
   * 0537101****
   */
  calledNumber?: string;
  /**
   * @remarks
   * The call time, formatted as a timestamp in milliseconds.
   * 
   * @example
   * 1748948749000
   */
  callingTime?: number;
  /**
   * @remarks
   * The conversation duration, in seconds.
   * 
   * @example
   * 100
   */
  conversationDuration?: number;
  /**
   * @remarks
   * The conversation record, formatted as a chronologically sorted JSON array. Each object has the following structure:
   * 
   * ```json
   * [
   *     {
   *         "content":"The content of the message.",
   *         "role":"The role of the speaker.", // Valid values: user, assistant
   *     }
   * ]
   * ```
   * 
   * @example
   * [
   *     {
   *         "content": "111您好，年龄222，性别男，我这边是**汽车的官方顾问，我们新出了一款车型为**；**已经上市了，售价**万元起，**分钟破*台，您看要不了解一下？",
   *         "role": "assistant"
   *     },
   *     {
   *         "content": "<客户打断>哎，你是谁？",
   *         "role": "user",
   *     },
   *     {
   *         "content": "<客户打断>你再说一遍。",
   *         "role": "user",
   *     },
   *     {
   *         "content": "哎，我没听清。",
   *         "role": "user",
   *     },
   *     {
   *         "content": "你在说什么？",
   *         "role": "user",
   *     },
   *     {
   *         "content": "您好，",
   *         "role": "assistant",
   *     },
   *     {
   *         "content": "我是**汽车总部销售服务顾问。",
   *         "role": "assistant",
   *     },
   *     {
   *         "content": "我们最近推出了一款新车**，想了解一下您是否对这款车型感兴趣？",
   *         "role": "assistant",
   *     },
   *     {
   *         "content": "<客户打断>哎，那我是谁？",
   *         "role": "user",
   *     },
   *     {
   *         "content": "你在说什么呢？",
   *         "role": "user",
   *     },
   *     {
   *         "content": "抱歉打扰了，111先生。",
   *         "role": "assistant",
   *     },
   *     {
   *         "content": "祝您生活愉快！再见！",
   *         "role": "assistant",
   *     }
   * ]
   */
  conversationRecord?: string;
  /**
   * @remarks
   * The conversation turn count.
   * 
   * @example
   * 10
   */
  conversationTurnCount?: number;
  /**
   * @remarks
   * The task detail ID.
   * 
   * @example
   * 9662*************
   */
  detailId?: string;
  /**
   * @remarks
   * The encryption type. Valid values are: 0 (no encryption), 1 (MD5), 2 (SHA256), and 3 (SM3).
   * 
   * @example
   * 1
   */
  encryptionType?: number;
  /**
   * @remarks
   * The failure reason. Provided only if the call fails.
   * 
   * @example
   * 账户停机
   */
  failedReason?: string;
  /**
   * @remarks
   * The import time, formatted as a timestamp in milliseconds.
   * 
   * @example
   * 1748948749000
   */
  importedTime?: number;
  /**
   * @remarks
   * The major intent.
   * 
   * @example
   * A
   */
  majorIntent?: string;
  /**
   * @remarks
   * A JSON object of key-value pairs for runtime variables.
   * 
   * @example
   * {
   *   "date": "666",
   *   "phoneNumber": "777",
   *   "distance": "555",
   *   "mendian": "444",
   *   "sex": "男",
   *   "name": "111",
   *   "age": "222"
   * }
   */
  options?: string;
  /**
   * @example
   * outId
   */
  outId?: string;
  /**
   * @remarks
   * The recording file path. Provided only after the recording file is generated.
   * 
   * @example
   * https://*******
   */
  recordingFilePath?: string;
  /**
   * @remarks
   * The task detail status.
   * 
   * - 0: Initializing
   * 
   * - 1: Waiting to call
   * 
   * - 2: Waiting to retry
   * 
   * - 3: Calling
   * 
   * - 4: Call ended
   * 
   * - 5: Call failed
   * 
   * Only statuses 4 and 5 are terminal states.
   * 
   * @example
   * 4
   */
  status?: number;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 1187**************
   */
  taskId?: string;
  /**
   * @example
   * example
   */
  versionName?: string;
  /**
   * @example
   * 55
   */
  versionNo?: number;
  static names(): { [key: string]: string } {
    return {
      batchId: 'BatchId',
      branchId: 'BranchId',
      branchName: 'BranchName',
      branchVersionId: 'BranchVersionId',
      callResult: 'CallResult',
      calledNumber: 'CalledNumber',
      callingTime: 'CallingTime',
      conversationDuration: 'ConversationDuration',
      conversationRecord: 'ConversationRecord',
      conversationTurnCount: 'ConversationTurnCount',
      detailId: 'DetailId',
      encryptionType: 'EncryptionType',
      failedReason: 'FailedReason',
      importedTime: 'ImportedTime',
      majorIntent: 'MajorIntent',
      options: 'Options',
      outId: 'OutId',
      recordingFilePath: 'RecordingFilePath',
      status: 'Status',
      taskId: 'TaskId',
      versionName: 'VersionName',
      versionNo: 'VersionNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchId: 'string',
      branchId: 'number',
      branchName: 'string',
      branchVersionId: 'number',
      callResult: 'string',
      calledNumber: 'string',
      callingTime: 'number',
      conversationDuration: 'number',
      conversationRecord: 'string',
      conversationTurnCount: 'number',
      detailId: 'string',
      encryptionType: 'number',
      failedReason: 'string',
      importedTime: 'number',
      majorIntent: 'string',
      options: 'string',
      outId: 'string',
      recordingFilePath: 'string',
      status: 'number',
      taskId: 'string',
      versionName: 'string',
      versionNo: 'number',
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
  /**
   * @remarks
   * A list of task details.
   */
  list?: QueryAiCallDetailPageResponseBodyDataList[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 60
   */
  pageNo?: number;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 5
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of records.
   * 
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
   * @remarks
   * The reason why the access request was denied.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: QueryAiCallDetailPageResponseBodyData;
  /**
   * @remarks
   * A description of the status code.
   * 
   * @example
   * 成功
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A57441B2-8EB6-5B93-9F37-0A51B8E2C9F5
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values are:
   * 
   * - **true**: The request was successful.
   * 
   * - **false**: The request failed.
   * 
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

