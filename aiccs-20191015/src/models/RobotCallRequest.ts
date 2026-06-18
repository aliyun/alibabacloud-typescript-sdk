// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RobotCallRequest extends $dara.Model {
  /**
   * @remarks
   * Called number.
   * 
   * This parameter is required.
   * 
   * @example
   * 131****2204
   */
  calledNumber?: string;
  /**
   * @remarks
   * Outbound caller number. View it in the Voice Service [Real Number Management](https://dyvmsnext.console.aliyun.com/number/list/normal) interface.
   * 
   * This parameter is required.
   * 
   * @example
   * 132****0849
   */
  calledShowNumber?: string;
  /**
   * @remarks
   * Whether to enable the number status detection identity. Valid values:  
   * 
   * - **false** (Default Value): Disable.  
   * - **true**: Enable.  
   * > When enabled, the reason for unanswered calls will be recorded.
   * 
   * @example
   * false
   */
  earlyMediaAsr?: boolean;
  /**
   * @remarks
   * An ID reserved for the caller. This ID will be returned to the caller through the receipt message. It must be 1 to 15 bytes in length.
   * 
   * @example
   * 222356****
   */
  outId?: string;
  ownerId?: number;
  /**
   * @remarks
   * Parameter list for the robot, in JSON format. The total length must not exceed 512 bytes. You can view the parameters in [Script Management](https://aiccs.console.aliyun.com/patter/list) > **Details** > **Input Parameters**, or by using the [ListRobotParams](https://help.aliyun.com/document_detail/2717999.html) API.
   * 
   * @example
   * {
   *   "name": "张三",
   *   "age": "25"
   * }
   */
  params?: string;
  /**
   * @remarks
   * Whether to record the call. Valid values:
   * 
   * - **false** (default): Do not record.
   * - **true**: Record.
   * 
   * @example
   * true
   */
  recordFlag?: boolean;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Robot ID, which is the script ID. View the reviewed and approved script ID in the [Script Management](https://aiccs.console.aliyun.com/patter/list) interface.
   * 
   * This parameter is required.
   * 
   * @example
   * 1000035******
   */
  robotId?: number;
  static names(): { [key: string]: string } {
    return {
      calledNumber: 'CalledNumber',
      calledShowNumber: 'CalledShowNumber',
      earlyMediaAsr: 'EarlyMediaAsr',
      outId: 'OutId',
      ownerId: 'OwnerId',
      params: 'Params',
      recordFlag: 'RecordFlag',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      robotId: 'RobotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calledNumber: 'string',
      calledShowNumber: 'string',
      earlyMediaAsr: 'boolean',
      outId: 'string',
      ownerId: 'number',
      params: 'string',
      recordFlag: 'boolean',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      robotId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

