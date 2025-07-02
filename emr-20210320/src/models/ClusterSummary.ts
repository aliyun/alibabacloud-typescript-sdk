// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ClusterStateChangeReason } from "./ClusterStateChangeReason";
import { Tag } from "./Tag";


export class ClusterSummary extends $dara.Model {
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
   * 集群状态。取值范围：
   * - STARTING：启动中。
   * - START_FAILED：启动失败。
   * - BOOTSTRAPPING：引导操作初始化。
   * - RUNNING：运行中。
   * - TERMINATING：终止中。
   * - TERMINATED：已终止。
   * - TERMINATED_WITH_ERRORS：发生异常导致终止。
   * - TERMINATE_FAILED：终止失败。
   * 
   * @example
   * RUNNING
   */
  clusterState?: string;
  /**
   * @remarks
   * 集群类型。取值范围：
   * - DATALAKE：新版数据湖。
   * - OLAP：数据分析。
   * - DATAFLOW：实时数据流。
   * - DATASERVING：数据服务。
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
  deletionProtection?: boolean;
  description?: string;
  /**
   * @remarks
   * EMR服务角色。
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
   * 付费类型。取值范围：
   * - PayAsYouGo：后付费。
   * - Subscription：预付费。
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
   * EMR发行版。
   * 
   * @example
   * EMR-5.8.0
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
   * 失败原因。
   */
  stateChangeReason?: ClusterStateChangeReason;
  /**
   * @remarks
   * 标签列表。
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

