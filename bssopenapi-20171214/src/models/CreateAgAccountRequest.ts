// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAgAccountRequest extends $dara.Model {
  /**
   * @remarks
   * The attribute of the account. To view the attribute of the account, use the account to log on to the Alibaba Cloud Management Console, move the pointer over the profile picture in the upper-right corner, and then click **Security Settings**.
   * 
   * @example
   * 1
   */
  accountAttr?: string;
  /**
   * @remarks
   * The name of the city.
   * 
   * @example
   * Beijing
   */
  cityName?: string;
  /**
   * @remarks
   * The name of the enterprise.
   * 
   * @example
   * Dongguan ChuangNeng Electric Appliance Co., Ltd
   */
  enterpriseName?: string;
  /**
   * @remarks
   * The first name.
   * 
   * @example
   * Zhicheng
   */
  firstName?: string;
  /**
   * @remarks
   * The last name.
   * 
   * The last name can be up to 64 characters in length.
   * 
   * @example
   * Wu
   */
  lastName?: string;
  /**
   * @remarks
   * The email address used to log on to the account.
   * 
   * This parameter is required.
   * 
   * @example
   * email
   */
  loginEmail?: string;
  /**
   * @remarks
   * The country code.
   * 
   * @example
   * CN
   */
  nationCode?: string;
  /**
   * @remarks
   * The zip code.
   * 
   * @example
   * 350000
   */
  postcode?: string;
  /**
   * @remarks
   * The name of the province. This parameter is optional.
   * 
   * @example
   * Beijing
   */
  provinceName?: string;
  static names(): { [key: string]: string } {
    return {
      accountAttr: 'AccountAttr',
      cityName: 'CityName',
      enterpriseName: 'EnterpriseName',
      firstName: 'FirstName',
      lastName: 'LastName',
      loginEmail: 'LoginEmail',
      nationCode: 'NationCode',
      postcode: 'Postcode',
      provinceName: 'ProvinceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountAttr: 'string',
      cityName: 'string',
      enterpriseName: 'string',
      firstName: 'string',
      lastName: 'string',
      loginEmail: 'string',
      nationCode: 'string',
      postcode: 'string',
      provinceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

