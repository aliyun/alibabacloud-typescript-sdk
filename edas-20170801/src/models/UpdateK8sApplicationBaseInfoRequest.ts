// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateK8sApplicationBaseInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application that you want to modify.
   * 
   * This parameter is required.
   * 
   * @example
   * 4f038ddf-b27b-****-****-88e44375****
   */
  appId?: string;
  /**
   * @remarks
   * The description of the application. The description can be up to 256 characters in length.
   * 
   * @example
   * app for pre-production
   */
  description?: string;
  /**
   * @remarks
   * The email address of the application owner.
   * 
   * @example
   * mymail@example.com
   */
  email?: string;
  /**
   * @remarks
   * The owner of the application. The value can be up to 128 characters in length.
   * 
   * @example
   * Tom
   */
  owner?: string;
  /**
   * @remarks
   * The phone number of the application owner.
   * 
   * @example
   * 1361234xxxx
   */
  phoneNumber?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      description: 'Description',
      email: 'Email',
      owner: 'Owner',
      phoneNumber: 'PhoneNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      description: 'string',
      email: 'string',
      owner: 'string',
      phoneNumber: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

