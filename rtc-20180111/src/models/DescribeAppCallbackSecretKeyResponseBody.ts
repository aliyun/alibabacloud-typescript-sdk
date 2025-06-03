// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAppCallbackSecretKeyResponseBody extends $dara.Model {
  /**
   * @example
   * a656b296a30xxxxxxxxxx1cd4
   */
  callbackSecretKey?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CD8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      callbackSecretKey: 'CallbackSecretKey',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callbackSecretKey: 'string',
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

