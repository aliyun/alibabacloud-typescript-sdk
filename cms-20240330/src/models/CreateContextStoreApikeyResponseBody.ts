// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateContextStoreAPIKeyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The full API key value.
   * 
   * @example
   * sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   */
  apiKey?: string;
  /**
   * @remarks
   * The name of the API key.
   * 
   * @example
   * Production Service Key
   */
  name?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3B311FD9-A60B-55E0-A896-A0C73*********
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

