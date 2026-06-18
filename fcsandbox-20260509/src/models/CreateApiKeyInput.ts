// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateApiKeyInput extends $dara.Model {
  apiKeyName?: string;
  expireTime?: string;
  static names(): { [key: string]: string } {
    return {
      apiKeyName: 'apiKeyName',
      expireTime: 'expireTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKeyName: 'string',
      expireTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

