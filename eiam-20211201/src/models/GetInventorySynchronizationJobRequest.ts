// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInventorySynchronizationJobRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the IDaaS EIAM instance.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the synchronization task.
   * 
   * This parameter is required.
   * 
   * @example
   * sync_xxxxxxx
   */
  inventorySynchronizationJobId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      inventorySynchronizationJobId: 'InventorySynchronizationJobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      inventorySynchronizationJobId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

