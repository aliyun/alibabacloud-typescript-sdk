// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceTDERequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the custom key. You can call the [DescribeEncryptionKeyList](https://help.aliyun.com/document_detail/473860.html) operation to obtain the key ID.
   * 
   * > * If you do not specify this parameter, [Key Management Service (KMS)](https://help.aliyun.com/document_detail/28935.html) automatically generates a key.
   * > * To create a custom key, you can call the [CreateKey](https://help.aliyun.com/document_detail/28947.html) operation of Key Management Service (KMS).
   * 
   * @example
   * ad463061-992d-4195-8a94-ed63********
   */
  encryptionKey?: string;
  /**
   * @remarks
   * The encryption algorithm. Default value: AES-CTR-256.
   * > This parameter is available only when the **TDEStatus** parameter is set to **Enabled**.
   * 
   * @example
   * AES-CTR-256
   */
  encryptionName?: string;
  /**
   * @remarks
   * The instance ID. You can call the [DescribeInstances](https://help.aliyun.com/document_detail/473778.html) operation to obtain the instance ID.
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
   * The global resource descriptor ARN (Alibaba Cloud Resource Name) of the RAM role to authorize. After authorization, you can use the related Key Management Service (KMS) features. Format: `acs:ram::$accountID:role/$roleName`.
   * 
   * > * `$accountID`: the Alibaba Cloud account ID. You can logon to the Alibaba Cloud Management Console, move the mouse over the profile picture in the upper-right corner, and click **Security Settings** to view the account ID.
   * > * `$roleName`: the name of the RAM role. Set the value to **AliyunRdsInstanceEncryptionDefaultRole**.
   * 
   * @example
   * acs:ram::123456789012****:role/AliyunRdsInstanceEncryptionDefaultRole
   */
  roleArn?: string;
  securityToken?: string;
  /**
   * @remarks
   * The TDE status. Valid value: **Enabled**.
   * > After TDE is enabled, it cannot be disabled. Evaluate the impact on your business before you enable TDE. For more information, see [Enable Transparent Data Encryption (TDE)](https://help.aliyun.com/document_detail/265913.html).
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

