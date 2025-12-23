// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReplaceAppGroupCommodityCodeResponseBodyResultQuota extends $dara.Model {
  /**
   * @remarks
   * The number of computing resources configured.
   * 
   * @example
   * 20
   */
  computeResource?: number;
  /**
   * @remarks
   * The storage capacity.
   * 
   * @example
   * 1
   */
  docSize?: number;
  /**
   * @remarks
   * The specifications configured.
   * 
   * @example
   * -
   */
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      computeResource: 'computeResource',
      docSize: 'docSize',
      spec: 'spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      computeResource: 'number',
      docSize: 'number',
      spec: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReplaceAppGroupCommodityCodeResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * *   POSTPAY: pay-as-you-go.
   * *   PREPAY: subscription.
   * 
   * @example
   * POSTPAY
   */
  chargeType?: string;
  /**
   * @remarks
   * The billing type. Valid values:
   * 
   * *   1: computing resources.
   * *   2: queries per second (QPS).
   * 
   * @example
   * 1
   */
  chargingWay?: number;
  /**
   * @remarks
   * The code of the commodity.
   * 
   * @example
   * opensearch
   */
  commodityCode?: string;
  /**
   * @remarks
   * The timestamp when the application was created.
   * 
   * @example
   * 1588054131
   */
  created?: number;
  /**
   * @remarks
   * The ID of the current online version.
   * 
   * @example
   * 100302903
   */
  currentVersion?: string;
  /**
   * @remarks
   * The description of the application.
   * 
   * @example
   * ""
   */
  description?: string;
  /**
   * @remarks
   * The expiration time.
   * 
   * @example
   * -
   */
  expireOn?: string;
  /**
   * @remarks
   * The ID of the rough sort expression.
   * 
   * @example
   * 0
   */
  firstRankAlgoDeploymentId?: number;
  /**
   * @remarks
   * The approval state of the quotas. Valid values:
   * 
   * *   0: The approval status is normal.
   * *   1: The quotas are being approved.
   * 
   * @example
   * 0
   */
  hasPendingQuotaReviewTask?: number;
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * -
   */
  id?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * -
   */
  instanceId?: string;
  /**
   * @remarks
   * The lock state. Valid values:
   * 
   * *   Unlock: The instance is unlocked.
   * *   LockByExpiration: The instance is automatically locked after it expires.
   * *   ManualLock: The instance is manually locked.
   * 
   * @example
   * Unlock
   */
  lockMode?: string;
  /**
   * @remarks
   * Indicates whether the instance is automatically locked after it expires. Valid values:
   * 
   * *   0: The instance is not automatically locked after it expires.
   * *   1: The instance is automatically locked after it expires.
   * 
   * @example
   * 0
   */
  lockedByExpiration?: number;
  /**
   * @remarks
   * The name of the order.
   * 
   * @example
   * -
   */
  name?: string;
  /**
   * @remarks
   * The ID of the fine sort expression that is being created.
   * 
   * @example
   * 0
   */
  pendingSecondRankAlgoDeploymentId?: number;
  /**
   * @remarks
   * The ID of the order that is in progress.
   * 
   * @example
   * -
   */
  processingOrderId?: string;
  /**
   * @remarks
   * Indicates whether the order is produced.
   * 
   * @example
   * 0
   */
  produced?: number;
  /**
   * @remarks
   * The name of the A/B test group.
   * 
   * @example
   * -
   */
  projectId?: string;
  /**
   * @remarks
   * The configuration information.
   */
  quota?: ReplaceAppGroupCommodityCodeResponseBodyResultQuota;
  /**
   * @remarks
   * The ID of the fine sort expression.
   * 
   * @example
   * 0
   */
  secondRankAlgoDeploymentId?: number;
  /**
   * @remarks
   * The status of the application.
   * 
   * @example
   * normal
   */
  status?: string;
  /**
   * @remarks
   * The timestamp when the current online version was published.
   * 
   * @example
   * 1590486386
   */
  switchedTime?: number;
  /**
   * @remarks
   * The type of the application.
   * 
   * @example
   * -
   */
  type?: string;
  /**
   * @remarks
   * The timestamp when the application was updated.
   * 
   * @example
   * 1581065904
   */
  updated?: number;
  /**
   * @remarks
   * The versions.
   */
  versions?: string[];
  static names(): { [key: string]: string } {
    return {
      chargeType: 'chargeType',
      chargingWay: 'chargingWay',
      commodityCode: 'commodityCode',
      created: 'created',
      currentVersion: 'currentVersion',
      description: 'description',
      expireOn: 'expireOn',
      firstRankAlgoDeploymentId: 'firstRankAlgoDeploymentId',
      hasPendingQuotaReviewTask: 'hasPendingQuotaReviewTask',
      id: 'id',
      instanceId: 'instanceId',
      lockMode: 'lockMode',
      lockedByExpiration: 'lockedByExpiration',
      name: 'name',
      pendingSecondRankAlgoDeploymentId: 'pendingSecondRankAlgoDeploymentId',
      processingOrderId: 'processingOrderId',
      produced: 'produced',
      projectId: 'projectId',
      quota: 'quota',
      secondRankAlgoDeploymentId: 'secondRankAlgoDeploymentId',
      status: 'status',
      switchedTime: 'switchedTime',
      type: 'type',
      updated: 'updated',
      versions: 'versions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      chargingWay: 'number',
      commodityCode: 'string',
      created: 'number',
      currentVersion: 'string',
      description: 'string',
      expireOn: 'string',
      firstRankAlgoDeploymentId: 'number',
      hasPendingQuotaReviewTask: 'number',
      id: 'string',
      instanceId: 'string',
      lockMode: 'string',
      lockedByExpiration: 'number',
      name: 'string',
      pendingSecondRankAlgoDeploymentId: 'number',
      processingOrderId: 'string',
      produced: 'number',
      projectId: 'string',
      quota: ReplaceAppGroupCommodityCodeResponseBodyResultQuota,
      secondRankAlgoDeploymentId: 'number',
      status: 'string',
      switchedTime: 'number',
      type: 'string',
      updated: 'number',
      versions: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.quota && typeof (this.quota as any).validate === 'function') {
      (this.quota as any).validate();
    }
    if(Array.isArray(this.versions)) {
      $dara.Model.validateArray(this.versions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReplaceAppGroupCommodityCodeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AC5F78BA-66B9-545B-9CF1-8F542E682E1F
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   * 
   * @example
   * {}
   */
  result?: ReplaceAppGroupCommodityCodeResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: ReplaceAppGroupCommodityCodeResponseBodyResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

