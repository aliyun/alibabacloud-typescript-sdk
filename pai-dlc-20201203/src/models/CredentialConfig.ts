// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CredentialConfigItem } from "./CredentialConfigItem";


export class CredentialConfig extends $dara.Model {
  /**
   * @remarks
   * The role identity key injected into environment variables.
   */
  aliyunEnvRoleKey?: string;
  /**
   * @remarks
   * The list of credential configuration items.
   */
  credentialConfigItems?: CredentialConfigItem[];
  /**
   * @remarks
   * Specifies whether to enable credential injection.
   */
  enableCredentialInject?: boolean;
  static names(): { [key: string]: string } {
    return {
      aliyunEnvRoleKey: 'AliyunEnvRoleKey',
      credentialConfigItems: 'CredentialConfigItems',
      enableCredentialInject: 'EnableCredentialInject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunEnvRoleKey: 'string',
      credentialConfigItems: { 'type': 'array', 'itemType': CredentialConfigItem },
      enableCredentialInject: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.credentialConfigItems)) {
      $dara.Model.validateArray(this.credentialConfigItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

