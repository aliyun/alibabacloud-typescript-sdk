// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTokenVaultsResponseBodyTokenVaultsEncryptionConfig extends $dara.Model {
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

export class ListTokenVaultsResponseBodyTokenVaults extends $dara.Model {
  createTime?: string;
  description?: string;
  encryptionConfig?: ListTokenVaultsResponseBodyTokenVaultsEncryptionConfig;
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
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  tokenVaults?: ListTokenVaultsResponseBodyTokenVaults[];
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

