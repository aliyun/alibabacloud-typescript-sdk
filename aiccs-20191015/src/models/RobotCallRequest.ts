// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RobotCallRequest extends $dara.Model {
  /**
   * @remarks
   * The called number.
   * 
   * This parameter is required.
   * 
   * @example
   * 131****2204
   */
  calledNumber?: string;
  /**
   * @remarks
   * The caller number for the outbound call. You can view this number on the [Real Number Management](https://dyvmsnext.console.aliyun.com/number/list/normal) page of the voice messaging service.
   * 
   * This parameter is required.
   * 
   * @example
   * 132****0849
   */
  calledShowNumber?: string;
  /**
   * @remarks
   * Specifies whether to enable the number status identification feature. Valid values:
   * 
   * - **false** (default): Disabled.
   * - **true**: Enabled.
   * >After this feature is enabled, the reason why a call is not answered is recorded.
   * 
   * @example
   * false
   */
  earlyMediaAsr?: boolean;
  /**
   * @remarks
   * The ID reserved for the caller. This ID is returned to the caller through a receipt message. The value is 1 to 15 bytes in length.
   * 
   * @example
   * 222356****
   */
  outId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The parameter list of the robot in JSON format. The total length cannot exceed 512 bytes. You can view the parameters on the [Script Management](https://aiccs.console.aliyun.com/patter/list) > **Details** > **Input/Output Parameters** page or by calling the [ListRobotParams](https://help.aliyun.com/document_detail/2717999.html) operation.
   * 
   * @example
   * {
   *   "name": "Zhang San",
   *   "age": "25"
   * }
   */
  params?: string;
  /**
   * @remarks
   * Specifies whether to record the call. Valid values:
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
   * The robot ID, which is the script ID. You can view approved script IDs on the [Script Management](https://aiccs.console.aliyun.com/patter/list) page.
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

