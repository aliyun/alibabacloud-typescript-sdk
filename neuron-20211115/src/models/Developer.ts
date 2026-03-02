// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Developer extends $dara.Model {
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
   * 121321412341
   */
  codeupAccountId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
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
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 尚仁
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 15113456789
   */
  phone?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
      codeupAccountId: 'codeupAccountId',
      email: 'email',
      enterpriseId: 'enterpriseId',
      name: 'name',
      phone: 'phone',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      codeupAccountId: 'string',
      email: 'string',
      enterpriseId: 'number',
      name: 'string',
      phone: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

