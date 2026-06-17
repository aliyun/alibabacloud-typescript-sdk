// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBClusterTDERequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * Specifies whether to automatically rotate the TDE key of the instance during the next O\\&M window after a new version of the KMS key is available. This parameter is valid only for custom keys.
   * 
   * - **true**
   * 
   * - **false**
   * 
   * > This parameter is supported only when the database engine is compatible with PostgreSQL or Oracle.
   * 
   * @example
   * false
   */
  enableAutomaticRotation?: string;
  /**
   * @remarks
   * Specifies whether to automatically encrypt all new tables. Valid values:
   * 
   * - **ON**
   * 
   * - **OFF**
   * 
   * > This parameter is valid only when the database engine is compatible with MySQL.
   * 
   * @example
   * ON
   */
  encryptNewTables?: string;
  /**
   * @remarks
   * The ID of the custom key.
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
   * The Global Resource Descriptor of the role. You can use this parameter to specify a role. For more information, see [Overview of RAM roles](https://help.aliyun.com/document_detail/93689.html).
   * 
   * @example
   * acs:ram::1406926*****:role/aliyunrdsinstanceencryptiondefaultrole
   */
  roleArn?: string;
  /**
   * @remarks
   * The TDE status. Set the value to **Enable**.
   * 
   * This parameter is required.
   * 
   * @example
   * Enable
   */
  TDEStatus?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      enableAutomaticRotation: 'EnableAutomaticRotation',
      encryptNewTables: 'EncryptNewTables',
      encryptionKey: 'EncryptionKey',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      roleArn: 'RoleArn',
      TDEStatus: 'TDEStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      enableAutomaticRotation: 'string',
      encryptNewTables: 'string',
      encryptionKey: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      roleArn: 'string',
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

