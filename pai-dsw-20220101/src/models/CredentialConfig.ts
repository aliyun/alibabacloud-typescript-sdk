// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CredentialConfigConfigs } from "./CredentialConfigConfigs";


export class CredentialConfig extends $dara.Model {
  /**
   * @example
   * 0
   */
  aliyunEnvRoleKey?: string;
  configs?: CredentialConfigConfigs[];
  /**
   * @example
   * true
   */
  enable?: boolean;
  static names(): { [key: string]: string } {
    return {
      aliyunEnvRoleKey: 'AliyunEnvRoleKey',
      configs: 'Configs',
      enable: 'Enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunEnvRoleKey: 'string',
      configs: { 'type': 'array', 'itemType': CredentialConfigConfigs },
      enable: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.configs)) {
      $dara.Model.validateArray(this.configs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

