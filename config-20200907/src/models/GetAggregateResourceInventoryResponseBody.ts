// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetAggregateResourceInventoryResponseBodyResourceInventory } from "./GetAggregateResourceInventoryResponseBodyResourceInventory";


export class GetAggregateResourceInventoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1A6D3604-EF1A-5798-A576-2A5FB855493C
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the resource inventory.
   */
  resourceInventory?: GetAggregateResourceInventoryResponseBodyResourceInventory;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceInventory: 'ResourceInventory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceInventory: GetAggregateResourceInventoryResponseBodyResourceInventory,
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

