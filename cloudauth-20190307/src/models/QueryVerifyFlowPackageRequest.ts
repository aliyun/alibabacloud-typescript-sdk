// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryVerifyFlowPackageRequest extends $dara.Model {
  /**
   * @remarks
   * The product type. Valid values:
   * - **FINANCE_VERIFY**: Financial-Grade ID Verification
   * - **SMART_VERIFY**: Enhanced ID Verification (discontinued)
   * - **FACE_VERIFY**: ID Verification (discontinued).
   * 
   * This parameter is required.
   * 
   * @example
   * FINANCE_VERIFY
   */
  productType?: string;
  static names(): { [key: string]: string } {
    return {
      productType: 'ProductType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

