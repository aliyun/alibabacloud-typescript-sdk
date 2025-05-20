// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceInspectionsResponseBodyDataListInstance extends $dara.Model {
  /**
   * @remarks
   * The account ID. You can view the ID of the logon account by moving the pointer over the profile in the Alibaba Cloud management console.
   * 
   * @example
   * 108398049688****
   */
  accountId?: string;
  /**
   * @remarks
   * The connection mode of the instance. Valid values:
   * 
   * *   **standard**: standard mode.
   * *   **safe**: database proxy mode.
   * 
   * @example
   * standard
   */
  category?: string;
  /**
   * @remarks
   * The CPU specification of the instance. For example, if a value of 8 is returned, the instance has eight CPU cores.
   * 
   * @example
   * 8
   */
  cpu?: string;
  /**
   * @remarks
   * The database engine. Valid values:
   * 
   * *   **MySQL**
   * *   **Redis**
   * *   **PolarDBMySQL**
   * 
   * @example
   * MySQL
   */
  engine?: string;
  /**
   * @remarks
   * The version number of the database engine.
   * 
   * @example
   * 8.0
   */
  engineVersion?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * test-01
   */
  instanceAlias?: string;
  /**
   * @remarks
   * The type of the instance on which the database is deployed. Valid values:
   * 
   * *   **RDS**: an Alibaba Cloud database instance.
   * *   **ECS**: an Elastic Compute Service (ECS) instance on which a self-managed database is deployed.
   * *   **IDC**: a self-managed database instance that is not deployed on Alibaba Cloud.
   * 
   * >  The value IDC indicates that the instance is deployed in a data center.
   * 
   * @example
   * RDS
   */
  instanceArea?: string;
  /**
   * @remarks
   * The instance type.
   * 
   * @example
   * rds.mysql.s2.xlarge
   */
  instanceClass?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rm-bp10usoc1erj7****
   */
  instanceId?: string;
  /**
   * @remarks
   * The memory capacity of the database that is deployed on the instance. Unit: MB.
   * 
   * @example
   * 32768
   */
  memory?: number;
  /**
   * @remarks
   * The network type of the instance.
   * 
   * @example
   * VPC
   */
  networkType?: string;
  /**
   * @remarks
   * The ID of the node on the instance.
   * 
   * @example
   * rm-bp10usoc1erj7****
   */
  nodeId?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The storage space of the instance. Unit: GB.
   * 
   * @example
   * 150
   */
  storage?: number;
  /**
   * @remarks
   * The unique identifier of the instance.
   * 
   * @example
   * hdm_3063db6792965c080a4bcb6e6304****
   */
  uuid?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) in which the instance is deployed.
   * 
   * @example
   * vpc-bp1knt7m55z9exoo7****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      category: 'Category',
      cpu: 'Cpu',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      instanceAlias: 'InstanceAlias',
      instanceArea: 'InstanceArea',
      instanceClass: 'InstanceClass',
      instanceId: 'InstanceId',
      memory: 'Memory',
      networkType: 'NetworkType',
      nodeId: 'NodeId',
      region: 'Region',
      storage: 'Storage',
      uuid: 'Uuid',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      category: 'string',
      cpu: 'string',
      engine: 'string',
      engineVersion: 'string',
      instanceAlias: 'string',
      instanceArea: 'string',
      instanceClass: 'string',
      instanceId: 'string',
      memory: 'number',
      networkType: 'string',
      nodeId: 'string',
      region: 'string',
      storage: 'number',
      uuid: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

