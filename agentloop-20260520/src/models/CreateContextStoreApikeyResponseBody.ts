// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateContextStoreAPIKeyResponseBody extends $dara.Model {
  /**
   * @example
   * sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   */
  apiKey?: string;
  /**
   * @example
   * my-api-key
   */
  name?: string;
  /**
   * @example
   * 9ACFB10A-1B2C-3D4E-5F6G-7H8I9J0K1L2M
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'apiKey',
      name: 'name',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      name: 'string',
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

