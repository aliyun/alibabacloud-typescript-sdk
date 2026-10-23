// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchGetAcpConnectionTicketRequestInstanceTasks extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * acp-fkuit0cmyfvzz****
   */
  instanceId?: string;
  /**
   * @remarks
   * The task ID.
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
   * The connection mode.
   * 
   * @example
   * custom
   */
  connectionMode?: string;
  /**
   * @remarks
   * The ID of the assigned user. If you do not specify this parameter, the system user assigned in the background is used to obtain the ticket.
   * 
   * <props="china">
   * The usage of this parameter varies based on the Cloud Phone edition and the instance streaming mode:
   * 
   * - Cloud Phone Instance Edition or Cloud Phone Matrix Edition (preemptive mode): You can obtain a `Ticket` only by using the same `EnduserId`.
   * - Cloud Phone Matrix Edition (collaborative mode): You can pass different `EnduserId` values to obtain `Ticket` values and stream for different users (up to 5) at the same time. You can pass only one `EnduserId` at a time.
   * 
   * > You can define the instance streaming mode by using the `StreamMode` parameter of the `ModifyCloudPhoneNode` operation.
   * 
   * @example
   * user
   */
  endUserId?: string;
  /**
   * @remarks
   * The instance group ID.
   * 
   * @example
   * ag-25nt4kk9whjh****
   */
  instanceGroupId?: string;
  /**
   * @remarks
   * The list of Cloud Phone instance IDs. You can specify 1 to 100 IDs.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The instance connection tasks. This parameter is used to query whether the ticket retrieval task is completed.
   */
  instanceTasks?: BatchGetAcpConnectionTicketRequestInstanceTasks[];
  /**
   * @remarks
   * The list of custom connection ports.
   */
  ports?: string[];
  static names(): { [key: string]: string } {
    return {
      connectionMode: 'ConnectionMode',
      endUserId: 'EndUserId',
      instanceGroupId: 'InstanceGroupId',
      instanceIds: 'InstanceIds',
      instanceTasks: 'InstanceTasks',
      ports: 'Ports',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionMode: 'string',
      endUserId: 'string',
      instanceGroupId: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      instanceTasks: { 'type': 'array', 'itemType': BatchGetAcpConnectionTicketRequestInstanceTasks },
      ports: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    if(Array.isArray(this.instanceTasks)) {
      $dara.Model.validateArray(this.instanceTasks);
    }
    if(Array.isArray(this.ports)) {
      $dara.Model.validateArray(this.ports);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

