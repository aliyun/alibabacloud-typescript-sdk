// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckResourceStockResponseBodyResourceStockModels extends $dara.Model {
  /**
   * @remarks
   * Region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * Inventory status of the instance group.
   * 
   * @example
   * Available
   */
  stockStatus?: string;
  /**
   * @remarks
   * Zone ID.
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

