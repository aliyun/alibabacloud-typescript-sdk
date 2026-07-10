// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDBInstanceRequestMultiZone extends $dara.Model {
  /**
   * @remarks
   * The vSwitch IDs.
   */
  vSwitchIds?: string[];
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      vSwitchIds: 'VSwitchIds',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.vSwitchIds)) {
      $dara.Model.validateArray(this.vSwitchIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBInstanceRequestTags extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * user_123
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * example string
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The backup set ID.
   * 
   * @example
   * 1
   */
  backupSetId?: string;
  /**
   * @remarks
   * The edition of the instance. Valid value:
   * 
   * - `enterprise`: Enterprise Edition
   * 
   * @example
   * enterprise
   */
  category?: string;
  /**
   * @remarks
   * A client-provided token to ensure request idempotence. It must be unique across requests, contain only ASCII characters, and not exceed 64 characters in length.
   * 
   * @example
   * AB
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the instance.
   * 
   * @example
   * Cluster test
   */
  DBInstanceDescription?: string;
  /**
   * @remarks
   * The time zone of the database, which must be an IANA time zone identifier.
   * 
   * @example
   * Asia/Shanghai
   */
  DBTimeZone?: string;
  /**
   * @remarks
   * The deployment mode of the instance.
   * 
   * @example
   * multi_az
   */
  deploySchema?: string;
  /**
   * @remarks
   * The engine type.
   * 
   * @example
   * clickhouse
   */
  engine?: string;
  /**
   * @remarks
   * The engine version.
   * 
   * @example
   * 23.8
   */
  engineVersion?: string;
  /**
   * @remarks
   * The multi-zone configuration.
   */
  multiZone?: CreateDBInstanceRequestMultiZone[];
  /**
   * @remarks
   * The number of nodes. Valid values: 2 to 16. This parameter is required when you configure an elastic scaling range by using the `NodeScaleMin` and `NodeScaleMax` parameters.
   * 
   * @example
   * 2
   */
  nodeCount?: number;
  /**
   * @remarks
   * The maximum number of nodes for serverless elastic scaling. Valid values: 4 to 32. The value must be greater than the `NodeScaleMin` parameter.
   * 
   * @example
   * 4
   */
  nodeScaleMax?: number;
  /**
   * @remarks
   * The minimum number of nodes for serverless elastic scaling. Valid values: 4 to 32.
   * 
   * @example
   * 32
   */
  nodeScaleMin?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs.
   * 
   * @example
   * rg-*****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * This parameter is deprecated. Use the `NodeCount`, `NodeScaleMin`, and `NodeScaleMax` parameters to configure elastic scaling.
   * 
   * @example
   * 32
   */
  scaleMax?: string;
  /**
   * @remarks
   * This parameter is deprecated. Use the `NodeCount`, `NodeScaleMin`, and `NodeScaleMax` parameters to configure elastic scaling.
   * 
   * @example
   * 8
   */
  scaleMin?: string;
  /**
   * @remarks
   * The ID of the source instance. This parameter is required when restoring from a backup.
   * 
   * @example
   * cc-2ze1*********
   */
  sourceDBInstanceId?: string;
  /**
   * @example
   * 100
   */
  storageQuota?: number;
  /**
   * @example
   * OSS
   */
  storageType?: string;
  /**
   * @remarks
   * The tags to add to the instance.
   */
  tags?: CreateDBInstanceRequestTags[];
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-uf6xmupdn7v6ui9f****
   */
  vpcId?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-uf632qye9oqt4x4sr****
   */
  vswitchId?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      backupSetId: 'BackupSetId',
      category: 'Category',
      clientToken: 'ClientToken',
      DBInstanceDescription: 'DBInstanceDescription',
      DBTimeZone: 'DBTimeZone',
      deploySchema: 'DeploySchema',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      multiZone: 'MultiZone',
      nodeCount: 'NodeCount',
      nodeScaleMax: 'NodeScaleMax',
      nodeScaleMin: 'NodeScaleMin',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      scaleMax: 'ScaleMax',
      scaleMin: 'ScaleMin',
      sourceDBInstanceId: 'SourceDBInstanceId',
      storageQuota: 'StorageQuota',
      storageType: 'StorageType',
      tags: 'Tags',
      vpcId: 'VpcId',
      vswitchId: 'VswitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupSetId: 'string',
      category: 'string',
      clientToken: 'string',
      DBInstanceDescription: 'string',
      DBTimeZone: 'string',
      deploySchema: 'string',
      engine: 'string',
      engineVersion: 'string',
      multiZone: { 'type': 'array', 'itemType': CreateDBInstanceRequestMultiZone },
      nodeCount: 'number',
      nodeScaleMax: 'number',
      nodeScaleMin: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      scaleMax: 'string',
      scaleMin: 'string',
      sourceDBInstanceId: 'string',
      storageQuota: 'number',
      storageType: 'string',
      tags: { 'type': 'array', 'itemType': CreateDBInstanceRequestTags },
      vpcId: 'string',
      vswitchId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.multiZone)) {
      $dara.Model.validateArray(this.multiZone);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

