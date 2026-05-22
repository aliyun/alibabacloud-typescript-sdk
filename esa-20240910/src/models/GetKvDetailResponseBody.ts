// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetKvDetailResponseBody extends $dara.Model {
  expirationTtl?: string;
  requestId?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      expirationTtl: 'ExpirationTtl',
      requestId: 'RequestId',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expirationTtl: 'string',
      requestId: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

