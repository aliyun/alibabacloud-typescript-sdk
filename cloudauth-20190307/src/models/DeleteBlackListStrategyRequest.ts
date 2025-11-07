// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteBlackListStrategyRequest extends $dara.Model {
  /**
   * @remarks
   * Rule ID.
   * 
   * @example
   * 38
   */
  id?: number;
  /**
   * @remarks
   * Product Name:
   * - **id2meta**: ID card two-factor verification
   * - **mobile3Meta**: Mobile phone number factor verification
   * - **bankcardMeta**: Bank card factor verification
   * 
   * @example
   * id2meta
   */
  productName?: string;
  /**
   * @remarks
   * Region ID
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

