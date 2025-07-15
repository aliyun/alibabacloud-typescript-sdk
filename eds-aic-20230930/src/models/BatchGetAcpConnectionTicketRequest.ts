// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchGetAcpConnectionTicketRequestInstanceTasks extends $dara.Model {
  /**
   * @remarks
   * The ID of the cloud phone instance.
   * 
   * @example
   * acp-fkuit0cmyfvzz****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * cn-hangzhou@c9f5c2e8-f5c4-4b01-8602-000cae94****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
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

export class BatchGetAcpConnectionTicketRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the user to whom the cloud phone instance is assigned.
   * 
   * @example
   * user
   */
  endUserId?: string;
  /**
   * @remarks
   * The ID of the instance group.
   * 
   * @example
   * ag-25nt4kk9whjh****
   */
  instanceGroupId?: string;
  /**
   * @remarks
   * The IDs of the cloud phone instances. You can specify 1 to 100 IDs of cloud phone instances.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The instance connection tasks.
   */
  instanceTasks?: BatchGetAcpConnectionTicketRequestInstanceTasks[];
  static names(): { [key: string]: string } {
    return {
      endUserId: 'EndUserId',
      instanceGroupId: 'InstanceGroupId',
      instanceIds: 'InstanceIds',
      instanceTasks: 'InstanceTasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endUserId: 'string',
      instanceGroupId: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      instanceTasks: { 'type': 'array', 'itemType': BatchGetAcpConnectionTicketRequestInstanceTasks },
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    if(Array.isArray(this.instanceTasks)) {
      $dara.Model.validateArray(this.instanceTasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

