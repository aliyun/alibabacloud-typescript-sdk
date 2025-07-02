// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ApplicationConfig } from "./ApplicationConfig";
import { Application } from "./Application";
import { Script } from "./Script";
import { NodeAttributes } from "./NodeAttributes";
import { NodeGroup } from "./NodeGroup";
import { GetClusterCloneMetaResponseBodyClusterCloneMetaScalingPolicies } from "./GetClusterCloneMetaResponseBodyClusterCloneMetaScalingPolicies";
import { SubscriptionConfig } from "./SubscriptionConfig";
import { Tag } from "./Tag";


export class GetClusterCloneMetaResponseBodyClusterCloneMeta extends $dara.Model {
  /**
   * @remarks
   * The modified configuration items.
   */
  applicationConfigs?: ApplicationConfig[];
  /**
   * @remarks
   * The cluster applications.
   */
  applications?: Application[];
  /**
   * @remarks
   * An array of bootstrap scripts. The number of elements in the array: 1 to 10.
   */
  bootstrapScripts?: Script[];
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * c-b933c5aac7f7****
   */
  clusterId?: string;
  /**
   * @remarks
   * The name of the cluster.
   * 
   * @example
   * emrtest
   */
  clusterName?: string;
  /**
   * @remarks
   * The status of the cluster. Valid values:
   * 
   * *   STARTING
   * *   START_FAILED
   * *   BOOTSTRAPPING
   * *   RUNNING
   * *   TERMINATING
   * *   TERMINATED
   * *   TERMINATED_WITH_ERRORS
   * *   TERMINATE_FAILED
   * 
   * @example
   * RUNNING
   */
  clusterState?: string;
  /**
   * @remarks
   * The cluster type. Valid values:
   * 
   * *   DATALAKE
   * *   OLAP
   * *   DATAFLOW
   * *   DATASERVING
   * *   CUSTOM
   * *   HADOOP
   * 
   * @example
   * DATALAKE
   */
  clusterType?: string;
  /**
   * @remarks
   * Indicates whether release protection is enabled for the cluster. Valid values:
   * 
   * *   true: Release protection is enabled for the cluster.
   * *   false: Release protection is disabled for the cluster.
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
   * *   NORMAL: regular mode.
   * *   HA: high availability mode.
   * 
   * @example
   * HA
   */
  deployMode?: string;
  /**
   * @remarks
   * The EMR service role.
   * 
   * @example
   * AliyunEMRDefaultRole
   */
  emrDefaultRole?: string;
  /**
   * @remarks
   * Indicates whether the service configurations of a Hadoop cluster that you made during cluster creation can be cloned. Valid values:
   * 
   * *   False
   * *   True
   * 
   * @example
   * True
   */
  existCloneConfig?: boolean;
  /**
   * @remarks
   * The node attributes.
   */
  nodeAttributes?: NodeAttributes;
  /**
   * @remarks
   * The node groups. The number of elements in the array: 1 to 100.
   */
  nodeGroups?: NodeGroup[];
  /**
   * @remarks
   * The billing method of the cluster. Valid values:
   * 
   * *   PayAsYouGo
   * *   Subscription
   * 
   * @example
   * PayAsYouGo
   */
  paymentType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The EMR version.
   * 
   * @example
   * EMR-5.6.0
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
   * The auto scaling policies of each node group in the cluster.
   */
  scalingPolicies?: GetClusterCloneMetaResponseBodyClusterCloneMetaScalingPolicies[];
  /**
   * @remarks
   * The security mode of the cluster. Valid values:
   * 
   * *   NORMAL: regular mode. Kerberos is not enabled.
   * *   KERBEROS: Kerberos mode. Kerberos is enabled.
   * 
   * @example
   * NORMAL
   */
  securityMode?: string;
  /**
   * @remarks
   * The subscription configurations.
   */
  subscriptionConfig?: SubscriptionConfig;
  /**
   * @remarks
   * The list of cluster tags.
   */
  tags?: Tag[];
  static names(): { [key: string]: string } {
    return {
      applicationConfigs: 'ApplicationConfigs',
      applications: 'Applications',
      bootstrapScripts: 'BootstrapScripts',
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      clusterState: 'ClusterState',
      clusterType: 'ClusterType',
      deletionProtection: 'DeletionProtection',
      deployMode: 'DeployMode',
      emrDefaultRole: 'EmrDefaultRole',
      existCloneConfig: 'ExistCloneConfig',
      nodeAttributes: 'NodeAttributes',
      nodeGroups: 'NodeGroups',
      paymentType: 'PaymentType',
      regionId: 'RegionId',
      releaseVersion: 'ReleaseVersion',
      resourceGroupId: 'ResourceGroupId',
      scalingPolicies: 'ScalingPolicies',
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
      clusterId: 'string',
      clusterName: 'string',
      clusterState: 'string',
      clusterType: 'string',
      deletionProtection: 'boolean',
      deployMode: 'string',
      emrDefaultRole: 'string',
      existCloneConfig: 'boolean',
      nodeAttributes: NodeAttributes,
      nodeGroups: { 'type': 'array', 'itemType': NodeGroup },
      paymentType: 'string',
      regionId: 'string',
      releaseVersion: 'string',
      resourceGroupId: 'string',
      scalingPolicies: { 'type': 'array', 'itemType': GetClusterCloneMetaResponseBodyClusterCloneMetaScalingPolicies },
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
    if(Array.isArray(this.scalingPolicies)) {
      $dara.Model.validateArray(this.scalingPolicies);
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

