// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CheckResourceStockResponseBodyResourceStockModels } from "./CheckResourceStockResponseBodyResourceStockModels";


export class CheckResourceStockResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 805D8FB6-512A-531C-9E4D-2A807D3C****
   */
  requestId?: string;
  /**
   * @remarks
   * Details of resource inventory.
   */
  resourceStockModels?: CheckResourceStockResponseBodyResourceStockModels[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceStockModels: 'ResourceStockModels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceStockModels: { 'type': 'array', 'itemType': CheckResourceStockResponseBodyResourceStockModels },
    };
  }

  validate() {
    if(Array.isArray(this.resourceStockModels)) {
      $dara.Model.validateArray(this.resourceStockModels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

