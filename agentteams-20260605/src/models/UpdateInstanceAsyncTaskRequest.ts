// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateInstanceAsyncTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The AgentTeams instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * at-xxx
   */
  instanceId?: string;
  /**
   * @remarks
   * Specifies whether to resume the task.
   * 
   * @example
   * true
   */
  isResume?: boolean;
  /**
   * @remarks
   * The asynchronous task code. Only `agentteams:pay-order:create` is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * agentteams:pay-order:create
   */
  taskCode?: string;
  /**
   * @remarks
   * The asynchronous task ID.
   * 
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

