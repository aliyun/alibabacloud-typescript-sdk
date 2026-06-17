// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyEncryptionDBSecretRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-****************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The status of the key. Valid values:
   * 
   * - **Enabled**
   * 
   * - **Disabled**
   * 
   * @example
   * Enabled
   */
  encryptionDBStatus?: string;
  /**
   * @remarks
   * The key ID.
   * 
   * @example
   * 749c1df7-****-****-****-*********
   */
  encryptionKey?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The Global Resource Descriptor (GRD) of the role. For more information, see [Overview of RAM roles](https://help.aliyun.com/document_detail/93689.html).
   * 
   * @example
   * acs:ram::1406926*****:role/aliyunrdsinstanceencryptiondefaultrole
   */
  roleArn?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      encryptionDBStatus: 'EncryptionDBStatus',
      encryptionKey: 'EncryptionKey',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      roleArn: 'RoleArn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      encryptionDBStatus: 'string',
      encryptionKey: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      roleArn: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

