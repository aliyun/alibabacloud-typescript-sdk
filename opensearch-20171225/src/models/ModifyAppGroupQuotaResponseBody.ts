// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAppGroupQuotaResponseBodyResultQuota extends $dara.Model {
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

export class ModifyAppGroupQuotaResponseBodyResult extends $dara.Model {
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
   * 1590139542
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
   * The engine type.
   * 
   * Valid values:
   * 
   * *   ha3: ha3.
   * 
   * @example
   * ha3
   */
  engineType?: string;
  /**
   * @remarks
   * The time when the application expired.
   * 
   * @example
   * 1
   */
  expireOn?: string;
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
   * 100302881
   */
  id?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * 1
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
   * The name of the application
   * 
   * @example
   * lsh_test_1
   */
  name?: string;
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
   * 1000
   */
  projectId?: string;
  /**
   * @remarks
   * The information about the quotas of the application.
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
   * 1590486386
   */
  switchedTime?: number;
  /**
   * @remarks
   * The type of the application. Valid values:
   * 
   * *   standard: a standard edition application.
   * *   advance: an advanced edition application of an old version. New versions are not supported for this edition.
   * *   enhanced: an advanced edition application of a new version.
   * 
   * @example
   * enhanced
   */
  type?: string;
  /**
   * @remarks
   * The timestamp when the application was last modified.
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

