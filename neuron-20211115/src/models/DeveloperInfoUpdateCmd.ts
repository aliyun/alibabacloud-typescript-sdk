// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeveloperInfoUpdateCmd extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 121321412341
   */
  accountId?: string;
  /**
   * @example
   * xxx@alibaba.com
   */
  email?: string;
  /**
   * @example
   * 1
   */
  enterpriseId?: number;
  /**
   * @example
   * 尚仁
   */
  name?: string;
  /**
   * @example
   * 15113456789
   */
  phone?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
      email: 'email',
      enterpriseId: 'enterpriseId',
      name: 'name',
      phone: 'phone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      email: 'string',
      enterpriseId: 'number',
      name: 'string',
      phone: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

