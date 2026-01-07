// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendAsyncEmailCaptchaRequest extends $dara.Model {
  /**
   * @example
   * xxx
   */
  appName?: string;
  /**
   * @example
   * xxx
   */
  contactInfo?: string;
  /**
   * @example
   * xxx
   */
  contactorId?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      contactInfo: 'ContactInfo',
      contactorId: 'ContactorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      contactInfo: 'string',
      contactorId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

