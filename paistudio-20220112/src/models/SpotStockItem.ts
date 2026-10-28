// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SpotStockInternalInfo } from "./SpotStockInternalInfo";


export class SpotStockItem extends $dara.Model {
  /**
   * @remarks
   * The instance type.
   * 
   * @example
   * ml.gp7vf.16.40xlarge
   */
  instanceType?: string;
  /**
   * @remarks
   * The inventory details.
   */
  internalInfo?: SpotStockInternalInfo[];
  /**
   * @remarks
   * The inventory status.
   * 
   * @example
   * High
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

