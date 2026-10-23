// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCreditPackageRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the credit package.
   * 
   * @example
   * crp-xagydbhfkah****
   */
  creditPackageId?: string;
  /**
   * @remarks
   * The status of the credit package.
   * 
   * @example
   * ACTIVE
   */
  creditPackageStatus?: string;
  static names(): { [key: string]: string } {
    return {
      creditPackageId: 'CreditPackageId',
      creditPackageStatus: 'CreditPackageStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creditPackageId: 'string',
      creditPackageStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

