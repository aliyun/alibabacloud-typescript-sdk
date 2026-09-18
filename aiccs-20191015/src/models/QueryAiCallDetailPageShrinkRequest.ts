// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAiCallDetailPageShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The batch ID. On the **Call Task Management** page, click Details to view the batch ID.
   * 
   * @example
   * 1183**************
   */
  batchId?: string;
  /**
   * @remarks
   * The call result. Valid values:
   * - CALL_FORWARDING: call forwarding.
   * - INCOMING_CALL_BARRED: incoming call barred.
   * - CALL_REJECTED: call rejected.
   * - ANSWERED: answered.
   * - USER_BUSY: user busy.
   * - POWERED_OFF: powered off.
   * - NO_USER_RESPONSE: out of service area.
   * - OPERATOR_BLOCK: blocked by carrier.
   * - OTHERS: other status.
   * - SUSPEND: suspended.
   * - CANCEL: canceled by caller.
   * - INVALID_NUMBER: invalid number.
   * - UNAVAILABLE: temporarily unavailable.
   * - NETWORK_BUSY: network busy.
   * - NO_ANSWER: no answer.
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
   * The list of task detail IDs. A maximum of 100 IDs can be specified.
   */
  detailIdsShrink?: string;
  /**
   * @remarks
   * The encryption type. Valid values: 0: no encryption. 1: MD5. 2: SHA256. 3: SM3.
   * 
   * @example
   * 1
   */
  encryptionType?: number;
  /**
   * @remarks
   * The end calling time. This value is a timestamp in milliseconds.
   * 
   * @example
   * 1748948749000
   */
  endCallingTime?: number;
  /**
   * @remarks
   * The end import time. This value is a timestamp in milliseconds.
   * 
   * @example
   * 1748948749000
   */
  endImportedTime?: number;
  /**
   * @remarks
   * The major intent. On the [Communication Agent Management](https://aiccs.console.aliyun.com/agent/customize) page, click agent details to view the major intent.
   * 
   * @example
   * A
   */
  majorIntent?: string;
  /**
   * @remarks
   * The maximum conversation duration. Unit: minutes.
   * 
   * @example
   * 20
   */
  maxConversationDuration?: number;
  /**
   * @remarks
   * The minimum conversation duration. Unit: minutes.
   * 
   * @example
   * 0
   */
  minConversationDuration?: number;
  /**
   * @remarks
   * The ID reserved for the caller. This ID is returned to the caller in the receipt message.
   * 
   * @example
   * 94ba739b-c01a-ef91-335d-4be006c34899
   */
  outId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The current page number. The value must be greater than **0**. Default value: **1**.
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
   * The start calling time. This value is a timestamp in milliseconds.
   * 
   * @example
   * 1748948749000
   */
  startCallingTime?: number;
  /**
   * @remarks
   * The start import time. This value is a timestamp in milliseconds.
   * 
   * @example
   * 1748948749000
   */
  startImportedTime?: number;
  /**
   * @remarks
   * The task status. Valid values:
   * 
   * - 0: pending.
   * 
   * - 1: completed.
   * 
   * - 2: failed.
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
      detailIdsShrink: 'DetailIds',
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
      detailIdsShrink: 'string',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

