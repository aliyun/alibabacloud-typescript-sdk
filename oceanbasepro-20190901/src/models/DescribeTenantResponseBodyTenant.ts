// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeTenantResponseBodyTenantReadOnlyResource } from "./DescribeTenantResponseBodyTenantReadOnlyResource";
import { DescribeTenantResponseBodyTenantTenantConnections } from "./DescribeTenantResponseBodyTenantTenantConnections";
import { DescribeTenantResponseBodyTenantTenantResource } from "./DescribeTenantResponseBodyTenantTenantResource";
import { DescribeTenantResponseBodyTenantTenantZones } from "./DescribeTenantResponseBodyTenantTenantZones";


export class DescribeTenantResponseBodyTenant extends $dara.Model {
  /**
   * @remarks
   * The list of zones.
   */
  availableZones?: string[];
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
   * The enabling status of the clog service.  
   * - CLOSED: The clog service is disabled.  
   * - ONLINE: The clog service is running.
   * 
   * @example
   * CLOSED
   */
  clogServiceStatus?: string;
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
   * The time when the tenant was created.
   * 
   * @example
   * 2023-04-21 11:15:47.0
   */
  createTime?: string;
  /**
   * @remarks
   * The major compaction time of the tenant. This parameter is supported only in OceanBase Database V4.0.0 and later.
   * 
   * @example
   * 02:36Z
   */
  dataMergeTime?: string;
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
   * The deployment type of the cluster. Valid values:  
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
   * paycore database
   */
  description?: string;
  /**
   * @remarks
   * The type of the disk.
   * 
   * @example
   * cloud_essd_pl1
   */
  diskType?: string;
  /**
   * @remarks
   * Indicates whether the binlog service is available for application.
   * 
   * @example
   * true
   */
  enableBinlogService?: boolean;
  /**
   * @remarks
   * Indicates whether the clog service is available. To enable the clog service, submit a ticket.
   * 
   * @example
   * false
   */
  enableClogService?: boolean;
  /**
   * @remarks
   * Indicates whether the Internet address can be enabled for the tenant.
   * 
   * @example
   * true
   */
  enableInternetAddressService?: boolean;
  /**
   * @remarks
   * Indicates whether parallel query can be enabled.
   * 
   * @example
   * true
   */
  enableParallelQuery?: boolean;
  /**
   * @remarks
   * Indicates whether read-only replicas are supported.
   * 
   * @example
   * true
   */
  enableReadOnlyReplica?: boolean;
  /**
   * @remarks
   * Indicates whether to enable read/write splitting endpoint.
   * 
   * @example
   * false
   */
  enableReadWriteSplit?: boolean;
  /**
   * @remarks
   * The type of the instance.
   * 
   * @example
   * KAFKA_PUBLIC
   */
  instanceType?: string;
  /**
   * @remarks
   * Indicates whether the table name is case-sensitive. Valid values: 
   * * **1**: The table name is case-insensitive. 
   * * **0**: The table name is case-sensitive.
   * 
   * @example
   * 1
   */
  lowerCaseTableNames?: number;
  /**
   * @remarks
   * The zone where the primary node is located.
   * 
   * @example
   * cn-hangzhou-h
   */
  masterIntranetAddressZone?: string;
  /**
   * @remarks
   * The maximum value of DOP.
   * 
   * @example
   * 32
   */
  maxParallelQueryDegree?: number;
  /**
   * @remarks
   * The ODP version.
   * 
   * @example
   * 4.3.1-xxxxxxxxx
   */
  odpVersion?: string;
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
   * The type of the payment.
   * 
   * @example
   * POSTPAY
   */
  payType?: string;
  /**
   * @remarks
   * The primary zone of the tenant.
   * 
   * @example
   * cn-hangzhou-h
   */
  primaryZone?: string;
  /**
   * @remarks
   * The deployment type of the primary zone.
   * 
   * @example
   * RANDOM
   */
  primaryZoneDeployType?: string;
  /**
   * @remarks
   * The information about read-only resources.
   */
  readOnlyResource?: DescribeTenantResponseBodyTenantReadOnlyResource;
  /**
   * @remarks
   * The status of the recycle bin in the tenant. Valid values: 
   * * ON: The recycly bin is enabled. 
   * * OFF: The recycle bin is disabled.
   * 
   * @example
   * ON
   */
  recycleBinStatus?: string;
  /**
   * @remarks
   * The series of the instance.
   * 
   * @example
   * normal
   */
  series?: string;
  /**
   * @remarks
   * The status of the tenant.
   * 
   * - ONLINE: The tenant is running.
   * 
   * - PENDING_CREATE: The tenant is being created.
   * 
   * - WAITING_ALLOCATE_MASTER_ADDRESS: The standby cluster is waiting for the primary address to be created.
   * 
   * - ALLOCATING_MASTER_ADDRESS: The primary address is being created.
   * 
   * - DELETING_MASTER_ADDRESS: The primary address is being deleted.
   * 
   * - ALLOCATING_INTERNET_ADDRESS: The Internet address is being created.
   * 
   * - PENDING_OFFLINE_INTERNET_ADDRESS: The Internet address is being deleted.
   * 
   * - ALLOCATING_READONLY_ADDRESS: The read-only address is being created.
   * 
   * - DELETING_READONLY_ADDRESS: The read-only address is being deleted.
   * 
   * - ALLOCATING_READWRITE_ADDRESS: The read/write splitting address is being created.
   * 
   * - DELETING_READWRITE_ADDRESS: The read/write splitting address is being deleted.
   * 
   * - ALLOCATING_CLOGSERVICE_ADDRESS: The clog address is being created.
   * 
   * - DELETING_CLOGSERVICE_ADDRESS: The clog address is being deleted.
   * 
   * - MODIFYING_ADDRESS: The domain name of the address is being modified.
   * 
   * - MODIFYING_PRIMARY_ZONE: The primary zone is being switched.
   * 
   * - MODIFYING_READONLY_ADDRESS: The read-only address is being modified.
   * 
   * - MODIFYING_READWRITE_ADDRESS: The read/write splitting address is being modified.
   * 
   * - SPEC_MODIFYING: The specifications of the tenant are being modified.
   * 
   * - WHITE_LIST_MODIFYING: The allowlist is being modified.
   * 
   * - CREATING_BINLOG: Binlogs are being created.
   * 
   * @example
   * ONLINE
   */
  status?: string;
  /**
   * @remarks
   * The connection information of the tenant.
   */
  tenantConnections?: DescribeTenantResponseBodyTenantTenantConnections[];
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * @example
   * t4louaeei****
   */
  tenantId?: string;
  /**
   * @remarks
   * The maximum number of connections allowed in the tenant.
   * 
   * @example
   * 1600
   */
  tenantMaxConnections?: string;
  /**
   * @remarks
   * The mode of the tenant.
   * Valid values:
   * - Oracle   
   * - MySQL
   * 
   * @example
   * MySQL
   */
  tenantMode?: string;
  /**
   * @remarks
   * The name of the tenant.
   * 
   * @example
   * forMySQLTenant
   */
  tenantName?: string;
  /**
   * @remarks
   * The resource information of the tenant.
   */
  tenantResource?: DescribeTenantResponseBodyTenantTenantResource;
  /**
   * @remarks
   * The information about zones in the tenant.
   */
  tenantZones?: DescribeTenantResponseBodyTenantTenantZones[];
  /**
   * @remarks
   * The time zone.
   * 
   * @example
   * Asia/Shanghai
   */
  timeZone?: string;
  /**
   * @remarks
   * The version information.
   * 
   * @example
   * 4.2.1
   */
  version?: string;
  /**
   * @remarks
   * The Virtual Private Cloud (VPC) ID of the tenant. If no suitable VPC is available, create a VPC as prompted. For more information, see "What is a VPC".
   * 
   * @example
   * vpc-bp1d2q3mhg9i23ofi****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      availableZones: 'AvailableZones',
      charset: 'Charset',
      clogServiceStatus: 'ClogServiceStatus',
      collation: 'Collation',
      createTime: 'CreateTime',
      dataMergeTime: 'DataMergeTime',
      deployMode: 'DeployMode',
      deployType: 'DeployType',
      description: 'Description',
      diskType: 'DiskType',
      enableBinlogService: 'EnableBinlogService',
      enableClogService: 'EnableClogService',
      enableInternetAddressService: 'EnableInternetAddressService',
      enableParallelQuery: 'EnableParallelQuery',
      enableReadOnlyReplica: 'EnableReadOnlyReplica',
      enableReadWriteSplit: 'EnableReadWriteSplit',
      instanceType: 'InstanceType',
      lowerCaseTableNames: 'LowerCaseTableNames',
      masterIntranetAddressZone: 'MasterIntranetAddressZone',
      maxParallelQueryDegree: 'MaxParallelQueryDegree',
      odpVersion: 'OdpVersion',
      parameterTemplate: 'ParameterTemplate',
      payType: 'PayType',
      primaryZone: 'PrimaryZone',
      primaryZoneDeployType: 'PrimaryZoneDeployType',
      readOnlyResource: 'ReadOnlyResource',
      recycleBinStatus: 'RecycleBinStatus',
      series: 'Series',
      status: 'Status',
      tenantConnections: 'TenantConnections',
      tenantId: 'TenantId',
      tenantMaxConnections: 'TenantMaxConnections',
      tenantMode: 'TenantMode',
      tenantName: 'TenantName',
      tenantResource: 'TenantResource',
      tenantZones: 'TenantZones',
      timeZone: 'TimeZone',
      version: 'Version',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableZones: { 'type': 'array', 'itemType': 'string' },
      charset: 'string',
      clogServiceStatus: 'string',
      collation: 'string',
      createTime: 'string',
      dataMergeTime: 'string',
      deployMode: 'string',
      deployType: 'string',
      description: 'string',
      diskType: 'string',
      enableBinlogService: 'boolean',
      enableClogService: 'boolean',
      enableInternetAddressService: 'boolean',
      enableParallelQuery: 'boolean',
      enableReadOnlyReplica: 'boolean',
      enableReadWriteSplit: 'boolean',
      instanceType: 'string',
      lowerCaseTableNames: 'number',
      masterIntranetAddressZone: 'string',
      maxParallelQueryDegree: 'number',
      odpVersion: 'string',
      parameterTemplate: 'string',
      payType: 'string',
      primaryZone: 'string',
      primaryZoneDeployType: 'string',
      readOnlyResource: DescribeTenantResponseBodyTenantReadOnlyResource,
      recycleBinStatus: 'string',
      series: 'string',
      status: 'string',
      tenantConnections: { 'type': 'array', 'itemType': DescribeTenantResponseBodyTenantTenantConnections },
      tenantId: 'string',
      tenantMaxConnections: 'string',
      tenantMode: 'string',
      tenantName: 'string',
      tenantResource: DescribeTenantResponseBodyTenantTenantResource,
      tenantZones: { 'type': 'array', 'itemType': DescribeTenantResponseBodyTenantTenantZones },
      timeZone: 'string',
      version: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.availableZones)) {
      $dara.Model.validateArray(this.availableZones);
    }
    if(this.readOnlyResource && typeof (this.readOnlyResource as any).validate === 'function') {
      (this.readOnlyResource as any).validate();
    }
    if(Array.isArray(this.tenantConnections)) {
      $dara.Model.validateArray(this.tenantConnections);
    }
    if(this.tenantResource && typeof (this.tenantResource as any).validate === 'function') {
      (this.tenantResource as any).validate();
    }
    if(Array.isArray(this.tenantZones)) {
      $dara.Model.validateArray(this.tenantZones);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

