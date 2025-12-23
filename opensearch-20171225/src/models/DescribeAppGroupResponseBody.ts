// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAppGroupResponseBodyResultQuota extends $dara.Model {
  /**
   * @remarks
   * The computing resources. Unit: logical computing unit (LCU).
   * 
   * @example
   * 20
   */
  computeResource?: number;
  /**
   * @remarks
   * The storage capacity. Unit: GB.
   * 
   * @example
   * 1
   */
  docSize?: number;
  /**
   * @remarks
   * The specifications. Valid values:
   * 
   * *   opensearch.share.junior: basic.
   * *   opensearch.share.common: shared general-purpose.
   * *   opensearch.share.compute: shared computing.
   * *   opensearch.share.storage: shared storage.
   * *   opensearch.private.common: exclusive general-purpose.
   * *   opensearch.private.compute: exclusive computing.
   * *   opensearch.private.storage: exclusive storage.
   * 
   * @example
   * opensearch.share.common
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

export class DescribeAppGroupResponseBodyResultTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * foo
   */
  key?: string;
  /**
   * @remarks
   * The tag value
   * 
   * @example
   * bar
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppGroupResponseBodyResult extends $dara.Model {
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
   * The billable item. Valid values:
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
   * The commodity code.
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
   * 1575442875
   */
  created?: number;
  /**
   * @remarks
   * The ID of the current online version.
   * 
   * @example
   * 110116134
   */
  currentVersion?: string;
  /**
   * @remarks
   * The description of the application.
   * 
   * @example
   * -
   */
  description?: string;
  /**
   * @remarks
   * The industry of the application.
   * 
   * @example
   * ecommerce
   */
  domain?: string;
  /**
   * @remarks
   * The engine type.
   * 
   * @example
   * ha3
   */
  engineType?: string;
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
   * The ID of the created rough sort expression.
   * 
   * @example
   * 0
   */
  firstRankAlgoDeploymentId?: number;
  /**
   * @remarks
   * The approval state of the quotas. Valid values:
   * 
   * *   0: The application is in service.
   * *   1: The quotas are being reviewed.
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
   * 110116134
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
   * Indicates whether the instance is automatically locked after it expires.
   * 
   * @example
   * 0
   */
  lockedByExpiration?: number;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * os_function_test_v1
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
   * The ID of the order that is not complete.
   * 
   * @example
   * -
   */
  processingOrderId?: string;
  /**
   * @remarks
   * Indicates whether the application is created. Valid values:
   * 
   * *   0: The application is being created.
   * *   1: The application is created.
   * 
   * @example
   * 1
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
   * The information about the quotas of the application.
   */
  quota?: DescribeAppGroupResponseBodyResultQuota;
  /**
   * @remarks
   * The ID of the resource group to which the network instance belongs.
   * 
   * @example
   * rg-acfmoiyerh6nzly
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the created fine sort expression.
   * 
   * @example
   * 0
   */
  secondRankAlgoDeploymentId?: number;
  /**
   * @remarks
   * The state of the application. Valid values:
   * 
   * *   producing: The application is being created.
   * *   review_pending: The application is being reviewed.
   * *   config_pending: The application is to be configured.
   * *   normal: The application is in service.
   * *   frozen: The application is frozen.
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
   * 0
   */
  switchedTime?: number;
  /**
   * @remarks
   * The application tags.
   */
  tags?: DescribeAppGroupResponseBodyResultTags[];
  /**
   * @remarks
   * The type of the application. Valid values:
   * 
   * *   standard: a High-performance Search Edition application.
   * *   enhanced: an Industry Algorithm Edition application.
   * 
   * @example
   * enhanced
   */
  type?: string;
  /**
   * @remarks
   * The timestamp when the application was last updated.
   * 
   * @example
   * 1578916076
   */
  updated?: number;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'chargeType',
      chargingWay: 'chargingWay',
      commodityCode: 'commodityCode',
      created: 'created',
      currentVersion: 'currentVersion',
      description: 'description',
      domain: 'domain',
      engineType: 'engineType',
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
      resourceGroupId: 'resourceGroupId',
      secondRankAlgoDeploymentId: 'secondRankAlgoDeploymentId',
      status: 'status',
      switchedTime: 'switchedTime',
      tags: 'tags',
      type: 'type',
      updated: 'updated',
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
      domain: 'string',
      engineType: 'string',
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
      quota: DescribeAppGroupResponseBodyResultQuota,
      resourceGroupId: 'string',
      secondRankAlgoDeploymentId: 'number',
      status: 'string',
      switchedTime: 'number',
      tags: { 'type': 'array', 'itemType': DescribeAppGroupResponseBodyResultTags },
      type: 'string',
      updated: 'number',
    };
  }

  validate() {
    if(this.quota && typeof (this.quota as any).validate === 'function') {
      (this.quota as any).validate();
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

export class DescribeAppGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0A6EB64B-B4C8-CF02-810F-E660812972FF
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the application.
   */
  result?: DescribeAppGroupResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DescribeAppGroupResponseBodyResult,
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

