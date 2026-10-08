// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteEmailVerificationRequest extends $dara.Model {
  /**
   * @remarks
   * Email addresses to be deleted, separated by commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * test1@aliyun.com,test2@aliyun.com
   */
  email?: string;
  /**
   * @remarks
   * Language of the error message returned by the API. Valid values:
   * - **zh**: Chinese.
   * - **en**: English.
   * 
   * Default value: **en**.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * User IP address, which can be set to 127.0.0.1.
   * 
   * @example
   * 127.0.0.1
   */
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'Email',
      lang: 'Lang',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      lang: 'string',
      userClientIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

