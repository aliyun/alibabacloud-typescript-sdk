// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTokenVaultResponseBodyTokenVaultEncryptionConfig extends $dara.Model {
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

export class GetTokenVaultResponseBodyTokenVault extends $dara.Model {
  createTime?: string;
  description?: string;
  encryptionConfig?: GetTokenVaultResponseBodyTokenVaultEncryptionConfig;
  roleArn?: string;
  tokenVaultArn?: string;
  tokenVaultName?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      encryptionConfig: 'EncryptionConfig',
      roleArn: 'RoleArn',
      tokenVaultArn: 'TokenVaultArn',
      tokenVaultName: 'TokenVaultName',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      encryptionConfig: GetTokenVaultResponseBodyTokenVaultEncryptionConfig,
      roleArn: 'string',
      tokenVaultArn: 'string',
      tokenVaultName: 'string',
      updateTime: 'string',
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

export class GetTokenVaultResponseBody extends $dara.Model {
  requestId?: string;
  tokenVault?: GetTokenVaultResponseBodyTokenVault;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tokenVault: 'TokenVault',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tokenVault: GetTokenVaultResponseBodyTokenVault,
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

