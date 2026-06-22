// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { NodeAttributes } from "./NodeAttributes";
import { ClusterStateChangeReason } from "./ClusterStateChangeReason";
import { SubscriptionConfig } from "./SubscriptionConfig";
import { Tag } from "./Tag";


export class Cluster extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * c-b933c5aac8fe****
   */
  clusterId?: string;
  /**
   * @remarks
   * The cluster name.
   * 
   * @example
   * emrtest
   */
  clusterName?: string;
  /**
   * @remarks
   * The cluster state. Valid values:
   * 
   * - `STARTING`: The cluster is starting.
   * 
   * - `START_FAILED`: The cluster failed to start.
   * 
   * - `BOOTSTRAPPING`: The cluster is running bootstrap actions.
   * 
   * - `RUNNING`: The cluster is running.
   * 
   * - `TERMINATING`: The cluster is terminating.
   * 
   * - `TERMINATED`: The cluster is terminated.
   * 
   * - `TERMINATED_WITH_ERRORS`: The cluster terminated due to errors.
   * 
   * - `TERMINATE_FAILED`: The cluster failed to terminate.
   * 
   * @example
   * RUNNING
   */
  clusterState?: string;
  /**
   * @remarks
   * The cluster type. Valid values:
   * 
   * - `DATALAKE`: New data lake.
   * 
   * - `OLAP`: Data analysis.
   * 
   * - `DATAFLOW`: Real-time data flow.
   * 
   * - `DATASERVING`: Data serving.
   * 
   * - `CUSTOM`: Custom cluster.
   * 
   * - `HADOOP`: Legacy data lake.
   * 
   * @example
   * DATALAKE
   */
  clusterType?: string;
  /**
   * @remarks
   * The time when the cluster was created. The time is a Unix timestamp in milliseconds.
   * 
   * @example
   * 1592837465784
   */
  createTime?: number;
  /**
   * @remarks
   * Indicates whether deletion protection is enabled for the cluster.
   * 
   * @example
   * false
   */
  deletionProtection?: boolean;
  /**
   * @remarks
   * The application deployment mode. Valid values:
   * 
   * - `NORMAL`: Standard deployment.
   * 
   * - `HA`: High-availability deployment.
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
   * EMR cluster
   */
  description?: string;
  /**
   * @remarks
   * The default role for E-MapReduce.
   * 
   * @example
   * AliyunEMRDefaultRole
   */
  emrDefaultRole?: string;
  /**
   * @remarks
   * The time when the cluster was deleted. The time is a Unix timestamp in milliseconds.
   * 
   * @example
   * 1592837465784
   */
  endTime?: number;
  /**
   * @remarks
   * The time when the cluster is scheduled to expire. The time is a Unix timestamp in milliseconds.
   * 
   * @example
   * 1592837465784
   */
  expireTime?: number;
  /**
   * @remarks
   * The node attributes.
   */
  nodeAttributes?: NodeAttributes;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * - `PayAsYouGo`: Pay-as-you-go.
   * 
   * - `Subscription`: Subscription.
   * 
   * @example
   * PayAsYouGo
   */
  paymentType?: string;
  /**
   * @remarks
   * The time when the cluster became ready. The time is a Unix timestamp in milliseconds.
   * 
   * @example
   * 1592837465784
   */
  readyTime?: number;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The release version of E-MapReduce.
   * 
   * @example
   * EMR-5.8.0
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
   * - `NORMAL`: Kerberos is disabled.
   * 
   * - `KERBEROS`: Kerberos is enabled.
   * 
   * @example
   * NORMAL
   */
  securityMode?: string;
  /**
   * @remarks
   * The reason for the cluster state change.
   */
  stateChangeReason?: ClusterStateChangeReason;
  /**
   * @remarks
   * The subscription configuration.
   */
  subscriptionConfig?: SubscriptionConfig;
  /**
   * @remarks
   * The cluster tags.
   */
  tags?: Tag[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      clusterState: 'ClusterState',
      clusterType: 'ClusterType',
      createTime: 'CreateTime',
      deletionProtection: 'DeletionProtection',
      deployMode: 'DeployMode',
      description: 'Description',
      emrDefaultRole: 'EmrDefaultRole',
      endTime: 'EndTime',
      expireTime: 'ExpireTime',
      nodeAttributes: 'NodeAttributes',
      paymentType: 'PaymentType',
      readyTime: 'ReadyTime',
      regionId: 'RegionId',
      releaseVersion: 'ReleaseVersion',
      resourceGroupId: 'ResourceGroupId',
      securityMode: 'SecurityMode',
      stateChangeReason: 'StateChangeReason',
      subscriptionConfig: 'SubscriptionConfig',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterName: 'string',
      clusterState: 'string',
      clusterType: 'string',
      createTime: 'number',
      deletionProtection: 'boolean',
      deployMode: 'string',
      description: 'string',
      emrDefaultRole: 'string',
      endTime: 'number',
      expireTime: 'number',
      nodeAttributes: NodeAttributes,
      paymentType: 'string',
      readyTime: 'number',
      regionId: 'string',
      releaseVersion: 'string',
      resourceGroupId: 'string',
      securityMode: 'string',
      stateChangeReason: ClusterStateChangeReason,
      subscriptionConfig: SubscriptionConfig,
      tags: { 'type': 'array', 'itemType': Tag },
    };
  }

  validate() {
    if(this.nodeAttributes && typeof (this.nodeAttributes as any).validate === 'function') {
      (this.nodeAttributes as any).validate();
    }
    if(this.stateChangeReason && typeof (this.stateChangeReason as any).validate === 'function') {
      (this.stateChangeReason as any).validate();
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

