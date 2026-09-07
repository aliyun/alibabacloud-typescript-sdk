// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAuditLogConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The status of SQL audit logging. Valid values:
   * - **on**: Enables SQL audit logging.
   * - **off**: Disables SQL audit logging.
   * 
   * > After SQL audit logging is disabled, all SQL audit logs are deleted. Query and export the SQL audit logs before disabling SQL audit logging. For more information, see [DescribeAuditLogRecords](https://help.aliyun.com/document_detail/612426.html). When SQL audit logging is enabled again, audit logs are displayed starting from the most recent time that audit logging was enabled.
   * 
   * This parameter is required.
   * 
   * @example
   * on
   */
  auditLogStatus?: string;
  /**
   * @remarks
   * <props="china">The ID of the Enterprise Edition, Basic Edition, or Data Lakehouse Edition cluster.
   * <props="intl">The ID of the Data Lakehouse Edition cluster.
   * > You can call [DescribeDBClusters](https://help.aliyun.com/document_detail/454250.html) to query the IDs of all clusters in a specified region.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-t4nj8619bz2w3****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The type of the compute engine. Valid values:
   * 
   * - XIHE (**default**): Xihe compute engine.
   * - SPARK: Spark compute engine.
   * 
   * @example
   * XIHE
   */
  engineType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID.
   * > You can call [DescribeRegions](https://help.aliyun.com/document_detail/454314.html) to query the region ID of a specified cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      auditLogStatus: 'AuditLogStatus',
      DBClusterId: 'DBClusterId',
      engineType: 'EngineType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditLogStatus: 'string',
      DBClusterId: 'string',
      engineType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

