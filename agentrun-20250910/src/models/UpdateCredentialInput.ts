// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CredentialPublicConfig } from "./CredentialPublicConfig";


export class UpdateCredentialInput extends $dara.Model {
  credentialPublicConfig?: CredentialPublicConfig;
  credentialSecret?: string;
  description?: string;
  enabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      credentialPublicConfig: 'credentialPublicConfig',
      credentialSecret: 'credentialSecret',
      description: 'description',
      enabled: 'enabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialPublicConfig: CredentialPublicConfig,
      credentialSecret: 'string',
      description: 'string',
      enabled: 'boolean',
    };
  }

  validate() {
    if(this.credentialPublicConfig && typeof (this.credentialPublicConfig as any).validate === 'function') {
      (this.credentialPublicConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

