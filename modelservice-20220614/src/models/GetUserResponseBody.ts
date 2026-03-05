// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserResponseBody extends $dara.Model {
  /**
   * @example
   * 20200425******
   */
  appId?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * ai-service.******.alicontainer.com
   */
  host?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 897658D5-1FB8-5CFA-A030-727CCAE59EB0
   */
  requestId?: string;
  /**
   * @example
   * Njk0Njk******
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      code: 'Code',
      host: 'Host',
      message: 'Message',
      requestId: 'RequestId',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      code: 'string',
      host: 'string',
      message: 'string',
      requestId: 'string',
      token: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

