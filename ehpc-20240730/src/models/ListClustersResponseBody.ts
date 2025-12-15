// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClustersResponseBodyClustersAdditionalPackages extends $dara.Model {
  /**
   * @remarks
   * The software name.
   * 
   * @example
   * gromacs
   */
  name?: string;
  /**
   * @remarks
   * The software version.
   * 
   * @example
   * 2024.1
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
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

export class ListClustersResponseBodyClustersAddonsResourcesSpec extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * i-bp1bg85d2q6laic8****
   */
  ecsInstanceId?: string;
  /**
   * @remarks
   * The Elastic IP Address (EIP) ID.
   * 
   * @example
   * eip-bp1vi9124tbx1g3kr****
   */
  eipInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      ecsInstanceId: 'EcsInstanceId',
      eipInstanceId: 'EipInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecsInstanceId: 'string',
      eipInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponseBodyClustersAddonsServicesSpec extends $dara.Model {
  /**
   * @remarks
   * The service access type.
   * 
   * @example
   * URL
   */
  serviceAccessType?: string;
  /**
   * @remarks
   * The service access URL.
   * 
   * @example
   * https://47.96.xx.xx:12008
   */
  serviceAccessUrl?: string;
  /**
   * @remarks
   * The service name.
   * 
   * This parameter is required.
   * 
   * @example
   * Web Portal
   */
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      serviceAccessType: 'ServiceAccessType',
      serviceAccessUrl: 'ServiceAccessUrl',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceAccessType: 'string',
      serviceAccessUrl: 'string',
      serviceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponseBodyClustersAddons extends $dara.Model {
  /**
   * @remarks
   * The addon ID.
   * 
   * @example
   * Login-1.0-W2g****
   */
  addonId?: string;
  /**
   * @remarks
   * The addon description.
   */
  description?: string;
  /**
   * @remarks
   * The addon label.
   */
  label?: string;
  /**
   * @remarks
   * The addon name.
   * 
   * This parameter is required.
   * 
   * @example
   * Login
   */
  name?: string;
  /**
   * @remarks
   * The resource configurations of the addon.
   */
  resourcesSpec?: ListClustersResponseBodyClustersAddonsResourcesSpec;
  /**
   * @remarks
   * The information about the addon services.
   */
  servicesSpec?: ListClustersResponseBodyClustersAddonsServicesSpec[];
  /**
   * @remarks
   * The addon state.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The addon version.
   * 
   * This parameter is required.
   * 
   * @example
   * 1.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      addonId: 'AddonId',
      description: 'Description',
      label: 'Label',
      name: 'Name',
      resourcesSpec: 'ResourcesSpec',
      servicesSpec: 'ServicesSpec',
      status: 'Status',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addonId: 'string',
      description: 'string',
      label: 'string',
      name: 'string',
      resourcesSpec: ListClustersResponseBodyClustersAddonsResourcesSpec,
      servicesSpec: { 'type': 'array', 'itemType': ListClustersResponseBodyClustersAddonsServicesSpec },
      status: 'string',
      version: 'string',
    };
  }

  validate() {
    if(this.resourcesSpec && typeof (this.resourcesSpec as any).validate === 'function') {
      (this.resourcesSpec as any).validate();
    }
    if(Array.isArray(this.servicesSpec)) {
      $dara.Model.validateArray(this.servicesSpec);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponseBodyClustersClusterCustomConfiguration extends $dara.Model {
  /**
   * @remarks
   * The parameters of the post-processing script.
   * 
   * @example
   * demo
   */
  args?: string;
  /**
   * @remarks
   * The link to the post-processing script.
   * 
   * @example
   * https://xxxxx
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

export class ListClustersResponseBodyClustersManagerDNS extends $dara.Model {
  /**
   * @remarks
   * The resolution type.
   * 
   * @example
   * NIS
   */
  type?: string;
  /**
   * @remarks
   * The version of the domain name resolution service.
   * 
   * @example
   * 2.31
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class ListClustersResponseBodyClustersManagerDirectoryService extends $dara.Model {
  /**
   * @remarks
   * The type of the domain account.
   * 
   * @example
   * NIS
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
      type: 'Type',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class ListClustersResponseBodyClustersManagerScheduler extends $dara.Model {
  /**
   * @remarks
   * The scheduler type.
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
      type: 'Type',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class ListClustersResponseBodyClustersManager extends $dara.Model {
  /**
   * @remarks
   * The configurations of the domain name resolution service.
   */
  DNS?: ListClustersResponseBodyClustersManagerDNS;
  /**
   * @remarks
   * The configurations of the directory service.
   */
  directoryService?: ListClustersResponseBodyClustersManagerDirectoryService;
  /**
   * @remarks
   * The configurations of the scheduler service.
   */
  scheduler?: ListClustersResponseBodyClustersManagerScheduler;
  static names(): { [key: string]: string } {
    return {
      DNS: 'DNS',
      directoryService: 'DirectoryService',
      scheduler: 'Scheduler',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DNS: ListClustersResponseBodyClustersManagerDNS,
      directoryService: ListClustersResponseBodyClustersManagerDirectoryService,
      scheduler: ListClustersResponseBodyClustersManagerScheduler,
    };
  }

  validate() {
    if(this.DNS && typeof (this.DNS as any).validate === 'function') {
      (this.DNS as any).validate();
    }
    if(this.directoryService && typeof (this.directoryService as any).validate === 'function') {
      (this.directoryService as any).validate();
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

export class ListClustersResponseBodyClustersNodes extends $dara.Model {
  /**
   * @remarks
   * The number of malfunctioning compute nodes.
   * 
   * @example
   * 0
   */
  abnormalCounts?: number;
  /**
   * @remarks
   * The number of compute nodes that are being created.
   * 
   * @example
   * 0
   */
  creatingCounts?: number;
  /**
   * @remarks
   * The number of running compute nodes.
   * 
   * @example
   * 1
   */
  runningCounts?: number;
  static names(): { [key: string]: string } {
    return {
      abnormalCounts: 'AbnormalCounts',
      creatingCounts: 'CreatingCounts',
      runningCounts: 'RunningCounts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abnormalCounts: 'number',
      creatingCounts: 'number',
      runningCounts: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponseBodyClustersUsers extends $dara.Model {
  /**
   * @remarks
   * The number of ordinary users.
   * 
   * @example
   * 2
   */
  normalCounts?: number;
  /**
   * @remarks
   * The number of administrators.
   * 
   * @example
   * 2
   */
  sudoCounts?: number;
  static names(): { [key: string]: string } {
    return {
      normalCounts: 'NormalCounts',
      sudoCounts: 'SudoCounts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      normalCounts: 'number',
      sudoCounts: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponseBodyClusters extends $dara.Model {
  /**
   * @remarks
   * The information about installed software in the cluster.
   */
  additionalPackages?: ListClustersResponseBodyClustersAdditionalPackages[];
  /**
   * @remarks
   * The information about the addons in the cluster.
   */
  addons?: ListClustersResponseBodyClustersAddons[];
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
   * The logon credential type of the cluster. Valid values:
   * 
   * *   password: requires passwords for logons.
   * *   keypair: requires key pairs for logons.
   */
  clusterCredentials?: string[];
  /**
   * @remarks
   * The post-processing script used by the cluster.
   */
  clusterCustomConfiguration?: ListClustersResponseBodyClustersClusterCustomConfiguration;
  /**
   * @remarks
   * The cluster description.
   * 
   * @example
   * Demo
   */
  clusterDescription?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * ehpc-hz-VMKe******
   */
  clusterId?: string;
  /**
   * @remarks
   * The deployment type of the cluster. Valid values:
   * 
   * *   Integrated: public cloud
   * *   Hybrid: hybrid cloud
   * *   Custom: a custom cluster
   * 
   * @example
   * Integrated
   */
  clusterMode?: string;
  /**
   * @remarks
   * The time when the cluster was modified. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mmZ format. The time is displayed in UTC. For more information, see [ISO 8601](https://help.aliyun.com/document_detail/25696.html).
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
   * slurm22.05.8-cluster-20240227
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
   * *   Releasing: The cluster is being released.
   * *   stopping: The cluster is being stopped.
   * *   stopped: The cluster is stopped.
   * *   exception: The cluster has run into an exception.
   * *   pending: The cluster is waiting to be configured.
   * 
   * @example
   * running
   */
  clusterStatus?: string;
  /**
   * @remarks
   * The vCPU-hour usage of the cluster.
   * 
   * @example
   * 1000
   */
  clusterUsedCoreTime?: number;
  /**
   * @remarks
   * The ID of the vSwitch used by the cluster.
   * 
   * @example
   * vsw-f8za5p0mwzgdu3wgx****
   */
  clusterVSwitchId?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) used by the cluster.
   * 
   * @example
   * vpc-m5efjevmclc0xdmys****
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
  deletionProtection?: boolean;
  /**
   * @remarks
   * The Elastic High Performance Computing (E-HPC) version.
   * 
   * @example
   * 2.0.0
   */
  ehpcVersion?: string;
  /**
   * @remarks
   * The configurations of the cluster management node.
   */
  manager?: ListClustersResponseBodyClustersManager;
  /**
   * @remarks
   * The maximum total number of vCPUs used by the compute nodes that can be managed by the cluster.
   * 
   * @example
   * 10000
   */
  maxCoreCount?: number;
  /**
   * @remarks
   * The maximum number of compute nodes that can be managed by the cluster.
   * 
   * @example
   * 500
   */
  maxCount?: number;
  /**
   * @remarks
   * The node statistics of the cluster.
   */
  nodes?: ListClustersResponseBodyClustersNodes;
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
   * The ID of the security group used by the cluster.
   * 
   * @example
   * sg-bp13n61xsydodfyg****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The user attribute information of the cluster.
   */
  users?: ListClustersResponseBodyClustersUsers;
  static names(): { [key: string]: string } {
    return {
      additionalPackages: 'AdditionalPackages',
      addons: 'Addons',
      clusterCategory: 'ClusterCategory',
      clusterCreateTime: 'ClusterCreateTime',
      clusterCredentials: 'ClusterCredentials',
      clusterCustomConfiguration: 'ClusterCustomConfiguration',
      clusterDescription: 'ClusterDescription',
      clusterId: 'ClusterId',
      clusterMode: 'ClusterMode',
      clusterModifyTime: 'ClusterModifyTime',
      clusterName: 'ClusterName',
      clusterStatus: 'ClusterStatus',
      clusterUsedCoreTime: 'ClusterUsedCoreTime',
      clusterVSwitchId: 'ClusterVSwitchId',
      clusterVpcId: 'ClusterVpcId',
      deletionProtection: 'DeletionProtection',
      ehpcVersion: 'EhpcVersion',
      manager: 'Manager',
      maxCoreCount: 'MaxCoreCount',
      maxCount: 'MaxCount',
      nodes: 'Nodes',
      resourceGroupId: 'ResourceGroupId',
      securityGroupId: 'SecurityGroupId',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalPackages: { 'type': 'array', 'itemType': ListClustersResponseBodyClustersAdditionalPackages },
      addons: { 'type': 'array', 'itemType': ListClustersResponseBodyClustersAddons },
      clusterCategory: 'string',
      clusterCreateTime: 'string',
      clusterCredentials: { 'type': 'array', 'itemType': 'string' },
      clusterCustomConfiguration: ListClustersResponseBodyClustersClusterCustomConfiguration,
      clusterDescription: 'string',
      clusterId: 'string',
      clusterMode: 'string',
      clusterModifyTime: 'string',
      clusterName: 'string',
      clusterStatus: 'string',
      clusterUsedCoreTime: 'number',
      clusterVSwitchId: 'string',
      clusterVpcId: 'string',
      deletionProtection: 'boolean',
      ehpcVersion: 'string',
      manager: ListClustersResponseBodyClustersManager,
      maxCoreCount: 'number',
      maxCount: 'number',
      nodes: ListClustersResponseBodyClustersNodes,
      resourceGroupId: 'string',
      securityGroupId: 'string',
      users: ListClustersResponseBodyClustersUsers,
    };
  }

  validate() {
    if(Array.isArray(this.additionalPackages)) {
      $dara.Model.validateArray(this.additionalPackages);
    }
    if(Array.isArray(this.addons)) {
      $dara.Model.validateArray(this.addons);
    }
    if(Array.isArray(this.clusterCredentials)) {
      $dara.Model.validateArray(this.clusterCredentials);
    }
    if(this.clusterCustomConfiguration && typeof (this.clusterCustomConfiguration as any).validate === 'function') {
      (this.clusterCustomConfiguration as any).validate();
    }
    if(this.manager && typeof (this.manager as any).validate === 'function') {
      (this.manager as any).validate();
    }
    if(this.nodes && typeof (this.nodes as any).validate === 'function') {
      (this.nodes as any).validate();
    }
    if(this.users && typeof (this.users as any).validate === 'function') {
      (this.users as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of clusters.
   */
  clusters?: ListClustersResponseBodyClusters[];
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
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
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      clusters: 'Clusters',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusters: { 'type': 'array', 'itemType': ListClustersResponseBodyClusters },
      pageNumber: 'string',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.clusters)) {
      $dara.Model.validateArray(this.clusters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

