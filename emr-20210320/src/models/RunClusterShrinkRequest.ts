// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunClusterShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The application configurations. The number of array elements N can range from 1 to 1000.
   */
  applicationConfigsShrink?: string;
  /**
   * @remarks
   * The list of applications. The number of array elements N can range from 1 to 100.
   * 
   * This parameter is required.
   */
  applicationsShrink?: string;
  /**
   * @remarks
   * The array of bootstrap scripts. The number of array elements N can range from 1 to 10.
   */
  bootstrapScriptsShrink?: string;
  /**
   * @remarks
   * A client token to ensure the idempotence of the request. Multiple calls with the same client token return the same result and create only one cluster.
   * 
   * @example
   * A7D960FA-6DBA-5E07-8746-A63E3E4D****
   */
  clientToken?: string;
  /**
   * @remarks
   * The cluster name. The name must be 1 to 128 characters in length. It must start with a letter or a Chinese character. It cannot start with http\\:// or https\\://. It can contain Chinese characters, letters, digits, colons (:), underscores (_), periods (.), or hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * emrtest
   */
  clusterName?: string;
  /**
   * @remarks
   * The cluster type. Valid values:
   * 
   * - DATALAKE: new data lake.
   * 
   * - OLAP: data analytics.
   * 
   * - DATAFLOW: real-time data stream.
   * 
   * - DATASERVING: DataService Studio.
   * 
   * - CUSTOM: custom cluster.
   * 
   * - HADOOP: legacy data lake. This value is not recommended. Use the new data lake cluster type instead.
   * 
   * If you create an EMR cluster for the first time after 17:00 (UTC+8) on December 19, 2022, you cannot select HADOOP, DATA_SCIENCE, PRESTO, or ZOOKEEPER as the cluster type.
   * 
   * This parameter is required.
   * 
   * @example
   * DATALAKE
   */
  clusterType?: string;
  /**
   * @remarks
   * Specifies whether to enable deletion protection for the cluster. Valid values:
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
  /**
   * @remarks
   * The deployment mode of applications in the cluster. Valid values:
   * 
   * - NORMAL (default): non-high availability deployment. The cluster has one master node.
   * 
   * - HA: high availability (HA) deployment. This deployment mode requires at least three master nodes.
   * 
   * @example
   * HA
   */
  deployMode?: string;
  /**
   * @remarks
   * The description of the cluster.
   * 
   * @example
   * Emr cluster for ETL
   */
  description?: string;
  /**
   * @remarks
   * The node attributes. These are the basic attributes of all ECS nodes in the cluster.
   */
  nodeAttributesShrink?: string;
  /**
   * @remarks
   * The array of node group configurations. The number of array elements N can range from 1 to 100.
   * 
   * This parameter is required.
   */
  nodeGroupsShrink?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * - PayAsYouGo: pay-as-you-go.
   * 
   * - Subscription: subscription.
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
   * The EMR release version. You can find the EMR release version on the EMR cluster purchase page.
   * 
   * This parameter is required.
   * 
   * @example
   * EMR-5.16.0
   */
  releaseVersion?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmzabjyop****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The Kerberos security mode of the cluster. Valid values:
   * 
   * - NORMAL (default): normal mode. Kerberos is disabled.
   * 
   * - KERBEROS: Kerberos mode. Kerberos is enabled.
   * 
   * @example
   * NORMAL
   */
  securityMode?: string;
  /**
   * @remarks
   * The subscription configurations. This parameter is required if you set PaymentType to Subscription.
   */
  subscriptionConfigShrink?: string;
  /**
   * @remarks
   * The tags. The number of array elements N can range from 0 to 20.
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

