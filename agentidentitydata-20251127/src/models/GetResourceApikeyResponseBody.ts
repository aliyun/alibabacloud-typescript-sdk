// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResourceAPIKeyResponseBody extends $dara.Model {
  APIKey?: string;
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

