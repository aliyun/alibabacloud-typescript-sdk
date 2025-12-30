// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetClusterResponseBodyClusterCustomConfiguration extends $dara.Model {
  /**
   * @remarks
   * The arguments that are used to run the script after the scrip is installed.
   * 
   * @example
   * E-HPC cn-hangzhou
   */
  args?: string;
  /**
   * @remarks
   * The URL that is used to download the post-processing script.
   * 
   * @example
   * http://*****
   */
  script?: string;
  static names(): { [key: string]: string } {
    return {
      args: 'Args',
      script: 'Script',
    };
  }

  static types(): { [key: string]: any } {
    return {
      args: 'string',
      script: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterResponseBodyManagerDNS extends $dara.Model {
  /**
   * @remarks
   * The state of the domain name resolution service. Valid values:
   * 
   * *   uninit: The service is being installed.
   * *   initing: The service is being initialized.
   * *   running: The service is running.
   * *   exception: The service has run into an exception.
   * *   releasing: The service is being released.
   * *   stopped: The service is stopped.
   * *   pending: The service is waiting to be configured.
   * 
   * @example
   * running
   */
  status?: string;
  /**
   * @remarks
   * The resolution type.
   * 
   * @example
   * nis
   */
  type?: string;
  /**
   * @remarks
   * The version of the resolution service.
   * 
   * @example
   * 2.31
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      type: 'Type',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      type: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterResponseBodyManagerDirectoryService extends $dara.Model {
  /**
   * @remarks
   * The state of the domain account service. Valid values:
   * 
   * *   uninit: The service is being installed.
   * *   initing: The service is being initialized.
   * *   running: The service is running.
   * *   exception: The service has run into an exception.
   * *   releasing: The service is being released.
   * *   stopped: The service is stopped.
   * *   pending: The service is waiting to be configured.
   * 
   * @example
   * running
   */
  status?: string;
  /**
   * @remarks
   * The type of the domain account.
   * 
   * @example
   * nis
   */
  type?: string;
  /**
   * @remarks
   * The version of the domain account service.
   * 
   * @example
   * 2.31
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      type: 'Type',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      type: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterResponseBodyManagerManagerNodeSystemDisk extends $dara.Model {
  /**
   * @example
   * cloud_ssd
   */
  category?: string;
  /**
   * @example
   * PL0
   */
  level?: string;
  /**
   * @example
   * 40
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      level: 'Level',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      level: 'string',
      size: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterResponseBodyManagerManagerNode extends $dara.Model {
  autoRenew?: boolean;
  /**
   * @example
   * Month
   */
  autoRenewPeriod?: number;
  /**
   * @example
   * 1
   */
  duration?: number;
  enableHt?: boolean;
  /**
   * @remarks
   * The expiration time of the management node.
   * 
   * @example
   * 2099-12-31T15:59Z
   */
  expiredTime?: string;
  /**
   * @example
   * aliyun_2_1903_x64_20G_alibase_20200324.vhd
   */
  imageId?: string;
  /**
   * @remarks
   * The instance billing method of the management node. Valid values:
   * 
   * *   PostPaid: pay-as-you-go
   * *   PrePaid: subscription
   * 
   * @example
   * PostPaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The instance ID of the management node.
   * 
   * @example
   * i-bp1a170jgea1vl******
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance type of the management node.
   * 
   * @example
   * ecs.g6.4xlarge
   */
  instanceType?: string;
  /**
   * @example
   * 1
   */
  period?: number;
  /**
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @example
   * 1
   */
  spotPriceLimit?: number;
  /**
   * @example
   * NoSpot
   */
  spotStrategy?: string;
  systemDisk?: GetClusterResponseBodyManagerManagerNodeSystemDisk;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'AutoRenew',
      autoRenewPeriod: 'AutoRenewPeriod',
      duration: 'Duration',
      enableHt: 'EnableHt',
      expiredTime: 'ExpiredTime',
      imageId: 'ImageId',
      instanceChargeType: 'InstanceChargeType',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      spotPriceLimit: 'SpotPriceLimit',
      spotStrategy: 'SpotStrategy',
      systemDisk: 'SystemDisk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'boolean',
      autoRenewPeriod: 'number',
      duration: 'number',
      enableHt: 'boolean',
      expiredTime: 'string',
      imageId: 'string',
      instanceChargeType: 'string',
      instanceId: 'string',
      instanceType: 'string',
      period: 'number',
      periodUnit: 'string',
      spotPriceLimit: 'number',
      spotStrategy: 'string',
      systemDisk: GetClusterResponseBodyManagerManagerNodeSystemDisk,
    };
  }

  validate() {
    if(this.systemDisk && typeof (this.systemDisk as any).validate === 'function') {
      (this.systemDisk as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterResponseBodyManagerScheduler extends $dara.Model {
  /**
   * @remarks
   * The scheduler state. Valid values:
   * 
   * *   uninit: The scheduler is being installed.
   * *   initing: The scheduler is being initialized.
   * *   running: The scheduler is running.
   * *   exception: The scheduler has run into an exception.
   * *   releasing: The scheduler is being released.
   * *   stopped: The scheduler is stopped.
   * *   pending: The scheduler is waiting to be configured.
   * 
   * @example
   * running
   */
  status?: string;
  /**
   * @remarks
   * The scheduler type. Valid values:
   * 
   * *   SLURM
   * *   PBS
   * *   OPENGRIDSCHEDULER
   * *   LSF_PLUGIN
   * *   PBS_PLUGIN
   * 
   * @example
   * SLURM
   */
  type?: string;
  /**
   * @remarks
   * The scheduler version.
   * 
   * @example
   * 22.05.8
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      type: 'Type',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      type: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterResponseBodyManager extends $dara.Model {
  /**
   * @remarks
   * The configurations of the domain name resolution service.
   */
  DNS?: GetClusterResponseBodyManagerDNS;
  /**
   * @remarks
   * The information about the domain account service.
   */
  directoryService?: GetClusterResponseBodyManagerDirectoryService;
  /**
   * @remarks
   * The configurations of the management node.
   */
  managerNode?: GetClusterResponseBodyManagerManagerNode;
  /**
   * @remarks
   * The information about the scheduler.
   */
  scheduler?: GetClusterResponseBodyManagerScheduler;
  static names(): { [key: string]: string } {
    return {
      DNS: 'DNS',
      directoryService: 'DirectoryService',
      managerNode: 'ManagerNode',
      scheduler: 'Scheduler',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DNS: GetClusterResponseBodyManagerDNS,
      directoryService: GetClusterResponseBodyManagerDirectoryService,
      managerNode: GetClusterResponseBodyManagerManagerNode,
      scheduler: GetClusterResponseBodyManagerScheduler,
    };
  }

  validate() {
    if(this.DNS && typeof (this.DNS as any).validate === 'function') {
      (this.DNS as any).validate();
    }
    if(this.directoryService && typeof (this.directoryService as any).validate === 'function') {
      (this.directoryService as any).validate();
    }
    if(this.managerNode && typeof (this.managerNode as any).validate === 'function') {
      (this.managerNode as any).validate();
    }
    if(this.scheduler && typeof (this.scheduler as any).validate === 'function') {
      (this.scheduler as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterResponseBodyMonitorSpec extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the monitoring component of compute nodes is enabled for the cluster. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  enableComputeLoadMonitor?: boolean;
  static names(): { [key: string]: string } {
    return {
      enableComputeLoadMonitor: 'EnableComputeLoadMonitor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableComputeLoadMonitor: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterResponseBodySchedulerSpec extends $dara.Model {
  enablePowerSaving?: boolean;
  /**
   * @remarks
   * Indicates whether the topology awareness feature is enabled for the cluster. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  enableTopologyAwareness?: boolean;
  static names(): { [key: string]: string } {
    return {
      enablePowerSaving: 'EnablePowerSaving',
      enableTopologyAwareness: 'EnableTopologyAwareness',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enablePowerSaving: 'boolean',
      enableTopologyAwareness: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterResponseBody extends $dara.Model {
  /**
   * @remarks
   * The E-HPC Util version.
   * 
   * @example
   * 2.0.31
   */
  clientVersion?: string;
  /**
   * @remarks
   * The cluster type. Valid values:
   * 
   * *   Standard
   * *   Serverless
   * 
   * @example
   * Standard
   */
  clusterCategory?: string;
  /**
   * @remarks
   * The time when the cluster was created. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mmZ format. The time is displayed in UTC. For more information, see [ISO 8601](https://help.aliyun.com/document_detail/25696.html).
   * 
   * @example
   * 2024-08-06T12:43:01.000Z
   */
  clusterCreateTime?: string;
  /**
   * @remarks
   * The post-processing script of the cluster.
   */
  clusterCustomConfiguration?: GetClusterResponseBodyClusterCustomConfiguration;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The deployment type of the cluster. Valid values:
   * 
   * *   Integrated: The cluster is deployed on a public cloud.
   * *   Hybrid: The cluster is deployed on a hybrid cloud.
   * *   Custom: The cluster is a custom cluster.
   * 
   * @example
   * Integrated
   */
  clusterMode?: string;
  /**
   * @remarks
   * The time when the cluster was last modified. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mmZ format. The time is displayed in UTC. For more information, see [ISO 8601](https://help.aliyun.com/document_detail/25696.html).
   * 
   * @example
   * 2024-08-06T12:43:01.000Z
   */
  clusterModifyTime?: string;
  /**
   * @remarks
   * The cluster name.
   * 
   * @example
   * slurm22.05.8-cluster-20240614
   */
  clusterName?: string;
  /**
   * @remarks
   * The cluster state. Valid values:
   * 
   * *   uninit: The cluster is being installed.
   * *   creating: The cluster is being created.
   * *   initing: The cluster is being initialized.
   * *   running: The cluster is running.
   * *   exception: The cluster has run into an exception.
   * *   raleasing: The cluster is being released.
   * *   stopping: The cluster is being stopped.
   * *   stopped: The cluster is stopped.
   * *   pending: The cluster is waiting to be configured.
   * 
   * @example
   * running
   */
  clusterStatus?: string;
  /**
   * @remarks
   * The ID of the vSwitch used by the cluster.
   * 
   * @example
   * vsw-bp1p2uugqsjppno******
   */
  clusterVSwitchId?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) used by the cluster.
   * 
   * @example
   * vpc-uf6u3lk1pjy28eg*****
   */
  clusterVpcId?: string;
  /**
   * @remarks
   * Indicates whether deletion protection is enabled for the cluster. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  deleteProtection?: string;
  /**
   * @remarks
   * The E-HPC version.
   * 
   * @example
   * 2.0.0
   */
  ehpcVersion?: string;
  /**
   * @remarks
   * Indicates whether automatic scale-in is enabled for the cluster. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  enableScaleIn?: boolean;
  /**
   * @remarks
   * Indicates whether automatic scale-out is enabled for the cluster. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  enableScaleOut?: boolean;
  /**
   * @remarks
   * The interval at which the cluster is automatically scaled out.
   * 
   * @example
   * 2
   */
  growInterval?: number;
  /**
   * @remarks
   * The idle duration of the compute nodes allowed by the cluster.
   * 
   * @example
   * 4
   */
  idleInterval?: number;
  /**
   * @remarks
   * The management node configurations.
   */
  manager?: GetClusterResponseBodyManager;
  /**
   * @remarks
   * The maximum total number of vCPUs that can be used by all compute nodes managed by the cluster.
   * 
   * @example
   * 10000
   */
  maxCoreCount?: string;
  /**
   * @remarks
   * The maximum number of compute nodes that the cluster can manage.
   * 
   * @example
   * 100
   */
  maxCount?: string;
  /**
   * @remarks
   * The monitoring details of the cluster.
   */
  monitorSpec?: GetClusterResponseBodyMonitorSpec;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmxazb4ph****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The scheduler specifications of the cluster.
   */
  schedulerSpec?: GetClusterResponseBodySchedulerSpec;
  /**
   * @remarks
   * The security group ID.
   * 
   * @example
   * sg-f8z9vb2zaezpkr69a21k
   */
  securityGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      clientVersion: 'ClientVersion',
      clusterCategory: 'ClusterCategory',
      clusterCreateTime: 'ClusterCreateTime',
      clusterCustomConfiguration: 'ClusterCustomConfiguration',
      clusterId: 'ClusterId',
      clusterMode: 'ClusterMode',
      clusterModifyTime: 'ClusterModifyTime',
      clusterName: 'ClusterName',
      clusterStatus: 'ClusterStatus',
      clusterVSwitchId: 'ClusterVSwitchId',
      clusterVpcId: 'ClusterVpcId',
      deleteProtection: 'DeleteProtection',
      ehpcVersion: 'EhpcVersion',
      enableScaleIn: 'EnableScaleIn',
      enableScaleOut: 'EnableScaleOut',
      growInterval: 'GrowInterval',
      idleInterval: 'IdleInterval',
      manager: 'Manager',
      maxCoreCount: 'MaxCoreCount',
      maxCount: 'MaxCount',
      monitorSpec: 'MonitorSpec',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      schedulerSpec: 'SchedulerSpec',
      securityGroupId: 'SecurityGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientVersion: 'string',
      clusterCategory: 'string',
      clusterCreateTime: 'string',
      clusterCustomConfiguration: GetClusterResponseBodyClusterCustomConfiguration,
      clusterId: 'string',
      clusterMode: 'string',
      clusterModifyTime: 'string',
      clusterName: 'string',
      clusterStatus: 'string',
      clusterVSwitchId: 'string',
      clusterVpcId: 'string',
      deleteProtection: 'string',
      ehpcVersion: 'string',
      enableScaleIn: 'boolean',
      enableScaleOut: 'boolean',
      growInterval: 'number',
      idleInterval: 'number',
      manager: GetClusterResponseBodyManager,
      maxCoreCount: 'string',
      maxCount: 'string',
      monitorSpec: GetClusterResponseBodyMonitorSpec,
      requestId: 'string',
      resourceGroupId: 'string',
      schedulerSpec: GetClusterResponseBodySchedulerSpec,
      securityGroupId: 'string',
    };
  }

  validate() {
    if(this.clusterCustomConfiguration && typeof (this.clusterCustomConfiguration as any).validate === 'function') {
      (this.clusterCustomConfiguration as any).validate();
    }
    if(this.manager && typeof (this.manager as any).validate === 'function') {
      (this.manager as any).validate();
    }
    if(this.monitorSpec && typeof (this.monitorSpec as any).validate === 'function') {
      (this.monitorSpec as any).validate();
    }
    if(this.schedulerSpec && typeof (this.schedulerSpec as any).validate === 'function') {
      (this.schedulerSpec as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

