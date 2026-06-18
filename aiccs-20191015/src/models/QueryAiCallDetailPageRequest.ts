// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAiCallDetailPageRequest extends $dara.Model {
  /**
   * @remarks
   * The batch ID. You can find this ID by clicking Details on the **Call Task Management** page.
   * 
   * @example
   * 1183**************
   */
  batchId?: string;
  /**
   * @remarks
   * The call result. Valid values:
   * 
   * - CALL_FORWARDING: Call Forwarding.
   * 
   * - INCOMING_CALL_BARRED: Incoming Call Barred.
   * 
   * - CALL_REJECTED: Call Rejected.
   * 
   * - ANSWERED: Answered.
   * 
   * - USER_BUSY: User Busy.
   * 
   * - POWERED_OFF: Powered Off.
   * 
   * - NO_USER_RESPONSE: No User Response.
   * 
   * - OPERATOR_BLOCK: Operator Block.
   * 
   * - OTHERS: Others.
   * 
   * - SUSPEND: Suspend.
   * 
   * - CANCEL: Canceled by the caller.
   * 
   * - INVALID_NUMBER: Invalid Number.
   * 
   * - UNAVAILABLE: Unavailable.
   * 
   * - NETWORK_BUSY: Network Busy.
   * 
   * - NO_ANSWER: No Answer.
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
   * A list of up to 100 detail IDs.
   * 
   * @example
   * Sample value Sample value
   */
  detailIds?: number[];
  /**
   * @remarks
   * The encryption method. Valid values: 0 (None), 1 (MD5), 2 (SHA256), and 3 (SM3).
   * 
   * @example
   * 1
   */
  encryptionType?: number;
  /**
   * @remarks
   * The end of the call time range. This value is a timestamp in milliseconds.
   * 
   * @example
   * 1748948749000
   */
  endCallingTime?: number;
  /**
   * @remarks
   * The end of the import time range. This value is a timestamp in milliseconds.
   * 
   * @example
   * 1748948749000
   */
  endImportedTime?: number;
  /**
   * @remarks
   * The major intent. You can find this intent by clicking Agent Details on the [Communication Agent Management](https://aiccs.console.aliyun.com/agent/customize) page.
   * 
   * @example
   * A
   */
  majorIntent?: string;
  /**
   * @remarks
   * The maximum conversation duration, in minutes.
   * 
   * @example
   * 20
   */
  maxConversationDuration?: number;
  /**
   * @remarks
   * The minimum conversation duration, in minutes.
   * 
   * @example
   * 0
   */
  minConversationDuration?: number;
  /**
   * @remarks
   * A custom ID provided by the caller. This ID is returned in the receipt message for request tracking.
   * 
   * @example
   * 94ba739b-c01a-ef91-335d-4be006c34899
   */
  outId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. The value must be greater than **0**. The default value is **1**.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page. The default value is **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The start of the call time range. This value is a timestamp in milliseconds.
   * 
   * @example
   * 1748948749000
   */
  startCallingTime?: number;
  /**
   * @remarks
   * The start of the import time range. This value is a timestamp in milliseconds.
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

