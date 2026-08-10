// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportApiKeyInput extends $dara.Model {
  apiKeyName?: string;
  apiKeyValue?: string;
  expireTime?: string;
  teamID?: string;
  static names(): { [key: string]: string } {
    return {
      apiKeyName: 'apiKeyName',
      apiKeyValue: 'apiKeyValue',
      expireTime: 'expireTime',
      teamID: 'teamID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKeyName: 'string',
      apiKeyValue: 'string',
      expireTime: 'string',
      teamID: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

