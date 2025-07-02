// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ApplicationConfig } from "./ApplicationConfig";
import { Application } from "./Application";
import { Script } from "./Script";
import { NodeAttributes } from "./NodeAttributes";
import { NodeGroupConfig } from "./NodeGroupConfig";
import { SubscriptionConfig } from "./SubscriptionConfig";
import { Tag } from "./Tag";


export class CreateClusterRequest extends $dara.Model {
  /**
   * @remarks
   * The service configurations. Number of elements in the array: 1 to 1,000.
   */
  applicationConfigs?: ApplicationConfig[];
  /**
   * @remarks
   * The services. Number of elements in the array: 1 to 100.
   * 
   * This parameter is required.
   */
  applications?: Application[];
  /**
   * @remarks
   * The array of bootstrap scripts. Number of elements in the array: 1 to 10.
   */
  bootstrapScripts?: Script[];
  /**
   * @remarks
   * The idempotent client token. If you call the same ClientToken multiple times, the returned results are the same. Only one cluster can be created with the same ClientToken.
   * 
   * @example
   * A7D960FA-6DBA-5E07-8746-A63E3E4D****
   */
  clientToken?: string;
  /**
   * @remarks
   * The name of the cluster. The name must be 1 to 128 characters in length. It must start with a letter and cannot start with http:// or https://. It can contain letters, digits, colons (:), underscores (_), periods (.), and hyphens (-).
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
   * *   DATALAKE: data lake
   * *   OLAP: online analytical processing (OLAP)
   * *   DATAFLOW: Dataflow
   * *   DATASERVING: DataServing
   * *   CUSTOM: a custom hybrid cluster.
   * *   HADOOP: the old data lake. We recommend that you use the new data lake.
   * 
   * If you create an EMR cluster for the first time after 17:00 (UTC +8) on December 19, 2022, you cannot select the HADOOP, DATA_SCIENCE, PRESTO, or ZOOKEEPER cluster type.
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
   * *   HA: high availability (HA) mode. A cluster that contains three master nodes is created.
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
   * 
   * This parameter is required.
   */
  nodeAttributes?: NodeAttributes;
  /**
   * @remarks
   * The array of configurations of the node groups. Number of elements in the array: 1 to 100.
   * 
   * This parameter is required.
   * 
   * @example
   * NORMAL
   */
  nodeGroups?: NodeGroupConfig[];
  /**
   * @remarks
   * The billing cycle of the instance. Valid values:
   * 
   * *   PayAsYouGo: pay-as-you-go
   * *   Subscription: subscription
   * 
   * Default value: PayAsYouGo.
   * 
   * @example
   * PayAsYouGo
   */
  paymentType?: string;
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
   * The EMR version. You can query available E-MapReduce (EMR) versions in the EMR console.
   * 
   * This parameter is required.
   * 
   * @example
   * EMR-5.8.0
   */
  releaseVersion?: string;
  /**
   * @remarks
   * The ID of the resource group to which to assign the ENI.
   * 
   * @example
   * rg-acfmzabjyop****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The security mode of the cluster. Valid values:
   * 
   * *   NORMAL: disables Kerberos authentication for the cluster. This is the default value.
   * *   KERBEROS: enables Kerberos authentication for the cluster.
   * 
   * @example
   * NORMAL
   */
  securityMode?: string;
  /**
   * @remarks
   * The subscription configurations. This parameter takes effect only if you set the PaymentType parameter to Subscription.
   */
  subscriptionConfig?: SubscriptionConfig;
  /**
   * @remarks
   * The tag. Number of elements in the array: 0 to 20.
   * 
   * @example
   * A7D960FA-6DBA-5E07-8746-A63E3E4D****
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

