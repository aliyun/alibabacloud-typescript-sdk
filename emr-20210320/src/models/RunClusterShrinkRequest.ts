// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunClusterShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The application configurations. Number of elements in the array: 1 to 1000.
   */
  applicationConfigsShrink?: string;
  /**
   * @remarks
   * The list of services. Number of elements in the array: 1 to 100.
   * 
   * This parameter is required.
   */
  applicationsShrink?: string;
  /**
   * @remarks
   * The array of bootstrap scripts. Number of elements in the array: 1 to 10.
   */
  bootstrapScriptsShrink?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. The same ClientToken value for multiple calls to the RunCluster operation results in identical responses. Only one cluster can be created by using the same ClientToken value.
   * 
   * @example
   * A7D960FA-6DBA-5E07-8746-A63E3E4D****
   */
  clientToken?: string;
  /**
   * @remarks
   * The cluster name. The name must be 1 to 128 characters in length. The name must start with a letter but cannot start with http:// or https://. The name can contain letters, digits, colons (:), underscores (_), periods (.), and hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * emrtest
   */
  clusterName?: string;
  /**
   * @remarks
   * The type of the cluster. Valid values:
   * 
   * *   DATALAKE
   * *   OLAP
   * *   DATAFLOW
   * *   DATASERVING
   * *   CUSTOM
   * *   HADOOP: We recommend that you set this parameter to DATALAKE rather than HADOOP.
   * 
   * If the first time you create an EMR cluster is after 17:00 (UTC+8) on December 19, 2022, you cannot create a Hadoop, Data Science, Presto, or ZooKeeper cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * DATALAKE
   */
  clusterType?: string;
  /**
   * @remarks
   * Specifies whether to enable release protection for the cluster. Valid values:
   * 
   * *   true: enables release protection for the cluster.
   * *   false: disables release protection for the cluster.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  deletionProtection?: boolean;
  /**
   * @remarks
   * The deployment mode of master nodes in the cluster. Valid values:
   * 
   * *   NORMAL: regular mode. This is the default value. A cluster that contains only one master node is created.
   * *   HA: high availability mode. A cluster that contains at least three master nodes is created.
   * 
   * @example
   * HA
   */
  deployMode?: string;
  /**
   * @remarks
   * The cluster description.
   * 
   * @example
   * Emr cluster for ETL
   */
  description?: string;
  /**
   * @remarks
   * The node attributes. The basic attributes of all ECS nodes in the cluster.
   */
  nodeAttributesShrink?: string;
  /**
   * @remarks
   * The array of configurations of the node groups. Number of elements in the array: 1 to 100.
   * 
   * This parameter is required.
   */
  nodeGroupsShrink?: string;
  /**
   * @remarks
   * The billing method of the cluster. Valid values:
   * 
   * *   PayAsYouGo
   * *   Subscription
   * 
   * Default value: PayAsYouGo.
   * 
   * @example
   * PayAsYouGo
   */
  paymentType?: string;
  promotionsShrink?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The EMR version. You can query available EMR versions in the EMR console.
   * 
   * This parameter is required.
   * 
   * @example
   * EMR-5.16.0
   */
  releaseVersion?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmzabjyop****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The security mode of the cluster. Valid values:
   * 
   * *   NORMAL: regular mode. Kerberos authentication is disabled. This is the default value.
   * *   KERBEROS: Kerberos mode. Kerberos authentication is enabled.
   * 
   * @example
   * NORMAL
   */
  securityMode?: string;
  /**
   * @remarks
   * The subscription configurations. This parameter is required when the PaymentType parameter is set to Subscription.
   */
  subscriptionConfigShrink?: string;
  /**
   * @remarks
   * The tag. Number of elements in the array: 0 to 20.
   */
  tagsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      applicationConfigsShrink: 'ApplicationConfigs',
      applicationsShrink: 'Applications',
      bootstrapScriptsShrink: 'BootstrapScripts',
      clientToken: 'ClientToken',
      clusterName: 'ClusterName',
      clusterType: 'ClusterType',
      deletionProtection: 'DeletionProtection',
      deployMode: 'DeployMode',
      description: 'Description',
      nodeAttributesShrink: 'NodeAttributes',
      nodeGroupsShrink: 'NodeGroups',
      paymentType: 'PaymentType',
      promotionsShrink: 'Promotions',
      regionId: 'RegionId',
      releaseVersion: 'ReleaseVersion',
      resourceGroupId: 'ResourceGroupId',
      securityMode: 'SecurityMode',
      subscriptionConfigShrink: 'SubscriptionConfig',
      tagsShrink: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationConfigsShrink: 'string',
      applicationsShrink: 'string',
      bootstrapScriptsShrink: 'string',
      clientToken: 'string',
      clusterName: 'string',
      clusterType: 'string',
      deletionProtection: 'boolean',
      deployMode: 'string',
      description: 'string',
      nodeAttributesShrink: 'string',
      nodeGroupsShrink: 'string',
      paymentType: 'string',
      promotionsShrink: 'string',
      regionId: 'string',
      releaseVersion: 'string',
      resourceGroupId: 'string',
      securityMode: 'string',
      subscriptionConfigShrink: 'string',
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

