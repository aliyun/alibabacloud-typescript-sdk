// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CredentialPublicConfig } from "./CredentialPublicConfig";


export class CreateCredentialInput extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  credentialAuthType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  credentialName?: string;
  credentialPublicConfig?: CredentialPublicConfig;
  credentialSecret?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  credentialSourceType?: string;
  description?: string;
  enabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      credentialAuthType: 'credentialAuthType',
      credentialName: 'credentialName',
      credentialPublicConfig: 'credentialPublicConfig',
      credentialSecret: 'credentialSecret',
      credentialSourceType: 'credentialSourceType',
      description: 'description',
      enabled: 'enabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialAuthType: 'string',
      credentialName: 'string',
      credentialPublicConfig: CredentialPublicConfig,
      credentialSecret: 'string',
      credentialSourceType: 'string',
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

