// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueueTemplate } from "./QueueTemplate";
import { SharedStorageTemplate } from "./SharedStorageTemplate";
import { NodeTemplate } from "./NodeTemplate";


export class CreateClusterRequestAdditionalPackages extends $dara.Model {
  /**
   * @remarks
   * The name of the software.
   * 
   * @example
   * mpich
   */
  name?: string;
  /**
   * @remarks
   * The version of the software.
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
   * The resource configuration of the custom service component.
   * 
   * @example
   * "{\\\\"EipResource\\\\": {\\\\"AutoCreate\\\\": true}, \\\\"EcsResources\\\\": [{\\\\"InstanceType\\\\": \\\\"ecs.c7.xlarge\\\\", \\\\"ImageId\\\\": \\\\"centos_7_6_x64_20G_alibase_20211130.vhd\\\\", \\\\"SystemDisk\\\\": {\\\\"Category\\\\": \\\\"cloud_essd\\\\", \\\\"Size\\\\": 40, \\\\"Level\\\\": \\\\"PL0\\\\"}, \\\\"EnableHT\\\\": true, \\\\"InstanceChargeType\\\\": \\\\"PostPaid\\\\", \\\\"SpotStrategy\\\\": \\\\"NoSpot\\\\"}]}"
   */
  resourcesSpec?: string;
  /**
   * @remarks
   * The service configuration of the custom service component.
   * 
   * @example
   * "[{\\\\"ServiceName\\\\": \\\\"SSH\\\\", \\\\"ServiceAccessType\\\\": null, \\\\"ServiceAccessUrl\\\\": null, \\\\"NetworkACL\\\\": [{\\\\"IpProtocol\\\\": \\\\"TCP\\\\", \\\\"Port\\\\": 22, \\\\"SourceCidrIp\\\\": \\\\"0.0.0.0/0\\\\"}]}, {\\\\"ServiceName\\\\": \\\\"VNC\\\\", \\\\"ServiceAccessType\\\\": null, \\\\"ServiceAccessUrl\\\\": null, \\\\"NetworkACL\\\\": [{\\\\"IpProtocol\\\\": \\\\"TCP\\\\", \\\\"Port\\\\": 12016, \\\\"SourceCidrIp\\\\": \\\\"0.0.0.0/0\\\\"}]}, {\\\\"ServiceName\\\\": \\\\"CLIENT\\\\", \\\\"ServiceAccessType\\\\": \\\\"URL\\\\", \\\\"ServiceAccessUrl\\\\": \\\\"\\\\", \\\\"NetworkACL\\\\": [{\\\\"IpProtocol\\\\": \\\\"TCP\\\\", \\\\"Port\\\\": 12011, \\\\"SourceCidrIp\\\\": \\\\"0.0.0.0/0\\\\"}]}]"
   */
  servicesSpec?: string;
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
   * The key pair name. The name must be 2 to 128 characters long, start with a letter or a Chinese character, and not start with `http://` or `https://`. It can contain digits, colons (:), underscores (_), and hyphens (-).
   * 
   * > To use an ECS key pair, see [Create a key pair](https://help.aliyun.com/document_detail/51793.html).
   * 
   * @example
   * ali0824
   */
  keyPairName?: string;
  /**
   * @remarks
   * The root password of the login node. The password must be 8 to 20 characters long and include characters from at least three of the following categories: uppercase letters, lowercase letters, digits, and special characters. The supported special characters are: `() ~ ! @ # $ % ^ & * - = + { } [ ] : ; ‘ < > , . ? /`
   * 
   * > Use HTTPS when calling the API to prevent password exposure.
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
   * The execution parameters for the post-processing script.
   * 
   * @example
   * E-HPC cn-hangzhou
   */
  args?: string;
  /**
   * @remarks
   * The download URL for the post-processing script.
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
   * The DNS service type.
   * 
   * @example
   * NIS
   */
  type?: string;
  /**
   * @remarks
   * The DNS service version.
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
   * The directory service type.
   * 
   * @example
   * NIS
   */
  type?: string;
  /**
   * @remarks
   * The directory service version.
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
   * Configuration for the DNS service.
   */
  DNS?: CreateClusterRequestManagerDNS;
  /**
   * @remarks
   * Configuration for the directory service.
   */
  directoryService?: CreateClusterRequestManagerDirectoryService;
  /**
   * @remarks
   * Hardware configuration for the manager node.
   */
  managerNode?: NodeTemplate;
  /**
   * @remarks
   * Configuration for the scheduler.
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
   * The tag key. The key cannot be an empty string. The key can be up to 128 characters in length. It cannot start with `aliyun` or `acs:` and cannot contain `http://` or `https://`.
   * 
   * @example
   * ClusterId
   */
  key?: string;
  /**
   * @remarks
   * The tag value. The value can be an empty string. The value can be up to 128 characters in length and cannot contain `http://` or `https://`.
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
   * A list of software to install in the cluster. You can specify up to 10 packages.
   */
  additionalPackages?: CreateClusterRequestAdditionalPackages[];
  /**
   * @remarks
   * The configuration of the custom service component for the cluster. Only one component is supported.
   */
  addons?: CreateClusterRequestAddons[];
  /**
   * @remarks
   * The version of the E-HPC client. By default, the latest version is used.
   * 
   * @example
   * 2.1.0
   */
  clientVersion?: string;
  /**
   * @remarks
   * The edition of the cluster. Valid values:
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
   * The security credentials for the cluster.
   */
  clusterCredentials?: CreateClusterRequestClusterCredentials;
  /**
   * @remarks
   * The post-processing script for the cluster.
   */
  clusterCustomConfiguration?: CreateClusterRequestClusterCustomConfiguration;
  /**
   * @remarks
   * The description of the cluster. The description must be 2 to 128 characters long and can contain letters, Chinese characters, digits, hyphens (-), and underscores (_).
   * 
   * @example
   * slurm22.05.8-cluster-20240718
   */
  clusterDescription?: string;
  /**
   * @remarks
   * The cluster\\"s deployment type. Valid values:
   * 
   * - Integrated: An integrated cluster.
   * 
   * - Hybrid: A hybrid cloud cluster.
   * 
   * - Custom: A custom cluster.
   * 
   * @example
   * Integrated
   */
  clusterMode?: string;
  /**
   * @remarks
   * The name of the cluster. The name must be 2 to 128 characters long and can contain letters, Chinese characters, digits, hyphens (-), and underscores (_).
   * 
   * @example
   * slurm22.05.8-cluster-20240718
   */
  clusterName?: string;
  /**
   * @remarks
   * The ID of the VSwitch for the cluster. The VSwitch must be in the VPC specified by `ClusterVpcId`.
   * 
   * Call the [DescribeVpcs](https://help.aliyun.com/document_detail/448581.html) operation to find available VPCs and VSwitches.
   * 
   * @example
   * vsw-f8za5p0mwzgdu3wgx****
   */
  clusterVSwitchId?: string;
  /**
   * @remarks
   * The ID of the VPC for the cluster.
   * 
   * @example
   * vpc-m5efjevmclc0xdmys****
   */
  clusterVpcId?: string;
  /**
   * @remarks
   * Specifies whether to enable deletion protection for the cluster. This feature prevents the cluster from being deleted via the console or the [DeleteCluster](https://help.aliyun.com/document_detail/424406.html) operation.
   * 
   * - true: Enables deletion protection.
   * 
   * - false: Disables deletion protection.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  deletionProtection?: boolean;
  growInterval?: number;
  idleInterval?: number;
  /**
   * @remarks
   * Specifies whether to use an enterprise security group. Valid values:
   * 
   * - true: The system automatically creates and uses an enterprise security group.
   * 
   * - false: The system automatically creates and uses a security group.
   * 
   * For more information about how to select a security group type, see [Security groups and enterprise security groups](https://help.aliyun.com/document_detail/605897.html).
   * 
   * @example
   * false
   */
  isEnterpriseSecurityGroup?: boolean;
  /**
   * @remarks
   * Configuration for the cluster manager node.
   */
  manager?: CreateClusterRequestManager;
  /**
   * @remarks
   * The maximum number of CPU cores that the cluster can manage across all compute nodes. Valid values: 0 to 100,000.
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
   * Configuration for the cluster queues. You can specify up to 8 queues.
   */
  queues?: QueueTemplate[];
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * Call the [ListResourceGroups](https://help.aliyun.com/document_detail/158855.html) operation to find resource group IDs.
   * 
   * @example
   * rg-acfmxazb4******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the security group for the cluster.
   * 
   * Call the [DescribeSecurityGroups](https://help.aliyun.com/document_detail/25556.html) operation to find available security groups in the current region.
   * 
   * @example
   * sg-bp13n61xsydodfyg****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * Configuration for the cluster\\"s shared storage.
   */
  sharedStorages?: SharedStorageTemplate[];
  /**
   * @remarks
   * The list of tags to add to the cluster. You can add up to 20 tags.
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
      growInterval: 'GrowInterval',
      idleInterval: 'IdleInterval',
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
      growInterval: 'number',
      idleInterval: 'number',
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

