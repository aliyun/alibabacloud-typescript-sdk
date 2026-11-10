// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddUserBusinessFormRequest extends $dara.Model {
  /**
   * @remarks
   * The company.
   * 
   * This parameter is required.
   * 
   * @example
   * xxxx Co., Ltd
   */
  company?: string;
  /**
   * @remarks
   * The email address.
   * 
   * This parameter is required.
   * 
   * @example
   * xxxx@alibaba.com
   */
  email?: string;
  /**
   * @remarks
   * The phone number.
   * 
   * This parameter is required.
   * 
   * @example
   * 158********
   */
  phoneNumber?: string;
  /**
   * @remarks
   * The job title.
   * 
   * This parameter is required.
   * 
   * @example
   * Manager
   */
  position?: string;
  /**
   * @remarks
   * Additional remarks.
   * 
   * @example
   * Please contact us as soon as possible
   */
  remark?: string;
  /**
   * @remarks
   * The username.
   * 
   * This parameter is required.
   * 
   * @example
   * Zhang San
   */
  userName?: string;
  /**
   * @remarks
   * The company website.
   * 
   * @example
   * xxx.com
   */
  website?: string;
  static names(): { [key: string]: string } {
    return {
      company: 'Company',
      email: 'Email',
      phoneNumber: 'PhoneNumber',
      position: 'Position',
      remark: 'Remark',
      userName: 'UserName',
      website: 'Website',
    };
  }

  static types(): { [key: string]: any } {
    return {
      company: 'string',
      email: 'string',
      phoneNumber: 'string',
      position: 'string',
      remark: 'string',
      userName: 'string',
      website: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

