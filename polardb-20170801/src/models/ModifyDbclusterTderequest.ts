// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBClusterTDERequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * Specifies whether to allow the TDE key of the cluster to be automatically rotated within the next maintenance window after a lapse of the rotation period when a change in the KMS key version is detected. This parameter is supported only for custom keys. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * >  This parameter is supported only for a PolarDB for PostgreSQL or PolarDB for PostgreSQL (Compatible with Oracle) cluster.
   * 
   * @example
   * false
   */
  enableAutomaticRotation?: string;
  /**
   * @remarks
   * Specifies whether to enable automatic encryption for new tables. Valid values:
   * 
   * *   **ON**
   * *   **OFF**
   * 
   * >  This parameter takes effect only for a PolarDB for MySQL cluster.
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
   * The Alibaba Cloud Resource Name (ARN) of the RAM role. A RAM role is a virtual identity that you can create within your Alibaba Cloud account. For more information, see [RAM role overview](https://help.aliyun.com/document_detail/93689.html).
   * 
   * @example
   * acs:ram::1406926*****:role/aliyunrdsinstanceencryptiondefaultrole
   */
  roleArn?: string;
  /**
   * @remarks
   * Modifies the TDE status. Set the value to **Enable**.
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

