// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateDBInstanceRequestMultiZone } from "./CreateDbinstanceRequestMultiZone";


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
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token. Make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * AB
   */
  clientToken?: string;
  /**
   * @remarks
   * The cluster description.
   * 
   * @example
   * Used for test
   */
  DBInstanceDescription?: string;
  /**
   * @remarks
   * The deployment status of the cluster.
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
   * The configurations of multi-zone deployment.
   */
  multiZone?: CreateDBInstanceRequestMultiZone[];
  /**
   * @remarks
   * The region ID
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * rg-*****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The maximum capacity for auto scaling.
   * 
   * @example
   * 32
   */
  scaleMax?: string;
  /**
   * @remarks
   * The minimum capacity for auto scaling.
   * 
   * @example
   * 8
   */
  scaleMin?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * cc-2ze1*********
   */
  sourceDBInstanceId?: string;
  /**
   * @remarks
   * The virtual private cloud (VPC) ID.
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
      clientToken: 'ClientToken',
      DBInstanceDescription: 'DBInstanceDescription',
      deploySchema: 'DeploySchema',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      multiZone: 'MultiZone',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      scaleMax: 'ScaleMax',
      scaleMin: 'ScaleMin',
      sourceDBInstanceId: 'SourceDBInstanceId',
      vpcId: 'VpcId',
      vswitchId: 'VswitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupSetId: 'string',
      clientToken: 'string',
      DBInstanceDescription: 'string',
      deploySchema: 'string',
      engine: 'string',
      engineVersion: 'string',
      multiZone: { 'type': 'array', 'itemType': CreateDBInstanceRequestMultiZone },
      regionId: 'string',
      resourceGroupId: 'string',
      scaleMax: 'string',
      scaleMin: 'string',
      sourceDBInstanceId: 'string',
      vpcId: 'string',
      vswitchId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.multiZone)) {
      $dara.Model.validateArray(this.multiZone);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

