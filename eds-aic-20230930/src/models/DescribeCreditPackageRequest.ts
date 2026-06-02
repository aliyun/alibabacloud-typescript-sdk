// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCreditPackageRequest extends $dara.Model {
  /**
   * @example
   * crp-xagydbhfkah****
   */
  creditPackageId?: string;
  /**
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

