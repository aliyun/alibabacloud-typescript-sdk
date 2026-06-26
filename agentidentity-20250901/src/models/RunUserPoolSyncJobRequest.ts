// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunUserPoolSyncJobRequest extends $dara.Model {
  identityProviderType?: string;
  maxSyncUsers?: string;
  userPoolName?: string;
  static names(): { [key: string]: string } {
    return {
      identityProviderType: 'IdentityProviderType',
      maxSyncUsers: 'MaxSyncUsers',
      userPoolName: 'UserPoolName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identityProviderType: 'string',
      maxSyncUsers: 'string',
      userPoolName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

