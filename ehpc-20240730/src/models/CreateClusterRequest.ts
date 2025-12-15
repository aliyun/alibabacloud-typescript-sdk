// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueueTemplate } from "./QueueTemplate";
import { SharedStorageTemplate } from "./SharedStorageTemplate";
import { NodeTemplate } from "./NodeTemplate";


export class CreateClusterRequestAdditionalPackages extends $dara.Model {
  /**
   * @remarks
   * The name of the software that you want to install in the cluster.
   * 
   * @example
   * mpich
   */
  name?: string;
  /**
   * @remarks
   * The version of the software that you want to install in the cluster.
   * 
   * @example
   * 4.0.3
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

export class CreateClusterRequestAddons extends $dara.Model {
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
   * 
   * @example
   * "{\\\\"EipResource\\\\": {\\\\"AutoCreate\\\\": true}, \\\\"EcsResources\\\\": [{\\\\"InstanceType\\\\": \\\\"ecs.c7.xlarge\\\\", \\\\"ImageId\\\\": \\\\"centos_7_6_x64_20G_alibase_20211130.vhd\\\\", \\\\"SystemDisk\\\\": {\\\\"Category\\\\": \\\\"cloud_essd\\\\", \\\\"Size\\\\": 40, \\\\"Level\\\\": \\\\"PL0\\\\"}, \\\\"EnableHT\\\\": true, \\\\"InstanceChargeType\\\\": \\\\"PostPaid\\\\", \\\\"SpotStrategy\\\\": \\\\"NoSpot\\\\"}]}"
   */
  resourcesSpec?: string;
  /**
   * @remarks
   * The service configurations of the addon.
   * 
   * @example
   * "[{\\\\"ServiceName\\\\": \\\\"SSH\\\\", \\\\"ServiceAccessType\\\\": null, \\\\"ServiceAccessUrl\\\\": null, \\\\"NetworkACL\\\\": [{\\\\"IpProtocol\\\\": \\\\"TCP\\\\", \\\\"Port\\\\": 22, \\\\"SourceCidrIp\\\\": \\\\"0.0.0.0/0\\\\"}]}, {\\\\"ServiceName\\\\": \\\\"VNC\\\\", \\\\"ServiceAccessType\\\\": null, \\\\"ServiceAccessUrl\\\\": null, \\\\"NetworkACL\\\\": [{\\\\"IpProtocol\\\\": \\\\"TCP\\\\", \\\\"Port\\\\": 12016, \\\\"SourceCidrIp\\\\": \\\\"0.0.0.0/0\\\\"}]}, {\\\\"ServiceName\\\\": \\\\"CLIENT\\\\", \\\\"ServiceAccessType\\\\": \\\\"URL\\\\", \\\\"ServiceAccessUrl\\\\": \\\\"\\\\", \\\\"NetworkACL\\\\": [{\\\\"IpProtocol\\\\": \\\\"TCP\\\\", \\\\"Port\\\\": 12011, \\\\"SourceCidrIp\\\\": \\\\"0.0.0.0/0\\\\"}]}]"
   */
  servicesSpec?: string;
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
      name: 'Name',
      resourcesSpec: 'ResourcesSpec',
      servicesSpec: 'ServicesSpec',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      resourcesSpec: 'string',
      servicesSpec: 'string',
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

export class CreateClusterRequestClusterCredentials extends $dara.Model {
  /**
   * @remarks
   * The name of the key pair. The name must be 2 to 128 characters in length. The name must start with a letter but cannot start with `http://` or `https://`. The name can contain digits, letters, colons (:), underscores (_), and hyphens (-).
   * 
   * >  For more information, see [Create a key pair](https://help.aliyun.com/document_detail/51793.html).
   * 
   * @example
   * ali0824
   */
  keyPairName?: string;
  /**
   * @remarks
   * The password for the root user to log on to the node. The password must be 8 to 20 characters in length, and must contain at least 3 of the following character types: uppercase letters, lowercase letters, digits, and special characters. The following special characters are supported: `() ~ ! @ # $ % ^ & * - = + { } [ ] : ; \\" < > , . ? /`
   * 
   * >  We recommend that you use HTTPS to call the API operation to prevent password leakage.
   * 
   * @example
   * **********
   */
  password?: string;
  static names(): { [key: string]: string } {
    return {
      keyPairName: 'KeyPairName',
      password: 'Password',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPairName: 'string',
      password: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterRequestClusterCustomConfiguration extends $dara.Model {
  /**
   * @remarks
   * The runtime parameters of the script after the cluster is created.
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

export class CreateClusterRequestManagerDNS extends $dara.Model {
  /**
   * @remarks
   * The domain name resolution type.
   * 
   * Valid values:
   * 
   * *   NIS
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

export class CreateClusterRequestManagerDirectoryService extends $dara.Model {
  /**
   * @remarks
   * The type of the domain account.
   * 
   * Valid values:
   * 
   * *   NIS
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

export class CreateClusterRequestManagerScheduler extends $dara.Model {
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

export class CreateClusterRequestManager extends $dara.Model {
  /**
   * @remarks
   * The configurations of the domain name resolution service.
   */
  DNS?: CreateClusterRequestManagerDNS;
  /**
   * @remarks
   * The configurations of the domain account service.
   */
  directoryService?: CreateClusterRequestManagerDirectoryService;
  /**
   * @remarks
   * The hardware configurations of the management node.
   */
  managerNode?: NodeTemplate;
  /**
   * @remarks
   * The configurations of the scheduler service.
   */
  scheduler?: CreateClusterRequestManagerScheduler;
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
      DNS: CreateClusterRequestManagerDNS,
      directoryService: CreateClusterRequestManagerDirectoryService,
      managerNode: NodeTemplate,
      scheduler: CreateClusterRequestManagerScheduler,
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

export class CreateClusterRequestTags extends $dara.Model {
  /**
   * @remarks
   * The tag key. Valid values of N: 1 to 20. The tag key cannot be an empty string. The tag key can be up to 128 characters in length and cannot start with `acs:` or `aliyun`. The tag key cannot contain `http://` or `https://`.
   * 
   * @example
   * ClusterId
   */
  key?: string;
  /**
   * @remarks
   * The tag value. Valid values of N: 1 to 20. The tag value can be an empty string. The tag value can be up to 128 characters in length and cannot contain `http://` or `https://`.
   * 
   * @example
   * ehpc-hz-******
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterRequest extends $dara.Model {
  /**
   * @remarks
   * The list of software that you want to install in the cluster. Valid values of N: 0 to 10.
   */
  additionalPackages?: CreateClusterRequestAdditionalPackages[];
  /**
   * @remarks
   * The configurations of the custom addons in the cluster. Only one addon is supported.
   */
  addons?: CreateClusterRequestAddons[];
  /**
   * @remarks
   * The client version. By default, the latest version is used.
   * 
   * @example
   * 2.1.0
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
   * The access credentials of the cluster.
   */
  clusterCredentials?: CreateClusterRequestClusterCredentials;
  /**
   * @remarks
   * The post-processing script of the cluster.
   */
  clusterCustomConfiguration?: CreateClusterRequestClusterCustomConfiguration;
  /**
   * @remarks
   * The cluster description. The description must be 1 to 128 characters in length and can contain letters, digits, hyphens (-), and underscores (_).
   * 
   * @example
   * slurm22.05.8-cluster-20240718
   */
  clusterDescription?: string;
  /**
   * @remarks
   * The deployment mode of the cluster. Valid values:
   * 
   * *   Integrated
   * *   Hybrid
   * *   Custom
   * 
   * @example
   * Integrated
   */
  clusterMode?: string;
  /**
   * @remarks
   * The cluster name. The name must be 1 to 128 characters in length and can contain letters, digits, hyphens (-), and underscores (_).
   * 
   * @example
   * slurm22.05.8-cluster-20240718
   */
  clusterName?: string;
  /**
   * @remarks
   * The ID of the vSwitch that you want the cluster to use. The vSwitch must reside in the VPC that is specified by the `ClusterVpcId` parameter.
   * 
   * You can call the [DescribeVpcs](https://help.aliyun.com/document_detail/448581.html) operation to query information about the created VPCs and vSwitches.
   * 
   * @example
   * vsw-f8za5p0mwzgdu3wgx****
   */
  clusterVSwitchId?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) in which the cluster resides.
   * 
   * @example
   * vpc-m5efjevmclc0xdmys****
   */
  clusterVpcId?: string;
  /**
   * @remarks
   * Specifies whether to enable deletion protection for the cluster. Deletion protection decides whether the cluster can be deleted in the console or by calling the [DeleteCluster](https://help.aliyun.com/document_detail/424406.html) operation. Valid values:
   * 
   * *   true
   * *   false
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  deletionProtection?: boolean;
  /**
   * @remarks
   * Specifies whether to use an advanced security group. Valid values:
   * 
   * *   true: automatically creates and uses an advanced security group.
   * *   false: automatically creates and uses a basic security group.
   * 
   * For more information, see [Basic security groups and advanced security groups](https://help.aliyun.com/document_detail/605897.html).
   * 
   * @example
   * false
   */
  isEnterpriseSecurityGroup?: boolean;
  /**
   * @remarks
   * The configurations of the cluster management node.
   */
  manager?: CreateClusterRequestManager;
  /**
   * @remarks
   * The maximum number of vCPUs that can be used by compute nodes in the cluster. Valid values: 0 to 100,000.
   * 
   * @example
   * 10000
   */
  maxCoreCount?: number;
  /**
   * @remarks
   * The maximum number of compute nodes that the cluster can manage. Valid values: 0 to 5,000.
   * 
   * @example
   * 500
   */
  maxCount?: number;
  /**
   * @remarks
   * The queues in the cluster. The number of queues can be 0 to 8.
   */
  queues?: QueueTemplate[];
  /**
   * @remarks
   * The ID of the resource group to which the cluster belongs.
   * 
   * You can call the [ListResourceGroups](https://help.aliyun.com/document_detail/158855.html) operation to obtain the IDs of the resource groups.
   * 
   * @example
   * rg-acfmxazb4******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the security group to which the cluster belongs.
   * 
   * You can call the [DescribeSecurityGroups](https://help.aliyun.com/document_detail/25556.html) operation to query available security groups in the current region.
   * 
   * @example
   * sg-bp13n61xsydodfyg****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The shared storage resources of the cluster.
   */
  sharedStorages?: SharedStorageTemplate[];
  /**
   * @remarks
   * The tags of the cluster.
   */
  tags?: CreateClusterRequestTags[];
  static names(): { [key: string]: string } {
    return {
      additionalPackages: 'AdditionalPackages',
      addons: 'Addons',
      clientVersion: 'ClientVersion',
      clusterCategory: 'ClusterCategory',
      clusterCredentials: 'ClusterCredentials',
      clusterCustomConfiguration: 'ClusterCustomConfiguration',
      clusterDescription: 'ClusterDescription',
      clusterMode: 'ClusterMode',
      clusterName: 'ClusterName',
      clusterVSwitchId: 'ClusterVSwitchId',
      clusterVpcId: 'ClusterVpcId',
      deletionProtection: 'DeletionProtection',
      isEnterpriseSecurityGroup: 'IsEnterpriseSecurityGroup',
      manager: 'Manager',
      maxCoreCount: 'MaxCoreCount',
      maxCount: 'MaxCount',
      queues: 'Queues',
      resourceGroupId: 'ResourceGroupId',
      securityGroupId: 'SecurityGroupId',
      sharedStorages: 'SharedStorages',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalPackages: { 'type': 'array', 'itemType': CreateClusterRequestAdditionalPackages },
      addons: { 'type': 'array', 'itemType': CreateClusterRequestAddons },
      clientVersion: 'string',
      clusterCategory: 'string',
      clusterCredentials: CreateClusterRequestClusterCredentials,
      clusterCustomConfiguration: CreateClusterRequestClusterCustomConfiguration,
      clusterDescription: 'string',
      clusterMode: 'string',
      clusterName: 'string',
      clusterVSwitchId: 'string',
      clusterVpcId: 'string',
      deletionProtection: 'boolean',
      isEnterpriseSecurityGroup: 'boolean',
      manager: CreateClusterRequestManager,
      maxCoreCount: 'number',
      maxCount: 'number',
      queues: { 'type': 'array', 'itemType': QueueTemplate },
      resourceGroupId: 'string',
      securityGroupId: 'string',
      sharedStorages: { 'type': 'array', 'itemType': SharedStorageTemplate },
      tags: { 'type': 'array', 'itemType': CreateClusterRequestTags },
    };
  }

  validate() {
    if(Array.isArray(this.additionalPackages)) {
      $dara.Model.validateArray(this.additionalPackages);
    }
    if(Array.isArray(this.addons)) {
      $dara.Model.validateArray(this.addons);
    }
    if(this.clusterCredentials && typeof (this.clusterCredentials as any).validate === 'function') {
      (this.clusterCredentials as any).validate();
    }
    if(this.clusterCustomConfiguration && typeof (this.clusterCustomConfiguration as any).validate === 'function') {
      (this.clusterCustomConfiguration as any).validate();
    }
    if(this.manager && typeof (this.manager as any).validate === 'function') {
      (this.manager as any).validate();
    }
    if(Array.isArray(this.queues)) {
      $dara.Model.validateArray(this.queues);
    }
    if(Array.isArray(this.sharedStorages)) {
      $dara.Model.validateArray(this.sharedStorages);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

