// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunInventorySynchronizationJobRequest extends $dara.Model {
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
   * The ID of the synchronization target.
   * 
   * This parameter is required.
   * 
   * @example
   * sync_xxxxxx
   */
  inventorySourceId?: string;
  /**
   * @remarks
   * The resource types.
   */
  inventoryTypes?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      inventorySourceId: 'InventorySourceId',
      inventoryTypes: 'InventoryTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      inventorySourceId: 'string',
      inventoryTypes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.inventoryTypes)) {
      $dara.Model.validateArray(this.inventoryTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

