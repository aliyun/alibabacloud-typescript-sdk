// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IdentifyCredential } from "./IdentifyCredential";


export class CreateIdentifyCredentialRequest extends $dara.Model {
  identifyCredential?: IdentifyCredential;
  static names(): { [key: string]: string } {
    return {
      identifyCredential: 'IdentifyCredential',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identifyCredential: IdentifyCredential,
    };
  }

  validate() {
    if(this.identifyCredential && typeof (this.identifyCredential as any).validate === 'function') {
      (this.identifyCredential as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

