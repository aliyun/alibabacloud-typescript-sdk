// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTokenVaultsResponseBodyTokenVaultsEncryptionConfig extends $dara.Model {
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

export class ListTokenVaultsResponseBodyTokenVaults extends $dara.Model {
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
  encryptionConfig?: ListTokenVaultsResponseBodyTokenVaultsEncryptionConfig;
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
      encryptionConfig: ListTokenVaultsResponseBodyTokenVaultsEncryptionConfig,
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

export class ListTokenVaultsResponseBody extends $dara.Model {
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * AAAAAdDWBF2
   */
  nextToken?: string;
  /**
   * @example
   * 2A48EB1D-D645-5758-91AF-EDF8E36E257B
   */
  requestId?: string;
  tokenVaults?: ListTokenVaultsResponseBodyTokenVaults[];
  /**
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      tokenVaults: 'TokenVaults',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      tokenVaults: { 'type': 'array', 'itemType': ListTokenVaultsResponseBodyTokenVaults },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.tokenVaults)) {
      $dara.Model.validateArray(this.tokenVaults);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

