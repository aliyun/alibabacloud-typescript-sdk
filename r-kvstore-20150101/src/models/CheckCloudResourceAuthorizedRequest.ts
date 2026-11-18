// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckCloudResourceAuthorizedRequest extends $dara.Model {
  /**
   * @remarks
   * Instance ID of the instance. You can call the [DescribeInstances](https://help.aliyun.com/document_detail/473778.html) operation to query instance ID.
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
   * Specifies the global resource descriptor ARN (Alibaba Cloud Resource Name) of the role to be granted authorization. After the role authorization is completed, you can use the related Key Management Service (KMS). Format: `acs:ram::$accountID:role/$roleName`.
   * 
   * > * `$accountID`: the Alibaba Cloud account ID. You can logon to the Alibaba Cloud Management Console, move the mouse over the profile picture in the upper-right corner, and click **Security Settings** to view the ID.
   * > * `$roleName`: the name of the RAM role. Set the value to **AliyunRdsInstanceEncryptionDefaultRole**.
   * 
   * @example
   * acs:ram::123456789012****:role/AliyunRdsInstanceEncryptionDefaultRole
   */
  roleArn?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      roleArn: 'RoleArn',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      roleArn: 'string',
      securityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

