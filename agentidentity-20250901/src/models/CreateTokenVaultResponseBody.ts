// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTokenVaultResponseBodyTokenVaultEncryptionConfig extends $dara.Model {
  keyType?: string;
  kmsKeyArn?: string;
  static names(): { [key: string]: string } {
    return {
      keyType: 'KeyType',
      kmsKeyArn: 'KmsKeyArn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyType: 'string',
      kmsKeyArn: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTokenVaultResponseBodyTokenVault extends $dara.Model {
  createTime?: string;
  description?: string;
  encryptionConfig?: CreateTokenVaultResponseBodyTokenVaultEncryptionConfig;
  roleArn?: string;
  tokenVaultArn?: string;
  tokenVaultName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      encryptionConfig: 'EncryptionConfig',
      roleArn: 'RoleArn',
      tokenVaultArn: 'TokenVaultArn',
      tokenVaultName: 'TokenVaultName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      encryptionConfig: CreateTokenVaultResponseBodyTokenVaultEncryptionConfig,
      roleArn: 'string',
      tokenVaultArn: 'string',
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

export class CreateTokenVaultResponseBody extends $dara.Model {
  requestId?: string;
  tokenVault?: CreateTokenVaultResponseBodyTokenVault;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tokenVault: 'TokenVault',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tokenVault: CreateTokenVaultResponseBodyTokenVault,
    };
  }

  validate() {
    if(this.tokenVault && typeof (this.tokenVault as any).validate === 'function') {
      (this.tokenVault as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

