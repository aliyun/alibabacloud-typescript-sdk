// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetResourceInventoryResponseBodyResourceInventory } from "./GetResourceInventoryResponseBodyResourceInventory";


export class GetResourceInventoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 89E2F38F-4EE4-545A-BD56-92E007ECFEE9
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the resource inventory.
   */
  resourceInventory?: GetResourceInventoryResponseBodyResourceInventory;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceInventory: 'ResourceInventory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceInventory: GetResourceInventoryResponseBodyResourceInventory,
    };
  }

  validate() {
    if(this.resourceInventory && typeof (this.resourceInventory as any).validate === 'function') {
      (this.resourceInventory as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

