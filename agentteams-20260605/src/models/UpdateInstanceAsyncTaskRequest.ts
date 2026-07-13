// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateInstanceAsyncTaskRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * at-xxx
   */
  instanceId?: string;
  isResume?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * agentteams:pay-order:create
   */
  taskCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * task-xxx
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      isResume: 'IsResume',
      taskCode: 'TaskCode',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      isResume: 'boolean',
      taskCode: 'string',
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

