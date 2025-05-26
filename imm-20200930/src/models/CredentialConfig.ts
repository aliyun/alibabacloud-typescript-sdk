// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CredentialConfigChain } from "./CredentialConfigChain";


export class CredentialConfig extends $dara.Model {
  chain?: CredentialConfigChain[];
  policy?: string;
  serviceRole?: string;
  static names(): { [key: string]: string } {
    return {
      chain: 'Chain',
      policy: 'Policy',
      serviceRole: 'ServiceRole',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chain: { 'type': 'array', 'itemType': CredentialConfigChain },
      policy: 'string',
      serviceRole: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.chain)) {
      $dara.Model.validateArray(this.chain);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

