// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CredentialConfigItem } from "./CredentialConfigItem";


export class CredentialConfig extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud environment role identifier.
   * 
   * @example
   * 0
   */
  aliyunEnvRoleKey?: string;
  /**
   * @remarks
   * The credential configuration items.
   */
  credentialConfigItems?: CredentialConfigItem[];
  /**
   * @remarks
   * Specifies whether credential injection is enabled.
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

