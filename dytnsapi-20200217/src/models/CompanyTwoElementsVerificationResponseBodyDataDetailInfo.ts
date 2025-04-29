// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CompanyTwoElementsVerificationResponseBodyDataDetailInfo extends $dara.Model {
  /**
   * @remarks
   * The business status of the enterprise.
   * 
   * @example
   * Active
   */
  enterpriseStatus?: string;
  /**
   * @remarks
   * The business term of the enterprise.
   * 
   * @example
   * 2023-05-25/2053-05-24
   */
  openTime?: string;
  static names(): { [key: string]: string } {
    return {
      enterpriseStatus: 'EnterpriseStatus',
      openTime: 'OpenTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enterpriseStatus: 'string',
      openTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

