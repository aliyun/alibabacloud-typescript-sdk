// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TriggerSchedulerTaskInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The environment of the workspace. Valid values:
   * 
   * *   Prod: production environment
   * *   Dev: development environment
   * 
   * @example
   * Prod
   */
  envType?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  taskId?: number;
  /**
   * @remarks
   * The time defined by the HTTP Trigger node. This value is a UNIX timestamp.
   * 
   * This parameter is required.
   * 
   * @example
   * 1710239005403
   */
  triggerTime?: number;
  static names(): { [key: string]: string } {
    return {
      envType: 'EnvType',
      taskId: 'TaskId',
      triggerTime: 'TriggerTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      envType: 'string',
      taskId: 'number',
      triggerTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

