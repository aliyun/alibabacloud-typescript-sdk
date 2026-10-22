// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDBInstanceShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to add the VPC CIDR block to the whitelist. Valid values:
   * - 1: yes
   * - 0: no
   * 
   * @example
   * 1
   */
  addVPCIPs?: string;
  /**
   * @remarks
   * The reserved cache size.
   * 
   * This parameter is required.
   * 
   * @example
   * 200
   */
  cacheSize?: number;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * - **Postpaid**: pay-as-you-go
   * 
   * - **Prepaid**: subscription
   * 
   * This parameter is required.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request and prevent duplicate submissions. You can generate the value of this parameter on the client side. The value must be unique across different requests and can be up to 64 ASCII characters in length. The value cannot contain non-ASCII characters.
   * 
   * @example
   * AB
   */
  clientToken?: string;
  /**
   * @remarks
   * The number of cluster nodes. This parameter takes effect only in Serverless mode.
   * 
   * @example
   * 1
   */
  clusterNodeCount?: number;
  /**
   * @remarks
   * The cluster node type. This parameter takes effect only in Serverless mode.
   * 
   * @example
   * base
   */
  clusterNodeType?: string;
  /**
   * @remarks
   * The configuration template applied to the instance.
   * 
   * @example
   * normal
   */
  configPatternType?: string;
  /**
   * @remarks
   * The database endpoint.
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
   * selectdb.g.2xlarge
   */
  DBInstanceClass?: string;
  /**
   * @remarks
   * The description of the instance.
   * 
   * @example
   * New instance test
   */
  DBInstanceDescription?: string;
  /**
   * @remarks
   * The deployment mode of the instance.
   * 
   * @example
   * single_az
   */
  deployScheme?: string;
  /**
   * @remarks
   * The database engine type. Default value: **selectdb**.
   * 
   * @example
   * selectdb
   */
  engine?: string;
  /**
   * @remarks
   * The database engine version. Default value: **4.1**. Valid values:
   * 
   * - 4.0
   * 
   * - 4.1
   * 
   * This parameter is required.
   * 
   * @example
   * 4.1
   */
  engineVersion?: string;
  /**
   * @remarks
   * The node specifications of a single node in the frontend (FE) cluster. This parameter takes effect only when you create a pay-as-you-go or subscription instance. Default value: selectdb_fe.xlarge16.
   * 
   * @example
   * selectdb_fe.xlarge16
   */
  FEClassCode?: string;
  /**
   * @remarks
   * The number of nodes in the FE cluster. This parameter takes effect only when you create a pay-as-you-go or subscription instance. Default value: 3. Valid values: 1 to 11. The value must be an odd number.
   * 
   * @example
   * 3
   */
  FENodeCount?: string;
  /**
   * @remarks
   * The multi-zone configuration.
   * 
   * > 
   * > - This parameter takes effect and is required when DeployScheme is set to multi_az.
   * 
   * **if can be null:**
   * false
   */
  multiZoneShrink?: string;
  /**
   * @remarks
   * Specifies the billing cycle of the subscription cluster. Valid values:
   * 
   * - **Year**: yearly.
   * - **Month**: monthly.
   * > This parameter takes effect and is required only when **ChargeType** is set to **Prepaid**.
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
   * The ID of the resource group.
   * 
   * @example
   * rg-aekzt2zaluvuvqa_fake
   */
  resourceGroupId?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The maximum value of the automatic scaling range for the RCU (RDS Capacity Unit) of the instance.
   * 
   * @example
   * 32
   */
  scaleMax?: number;
  /**
   * @remarks
   * The minimum value of the automatic scaling range for the RCU (RDS Capacity Unit) of the instance.
   * 
   * @example
   * 4
   */
  scaleMin?: number;
  /**
   * @remarks
   * The IP address whitelist of the instance. Separate multiple IP addresses with commas (,).
   * 
   * @example
   * 192.168.1.1
   */
  securityIPList?: string;
  /**
   * @remarks
   * The tag list information of the instance.
   */
  tagShrink?: string;
  /**
   * @remarks
   * Specifies whether to enable TDE on the instance.
   * 
   * @example
   * True
   */
  tdeEnabled?: string;
  /**
   * @remarks
   * The mode for enabling Transparent Data Encryption (TDE) on the instance.
   * 
   * @example
   * MANAGED
   */
  tdeMode?: string;
  /**
   * @remarks
   * The subscription duration of the instance. The unit is specified by the Period parameter. Year indicates years, and Month indicates months. Valid values:
   * - If Period is set to Year, valid values are 1, 2, 3, 4, and 5.
   * - If Period is set to Month, valid values are 1 to 12.
   * > This parameter takes effect and is required only when **ChargeType** is set to **Prepaid**.
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
   * The VPC ID.
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
      clusterNodeCount: 'ClusterNodeCount',
      clusterNodeType: 'ClusterNodeType',
      configPatternType: 'ConfigPatternType',
      connectionString: 'ConnectionString',
      DBInstanceClass: 'DBInstanceClass',
      DBInstanceDescription: 'DBInstanceDescription',
      deployScheme: 'DeployScheme',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      FEClassCode: 'FEClassCode',
      FENodeCount: 'FENodeCount',
      multiZoneShrink: 'MultiZone',
      period: 'Period',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerId: 'ResourceOwnerId',
      scaleMax: 'ScaleMax',
      scaleMin: 'ScaleMin',
      securityIPList: 'SecurityIPList',
      tagShrink: 'Tag',
      tdeEnabled: 'TdeEnabled',
      tdeMode: 'TdeMode',
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
      clusterNodeCount: 'number',
      clusterNodeType: 'string',
      configPatternType: 'string',
      connectionString: 'string',
      DBInstanceClass: 'string',
      DBInstanceDescription: 'string',
      deployScheme: 'string',
      engine: 'string',
      engineVersion: 'string',
      FEClassCode: 'string',
      FENodeCount: 'string',
      multiZoneShrink: 'string',
      period: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerId: 'number',
      scaleMax: 'number',
      scaleMin: 'number',
      securityIPList: 'string',
      tagShrink: 'string',
      tdeEnabled: 'string',
      tdeMode: 'string',
      usedTime: 'number',
      vSwitchId: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

