// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ApiKey } from "./ApiKey";


export class DescribeApiKeyResponseBody extends $dara.Model {
  apiKey?: ApiKey;
  code?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'apiKey',
      code: 'code',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: ApiKey,
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.apiKey && typeof (this.apiKey as any).validate === 'function') {
      (this.apiKey as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

