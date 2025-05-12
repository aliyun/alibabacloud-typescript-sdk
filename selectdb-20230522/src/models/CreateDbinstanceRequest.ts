// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateDBInstanceRequestMultiZone } from "./CreateDbinstanceRequestMultiZone";
import { CreateDBInstanceRequestTag } from "./CreateDbinstanceRequestTag";


export class CreateDBInstanceRequest extends $dara.Model {
  addVPCIPs?: string;
  /**
   * @remarks
   * The reserved cache size.
   * 
   * This parameter is required.
   * 
   * @example
   * 200GB
   */
  cacheSize?: number;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * *   **Postpaid**: pay-as-you-go
   * *   **Prepaid**: subscription
   * 
   * This parameter is required.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * AB
   */
  clientToken?: string;
  /**
   * @remarks
   * The instance endpoint.
   * 
   * @example
   * selectdb-cn-7213c8y****-public.selectdbfe.pre.rds.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @remarks
   * The instance type. You can call the [DescribeAllDBInstanceClass](https://help.aliyun.com/document_detail/2853363.html) operation to query instance types.
   * 
   * This parameter is required.
   * 
   * @example
   * selectdb.xlarge
   */
  DBInstanceClass?: string;
  /**
   * @remarks
   * The instance description.
   * 
   * @example
   * The instance is created for testing.
   */
  DBInstanceDescription?: string;
  /**
   * @remarks
   * The deployment method of the instance.
   * 
   * Valid values:
   * 
   * *   multi_az
   * *   single_az
   * 
   * @example
   * single_az
   */
  deployScheme?: string;
  /**
   * @remarks
   * The database engine of the instance. Default value: **selectdb**.
   * 
   * @example
   * selectdb
   */
  engine?: string;
  /**
   * @remarks
   * The database engine version of the instance. Default value: **3.0**.
   * 
   * This parameter is required.
   * 
   * @example
   * 2.4
   */
  engineVersion?: string;
  /**
   * @remarks
   * The configurations of multi-zone deployment.
   * 
   * > 
   * 
   * *   This parameter takes effect and is required only when DeployScheme is set to multi_az.
   * 
   * **if can be null:**
   * false
   */
  multiZone?: CreateDBInstanceRequestMultiZone[];
  /**
   * @remarks
   * The unit of the subscription duration of the cluster. Valid values:
   * 
   * *   **Year**: subscription on a yearly basis.
   * *   **Month**: subscription on a monthly basis.
   * 
   * >  This parameter takes effect and is required only when **ChargeType** is set to **Prepaid**.
   * 
   * @example
   * Month
   */
  period?: string;
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
   * The resource group ID.
   * 
   * @example
   * rg-aekzt2zaluvuvqa_fake
   */
  resourceGroupId?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The IP addresses in the whitelist of the instance. Separate multiple IP addresses with commas (,).
   * 
   * @example
   * 192.168.1.1
   */
  securityIPList?: string;
  /**
   * @remarks
   * The instance tags.
   */
  tag?: CreateDBInstanceRequestTag[];
  /**
   * @remarks
   * The subscription duration of the instance. Valid values:
   * 
   * *   If Period is set to Year, valid values of UsedTime are 1, 2, 3, 4, and 5.
   * *   If Period is set to Month, valid values of UsedTime are 1 to 12.
   * 
   * >  This parameter takes effect and is required only when **ChargeType** is set to **Prepaid**.
   * 
   * @example
   * 1
   */
  usedTime?: number;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-bp1gzt31twhlo0sa5****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The virtual private cloud (VPC) ID.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-bp175iuvg8nxqraf2****
   */
  vpcId?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-e
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      addVPCIPs: 'AddVPCIPs',
      cacheSize: 'CacheSize',
      chargeType: 'ChargeType',
      clientToken: 'ClientToken',
      connectionString: 'ConnectionString',
      DBInstanceClass: 'DBInstanceClass',
      DBInstanceDescription: 'DBInstanceDescription',
      deployScheme: 'DeployScheme',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      multiZone: 'MultiZone',
      period: 'Period',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerId: 'ResourceOwnerId',
      securityIPList: 'SecurityIPList',
      tag: 'Tag',
      usedTime: 'UsedTime',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addVPCIPs: 'string',
      cacheSize: 'number',
      chargeType: 'string',
      clientToken: 'string',
      connectionString: 'string',
      DBInstanceClass: 'string',
      DBInstanceDescription: 'string',
      deployScheme: 'string',
      engine: 'string',
      engineVersion: 'string',
      multiZone: { 'type': 'array', 'itemType': CreateDBInstanceRequestMultiZone },
      period: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerId: 'number',
      securityIPList: 'string',
      tag: { 'type': 'array', 'itemType': CreateDBInstanceRequestTag },
      usedTime: 'number',
      vSwitchId: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.multiZone)) {
      $dara.Model.validateArray(this.multiZone);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

