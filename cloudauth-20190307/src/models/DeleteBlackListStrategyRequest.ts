// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteBlackListStrategyRequest extends $dara.Model {
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * 38
   */
  id?: number;
  /**
   * @remarks
   * The product name. Valid values:
   * - **id2meta**: ID card two-element verification.
   * - **mobile3Meta**: Mobile number element verification.
   * - **bankcardMeta**: Bank card element verification.
   * 
   * @example
   * id2meta
   */
  productName?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      productName: 'ProductName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      productName: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

