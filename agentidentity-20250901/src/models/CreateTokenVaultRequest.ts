// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { EncryptionConfig } from "./EncryptionConfig";


export class CreateTokenVaultRequest extends $dara.Model {
  description?: string;
  encryptionConfig?: EncryptionConfig;
  roleArn?: string;
  tokenVaultName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      encryptionConfig: 'EncryptionConfig',
      roleArn: 'RoleArn',
      tokenVaultName: 'TokenVaultName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      encryptionConfig: EncryptionConfig,
      roleArn: 'string',
      tokenVaultName: 'string',
    };
  }

  validate() {
    if(this.encryptionConfig && typeof (this.encryptionConfig as any).validate === 'function') {
      (this.encryptionConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

