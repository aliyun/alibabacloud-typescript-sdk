// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyTaskInfoRequest extends $dara.Model {
  actionParams?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  resourceOwnerAccount?: number;
  resourceOwnerId?: number;
  securityToken?: string;
  stepName?: string;
  taskAction?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      actionParams: 'ActionParams',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
      stepName: 'StepName',
      taskAction: 'TaskAction',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionParams: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'number',
      resourceOwnerId: 'number',
      securityToken: 'string',
      stepName: 'string',
      taskAction: 'string',
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

