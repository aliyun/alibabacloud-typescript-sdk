// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAppGroupResponseBodyResultQuota extends $dara.Model {
  /**
   * @remarks
   * The computing resources in logical compute units (LCUs).
   * 
   * @example
   * 20
   */
  computeResource?: number;
  /**
   * @remarks
   * The storage capacity in GB.
   * 
   * @example
   * 1
   */
  docSize?: number;
  /**
   * @remarks
   * The specifications. Valid values:
   * 
   * - opensearch.share.junior: Basic
   * 
   * - opensearch.share.common: Shared General-purpose
   * 
   * - opensearch.share.compute: Shared Compute-optimized
   * 
   * - opensearch.share.storage: Shared Storage-optimized
   * 
   * - opensearch.private.common: Exclusive General-purpose
   * 
   * - opensearch.private.compute: Exclusive Compute-optimized
   * 
   * - opensearch.private.storage: Exclusive Storage-optimized
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

export class ModifyAppGroupResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * - POSTPAY: pay-as-you-go.
   * 
   * - PREPAY: subscription.
   * 
   * @example
   * POSTPAY
   */
  chargeType?: string;
  /**
   * @remarks
   * The billable item. Valid values:
   * 
   * - 1: computing resources.
   * 
   * - 2: QPS.
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
   * The UNIX timestamp when the application was created.
   * 
   * @example
   * 159013954
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
   * 1
   */
  description?: string;
  /**
   * @remarks
   * The industry. Valid values:
   * 
   * - GENERAL: general.
   * 
   * - ECOMMERCE: e-commerce.
   * 
   * - IT_CONTENT: IT content.
   * 
   * @example
   * GENERAL
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
   * 1
   */
  expireOn?: string;
  /**
   * @remarks
   * The approval status of the quota. Valid values:
   * 
   * - 0: normal.
   * 
   * - 1: being approved.
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
   * 100302881
   */
  id?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * 10030288
   */
  instanceId?: string;
  /**
   * @remarks
   * The lock mode of the instance. Valid values:
   * 
   * - Unlock: The instance is not locked.
   * 
   * - LockByExpiration: The instance is automatically locked after it expires.
   * 
   * - ManualLock: The instance is manually locked.
   * 
   * @example
   * Unlock
   */
  lockMode?: string;
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * lsh_test_1
   */
  name?: string;
  /**
   * @remarks
   * Indicates whether the application is created. Valid values:
   * 
   * - 0: The application is being created.
   * 
   * - 1: The application is created.
   * 
   * @example
   * 1
   */
  produced?: number;
  /**
   * @remarks
   * The name of the A/B test project.
   * 
   * @example
   * 1
   */
  projectId?: string;
  /**
   * @remarks
   * The quota information of the application.
   * 
   * @example
   * {}
   */
  quota?: ModifyAppGroupResponseBodyResultQuota;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs.
   * 
   * @example
   * rg-acfmoiyerh6nzly
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The status of the application. Valid values:
   * 
   * - producing: The application is being created.
   * 
   * - review_pending: The application is under review.
   * 
   * - config_pending: The application requires configuration.
   * 
   * - normal: The application is running.
   * 
   * - frozen: The application is frozen.
   * 
   * @example
   * normal
   */
  status?: string;
  /**
   * @remarks
   * The UNIX timestamp when the current online version was published.
   * 
   * @example
   * 1590486386
   */
  switchedTime?: number;
  /**
   * @remarks
   * The type of the application. Valid values:
   * 
   * - standard: a Standard Edition application.
   * 
   * - advance: an Advanced Edition application of an old version. New applications do not support this type.
   * 
   * - enhanced: an Enhanced Edition application.
   * 
   * @example
   * enhanced
   */
  type?: string;
  /**
   * @remarks
   * The UNIX timestamp when the application was last modified.
   * 
   * @example
   * 1590978265
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
      hasPendingQuotaReviewTask: 'hasPendingQuotaReviewTask',
      id: 'id',
      instanceId: 'instanceId',
      lockMode: 'lockMode',
      name: 'name',
      produced: 'produced',
      projectId: 'projectId',
      quota: 'quota',
      resourceGroupId: 'resourceGroupId',
      status: 'status',
      switchedTime: 'switchedTime',
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
      hasPendingQuotaReviewTask: 'number',
      id: 'string',
      instanceId: 'string',
      lockMode: 'string',
      name: 'string',
      produced: 'number',
      projectId: 'string',
      quota: ModifyAppGroupResponseBodyResultQuota,
      resourceGroupId: 'string',
      status: 'string',
      switchedTime: 'number',
      type: 'string',
      updated: 'number',
    };
  }

  validate() {
    if(this.quota && typeof (this.quota as any).validate === 'function') {
      (this.quota as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAppGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D77D0DAF-790D-F5F5-A9C0-133738165014
   */
  requestId?: string;
  /**
   * @remarks
   * The returned data.
   * 
   * @example
   * {}
   */
  result?: ModifyAppGroupResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: ModifyAppGroupResponseBodyResult,
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

