// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppGroupsResponseBodyResultQuota extends $dara.Model {
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

export class ListAppGroupsResponseBodyResultTags extends $dara.Model {
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
   * The tag value.
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

export class ListAppGroupsResponseBodyResult extends $dara.Model {
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
   * The billing method. Valid values:
   * 
   * - 1: computing resources
   * 
   * - 2: queries per second (QPS)
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
   * The timestamp that indicates when the application was created.
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
   * "xxx"
   */
  description?: string;
  /**
   * @remarks
   * The domain of the application group.
   * 
   * @example
   * ""
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
   * The time when the application expires.
   * 
   * @example
   * "xxx"
   */
  expireOn?: string;
  /**
   * @remarks
   * The quota approval status. Valid values:
   * 
   * - 0: Normal
   * 
   * - 1: Pending approval
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
   * "xxx"
   */
  instanceId?: string;
  /**
   * @remarks
   * The lock status. Valid values:
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
   * "xxx"
   */
  projectId?: string;
  /**
   * @remarks
   * The quota information of the application.
   * For more information, see [Quota](https://help.aliyun.com/document_detail/170001.html).
   * 
   * @example
   * {}
   */
  quota?: ListAppGroupsResponseBodyResultQuota;
  /**
   * @remarks
   * The status of the application. Valid values:
   * 
   * - producing: The application is being created.
   * 
   * - review_pending: The application is pending approval.
   * 
   * - config_pending: The application is pending configuration.
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
   * The timestamp that indicates when the current online version was published.
   * 
   * @example
   * 0
   */
  switchedTime?: number;
  /**
   * @remarks
   * The tags of the application.
   */
  tags?: ListAppGroupsResponseBodyResultTags[];
  /**
   * @remarks
   * The type of the application. Valid values:
   * 
   * - standard: a Standard Edition application.
   * 
   * - enhanced: a Premium Edition application.
   * 
   * @example
   * enhanced
   */
  type?: string;
  /**
   * @remarks
   * The timestamp that indicates when the application was last updated.
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
      hasPendingQuotaReviewTask: 'hasPendingQuotaReviewTask',
      id: 'id',
      instanceId: 'instanceId',
      lockMode: 'lockMode',
      lockedByExpiration: 'lockedByExpiration',
      name: 'name',
      produced: 'produced',
      projectId: 'projectId',
      quota: 'quota',
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
      hasPendingQuotaReviewTask: 'number',
      id: 'string',
      instanceId: 'string',
      lockMode: 'string',
      lockedByExpiration: 'number',
      name: 'string',
      produced: 'number',
      projectId: 'string',
      quota: ListAppGroupsResponseBodyResultQuota,
      status: 'string',
      switchedTime: 'number',
      tags: { 'type': 'array', 'itemType': ListAppGroupsResponseBodyResultTags },
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

export class ListAppGroupsResponseBody extends $dara.Model {
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
   * The applications.
   * 
   * For more information, see [AppGroup](https://help.aliyun.com/document_detail/170000.html).
   * 
   * @example
   * []
   */
  result?: ListAppGroupsResponseBodyResult[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListAppGroupsResponseBodyResult },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

