// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResourceAPIKeyResponseBody extends $dara.Model {
  /**
   * @example
   * sk-ds*****
   */
  APIKey?: string;
  /**
   * @example
   * 6E444C1B-1106-56A8-81E0-E3B049BF44AD
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      APIKey: 'APIKey',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      APIKey: 'string',
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

