// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetClusterResponseBodyClusterCustomConfiguration extends $dara.Model {
  /**
   * @remarks
   * The runtime parameters of the post-installation script.
   * 
   * @example
   * E-HPC cn-hangzhou
   */
  args?: string;
  /**
   * @remarks
   * The download URL of the post-processing script.
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
   * The domain name resolution service status. Valid values:
   * 
   * - uninit: Installing
   * 
   * - initing: Initializing
   * 
   * - running: Running
   * 
   * - exception: Abnormal
   * 
   * - releasing: Releasing
   * 
   * - stopped: Stopped
   * 
   * - pending: Pending configuration
   * 
   * @example
   * running
   */
  status?: string;
  /**
   * @remarks
   * The domain name resolution type.
   * 
   * @example
   * nis
   */
  type?: string;
  /**
   * @remarks
   * The domain name resolution version.
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
   * The domain account service status. Valid values:
   * 
   * - uninit: Installing
   * 
   * - initing: Initializing
   * 
   * - running: Running
   * 
   * - exception: Abnormal
   * 
   * - releasing: Releasing
   * 
   * - stopped: Stopped
   * 
   * - pending: Pending configuration
   * 
   * @example
   * running
   */
  status?: string;
  /**
   * @remarks
   * The domain account type.
   * 
   * @example
   * nis
   */
  type?: string;
  /**
   * @remarks
   * The domain account version.
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
   * The expiration time of the control plane node.
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
   * The billing method of the control plane node instance. Valid values:
   * 
   * - PostPaid: Pay-as-you-go
   * 
   * - PrePaid: Subscription
   * 
   * @example
   * PostPaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The control plane node instance ID.
   * 
   * @example
   * i-bp1a170jgea1vl******
   */
  instanceId?: string;
  /**
   * @remarks
   * The control plane node instance type.
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
   * The scheduler service status. Valid values:
   * 
   * - uninit: Installing
   * 
   * - initing: Initializing
   * 
   * - running: Running
   * 
   * - exception: Abnormal
   * 
   * - releasing: Releasing
   * 
   * - stopped: Stopped
   * 
   * - pending: Pending configuration
   * 
   * @example
   * running
   */
  status?: string;
  /**
   * @remarks
   * The scheduler type. Valid values:
   * 
   * - SLURM
   * 
   * - PBS
   * 
   * - OPENGRIDSCHEDULER
   * 
   * - LSF_PLUGIN
   * 
   * - PBS_PLUGIN
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
   * The domain name resolution service configuration.
   */
  DNS?: GetClusterResponseBodyManagerDNS;
  /**
   * @remarks
   * The domain account service information.
   */
  directoryService?: GetClusterResponseBodyManagerDirectoryService;
  /**
   * @remarks
   * The control plane node configuration.
   */
  managerNode?: GetClusterResponseBodyManagerManagerNode;
  /**
   * @remarks
   * The scheduler service information.
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
   * Indicates whether the monitoring component for compute nodes is enabled for the cluster. Valid values:
   * 
   * - true: Enable
   * 
   * - false: Disable
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
   * - true: Enable
   * 
   * - false: Disable
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
   * The E-HPC Util version used by the cluster.
   * 
   * @example
   * 2.0.31
   */
  clientVersion?: string;
  /**
   * @remarks
   * The cluster series. Valid values:
   * 
   * - Standard
   * 
   * - Serverless
   * 
   * @example
   * Standard
   */
  clusterCategory?: string;
  /**
   * @remarks
   * The cluster creation time. The time follows the ISO 8601 standard and is in UTC+0. The format is yyyy-MM-ddTHH:mmZ. For more information, see [ISO 8601](https://help.aliyun.com/document_detail/25696.html).
   * 
   * @example
   * 2024-08-06T12:43:01.000Z
   */
  clusterCreateTime?: string;
  /**
   * @remarks
   * The cluster post-processing script.
   */
  clusterCustomConfiguration?: GetClusterResponseBodyClusterCustomConfiguration;
  /**
   * @remarks
   * The E-HPC cluster ID.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The deployment type of the cluster. Valid values:
   * 
   * - Integrated: Public cloud
   * 
   * - Hybrid: Hybrid cloud
   * 
   * - Custom: Custom cluster
   * 
   * @example
   * Integrated
   */
  clusterMode?: string;
  /**
   * @remarks
   * The cluster modification time. The time follows the ISO 8601 standard and is in UTC+0. The format is yyyy-MM-ddTHH:mmZ. For more information, see [ISO 8601](https://help.aliyun.com/document_detail/25696.html).
   * 
   * @example
   * 2024-08-06T12:43:01.000Z
   */
  clusterModifyTime?: string;
  /**
   * @remarks
   * The E-HPC cluster name.
   * 
   * @example
   * slurm22.05.8-cluster-20240614
   */
  clusterName?: string;
  /**
   * @remarks
   * The cluster status. Valid values:
   * 
   * - uninit: Installing
   * 
   * - creating: Creating
   * 
   * - initing: Initializing
   * 
   * - running: Running
   * 
   * - exception: Abnormal
   * 
   * - releasing: Releasing
   * 
   * - stopping: Stopping
   * 
   * - stopped: Stopped
   * 
   * - pending: Pending configuration
   * 
   * @example
   * running
   */
  clusterStatus?: string;
  /**
   * @remarks
   * The virtual switch ID used by the cluster.
   * 
   * @example
   * vsw-bp1p2uugqsjppno******
   */
  clusterVSwitchId?: string;
  /**
   * @remarks
   * The Virtual Private Cloud (VPC) ID used by the cluster.
   * 
   * @example
   * vpc-uf6u3lk1pjy28eg*****
   */
  clusterVpcId?: string;
  /**
   * @remarks
   * Indicates whether delete protection is enabled for the cluster. Valid values:
   * 
   * - true: Enable delete protection.
   * 
   * - false: Do not enable delete protection.
   * 
   * @example
   * true
   */
  deleteProtection?: string;
  /**
   * @remarks
   * The E-HPC product version number.
   * 
   * @example
   * 2.0.0
   */
  ehpcVersion?: string;
  /**
   * @remarks
   * Indicates whether auto scale-in is enabled for the cluster. Valid values:
   * 
   * - true: Enable
   * 
   * - false: Disable
   * 
   * @example
   * true
   */
  enableScaleIn?: boolean;
  /**
   * @remarks
   * Indicates whether auto scale-out is enabled for the cluster. Valid values:
   * 
   * - true: Enable
   * 
   * - false: Disable
   * 
   * @example
   * true
   */
  enableScaleOut?: boolean;
  /**
   * @remarks
   * The interval for cluster auto scale-out.
   * 
   * @example
   * 2
   */
  growInterval?: number;
  /**
   * @remarks
   * The idle time of the cluster\\"s compute nodes.
   * 
   * @example
   * 4
   */
  idleInterval?: number;
  /**
   * @remarks
   * The cluster control plane node configuration.
   */
  manager?: GetClusterResponseBodyManager;
  /**
   * @remarks
   * The total number of cores of compute nodes the cluster can manage.
   * 
   * @example
   * 10000
   */
  maxCoreCount?: string;
  /**
   * @remarks
   * The number of compute nodes the cluster can manage.
   * 
   * @example
   * 100
   */
  maxCount?: string;
  /**
   * @remarks
   * The cluster monitoring details.
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
   * The cluster scheduling details.
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

