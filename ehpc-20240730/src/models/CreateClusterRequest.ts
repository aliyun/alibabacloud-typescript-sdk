// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateClusterRequestAdditionalPackages } from "./CreateClusterRequestAdditionalPackages";
import { CreateClusterRequestAddons } from "./CreateClusterRequestAddons";
import { CreateClusterRequestClusterCredentials } from "./CreateClusterRequestClusterCredentials";
import { CreateClusterRequestClusterCustomConfiguration } from "./CreateClusterRequestClusterCustomConfiguration";
import { CreateClusterRequestManager } from "./CreateClusterRequestManager";
import { QueueTemplate } from "./QueueTemplate";
import { SharedStorageTemplate } from "./SharedStorageTemplate";
import { CreateClusterRequestTags } from "./CreateClusterRequestTags";


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

