// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ValidateEmailRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to check the graylist. The default value is false. The result is sent through an asynchronous notification message from EventBridge.
   * 
   * @example
   * true
   */
  checkGraylist?: boolean;
  /**
   * @remarks
   * The email address to validate.
   * 
   * This parameter is required.
   * 
   * @example
   * xxx@yyy.com
   */
  email?: string;
  /**
   * @remarks
   * The timeout period. The default value is 60 seconds.
   * 
   * @example
   * 20
   */
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      checkGraylist: 'CheckGraylist',
      email: 'Email',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkGraylist: 'boolean',
      email: 'string',
      timeout: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

