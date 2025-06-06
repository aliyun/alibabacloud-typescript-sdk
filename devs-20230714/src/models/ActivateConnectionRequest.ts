// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GitAccount } from "./GitAccount";
import { OAuthCredential } from "./OauthCredential";


export class ActivateConnectionRequest extends $dara.Model {
  account?: GitAccount;
  credential?: OAuthCredential;
  static names(): { [key: string]: string } {
    return {
      account: 'account',
      credential: 'credential',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: GitAccount,
      credential: OAuthCredential,
    };
  }

  validate() {
    if(this.account && typeof (this.account as any).validate === 'function') {
      (this.account as any).validate();
    }
    if(this.credential && typeof (this.credential as any).validate === 'function') {
      (this.credential as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

