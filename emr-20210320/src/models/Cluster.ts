// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { NodeAttributes } from "./NodeAttributes";
import { ClusterStateChangeReason } from "./ClusterStateChangeReason";
import { SubscriptionConfig } from "./SubscriptionConfig";
import { Tag } from "./Tag";


export class Cluster extends $dara.Model {
  /**
   * @remarks
   * 集群ID。
   * 
   * @example
   * c-b933c5aac8fe****
   */
  clusterId?: string;
  /**
   * @remarks
   * 集群名称。
   * 
   * @example
   * emrtest
   */
  clusterName?: string;
  /**
   * @remarks
   * 集群状态。
   * 
   * @example
   * RUNNING
   */
  clusterState?: string;
  /**
   * @remarks
   * 集群类型。
   * 
   * @example
   * DATALAKE
   */
  clusterType?: string;
  /**
   * @remarks
   * 创建时间。
   * 
   * @example
   * 1592837465784
   */
  createTime?: number;
  /**
   * @example
   * false
   */
  deletionProtection?: boolean;
  /**
   * @remarks
   * 部署模式。
   * 
   * @example
   * HA
   */
  deployMode?: string;
  description?: string;
  /**
   * @remarks
   * EMR默认角色。
   * 
   * @example
   * AliyunEMRDefaultRole
   */
  emrDefaultRole?: string;
  /**
   * @remarks
   * 删除时间。
   * 
   * @example
   * 1592837465784
   */
  endTime?: number;
  /**
   * @remarks
   * 过期时间。
   * 
   * @example
   * 1592837465784
   */
  expireTime?: number;
  /**
   * @remarks
   * 节点属性。
   */
  nodeAttributes?: NodeAttributes;
  /**
   * @remarks
   * 付费类型。
   * 
   * @example
   * PayAsYouGo
   */
  paymentType?: string;
  /**
   * @remarks
   * 可用时间。
   * 
   * @example
   * 1592837465784
   */
  readyTime?: number;
  /**
   * @remarks
   * 地域ID。
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * EMR发行版。
   * 
   * @example
   * EMR-5.3.0
   */
  releaseVersion?: string;
  /**
   * @remarks
   * 资源组ID。
   * 
   * @example
   * rg-acfmzabjyop****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Kerberos安全模式。
   * 
   * @example
   * NORMAL
   */
  securityMode?: string;
  stateChangeReason?: ClusterStateChangeReason;
  /**
   * @remarks
   * 预付费配置。
   */
  subscriptionConfig?: SubscriptionConfig;
  /**
   * @remarks
   * 集群标签。
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

