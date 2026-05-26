// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTokenVaultResponseBodyTokenVaultEncryptionConfig extends $dara.Model {
  /**
   * @example
   * SERVICE_MANAGED_KEY
   */
  keyType?: string;
  /**
   * @example
   * acs:kms:cn-beijing:123456:key/key-bjxxxxxxxx
   */
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
  /**
   * @example
   * 2026-05-08T06:19:17Z
   */
  createTime?: string;
  /**
   * @example
   * example description
   */
  description?: string;
  encryptionConfig?: GetTokenVaultResponseBodyTokenVaultEncryptionConfig;
  /**
   * @example
   * acs:ram::123456:role/AliyunAgentIdentityVaultRole
   */
  roleArn?: string;
  /**
   * @example
   * acs:agentidentity:cn-beijing:123456:tokenvault/default
   */
  tokenVaultArn?: string;
  /**
   * @example
   * default
   */
  tokenVaultName?: string;
  /**
   * @example
   * 2026-05-08T06:19:17Z
   */
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
  /**
   * @example
   * 2A48EB1D-D645-5758-91AF-EDF8E36E257B
   */
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

