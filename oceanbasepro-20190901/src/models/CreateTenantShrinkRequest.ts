// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTenantShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The character set.    
   * For more information, see [DescribeCharset](https://www.alibabacloud.com/help/en/apsaradb-for-oceanbase/latest/api-oceanbasepro-2019-09-01-describecharset).
   * 
   * This parameter is required.
   * 
   * @example
   * utf8mb4
   */
  charset?: string;
  /**
   * @remarks
   * The number of CPU cores of the tenant.   
   * 
   * > <br>The CPU specification of a single tenant cannot exceed that of the corresponding cluster. <br>For example, if the specification of the cluster is 14 CPU cores and 70 GB of memory, the CPU specification of the tenant cannot exceed 14 cores.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  cpu?: number;
  /**
   * @remarks
   * The initialization parameters.
   */
  createParamsShrink?: string;
  /**
   * @remarks
   * The description of the database.
   * 
   * @example
   * this is a test database
   */
  description?: string;
  /**
   * @remarks
   * The ID of the OceanBase cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * ob317v4uif****
   */
  instanceId?: string;
  /**
   * @remarks
   * The size of the log disk allocated to the tenant, in GB.
   * 
   * @example
   * 128
   */
  logDisk?: number;
  /**
   * @remarks
   * The memory size of the tenant, in GB.   
   * 
   * > <br>The memory size of a single tenant cannot exceed that of the corresponding cluster. <br>For example, if the specification of the cluster is 14 CPU cores and 70 GB of memory, the memory size of the tenant cannot exceed 70 GB.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  memory?: number;
  /**
   * @remarks
   * The primary zone of the tenant.    
   * It is one of the zones in which the cluster is deployed.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-h
   */
  primaryZone?: string;
  /**
   * @remarks
   * Specifies to create a read-only zone. Separate the names of multiple zones with commas (,).
   * >Notice: <br>At present, this parameter is unavailable.
   * 
   * @example
   * cn-shanghai-g-ro,cn-shanghai-h-ro
   */
  readOnlyZoneList?: string;
  /**
   * @remarks
   * The tenant mode.    
   * Valid values: Oracle and MySQL.   
   * For more information, see [DescribeInstanceTenantModes](https://www.alibabacloud.com/help/en/apsaradb-for-oceanbase/latest/api-oceanbasepro-2019-09-01-describeinstancetenantmodes).
   * 
   * This parameter is required.
   * 
   * @example
   * Oracle
   */
  tenantMode?: string;
  /**
   * @remarks
   * The name of the tenant.    
   * It must start with a letter or an underscore (_), and contain 2 to 20 characters, which can be uppercase letters, lowercase letters, digits, and underscores (_).  It cannot be set to sys.
   * 
   * This parameter is required.
   * 
   * @example
   * pay_online
   */
  tenantName?: string;
  /**
   * @remarks
   * The time zone of the tenant. For more information, see [DescribeTimeZones](https://www.alibabacloud.com/help/en/apsaradb-for-oceanbase/latest/api-oceanbasepro-2019-09-01-describetimezones).
   * 
   * This parameter is required.
   * 
   * @example
   * Asia/Shanghai
   */
  timeZone?: string;
  /**
   * @remarks
   * The number of resource distribution nodes in the tenant.    
   * The number is determined by the deployment mode of the cluster. If the cluster is deployed in 2-2-2 mode, the maximum number of resource distribution nodes is 2.
   * 
   * @example
   * 2
   */
  unitNum?: number;
  /**
   * @remarks
   * The ID of the vSwitch.    
   * If no suitable vSwitch is available, create a vSwitch as prompted.   
   * For more information, see Use a vSwitch.
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-bp11k1aypnzu1l3whi****
   */
  userVSwitchId?: string;
  /**
   * @remarks
   * The ID of the VPC.   
   *  If no suitable VPC is available, create a VPC as prompted.   
   * For more information, see "What is a VPC".
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-bp1d2q3mhg9i23ofi****
   */
  userVpcId?: string;
  /**
   * @remarks
   * The ID of the VPC owner.
   * 
   * @example
   * vpc-********
   */
  userVpcOwnerId?: string;
  static names(): { [key: string]: string } {
    return {
      charset: 'Charset',
      cpu: 'Cpu',
      createParamsShrink: 'CreateParams',
      description: 'Description',
      instanceId: 'InstanceId',
      logDisk: 'LogDisk',
      memory: 'Memory',
      primaryZone: 'PrimaryZone',
      readOnlyZoneList: 'ReadOnlyZoneList',
      tenantMode: 'TenantMode',
      tenantName: 'TenantName',
      timeZone: 'TimeZone',
      unitNum: 'UnitNum',
      userVSwitchId: 'UserVSwitchId',
      userVpcId: 'UserVpcId',
      userVpcOwnerId: 'UserVpcOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      charset: 'string',
      cpu: 'number',
      createParamsShrink: 'string',
      description: 'string',
      instanceId: 'string',
      logDisk: 'number',
      memory: 'number',
      primaryZone: 'string',
      readOnlyZoneList: 'string',
      tenantMode: 'string',
      tenantName: 'string',
      timeZone: 'string',
      unitNum: 'number',
      userVSwitchId: 'string',
      userVpcId: 'string',
      userVpcOwnerId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

