// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRobotParamsRequest extends $dara.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Robot ID, which is also the script ID. You can view it on the [Script Management](https://aiccs.console.aliyun.com/patter/list) interface or obtain it by using the [ListAiccsRobot](https://help.aliyun.com/document_detail/2717998.html) API.
   * 
   * This parameter is required.
   * 
   * @example
   * 12****
   */
  robotId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      robotId: 'RobotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
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

