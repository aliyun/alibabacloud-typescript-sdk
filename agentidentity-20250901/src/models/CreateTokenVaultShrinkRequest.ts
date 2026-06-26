// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTokenVaultShrinkRequest extends $dara.Model {
  description?: string;
  encryptionConfigShrink?: string;
  roleArn?: string;
  tokenVaultName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      encryptionConfigShrink: 'EncryptionConfig',
      roleArn: 'RoleArn',
      tokenVaultName: 'TokenVaultName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      encryptionConfigShrink: 'string',
      roleArn: 'string',
      tokenVaultName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

