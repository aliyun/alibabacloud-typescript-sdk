// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstanceResponseBodyInstanceDataDiskAutoScaleConfig } from "./DescribeInstanceResponseBodyInstanceDataDiskAutoScaleConfig";
import { DescribeInstanceResponseBodyInstanceReadOnlyResource } from "./DescribeInstanceResponseBodyInstanceReadOnlyResource";
import { DescribeInstanceResponseBodyInstanceResource } from "./DescribeInstanceResponseBodyInstanceResource";
import { DescribeInstanceResponseBodyInstanceTenantCreatable } from "./DescribeInstanceResponseBodyInstanceTenantCreatable";


export class DescribeInstanceResponseBodyInstance extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the OceanBase Database Proxy (ODP) SQL firewall is supported.
   * 
   * @example
   * false
   */
  allowCreateProxySqlFirewallRule?: boolean;
  /**
   * @remarks
   * Indicates whether the maximum number of public connections can be modified.
   * 
   * @example
   * false
   */
  allowModifyInternetAddressConnectionLimit?: boolean;
  /**
   * @remarks
   * Indicates whether automatic renewal is enabled. 
   * 
   * This parameter is valid only for clusters whose billing methods are set to PREPAY.
   * 
   * @example
   * true
   */
  autoRenewal?: boolean;
  /**
   * @remarks
   * Indicates whether automatic upgrade of the OBServer version is enabled.
   * 
   * @example
   * true
   */
  autoUpgradeObVersion?: boolean;
  /**
   * @remarks
   * The list of zones.
   */
  availableZones?: string[];
  /**
   * @remarks
   * The CPU architecture of the cluster.
   * 
   * @example
   * X86
   */
  cpuArchitecture?: string;
  /**
   * @remarks
   * The time in UTC when the cluster was created.
   * 
   * @example
   * 2021-10-19T07:13:41Z
   */
  createTime?: string;
  /**
   * @remarks
   * Specifies whether to enable automatic scaling of the data disk.
   * > <br>This parameter is deprecated.
   * 
   * @example
   * -
   */
  dataDiskAutoScale?: boolean;
  /**
   * @remarks
   * Specifies parameters for the automatic scaling of the data disk.
   */
  dataDiskAutoScaleConfig?: DescribeInstanceResponseBodyInstanceDataDiskAutoScaleConfig;
  /**
   * @remarks
   * The time when the major compaction of cluster data is performed.
   * 
   * @example
   * 02:00
   */
  dataMergeTime?: string;
  /**
   * @remarks
   * The data replica distribution mode of the cluster. Valid values: 
   * - n: indicates the single-IDC mode. 
   * - n-n: indicates the dual-IDC mode. 
   * - n-n-n: indicates the multi-IDC mode. 
   * 
   * > <br>The integer n represents the number of OBServer nodes in each IDC.
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
   * The type of the storage disk where the cluster is deployed. 
   * 
   * The default value is cloud_essd_pl1, which indicates an ESSD cloud disk.
   * 
   * @example
   * cloud_essd_pl1
   */
  diskType?: string;
  /**
   * @remarks
   * Specifies whether to enable isolation optimization.
   * 
   * @example
   * false
   */
  enableIsolationOptimization?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the proxy service.
   * - true
   * - false
   * 
   * @example
   * true
   */
  enableProxyService?: boolean;
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
   * Indicates whether read-only replicas can be purchased for the cluster.
   * 
   * @example
   * false
   */
  enableReadOnlyReplicaManagement?: boolean;
  /**
   * @remarks
   * Indicates whether the log disk specifications can be upgraded.
   * 
   * @example
   * false
   */
  enableUpgradeLogDisk?: boolean;
  /**
   * @remarks
   * The maximum number of units of the proxy service in exclusive mode.
   * 
   * @example
   * 1
   */
  exclusiveUnitNumLimit?: number;
  /**
   * @remarks
   * The time in UTC when the cluster expires.
   * 
   * @example
   * 2021-10-17T16:00:00Z
   */
  expireTime?: string;
  /**
   * @remarks
   * Specifies whether to indicate the temporary status of the capacity.
   * 
   * @example
   * false
   */
  inTempCapacityStatus?: boolean;
  /**
   * @remarks
   * The specifications of the cluster.  You can specify one of the following four plans:    
   * - 8C32G: indicates 8 CPU cores and 32 GB of memory. 
   * - 14C70G: indicates 14 CPU cores and 70 GB of memory. 
   * - 30C180G: indicates 30 CPU cores and 180 GB of memory. 
   * - 62C400G: indicates 62 CPU cores and 400 GB of memory.
   * 
   * @example
   * 14C70G
   */
  instanceClass?: string;
  /**
   * @remarks
   * The ID of the OceanBase cluster.
   * 
   * @example
   * ob317v4uif****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the OceanBase cluster.
   * 
   * @example
   * ob4test
   */
  instanceName?: string;
  /**
   * @remarks
   * The role of the instance.
   * 
   * @example
   * NORMAL
   */
  instanceRole?: string;
  /**
   * @remarks
   * Indicates whether the OBServer version is the latest.
   * 
   * @example
   * true
   */
  isLatestObVersion?: boolean;
  /**
   * @remarks
   * Indicates whether trusted ECS instances are used.
   * 
   * @example
   * true
   */
  isTrustEcs?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the control group feature.
   * 
   * @example
   * false
   */
  isolationOptimization?: boolean;
  /**
   * @remarks
   * The period in UTC for the daily routine maintenance of the cluster.
   * 
   * @example
   * 19:00Z-20:00Z
   */
  maintainTime?: string;
  /**
   * @remarks
   * The number of nodes in the cluster. If the cluster is deployed in n-n-n mode, the number of nodes in the cluster equals n × 3.
   * 
   * @example
   * 6
   */
  nodeNum?: string;
  /**
   * @remarks
   * The detailed information of the OBServer version.
   * 
   * @example
   * 2.2.77-20210526202046
   */
  obRpmVersion?: string;
  /**
   * @remarks
   * The billing method of the OceanBase cluster. Valid values: 
   * - PREPAY: the subscription billing method. 
   * - POSTPAY: the pay-as-you-go billing method.
   * 
   * @example
   * PREPAY
   */
  payType?: string;
  /**
   * @remarks
   * The ID of the primary cluster.
   * 
   * @example
   * ob3h8ytroxxxxx
   */
  primaryInstance?: string;
  /**
   * @remarks
   * The region of the primary cluster.
   * 
   * @example
   * cn-hangzhou
   */
  primaryRegion?: string;
  /**
   * @remarks
   * The ID of the proxy cluster.
   * > This parameter returns a value only if you set the **EnableProxyService** parameter to true.
   * 
   * @example
   * proxy-56****a6tg2o
   */
  proxyClusterId?: string;
  /**
   * @remarks
   * The status of the proxy service.
   * 
   * @example
   * ONLINE
   */
  proxyServiceStatus?: string;
  /**
   * @remarks
   * The information about cluster resources.
   */
  readOnlyResource?: DescribeInstanceResponseBodyInstanceReadOnlyResource;
  /**
   * @remarks
   * The number of full-featured replicas. Return value: 3 or 2.
   * - 3: three full-featured replicas.
   * - 2: two full-featured replicas.
   * 
   * An OceanBase cluster deployed in three-zone mode supports only three full-featured replicas. An OceanBase cluster deployed in two-zone mode supports only two full-featured replicas. An OceanBase cluster deployed in one single zone supports two or three full-featured replicas.
   * 
   * @example
   * 2F1A
   */
  replicaMode?: string;
  /**
   * @remarks
   * The information about cluster resources.
   */
  resource?: DescribeInstanceResponseBodyInstanceResource;
  /**
   * @remarks
   * The series of the instance. Valid values:
   * 
   * - normal: Standard Cluster Edition (Cloud Disk). This is the default value.
   * 
   * - normal_ssd: Standard Cluster Edition (Local Disk)
   * 
   * - history: History Database Cluster Edition
   * 
   * @example
   * Normal
   */
  series?: string;
  /**
   * @remarks
   * The maximum number of units of the proxy service in shared mode.
   * 
   * @example
   * 3
   */
  sharedUnitNumLimit?: number;
  /**
   * @remarks
   * The specification type.
   * 
   * @example
   * dedicatedspec
   */
  specType?: string;
  /**
   * @remarks
   * The status of the cluster. Valid values: 
   *  - PENDING_CREATE: The cluster is being created. 
   *  - ONLINE: The cluster is running. 
   *  - TENANT_CREATING: The tenant is being created. 
   * - TENANT_SPEC_MODIFYING: The tenant specifications are being modified. 
   * - EXPANDING: Nodes are being added to the cluster to increase its capacity. 
   * - REDUCING: Nodes are being removed from the cluster to reduce its capacity. 
   * - SPEC_UPGRADING: The service plan is being upgraded. 
   * - DISK_UPGRADING: The storage space is being expanded. 
   * - WHITE_LIST_MODIFYING: The whitelist is being modified. 
   * - PARAMETER_MODIFYING: Parameters are being modified. 
   * - SSL_MODIFYING: The SSL certificate is being changed. 
   * - PREPAID_EXPIRE_CLOSED: The payment is overdue. This parameter is valid for a cluster whose billing method is set to PREPAY. 
   * - ARREARS_CLOSED: The payment is overdue. This parameter is valid for a cluster whose billing method is set to POSTPAY. 
   * - PENDING_DELETE: The cluster is being deleted.    
   * Generally, the cluster is in the ONLINE state.
   * 
   * @example
   * ONLINE
   */
  status?: string;
  /**
   * @remarks
   * Specifies whether a tenant can be created.
   */
  tenantCreatable?: DescribeInstanceResponseBodyInstanceTenantCreatable;
  /**
   * @remarks
   * The unit specification of the proxy service.
   * 
   * @example
   * 2C4G
   */
  unitSpec?: string;
  /**
   * @remarks
   * The version of OceanBase Database.
   * 
   * @example
   * 2.2.77
   */
  version?: string;
  /**
   * @remarks
   * The ID of the zone to which the instance belongs.
   * <props="intl">For more information about how to obtain the list of zones, see [DescribeZones](https://www.alibabacloud.com/help/en/apsaradb-for-oceanbase/latest/api-oceanbasepro-2019-09-01-describezones).
   */
  zones?: string[];
  static names(): { [key: string]: string } {
    return {
      allowCreateProxySqlFirewallRule: 'AllowCreateProxySqlFirewallRule',
      allowModifyInternetAddressConnectionLimit: 'AllowModifyInternetAddressConnectionLimit',
      autoRenewal: 'AutoRenewal',
      autoUpgradeObVersion: 'AutoUpgradeObVersion',
      availableZones: 'AvailableZones',
      cpuArchitecture: 'CpuArchitecture',
      createTime: 'CreateTime',
      dataDiskAutoScale: 'DataDiskAutoScale',
      dataDiskAutoScaleConfig: 'DataDiskAutoScaleConfig',
      dataMergeTime: 'DataMergeTime',
      deployMode: 'DeployMode',
      deployType: 'DeployType',
      diskType: 'DiskType',
      enableIsolationOptimization: 'EnableIsolationOptimization',
      enableProxyService: 'EnableProxyService',
      enableReadOnlyReplica: 'EnableReadOnlyReplica',
      enableReadOnlyReplicaManagement: 'EnableReadOnlyReplicaManagement',
      enableUpgradeLogDisk: 'EnableUpgradeLogDisk',
      exclusiveUnitNumLimit: 'ExclusiveUnitNumLimit',
      expireTime: 'ExpireTime',
      inTempCapacityStatus: 'InTempCapacityStatus',
      instanceClass: 'InstanceClass',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      instanceRole: 'InstanceRole',
      isLatestObVersion: 'IsLatestObVersion',
      isTrustEcs: 'IsTrustEcs',
      isolationOptimization: 'IsolationOptimization',
      maintainTime: 'MaintainTime',
      nodeNum: 'NodeNum',
      obRpmVersion: 'ObRpmVersion',
      payType: 'PayType',
      primaryInstance: 'PrimaryInstance',
      primaryRegion: 'PrimaryRegion',
      proxyClusterId: 'ProxyClusterId',
      proxyServiceStatus: 'ProxyServiceStatus',
      readOnlyResource: 'ReadOnlyResource',
      replicaMode: 'ReplicaMode',
      resource: 'Resource',
      series: 'Series',
      sharedUnitNumLimit: 'SharedUnitNumLimit',
      specType: 'SpecType',
      status: 'Status',
      tenantCreatable: 'TenantCreatable',
      unitSpec: 'UnitSpec',
      version: 'Version',
      zones: 'Zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowCreateProxySqlFirewallRule: 'boolean',
      allowModifyInternetAddressConnectionLimit: 'boolean',
      autoRenewal: 'boolean',
      autoUpgradeObVersion: 'boolean',
      availableZones: { 'type': 'array', 'itemType': 'string' },
      cpuArchitecture: 'string',
      createTime: 'string',
      dataDiskAutoScale: 'boolean',
      dataDiskAutoScaleConfig: DescribeInstanceResponseBodyInstanceDataDiskAutoScaleConfig,
      dataMergeTime: 'string',
      deployMode: 'string',
      deployType: 'string',
      diskType: 'string',
      enableIsolationOptimization: 'boolean',
      enableProxyService: 'boolean',
      enableReadOnlyReplica: 'boolean',
      enableReadOnlyReplicaManagement: 'boolean',
      enableUpgradeLogDisk: 'boolean',
      exclusiveUnitNumLimit: 'number',
      expireTime: 'string',
      inTempCapacityStatus: 'boolean',
      instanceClass: 'string',
      instanceId: 'string',
      instanceName: 'string',
      instanceRole: 'string',
      isLatestObVersion: 'boolean',
      isTrustEcs: 'boolean',
      isolationOptimization: 'boolean',
      maintainTime: 'string',
      nodeNum: 'string',
      obRpmVersion: 'string',
      payType: 'string',
      primaryInstance: 'string',
      primaryRegion: 'string',
      proxyClusterId: 'string',
      proxyServiceStatus: 'string',
      readOnlyResource: DescribeInstanceResponseBodyInstanceReadOnlyResource,
      replicaMode: 'string',
      resource: DescribeInstanceResponseBodyInstanceResource,
      series: 'string',
      sharedUnitNumLimit: 'number',
      specType: 'string',
      status: 'string',
      tenantCreatable: DescribeInstanceResponseBodyInstanceTenantCreatable,
      unitSpec: 'string',
      version: 'string',
      zones: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.availableZones)) {
      $dara.Model.validateArray(this.availableZones);
    }
    if(this.dataDiskAutoScaleConfig && typeof (this.dataDiskAutoScaleConfig as any).validate === 'function') {
      (this.dataDiskAutoScaleConfig as any).validate();
    }
    if(this.readOnlyResource && typeof (this.readOnlyResource as any).validate === 'function') {
      (this.readOnlyResource as any).validate();
    }
    if(this.resource && typeof (this.resource as any).validate === 'function') {
      (this.resource as any).validate();
    }
    if(this.tenantCreatable && typeof (this.tenantCreatable as any).validate === 'function') {
      (this.tenantCreatable as any).validate();
    }
    if(Array.isArray(this.zones)) {
      $dara.Model.validateArray(this.zones);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

