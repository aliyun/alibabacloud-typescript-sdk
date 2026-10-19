// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceTDERequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the custom key. You can call [DescribeEncryptionKeyList](https://help.aliyun.com/document_detail/473860.html) to query the key ID.
   * 
   * > * If you do not specify this parameter, [Key Management Service](https://help.aliyun.com/document_detail/28935.html) automatically generates a key.
   * > * To create a custom key, call the [CreateKey](https://help.aliyun.com/document_detail/28947.html) operation of Key Management Service.
   * 
   * @example
   * ad463061-992d-4195-8a94-ed63********
   */
  encryptionKey?: string;
  /**
   * @remarks
   * The encryption algorithm. Default value: AES-CTR-256.
   * > This parameter is available only when **TDEStatus** is set to **Enabled**.
   * 
   * @example
   * AES-CTR-256
   */
  encryptionName?: string;
  /**
   * @remarks
   * The instance ID. You can call [DescribeInstances](https://help.aliyun.com/document_detail/473778.html) to query the instance ID.
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
   * The global resource descriptor Alibaba Cloud Resource Name (ARN) of the role to be authorized. After the authorization is complete, the related Key Management Service can be used. Format: `acs:ram::$accountID:role/$roleName`.
   * 
   * > * `$accountID`: the Alibaba Cloud account ID. Log on to the Alibaba Cloud Management Console, move the mouse over the profile picture in the upper-right corner, and then click **Security Settings** to view the account ID.
   * > * `$roleName`: the RAM role name. Set this value to **AliyunRdsInstanceEncryptionDefaultRole**.
   * 
   * @example
   * acs:ram::123456789012****:role/AliyunRdsInstanceEncryptionDefaultRole
   */
  roleArn?: string;
  securityToken?: string;
  /**
   * @remarks
   * Enables the transparent data encryption feature. Set the value to **Enabled**.
   * > The TDE feature cannot be disabled after it is enabled. Before enabling TDE, evaluate whether it affects your business. For more information, see [Enable transparent data encryption TDE](https://help.aliyun.com/document_detail/265913.html).
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

