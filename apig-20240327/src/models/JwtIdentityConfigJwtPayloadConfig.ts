// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class JwtIdentityConfigJwtPayloadConfig extends $dara.Model {
  payloadKeyName?: string;
  payloadKeyValue?: string;
  static names(): { [key: string]: string } {
    return {
      payloadKeyName: 'payloadKeyName',
      payloadKeyValue: 'payloadKeyValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      payloadKeyName: 'string',
      payloadKeyValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

