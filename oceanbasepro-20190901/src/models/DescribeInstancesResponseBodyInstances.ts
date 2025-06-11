// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstancesResponseBodyInstancesDataDiskAutoScaleConfig } from "./DescribeInstancesResponseBodyInstancesDataDiskAutoScaleConfig";
import { DescribeInstancesResponseBodyInstancesMigrationInfo } from "./DescribeInstancesResponseBodyInstancesMigrationInfo";
import { DescribeInstancesResponseBodyInstancesResource } from "./DescribeInstancesResponseBodyInstancesResource";


export class DescribeInstancesResponseBodyInstances extends $dara.Model {
  /**
   * @remarks
   * The information about the zone in which the cluster is deployed.
   */
  availableZones?: string[];
  /**
   * @remarks
   * The product code of the OceanBase cluster.   
   * - oceanbase_oceanbasepre_public_cn: indicates an OceanBase cluster that is billed based on the subscription plan and that is deployed in a China site.  
   * - oceanbase_oceanbasepost_public_cn: indicates an OceanBase cluster that is billed based on the pay-as-you-go plan and that is deployed in a China site.  
   * - oceanbase_obpre_public_intl: indicates an OceanBase cluster that is billed based on the subscription plan and that is deployed in an international site.
   * 
   * @example
   * oceanbase_oceanbasepost_public_cn
   */
  commodityCode?: string;
  /**
   * @remarks
   * The number of CPU cores of the cluster.
   * 
   * @example
   * 14
   */
  cpu?: number;
  /**
   * @remarks
   * The CPU architecture of the cluster.
   * 
   * @example
   * X86_64, AARCH64
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
   * Specifies parameters for the automatic scaling of the data disk.
   */
  dataDiskAutoScaleConfig?: DescribeInstancesResponseBodyInstancesDataDiskAutoScaleConfig;
  /**
   * @remarks
   * The data replica distribution mode of the cluster. The value is in the n-n-n format, where n is the number of OBServer nodes in each IDC.
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
   * The size of the storage space, in GB.
   * 
   * @example
   * 200
   */
  diskSize?: number;
  /**
   * @remarks
   * The type of the storage disk where the cluster is deployed.   
   * The default value is cloud_essd_pl1, which indicates an ESSD cloud disk.
   * 
   * @example
   * cloud_essd_pl1
   */
  diskType?: string;
  /**
   * @remarks
   * Indicates whether the cluster supports read-only replicas.
   * 
   * @example
   * yes
   */
  enableReadOnlyReplicaManagement?: boolean;
  /**
   * @remarks
   * Indicates whether new nodes can be added.
   * 
   * @example
   * true
   */
  enableUpgradeNodes?: boolean;
  /**
   * @remarks
   * The time elapsed since the expiration of the cluster, in seconds. 
   * > In subscription mode, if the cluster has not expired, this parameter indicates the remaining validity period of the cluster. If the cluster has expired, this parameter indicates the time elapsed since the expiration.
   * 
   * @example
   * 2606682
   */
  expireSeconds?: number;
  /**
   * @remarks
   * The time in UTC when the cluster expires. 
   * > This parameter is valid only for subscription instances.
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
   * The instance type.
   * - cluster: indicates a cluster instance.
   * - mtenant: indicates a tenant instance in MySQL mode.
   * - mtenant_serverless: indicates a serverless instance in MySQL mode.
   * 
   * @example
   * CLUSTER
   */
  instanceType?: string;
  /**
   * @remarks
   * The time period in UTC for the daily routine maintenance of the cluster.
   * 
   * @example
   * 2021-10-19T07:13:41Z
   */
  maintainTime?: string;
  /**
   * @remarks
   * The memory size of the instance, in GB.
   * 
   * @example
   * 70
   */
  mem?: number;
  migratable?: boolean;
  migrationInfo?: DescribeInstancesResponseBodyInstancesMigrationInfo;
  /**
   * @remarks
   * The version of the OceanBase Database RedHat Package Managerment (RPM) package.
   * 
   * @example
   * 4.2.1.7-107030032024062709
   */
  obRpmVersion?: string;
  /**
   * @remarks
   * The billing method for the OceanBase cluster. Valid values:  
   * - PREPAY: the subscription billing method.  
   * - POSTPAY: the pay-as-you-go billing method.
   * 
   * @example
   * PREPAY
   */
  payType?: string;
  /**
   * @example
   * 3F、2F1A
   */
  replicaMode?: string;
  /**
   * @remarks
   * The information about cluster resources.
   */
  resource?: DescribeInstancesResponseBodyInstancesResource;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * group1
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The series of the OceanBase cluster. Valid values:   
   * - NORMAL: the high availability edition.   
   * - BASIC: the basic edition.
   * 
   * @example
   * NORMAL
   */
  series?: string;
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
   * - ONLINE: The cluster is running.  
   * - PENDING_CREATE: The cluster is being created.  
   * - ARREARS_CLOSED("arrears_closed"): The cluster is suspended due to insufficient balance.
   * - PREPAID_EXPIRE_CLOSED("prepaid_expire_closed"): The cluster is suspended because the subscription has expired.
   * - WHITE_LIST_MODIFYING("white_list_modifying"): The allowlist of the cluster is being modified.
   * - SSL_MODIFYING("ssl_modifying"): The Secure Sockets Layer (SSL) settings of the cluster are being modified.
   * - PARAMETER_MODIFYING("parameter_modifying"): Parameters of the cluster are being modified.
   * - TENANT_CREATING("tenant_creating"): A tenant is being created in the cluster.
   * - TENANT_SPEC_MODIFYING("tenant_spec_modifying"): The specifications of a tenant in the cluster are being modified.
   * - EXPANDING("expanding"): Nodes are being added to the cluster.
   * - REDUCING("reducing"): Nodes are being removed from the cluster.
   * - ZONE_CHANGING("zone_changing"): Zones of the cluster are being modified.
   * - SPEC_UPGRADING: The service plan is being upgraded.
   * - SPEC_DOWNGRADING("spec_downgrading"): The plan specification is being downgraded.
   * - DISK_UPGRADING: The storage space is being expanded.
   * - UPGRADING("upgrading"): The version of the cluster is being upgraded.
   * - PENDING_DELETE("pending_delete"): The cluster is being deleted.
   * - DELETED("deleted"): The cluster has been deleted.
   * - ABNORMAL("abnormal"): The cluster is abnormal.
   * - OFFLINE("offline"): The cluster is offline.
   * - STANDBY_CREATING("standby_creating"): A standby cluster is being created for the cluster.
   * - STANDBY_DELETING("standby_deleting"): A standby cluster of the cluster is being deleted.
   * - SWITCHOVER_SWITCHING("switchover_switching"): The cluster is undergoing a primary/standby switchover.
   * - STANDBY_DISCONNECTING("standby_disconnecting"): The cluster is being decoupled from its standby cluster.
   * - LOG_DISK_UPGRADING("log_disk_upgrading"): The log disk of the cluster is being scaled out.
   * - ISOLATION_OPTIMIZATION_MODIFYING("isolation_optimization_modifying"): The isolation optimization settings of the cluster are being modified.
   * - DISKTYPE_MODIFYING("disktype_modifying"): The data disk type of the cluster is being modified.
   * - PROXY_SERVICE_CREATING("proxy_service_creating"): The proxy service is being enabled for the cluster.
   * - PROXY_SERVICE_DELETING("proxy_service_deleting"): The proxy service is being disabled for the cluster.
   * - PROXY_SERVICE_SPEC_MODIFYING("proxy_service_spec_modifying"): The proxy service specification is being modified for the cluster.
   * - READONLY_ADD_NODE("readonly_add_node"): A read-only node is being added to the cluster.
   * - READONLY_REDUCE_NODE("readonly_reduce_node"): A read-only node is being removed from the cluster.
   * - READONLY_REDUCE_ZONE("readonly_reduce_zone"): A read-only zone is being removed from the cluster.
   * - READONLY_ADD_ZONE("readonly_add_zone"): A read-only zone is being added to the cluster.
   * - READONLY_UPGRADE_SPEC("readonly_upgrade_spec"): The specification of read-only replicas is being upgraded.
   * - READONLY_UPGRADE_DISK("readonly_upgrade_disk"): The disk space of read-only replicas is being scaled out.
   * - READONLY_DOWNGRADE_SPEC("readonly_downgrade_spec"): The specification of read-only replicas is being downgraded.
   * - READONLY_DOWNGRADE_DISK("readonly_downgrade_disk"): The disk space of read-only replicas is being scaled in.
   * - CREATING_TENANT_READONLY_REPLICA("creating_tenant_readonly_replica"): A read-only replica is being created for a tenant in the cluster.
   * - DELETING_TENANT_READONLY_REPLICA("deleting_tenant_readonly_replica"): A read-only replica is being deleted for a tenant in the cluster.
   * - DISK_DOWNGRADING("disk_downgrading"): The disk space of the cluster is being scaled in.
   * - DEPLOY_MODE_MODIFYING("deploy_mode_modifying"): The deployment mode of the cluster is being modified.
   * > Generally, the cluster is in the ONLINE state.
   * 
   * @example
   * ONLINE
   */
  state?: string;
  /**
   * @remarks
   * The size of used storage space of the cluster, in GB.
   * 
   * @example
   * 20
   */
  usedDiskSize?: number;
  /**
   * @remarks
   * The OBServer version.
   * 
   * @example
   * 2.2.77
   */
  version?: string;
  /**
   * @remarks
   * vpcId
   * 
   * @example
   * vpc-8vb8qjrixzovjpy******
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      availableZones: 'AvailableZones',
      commodityCode: 'CommodityCode',
      cpu: 'Cpu',
      cpuArchitecture: 'CpuArchitecture',
      createTime: 'CreateTime',
      dataDiskAutoScaleConfig: 'DataDiskAutoScaleConfig',
      deployMode: 'DeployMode',
      deployType: 'DeployType',
      diskSize: 'DiskSize',
      diskType: 'DiskType',
      enableReadOnlyReplicaManagement: 'EnableReadOnlyReplicaManagement',
      enableUpgradeNodes: 'EnableUpgradeNodes',
      expireSeconds: 'ExpireSeconds',
      expireTime: 'ExpireTime',
      inTempCapacityStatus: 'InTempCapacityStatus',
      instanceClass: 'InstanceClass',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      instanceRole: 'InstanceRole',
      instanceType: 'InstanceType',
      maintainTime: 'MaintainTime',
      mem: 'Mem',
      migratable: 'Migratable',
      migrationInfo: 'MigrationInfo',
      obRpmVersion: 'ObRpmVersion',
      payType: 'PayType',
      replicaMode: 'ReplicaMode',
      resource: 'Resource',
      resourceGroupId: 'ResourceGroupId',
      series: 'Series',
      specType: 'SpecType',
      state: 'State',
      usedDiskSize: 'UsedDiskSize',
      version: 'Version',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableZones: { 'type': 'array', 'itemType': 'string' },
      commodityCode: 'string',
      cpu: 'number',
      cpuArchitecture: 'string',
      createTime: 'string',
      dataDiskAutoScaleConfig: DescribeInstancesResponseBodyInstancesDataDiskAutoScaleConfig,
      deployMode: 'string',
      deployType: 'string',
      diskSize: 'number',
      diskType: 'string',
      enableReadOnlyReplicaManagement: 'boolean',
      enableUpgradeNodes: 'boolean',
      expireSeconds: 'number',
      expireTime: 'string',
      inTempCapacityStatus: 'boolean',
      instanceClass: 'string',
      instanceId: 'string',
      instanceName: 'string',
      instanceRole: 'string',
      instanceType: 'string',
      maintainTime: 'string',
      mem: 'number',
      migratable: 'boolean',
      migrationInfo: DescribeInstancesResponseBodyInstancesMigrationInfo,
      obRpmVersion: 'string',
      payType: 'string',
      replicaMode: 'string',
      resource: DescribeInstancesResponseBodyInstancesResource,
      resourceGroupId: 'string',
      series: 'string',
      specType: 'string',
      state: 'string',
      usedDiskSize: 'number',
      version: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.availableZones)) {
      $dara.Model.validateArray(this.availableZones);
    }
    if(this.dataDiskAutoScaleConfig && typeof (this.dataDiskAutoScaleConfig as any).validate === 'function') {
      (this.dataDiskAutoScaleConfig as any).validate();
    }
    if(this.migrationInfo && typeof (this.migrationInfo as any).validate === 'function') {
      (this.migrationInfo as any).validate();
    }
    if(this.resource && typeof (this.resource as any).validate === 'function') {
      (this.resource as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

