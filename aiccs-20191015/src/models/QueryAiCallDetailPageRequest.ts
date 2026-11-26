// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAiCallDetailPageRequest extends $dara.Model {
  /**
   * @remarks
   * The batch ID. You can view the batch ID by clicking Details on the **Call Task Management** page.
   * 
   * @example
   * 1183**************
   */
  batchId?: string;
  /**
   * @remarks
   * The call result. Valid values:
   * - CALL_FORWARDING: Call forwarded.
   * - INCOMING_CALL_BARRED: Incoming calls barred.
   * - CALL_REJECTED: Call rejected.
   * - ANSWERED: Answered.
   * - USER_BUSY: User busy.
   * - POWERED_OFF: Powered off.
   * - NO_USER_RESPONSE: Out of service area.
   * - OPERATOR_BLOCK: Blocked by operator.
   * - OTHERS: Other statuses.
   * - SUSPEND: Suspended.
   * - CANCEL: Canceled by caller.
   * - INVALID_NUMBER: Invalid number.
   * - UNAVAILABLE: Temporarily unavailable.
   * - NETWORK_BUSY: Network busy.
   * - NO_ANSWER: No answer.
   * 
   * @example
   * ANSWERED
   */
  callResult?: string;
  /**
   * @remarks
   * The called number.
   * 
   * @example
   * 053714454****
   */
  calledNumber?: string;
  /**
   * @remarks
   * The list of task detail IDs. You can specify up to 100 IDs.
   */
  detailIds?: number[];
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
   * The end call time. The value is a timestamp in milliseconds.
   * 
   * @example
   * 1748948749000
   */
  endCallingTime?: number;
  /**
   * @remarks
   * The end import time. The value is a timestamp in milliseconds.
   * 
   * @example
   * 1748948749000
   */
  endImportedTime?: number;
  /**
   * @remarks
   * The primary intent. You can view the primary intent by clicking Agent Details on the [Communication Agent Management](https://aiccs.console.aliyun.com/agent/customize) page.
   * 
   * @example
   * A
   */
  majorIntent?: string;
  /**
   * @remarks
   * The maximum call duration. Unit: minutes.
   * 
   * @example
   * 20
   */
  maxConversationDuration?: number;
  /**
   * @remarks
   * The minimum call duration. Unit: minutes.
   * 
   * @example
   * 0
   */
  minConversationDuration?: number;
  /**
   * @remarks
   * The custom ID provided by the caller. This ID is returned to the caller in the receipt message.
   * 
   * @example
   * 94ba739b-c01a-ef91-335d-4be006c34899
   */
  outId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. The value must be greater than **0**. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The start call time. The value is a timestamp in milliseconds.
   * 
   * @example
   * 1748948749000
   */
  startCallingTime?: number;
  /**
   * @remarks
   * The start import time. The value is a timestamp in milliseconds.
   * 
   * @example
   * 1748948749000
   */
  startImportedTime?: number;
  /**
   * @remarks
   * The task status. Valid values:
   * 
   * - 0: Pending.
   * 
   * - 1: Completed.
   * 
   * - 2: Failed.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * The task ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1187**************
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      batchId: 'BatchId',
      callResult: 'CallResult',
      calledNumber: 'CalledNumber',
      detailIds: 'DetailIds',
      encryptionType: 'EncryptionType',
      endCallingTime: 'EndCallingTime',
      endImportedTime: 'EndImportedTime',
      majorIntent: 'MajorIntent',
      maxConversationDuration: 'MaxConversationDuration',
      minConversationDuration: 'MinConversationDuration',
      outId: 'OutId',
      ownerId: 'OwnerId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      startCallingTime: 'StartCallingTime',
      startImportedTime: 'StartImportedTime',
      status: 'Status',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchId: 'string',
      callResult: 'string',
      calledNumber: 'string',
      detailIds: { 'type': 'array', 'itemType': 'number' },
      encryptionType: 'number',
      endCallingTime: 'number',
      endImportedTime: 'number',
      majorIntent: 'string',
      maxConversationDuration: 'number',
      minConversationDuration: 'number',
      outId: 'string',
      ownerId: 'number',
      pageNo: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      startCallingTime: 'number',
      startImportedTime: 'number',
      status: 'number',
      taskId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.detailIds)) {
      $dara.Model.validateArray(this.detailIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

