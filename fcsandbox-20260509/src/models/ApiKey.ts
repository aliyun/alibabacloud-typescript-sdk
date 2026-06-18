// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class ApiKey extends $dara.Model {
  apiKeyID?: string;
  apiKeyMask?: string;
  apiKeyName?: string;
  apiKeyValue?: string;
  createdTime?: string;
  expireTime?: string;
  lastUsedTime?: string;
  userID?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      apiKeyID: 'apiKeyID',
      apiKeyMask: 'apiKeyMask',
      apiKeyName: 'apiKeyName',
      apiKeyValue: 'apiKeyValue',
      createdTime: 'createdTime',
      expireTime: 'expireTime',
      lastUsedTime: 'lastUsedTime',
      userID: 'userID',
      username: 'username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKeyID: 'string',
      apiKeyMask: 'string',
      apiKeyName: 'string',
      apiKeyValue: 'string',
      createdTime: 'string',
      expireTime: 'string',
      lastUsedTime: 'string',
      userID: 'string',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

