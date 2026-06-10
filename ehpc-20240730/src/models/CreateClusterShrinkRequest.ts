// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateClusterShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * A list of software to install in the cluster. You can specify up to 10 packages.
   */
  additionalPackagesShrink?: string;
  /**
   * @remarks
   * The configuration of the custom service component for the cluster. Only one component is supported.
   */
  addonsShrink?: string;
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
  clusterCredentialsShrink?: string;
  /**
   * @remarks
   * The post-processing script for the cluster.
   */
  clusterCustomConfigurationShrink?: string;
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
  managerShrink?: string;
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
  queuesShrink?: string;
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
  sharedStoragesShrink?: string;
  /**
   * @remarks
   * The list of tags to add to the cluster. You can add up to 20 tags.
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
      growInterval: 'GrowInterval',
      idleInterval: 'IdleInterval',
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
      growInterval: 'number',
      idleInterval: 'number',
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

