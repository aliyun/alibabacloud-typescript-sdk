// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyTaskInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The operation parameters for the task.
   * 
   * @example
   * {}
   */
  actionParams?: string;
  /**
   * @remarks
   * The ID of the region where the task is located.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  resourceOwnerAccount?: number;
  resourceOwnerId?: number;
  securityToken?: string;
  /**
   * @remarks
   * The name of the task step to modify. Usage note: These two parameters are required in actual calls. If they are not provided, the Param.Invalid error is returned.
   * 
   * @example
   * create_instance
   */
  stepName?: string;
  /**
   * @remarks
   * The name of the API operation associated with the task. Usage note: These two parameters are required in actual calls. If they are not provided, the Param.Invalid error is returned. Usage note: Provide a complete list of valid values or instructions on how to obtain them (such as by calling an associated query API), and correct the current invalid example value CreateDBInstance to an actual valid TaskAction value.
   * 
   * @example
   * CreateDBInstance
   */
  taskAction?: string;
  /**
   * @remarks
   * The ID of the task to modify.
   * 
   * This parameter is required.
   * 
   * @example
   * 32077061
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

