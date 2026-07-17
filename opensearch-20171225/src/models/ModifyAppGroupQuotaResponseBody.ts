// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAppGroupQuotaResponseBodyResultQuota extends $dara.Model {
  /**
   * @remarks
   * The compute resources in LCU.
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
   * The specifications.
   * 
   * - opensearch.share.junior: Entry-level
   * 
   * - opensearch.share.common: Shared General-purpose
   * 
   * - opensearch.share.compute: Shared Compute-optimized
   * 
   * - opensearch.share.storage: Shared Storage-optimized
   * 
   * - opensearch.private.common: Dedicated General-purpose
   * 
   * - opensearch.private.compute: Dedicated Compute-optimized
   * 
   * - opensearch.private.storage: Dedicated Storage-optimized
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

export class ModifyAppGroupQuotaResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The billing method.
   * 
   * - POSTPAY: pay-as-you-go
   * 
   * - PREPAY: subscription
   * 
   * @example
   * POSTPAY
   */
  chargeType?: string;
  /**
   * @remarks
   * The billing model.
   * 
   * - 1: by compute resources
   * 
   * - 2: by queries per second (QPS)
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
   * 1590139542
   */
  created?: number;
  /**
   * @remarks
   * The current online version.
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
   * Indicates whether a quota is pending for approval.
   * 
   * - 0: No quota is pending for approval.
   * 
   * - 1: A quota is pending for approval.
   * 
   * @example
   * 0
   */
  hasPendingQuotaReviewTask?: number;
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * 100302881
   */
  id?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * 1
   */
  instanceId?: string;
  /**
   * @remarks
   * The lock status.
   * 
   * - Unlock: The application is not locked.
   * 
   * - LockByExpiration: The application is automatically locked upon expiration.
   * 
   * - ManualLock: The application is manually locked.
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
   * Indicates whether the application is provisioned.
   * 
   * - 0: The application is being provisioned.
   * 
   * - 1: The application is provisioned.
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
   * 1000
   */
  projectId?: string;
  /**
   * @remarks
   * The quota information of the application.
   */
  quota?: ModifyAppGroupQuotaResponseBodyResultQuota;
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
   * The status of the application.
   * 
   * - producing: The application is being provisioned.
   * 
   * - review_pending: The application is pending for review.
   * 
   * - config_pending: The application is pending for configuration.
   * 
   * - normal: The application is running as normal.
   * 
   * - frozen: The application is frozen.
   * 
   * @example
   * normal
   */
  status?: string;
  /**
   * @remarks
   * The timestamp when the online version was switched.
   * 
   * @example
   * 1590486386
   */
  switchedTime?: number;
  /**
   * @remarks
   * The type of the application.
   * 
   * - standard: Standard Edition
   * 
   * - advance: an earlier version of Premium Edition. This type is not supported for new applications.
   * 
   * - enhanced: a new version of Premium Edition.
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
      engineType: 'string',
      expireOn: 'string',
      hasPendingQuotaReviewTask: 'number',
      id: 'string',
      instanceId: 'string',
      lockMode: 'string',
      name: 'string',
      produced: 'number',
      projectId: 'string',
      quota: ModifyAppGroupQuotaResponseBodyResultQuota,
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

export class ModifyAppGroupQuotaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0A6EB64B-B4C8-CF02-810F-E660812972FF
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the application.
   */
  result?: ModifyAppGroupQuotaResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: ModifyAppGroupQuotaResponseBodyResult,
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

