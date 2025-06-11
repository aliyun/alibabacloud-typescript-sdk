// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryPhoneBusinessProfileResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Regarding.
   * 
   * @example
   * business profile
   */
  about?: string;
  /**
   * @remarks
   * The address.
   * 
   * @example
   * Changsha
   */
  address?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * Description
   */
  description?: string;
  /**
   * @remarks
   * The email address.
   * 
   * @example
   * aa@aliyun.com
   */
  email?: string;
  /**
   * @remarks
   * The profile picture.
   * 
   * @example
   * https://....img
   */
  profilePictureUrl?: string;
  /**
   * @remarks
   * The industry.
   * 
   * @example
   * Retail
   */
  vertical?: string;
  /**
   * @remarks
   * The website.
   */
  websites?: string[];
  static names(): { [key: string]: string } {
    return {
      about: 'About',
      address: 'Address',
      description: 'Description',
      email: 'Email',
      profilePictureUrl: 'ProfilePictureUrl',
      vertical: 'Vertical',
      websites: 'Websites',
    };
  }

  static types(): { [key: string]: any } {
    return {
      about: 'string',
      address: 'string',
      description: 'string',
      email: 'string',
      profilePictureUrl: 'string',
      vertical: 'string',
      websites: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.websites)) {
      $dara.Model.validateArray(this.websites);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

