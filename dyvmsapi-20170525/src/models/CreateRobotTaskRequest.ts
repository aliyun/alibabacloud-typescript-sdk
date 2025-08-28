// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRobotTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The calling number.
   * 
   * You must use the phone numbers that you have purchased and separate multiple numbers with commas (,). You can log on to the [Voice Messaging Service console](https://dyvms.console.aliyun.com/overview/home) and choose **Real Number Service** > **Real Number Management** to view the numbers you purchased.
   * 
   * This parameter is required.
   * 
   * @example
   * 0571****5678
   */
  caller?: string;
  /**
   * @remarks
   * The company name, which must be the same as the **enterprise name** on the qualification management page.
   * 
   * @example
   * Alibaba
   */
  corpName?: string;
  /**
   * @remarks
   * The ID of the robot or communication script that is used to initiate the call.
   * 
   * You can log on to the [Voice Messaging Service console](https://dyvms.console.aliyun.com/overview/home) and choose **Intelligent Voice Robot** > **Communication Script Management** to view the communication script ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1000023****
   */
  dialogId?: number;
  /**
   * @remarks
   * Specifies whether to call the self-managed line. Valid values:
   * 
   * *   **false** (default)
   * *   **true**
   * 
   * > If you set this parameter to **true**, calling numbers are not verified.
   * 
   * @example
   * false
   */
  isSelfLine?: boolean;
  /**
   * @remarks
   * Specifies whether to enable number status identification. Valid values:
   * 
   * *   **false** (default)
   * *   **true**
   * 
   * > If you set this parameter to **true**, the reason why a call is not answered is recorded.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  numberStatusIdent?: boolean;
  ownerId?: number;
  /**
   * @remarks
   * The redial interval. Unit: minutes. The value must be greater than 1.
   * 
   * > The maximum redial interval is 30 minutes.
   * 
   * @example
   * 5
   */
  recallInterval?: number;
  /**
   * @remarks
   * The call state in which redial is required. Separate multiple call states with commas (,). Valid values:
   * 
   * *   **200010**: The phone of the called party is powered off.
   * *   **200011**: The number of the called party is out of service.
   * *   **200002**: The line is busy.
   * *   **200012**: The call is lost.
   * *   **200005**: The called party cannot be connected.
   * *   **200003**: The called party does not respond to the call.
   * 
   * @example
   * 200010,200011
   */
  recallStateCodes?: string;
  /**
   * @remarks
   * The number of redial times.
   * 
   * @example
   * 1
   */
  recallTimes?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Specifies whether to enable auto-redial. Valid values:
   * 
   * *   **1**: enables auto-redial.
   * *   **0**: disables auto-redial.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  retryType?: number;
  /**
   * @remarks
   * The task name. The task name can be up to 30 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * Test Template
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      caller: 'Caller',
      corpName: 'CorpName',
      dialogId: 'DialogId',
      isSelfLine: 'IsSelfLine',
      numberStatusIdent: 'NumberStatusIdent',
      ownerId: 'OwnerId',
      recallInterval: 'RecallInterval',
      recallStateCodes: 'RecallStateCodes',
      recallTimes: 'RecallTimes',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      retryType: 'RetryType',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caller: 'string',
      corpName: 'string',
      dialogId: 'number',
      isSelfLine: 'boolean',
      numberStatusIdent: 'boolean',
      ownerId: 'number',
      recallInterval: 'number',
      recallStateCodes: 'string',
      recallTimes: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      retryType: 'number',
      taskName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

