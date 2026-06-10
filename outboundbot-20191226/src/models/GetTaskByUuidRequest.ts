// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTaskByUuidRequest extends $dara.Model {
  /**
   * @remarks
   * Instance ID
   * 
   * This parameter is required.
   * 
   * @example
   * 024f8cf0-c842-4c01-b74b-c8667e4579c7
   */
  instanceId?: string;
  /**
   * @remarks
   * Task ID
   * 
   * This parameter is required.
   * 
   * @example
   * 15160071061
   */
  taskId?: string;
  /**
   * @remarks
   * Include conversation details
   * 
   * > The default value is false.
   * 
   * @example
   * false
   */
  withConversations?: boolean;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      taskId: 'TaskId',
      withConversations: 'WithConversations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      taskId: 'string',
      withConversations: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

