// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeletePasskeyRequest extends $dara.Model {
  passkeyId?: string;
  userPrincipalName?: string;
  static names(): { [key: string]: string } {
    return {
      passkeyId: 'PasskeyId',
      userPrincipalName: 'UserPrincipalName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      passkeyId: 'string',
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

