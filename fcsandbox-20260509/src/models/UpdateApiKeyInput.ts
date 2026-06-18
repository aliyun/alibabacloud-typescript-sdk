// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateApiKeyInput extends $dara.Model {
  apiKeyName?: string;
  expireTime?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      apiKeyName: 'apiKeyName',
      expireTime: 'expireTime',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKeyName: 'string',
      expireTime: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

