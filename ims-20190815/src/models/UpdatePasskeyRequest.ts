// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePasskeyRequest extends $dara.Model {
  passkeyId?: string;
  passkeyName?: string;
  userPrincipalName?: string;
  static names(): { [key: string]: string } {
    return {
      passkeyId: 'PasskeyId',
      passkeyName: 'PasskeyName',
      userPrincipalName: 'UserPrincipalName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      passkeyId: 'string',
      passkeyName: 'string',
      userPrincipalName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

