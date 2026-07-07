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
   * The component instance ID.
   * 
   * @example
   * i-bp1bg85d2q6laic8****
   */
  ecsInstanceId?: string;
  /**
   * @remarks
   * The elastic IP address (EIP) ID.
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
   * The ID of the custom service component.
   * 
   * @example
   * Login-1.0-W2g****
   */
  addonId?: string;
  /**
   * @remarks
   * The description of the custom service component.
   * 
   * @example
   * Logon node, mainly used for connecting to the E-HPC cluster environment and submitting user tasks.
   */
  description?: string;
  /**
   * @remarks
   * The label of the custom service component.
   * 
   * @example
   * Logon node
   */
  label?: string;
  /**
   * @remarks
   * The name of the custom service component.
   * 
   * This parameter is required.
   * 
   * @example
   * Login
   */
  name?: string;
  /**
   * @remarks
   * The resource configuration of the component.
   */
  resourcesSpec?: ListClustersResponseBodyClustersAddonsResourcesSpec;
  /**
   * @remarks
   * The service configuration of the component.
   */
  servicesSpec?: ListClustersResponseBodyClustersAddonsServicesSpec[];
  /**
   * @remarks
   * The status of the custom service component.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The version of the custom service component.
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
   * The parameters of the cluster post-processing script.
   * 
   * @example
   * demo
   */
  args?: string;
  /**
   * @remarks
   * The URL of the cluster post-processing script.
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
   * The domain name resolution type.
   * 
   * @example
   * NIS
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
   * The domain account type.
   * 
   * @example
   * NIS
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
   * The domain name resolution service configuration.
   */
  DNS?: ListClustersResponseBodyClustersManagerDNS;
  /**
   * @remarks
   * The domain account service configuration.
   */
  directoryService?: ListClustersResponseBodyClustersManagerDirectoryService;
  /**
   * @remarks
   * The scheduler service configuration.
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
   * The number of abnormal compute nodes.
   * 
   * @example
   * 0
   */
  abnormalCounts?: number;
  /**
   * @remarks
   * The number of compute nodes being created.
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
   * The number of regular users.
   * 
   * @example
   * 2
   */
  normalCounts?: number;
  /**
   * @remarks
   * The number of sudo users.
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
   * The software installed on the cluster.
   */
  additionalPackages?: ListClustersResponseBodyClustersAdditionalPackages[];
  /**
   * @remarks
   * The custom service component information of the cluster.
   */
  addons?: ListClustersResponseBodyClustersAddons[];
  /**
   * @remarks
   * The cluster edition. Valid values:
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
   * The time when the cluster was created. The time is displayed in UTC+0 in the ISO 8601 standard format of yyyy-MM-ddTHH:mmZ. For more information, see [ISO 8601](https://help.aliyun.com/document_detail/25696.html).
   * 
   * @example
   * 2024-08-06T12:43:01.000Z
   */
  clusterCreateTime?: string;
  /**
   * @remarks
   * The logon credential types of the cluster. Valid values:
   * 
   * - password: uses a password to log on to the cluster.
   * - keypair: uses a key pair to log on to the cluster.
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
   * - Integrated: public cloud
   * - Hybrid: hybrid cloud
   * - Custom: custom cluster
   * 
   * @example
   * Integrated
   */
  clusterMode?: string;
  /**
   * @remarks
   * The time when the cluster was last modified. The time is displayed in UTC+0 in the ISO 8601 standard format of yyyy-MM-ddTHH:mmZ. For more information, see [ISO 8601](https://help.aliyun.com/document_detail/25696.html).
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
   * The cluster status. Valid values:
   * 
   * - uninit: installing.
   * - creating: being created.
   * - initing: being initialized.
   * - running: running.
   * - releasing: being released.
   * - stopping: being stopped.
   * - stopped: stopped.
   * - exception: abnormal.
   * - pending: pending configuration.
   * 
   * @example
   * running
   */
  clusterStatus?: string;
  /**
   * @remarks
   * The core-hours consumed by the cluster.
   * 
   * @example
   * 1000
   */
  clusterUsedCoreTime?: number;
  /**
   * @remarks
   * The vSwitch ID used by the cluster.
   * 
   * @example
   * vsw-f8za5p0mwzgdu3wgx****
   */
  clusterVSwitchId?: string;
  /**
   * @remarks
   * The VPC ID used by the cluster.
   * 
   * @example
   * vpc-m5efjevmclc0xdmys****
   */
  clusterVpcId?: string;
  /**
   * @remarks
   * Indicates whether deletion protection is enabled for the cluster. Valid values:
   * 
   * - true: Deletion protection is enabled.
   * - false: Deletion protection is not enabled.
   * 
   * @example
   * true
   */
  deletionProtection?: boolean;
  /**
   * @remarks
   * The version of the E-HPC cluster.
   * 
   * @example
   * 2.0.0
   */
  ehpcVersion?: string;
  /**
   * @remarks
   * The management node configuration of the cluster.
   */
  manager?: ListClustersResponseBodyClustersManager;
  /**
   * @remarks
   * The maximum total number of vCPUs of compute nodes that the cluster can manage.
   * 
   * @example
   * 10000
   */
  maxCoreCount?: number;
  /**
   * @remarks
   * The maximum number of compute nodes that the cluster can manage.
   * 
   * @example
   * 500
   */
  maxCount?: number;
  /**
   * @remarks
   * The node count information of the cluster.
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
   * The security group ID used by the cluster.
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

export class ListClustersResponseBodyEhpcVersionStatistics extends $dara.Model {
  v1Count?: number;
  v2Count?: number;
  static names(): { [key: string]: string } {
    return {
      v1Count: 'V1Count',
      v2Count: 'V2Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      v1Count: 'number',
      v2Count: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The cluster details.
   */
  clusters?: ListClustersResponseBodyClusters[];
  ehpcVersionStatistics?: ListClustersResponseBodyEhpcVersionStatistics;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries on the current page.
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
   * The total number of entries in the list.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      clusters: 'Clusters',
      ehpcVersionStatistics: 'EhpcVersionStatistics',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusters: { 'type': 'array', 'itemType': ListClustersResponseBodyClusters },
      ehpcVersionStatistics: ListClustersResponseBodyEhpcVersionStatistics,
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
    if(this.ehpcVersionStatistics && typeof (this.ehpcVersionStatistics as any).validate === 'function') {
      (this.ehpcVersionStatistics as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

