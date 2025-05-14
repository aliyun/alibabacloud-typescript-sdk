// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BatchGetAcpConnectionTicketRequestInstanceTasks } from "./BatchGetAcpConnectionTicketRequestInstanceTasks";


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

