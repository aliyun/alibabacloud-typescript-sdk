// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ClusterStateChangeReason } from "./ClusterStateChangeReason";
import { Tag } from "./Tag";


export class ClusterSummary extends $dara.Model {
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
   * The state of the cluster. Valid values:
   * 
   * - `STARTING`: The cluster is starting.
   * 
   * - `START_FAILED`: The cluster fails to be started.
   * 
   * - `BOOTSTRAPPING`: The cluster is being initialized.
   * 
   * - `RUNNING`: The cluster is running.
   * 
   * - `TERMINATING`: The cluster is being terminated.
   * 
   * - `TERMINATED`: The cluster is terminated.
   * 
   * - `TERMINATED_WITH_ERRORS`: The cluster is terminated with errors.
   * 
   * - `TERMINATE_FAILED`: The cluster fails to be terminated.
   * 
   * @example
   * RUNNING
   */
  clusterState?: string;
  /**
   * @remarks
   * The cluster type. Valid values:
   * 
   * - `DATALAKE`: data lake.
   * 
   * - `OLAP`: data analytics.
   * 
   * - `DATAFLOW`: real-time dataflow.
   * 
   * - `DATASERVING`: data serving.
   * 
   * @example
   * DATALAKE
   */
  clusterType?: string;
  /**
   * @remarks
   * The time when the cluster was created.
   * 
   * @example
   * 1592837465788
   */
  createTime?: number;
  /**
   * @remarks
   * The release protection feature.
   * 
   * @example
   * false
   */
  deletionProtection?: boolean;
  /**
   * @remarks
   * The description of the cluster.
   * 
   * @example
   * EMR cluster
   */
  description?: string;
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
   * The time when the cluster was deleted.
   * 
   * @example
   * 1592837485788
   */
  endTime?: number;
  /**
   * @remarks
   * The expiration time.
   * 
   * @example
   * 1592837475788
   */
  expireTime?: number;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * - `PayAsYouGo`: pay-as-you-go.
   * 
   * - `Subscription`: subscription.
   * 
   * @example
   * PayAsYouGo
   */
  paymentType?: string;
  /**
   * @remarks
   * The time when the cluster is available.
   * 
   * @example
   * 1592837465788
   */
  readyTime?: number;
  /**
   * @remarks
   * The E-MapReduce (EMR) release version.
   * 
   * @example
   * EMR-5.8.0
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
   * The reason for the failure.
   */
  stateChangeReason?: ClusterStateChangeReason;
  /**
   * @remarks
   * The list of tags.
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
      description: 'Description',
      emrDefaultRole: 'EmrDefaultRole',
      endTime: 'EndTime',
      expireTime: 'ExpireTime',
      paymentType: 'PaymentType',
      readyTime: 'ReadyTime',
      releaseVersion: 'ReleaseVersion',
      resourceGroupId: 'ResourceGroupId',
      stateChangeReason: 'StateChangeReason',
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
      description: 'string',
      emrDefaultRole: 'string',
      endTime: 'number',
      expireTime: 'number',
      paymentType: 'string',
      readyTime: 'number',
      releaseVersion: 'string',
      resourceGroupId: 'string',
      stateChangeReason: ClusterStateChangeReason,
      tags: { 'type': 'array', 'itemType': Tag },
    };
  }

  validate() {
    if(this.stateChangeReason && typeof (this.stateChangeReason as any).validate === 'function') {
      (this.stateChangeReason as any).validate();
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

