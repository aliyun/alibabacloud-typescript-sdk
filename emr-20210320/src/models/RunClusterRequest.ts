// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ApplicationConfig } from "./ApplicationConfig";
import { Application } from "./Application";
import { Script } from "./Script";
import { NodeAttributes } from "./NodeAttributes";
import { NodeGroupConfig } from "./NodeGroupConfig";
import { Promotion } from "./Promotion";
import { SubscriptionConfig } from "./SubscriptionConfig";
import { Tag } from "./Tag";


export class RunClusterRequest extends $dara.Model {
  /**
   * @remarks
   * The application configurations. The number of array elements N can range from 1 to 1000.
   */
  applicationConfigs?: ApplicationConfig[];
  /**
   * @remarks
   * The list of applications. The number of array elements N can range from 1 to 100.
   * 
   * This parameter is required.
   */
  applications?: Application[];
  /**
   * @remarks
   * The array of bootstrap scripts. The number of array elements N can range from 1 to 10.
   */
  bootstrapScripts?: Script[];
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
  nodeAttributes?: NodeAttributes;
  /**
   * @remarks
   * The array of node group configurations. The number of array elements N can range from 1 to 100.
   * 
   * This parameter is required.
   */
  nodeGroups?: NodeGroupConfig[];
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
  promotions?: Promotion[];
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
  subscriptionConfig?: SubscriptionConfig;
  /**
   * @remarks
   * The tags. The number of array elements N can range from 0 to 20.
   */
  tags?: Tag[];
  static names(): { [key: string]: string } {
    return {
      applicationConfigs: 'ApplicationConfigs',
      applications: 'Applications',
      bootstrapScripts: 'BootstrapScripts',
      clientToken: 'ClientToken',
      clusterName: 'ClusterName',
      clusterType: 'ClusterType',
      deletionProtection: 'DeletionProtection',
      deployMode: 'DeployMode',
      description: 'Description',
      nodeAttributes: 'NodeAttributes',
      nodeGroups: 'NodeGroups',
      paymentType: 'PaymentType',
      promotions: 'Promotions',
      regionId: 'RegionId',
      releaseVersion: 'ReleaseVersion',
      resourceGroupId: 'ResourceGroupId',
      securityMode: 'SecurityMode',
      subscriptionConfig: 'SubscriptionConfig',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationConfigs: { 'type': 'array', 'itemType': ApplicationConfig },
      applications: { 'type': 'array', 'itemType': Application },
      bootstrapScripts: { 'type': 'array', 'itemType': Script },
      clientToken: 'string',
      clusterName: 'string',
      clusterType: 'string',
      deletionProtection: 'boolean',
      deployMode: 'string',
      description: 'string',
      nodeAttributes: NodeAttributes,
      nodeGroups: { 'type': 'array', 'itemType': NodeGroupConfig },
      paymentType: 'string',
      promotions: { 'type': 'array', 'itemType': Promotion },
      regionId: 'string',
      releaseVersion: 'string',
      resourceGroupId: 'string',
      securityMode: 'string',
      subscriptionConfig: SubscriptionConfig,
      tags: { 'type': 'array', 'itemType': Tag },
    };
  }

  validate() {
    if(Array.isArray(this.applicationConfigs)) {
      $dara.Model.validateArray(this.applicationConfigs);
    }
    if(Array.isArray(this.applications)) {
      $dara.Model.validateArray(this.applications);
    }
    if(Array.isArray(this.bootstrapScripts)) {
      $dara.Model.validateArray(this.bootstrapScripts);
    }
    if(this.nodeAttributes && typeof (this.nodeAttributes as any).validate === 'function') {
      (this.nodeAttributes as any).validate();
    }
    if(Array.isArray(this.nodeGroups)) {
      $dara.Model.validateArray(this.nodeGroups);
    }
    if(Array.isArray(this.promotions)) {
      $dara.Model.validateArray(this.promotions);
    }
    if(this.subscriptionConfig && typeof (this.subscriptionConfig as any).validate === 'function') {
      (this.subscriptionConfig as any).validate();
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

