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
   * - **id2meta**: Two-element verification for ID cards.
   * - **mobile3Meta**: Element verification for mobile phone numbers.
   * - **bankcardMeta**: Element verification for bank cards.
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

