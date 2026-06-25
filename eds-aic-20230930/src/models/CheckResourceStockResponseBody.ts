// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckResourceStockResponseBodyResourceStockModels extends $dara.Model {
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The inventory status of the instance group.
   * 
   * @example
   * Available
   */
  stockStatus?: string;
  /**
   * @remarks
   * The ID of the zone.
   * 
   * @example
   * cn-shanghai-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      stockStatus: 'StockStatus',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      stockStatus: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckResourceStockResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 805D8FB6-512A-531C-9E4D-2A807D3C****
   */
  requestId?: string;
  /**
   * @remarks
   * The resource inventory details.
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

