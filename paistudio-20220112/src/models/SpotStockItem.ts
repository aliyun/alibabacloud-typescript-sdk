// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SpotStockInternalInfo } from "./SpotStockInternalInfo";


export class SpotStockItem extends $dara.Model {
  /**
   * @remarks
   * The instance type.
   */
  instanceType?: string;
  /**
   * @remarks
   * Internal information about the stock of the spot instance type.
   */
  internalInfo?: SpotStockInternalInfo[];
  /**
   * @remarks
   * The stock status of the instance type. Valid values are `Available` and `SoldOut`.
   */
  stockStatus?: string;
  static names(): { [key: string]: string } {
    return {
      instanceType: 'instanceType',
      internalInfo: 'internalInfo',
      stockStatus: 'stockStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
      internalInfo: { 'type': 'array', 'itemType': SpotStockInternalInfo },
      stockStatus: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.internalInfo)) {
      $dara.Model.validateArray(this.internalInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

