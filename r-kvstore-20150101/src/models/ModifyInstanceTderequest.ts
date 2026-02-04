// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceTDERequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the custom key. You can call the [DescribeEncryptionKeyList](https://help.aliyun.com/document_detail/473860.html) operation to query the key ID.
   * 
   * > 
   * 
   * *   If you do not specify this parameter, [Key Management Service (KMS)](https://help.aliyun.com/document_detail/28935.html) automatically generates a key.
   * 
   * *   To create a custom key, you can call the [CreateKey](https://help.aliyun.com/document_detail/28947.html) operation of the KMS API.
   * 
   * @example
   * ad463061-992d-4195-8a94-ed63********
   */
  encryptionKey?: string;
  /**
   * @remarks
   * The encryption algorithm. Default value: AES-CTR-256.
   * 
   * > This parameter is available only if the **TDEStatus** parameter is set to **Enabled**.
   * 
   * @example
   * AES-CTR-256
   */
  encryptionName?: string;
  /**
   * @remarks
   * The ID of the instance. You can call the [DescribeInstances](https://help.aliyun.com/document_detail/473778.html) operation to query the ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * r-bp1zxszhcgatnx****
   */
  instanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the Resource Access Management (RAM) role that you want to attach to your Tair (Redis OSS-compatible) instance. The ARN must be in the format of `acs:ram::$accountID:role/$roleName`. After the role is attached, your Tair (Redis OSS-compatible) instance can use KMS.
   * 
   * > 
   * 
   * *   `$accountID`: the ID of the Alibaba Cloud account. To view the account ID, log on to the Alibaba Cloud console, move the pointer over your profile picture in the upper-right corner of the page, and then click **Security Settings**.
   * 
   * *   `$roleName`: the name of the RAM role. Replace $roleName with **AliyunRdsInstanceEncryptionDefaultRole**.
   * 
   * @example
   * acs:ram::123456789012****:role/AliyunRdsInstanceEncryptionDefaultRole
   */
  roleArn?: string;
  securityToken?: string;
  /**
   * @remarks
   * Specifies whether to enable TDE. Set the value to **Enabled**.
   * 
   * > TDE cannot be disabled after it is enabled. Before you enable it, evaluate whether this feature affects your business. For more information, see [Enable TDE](https://help.aliyun.com/document_detail/265913.html).
   * 
   * This parameter is required.
   * 
   * @example
   * Enabled
   */
  TDEStatus?: string;
  static names(): { [key: string]: string } {
    return {
      encryptionKey: 'EncryptionKey',
      encryptionName: 'EncryptionName',
      instanceId: 'InstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      roleArn: 'RoleArn',
      securityToken: 'SecurityToken',
      TDEStatus: 'TDEStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encryptionKey: 'string',
      encryptionName: 'string',
      instanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      roleArn: 'string',
      securityToken: 'string',
      TDEStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

