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
   * @remarks
   * The branch ID.
   * 
   * @example
   * 49
   */
  branchId?: number;
  /**
   * @remarks
   * The branch name.
   * 
   * @example
   * Default branch
   */
  branchName?: string;
  /**
   * @remarks
   * The version ID.
   * 
   * @example
   * 9
   */
  branchVersionId?: number;
  /**
   * @remarks
   * The expiration time of the outbound call detail. The value is a timestamp in milliseconds.
   * 
   * @example
   * 1785412820000
   */
  callExpireTime?: number;
  /**
   * @remarks
   * The call ID.
   * 
   * @example
   * 123*****456^123*****456
   */
  callId?: string;
  /**
   * @remarks
   * The call result.
   * 
   * @example
   * Answered
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
   * The call time. The value is a timestamp in milliseconds.
   * 
   * @example
   * 1748948749000
   */
  callingTime?: number;
  /**
   * @remarks
   * The call duration. Unit: seconds.
   * 
   * @example
   * 100
   */
  conversationDuration?: number;
  /**
   * @remarks
   * The chat record information. The structure is a JSON array, and the chat records are sorted in chronological order. Details:
   * ```json
   * [
   *     {
   *         "content":"Chat content",
   *         "role":"Role",//Valid values: user (user), assistant (robot)
   *     }
   * ]
   * ```
   * 
   * @example
   * [
   *     {
   *         "content": "Hello 111, age 222, gender male. I am the official consultant for ** Motors. We have launched a new model, **. ** is now on the market with a starting price of ** 10,000 yuan. It sold * units in ** minutes. Would you like to learn more?",
   *         "role": "assistant"
   *     },
   *     {
   *         "content": "<Customer interruption> Hey, who are you?",
   *         "role": "user"
   *     },
   *     {
   *         "content": "<Customer interruption> Say that again.",
   *         "role": "user"
   *     },
   *     {
   *         "content": "Hey, I didn\"t catch that.",
   *         "role": "user"
   *     },
   *     {
   *         "content": "What are you saying?",
   *         "role": "user"
   *     },
   *     {
   *         "content": "Hello,",
   *         "role": "assistant"
   *     },
   *     {
   *         "content": "I am a sales service consultant at ** Motors headquarters.",
   *         "role": "assistant"
   *     },
   *     {
   *         "content": "We recently launched a new car, **. I would like to know if you are interested in this model.",
   *         "role": "assistant"
   *     },
   *     {
   *         "content": "<Customer interruption> Hey, then who am I?",
   *         "role": "user"
   *     },
   *     {
   *         "content": "What are you talking about?",
   *         "role": "user"
   *     },
   *     {
   *         "content": "Sorry to bother you, Mr. 111.",
   *         "role": "assistant"
   *     },
   *     {
   *         "content": "Have a great day! Goodbye!",
   *         "role": "assistant"
   *     }
   * ]
   */
  conversationRecord?: string;
  /**
   * @remarks
   * The number of conversation turns.
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
   * The encryption method. Valid values: 0: No encryption. 1: MD5. 2: SHA256. 3: SM3.
   * 
   * @example
   * 1
   */
  encryptionType?: number;
  /**
   * @remarks
   * The reason for the call failure. This field is returned only when the call fails.
   * 
   * @example
   * Account suspended
   */
  failedReason?: string;
  /**
   * @remarks
   * The import time. The value is a timestamp in milliseconds.
   * 
   * @example
   * 1748948749000
   */
  importedTime?: number;
  /**
   * @remarks
   * The primary intent.
   * 
   * @example
   * A
   */
  majorIntent?: string;
  /**
   * @remarks
   * The variable information used at runtime. The information is stored in this field as key-value pairs.
   * 
   * @example
   * {
   *   "date": "666",
   *   "phoneNumber": "777",
   *   "distance": "555",
   *   "mendian": "444",
   *   "sex": "Male",
   *   "name": "111",
   *   "age": "222"
   * }
   */
  options?: string;
  /**
   * @remarks
   * The custom business transaction ID provided by the caller. You can use a unique ID to associate the business.
   * 
   * @example
   * outId
   */
  outId?: string;
  /**
   * @remarks
   * The download path of the recording file. This field is returned only after the recording file is generated.
   * 
   * @example
   * https://*******
   */
  recordingFilePath?: string;
  /**
   * @remarks
   * The task detail status. Valid values:
   * - 0: Initialized.
   * - 1: Waiting for call.
   * - 2: Waiting for retry.
   * - 3: Calling.
   * - 4: Call ended.
   * - 5: Call failed.
   * 
   * Only 4 and 5 are final states.
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
   * @remarks
   * The version name.
   * 
   * @example
   * Default version
   */
  versionName?: string;
  /**
   * @remarks
   * The version number.
   * 
   * @example
   * 1
   */
  versionNo?: number;
  static names(): { [key: string]: string } {
    return {
      batchId: 'BatchId',
      branchId: 'BranchId',
      branchName: 'BranchName',
      branchVersionId: 'BranchVersionId',
      callExpireTime: 'CallExpireTime',
      callId: 'CallId',
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
      callExpireTime: 'number',
      callId: 'string',
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
   * The list of task details.
   */
  list?: QueryAiCallDetailPageResponseBodyDataList[];
  /**
   * @remarks
   * The current page number.
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
   * The detailed reasons for access denial.
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
   * The status message.
   * 
   * @example
   * Success
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
   * Indicates whether the API call is successful. Valid values:
   * - **true**: Successful.
   * - **false**: Failed.
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

