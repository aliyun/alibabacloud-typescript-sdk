// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTenantsResponseBodyTenants extends $dara.Model {
  /**
   * @remarks
   * The character set.
   * 
   * @example
   * utf8mb4
   */
  charset?: string;
  /**
   * @remarks
   * The collation.
   * 
   * @example
   * utf8mb4_general_ci
   */
  collation?: string;
  /**
   * @remarks
   * The total number of CPU cores of the tenant.
   * 
   * @example
   * 10
   */
  cpu?: number;
  /**
   * @remarks
   * The time when the tenant was created.
   * 
   * @example
   * 2021-09-17 15:52:17.0
   */
  createTime?: string;
  /**
   * @remarks
   * The data replica distribution mode of the tenant.   
   * 
   * - For the high availability version, N-N-N indicates the three-zone mode, and N-N indicates the dual-zone or single-zone mode.
   * - For the basic version, N indicates the single-zone mode. 
   * 
   * > <br>N represents the number of nodes in a single zone.
   * 
   * @example
   * 1-1-1
   */
  deployMode?: string;
  /**
   * @remarks
   * The deployment type of the tenant. <br>
   * - multiple: multi-IDC deployment
   * - single: single-IDC deployment
   * - dual: dual-IDC deployment
   * 
   * @example
   * multiple
   */
  deployType?: string;
  /**
   * @remarks
   * The description of the tenant.
   * 
   * @example
   * PayCore business database
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether read-only replicas are supported.
   * 
   * @example
   * true
   */
  enableReadOnlyReplica?: boolean;
  /**
   * @example
   * 10000
   */
  iops?: number;
  /**
   * @remarks
   * The total memory size of the tenant, in GB.
   * 
   * @example
   * 20
   */
  mem?: number;
  /**
   * @remarks
   * The parameter template.
   * 
   * @example
   * express_oltp
   */
  parameterTemplate?: string;
  /**
   * @remarks
   * The primary zone of the tenant.
   * 
   * @example
   * cn-hangzhou-i
   */
  primaryZone?: string;
  /**
   * @remarks
   * The status of the tenant.  <br>
   * - PENDING_CREATE: The tenant is being created.
   * - RESTORE: The tenant is being recovered.
   * - ONLINE: The tenant is running.
   * - SPEC_MODIFYING: The specification of the tenant is being modified.
   * ALLOCATING_INTERNET_ADDRESS: An Internet address is being allocated.
   * PENDING_OFFLINE_INTERNET_ADDRESS: The Internet address is being disabled.
   * - PRIMARY_ZONE_MODIFYING: The tenant is switching to a new primary zone.
   * - PARAMETER_MODIFYING: Parameters are being modified.
   * - WHITE_LIST_MODIFYING: The whitelist is being modified.
   * 
   * @example
   * ONLINE
   */
  status?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * @example
   * t33h8y08k****
   */
  tenantId?: string;
  /**
   * @remarks
   * The tenant mode.   
   * Valid values:   
   * Oracle
   * MySQL
   * 
   * @example
   * Oracle
   */
  tenantMode?: string;
  /**
   * @remarks
   * The name of the tenant.
   * 
   * @example
   * pay_online
   */
  tenantName?: string;
  /**
   * @remarks
   * The number of CPU cores in each resource unit of the tenant.
   * 
   * @example
   * 5
   */
  unitCpu?: number;
  /**
   * @remarks
   * The memory size of each resource unit of the tenant, in GB.
   * 
   * @example
   * 10
   */
  unitMem?: number;
  /**
   * @remarks
   * The number of resource units in the tenant.
   * 
   * @example
   * 2
   */
  unitNum?: number;
  /**
   * @remarks
   * The number of used disks of the tenant.
   * 
   * @example
   * 10
   */
  usedDiskSize?: number;
  /**
   * @remarks
   * The ID of the VPC.   <br>If no suitable VPC is available, create a VPC as prompted. For more information, see "What is a VPC".
   * 
   * @example
   * vpc-bp1d2q3mhg9i23ofi****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      charset: 'Charset',
      collation: 'Collation',
      cpu: 'Cpu',
      createTime: 'CreateTime',
      deployMode: 'DeployMode',
      deployType: 'DeployType',
      description: 'Description',
      enableReadOnlyReplica: 'EnableReadOnlyReplica',
      iops: 'Iops',
      mem: 'Mem',
      parameterTemplate: 'ParameterTemplate',
      primaryZone: 'PrimaryZone',
      status: 'Status',
      tenantId: 'TenantId',
      tenantMode: 'TenantMode',
      tenantName: 'TenantName',
      unitCpu: 'UnitCpu',
      unitMem: 'UnitMem',
      unitNum: 'UnitNum',
      usedDiskSize: 'UsedDiskSize',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      charset: 'string',
      collation: 'string',
      cpu: 'number',
      createTime: 'string',
      deployMode: 'string',
      deployType: 'string',
      description: 'string',
      enableReadOnlyReplica: 'boolean',
      iops: 'number',
      mem: 'number',
      parameterTemplate: 'string',
      primaryZone: 'string',
      status: 'string',
      tenantId: 'string',
      tenantMode: 'string',
      tenantName: 'string',
      unitCpu: 'number',
      unitMem: 'number',
      unitNum: 'number',
      usedDiskSize: 'number',
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

