// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateClusterShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of software that you want to install in the cluster. Valid values of N: 0 to 10.
   */
  additionalPackagesShrink?: string;
  /**
   * @remarks
   * The configurations of the custom addons in the cluster. Only one addon is supported.
   */
  addonsShrink?: string;
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
  clusterCredentialsShrink?: string;
  /**
   * @remarks
   * The post-processing script of the cluster.
   */
  clusterCustomConfigurationShrink?: string;
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
  managerShrink?: string;
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
  queuesShrink?: string;
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
  sharedStoragesShrink?: string;
  /**
   * @remarks
   * The tags of the cluster.
   */
  tagsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      additionalPackagesShrink: 'AdditionalPackages',
      addonsShrink: 'Addons',
      clientVersion: 'ClientVersion',
      clusterCategory: 'ClusterCategory',
      clusterCredentialsShrink: 'ClusterCredentials',
      clusterCustomConfigurationShrink: 'ClusterCustomConfiguration',
      clusterDescription: 'ClusterDescription',
      clusterMode: 'ClusterMode',
      clusterName: 'ClusterName',
      clusterVSwitchId: 'ClusterVSwitchId',
      clusterVpcId: 'ClusterVpcId',
      deletionProtection: 'DeletionProtection',
      isEnterpriseSecurityGroup: 'IsEnterpriseSecurityGroup',
      managerShrink: 'Manager',
      maxCoreCount: 'MaxCoreCount',
      maxCount: 'MaxCount',
      queuesShrink: 'Queues',
      resourceGroupId: 'ResourceGroupId',
      securityGroupId: 'SecurityGroupId',
      sharedStoragesShrink: 'SharedStorages',
      tagsShrink: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalPackagesShrink: 'string',
      addonsShrink: 'string',
      clientVersion: 'string',
      clusterCategory: 'string',
      clusterCredentialsShrink: 'string',
      clusterCustomConfigurationShrink: 'string',
      clusterDescription: 'string',
      clusterMode: 'string',
      clusterName: 'string',
      clusterVSwitchId: 'string',
      clusterVpcId: 'string',
      deletionProtection: 'boolean',
      isEnterpriseSecurityGroup: 'boolean',
      managerShrink: 'string',
      maxCoreCount: 'number',
      maxCount: 'number',
      queuesShrink: 'string',
      resourceGroupId: 'string',
      securityGroupId: 'string',
      sharedStoragesShrink: 'string',
      tagsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

