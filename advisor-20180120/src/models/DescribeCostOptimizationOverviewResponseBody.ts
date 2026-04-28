// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCostOptimizationOverviewResponseBodyAccessDeniedDetail extends $dara.Model {
  /**
   * @remarks
   * AuthAction
   * 
   * @example
   * null
   */
  authAction?: string;
  /**
   * @example
   * null
   */
  authPrincipalDisplayName?: string;
  /**
   * @example
   * null
   */
  authPrincipalOwnerId?: string;
  /**
   * @example
   * null
   */
  authPrincipalType?: string;
  /**
   * @example
   * *****
   */
  encodedDiagnosticMessage?: string;
  /**
   * @example
   * null
   */
  noPermissionType?: string;
  /**
   * @example
   * PauseNotify
   */
  policyType?: string;
  static names(): { [key: string]: string } {
    return {
      authAction: 'AuthAction',
      authPrincipalDisplayName: 'AuthPrincipalDisplayName',
      authPrincipalOwnerId: 'AuthPrincipalOwnerId',
      authPrincipalType: 'AuthPrincipalType',
      encodedDiagnosticMessage: 'EncodedDiagnosticMessage',
      noPermissionType: 'NoPermissionType',
      policyType: 'PolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authAction: 'string',
      authPrincipalDisplayName: 'string',
      authPrincipalOwnerId: 'string',
      authPrincipalType: 'string',
      encodedDiagnosticMessage: 'string',
      noPermissionType: 'string',
      policyType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCostOptimizationOverviewResponseBodyData extends $dara.Model {
  /**
   * @example
   * 100
   */
  billingCycleDate?: string;
  /**
   * @example
   * 100
   */
  currentBillingCost?: string;
  /**
   * @example
   * 100
   */
  expectedSavingCost?: string;
  /**
   * @example
   * 2023-07-01 00:00:00
   */
  gmtModified?: number;
  /**
   * @example
   * 100
   */
  optCheckItemNum?: string;
  /**
   * @example
   * 100
   */
  optResourceNum?: string;
  processedResourceCount?: string;
  processedSaveAmount?: string;
  /**
   * @example
   * 95***135
   */
  taskId?: number;
  waitProcessResourceCount?: string;
  static names(): { [key: string]: string } {
    return {
      billingCycleDate: 'BillingCycleDate',
      currentBillingCost: 'CurrentBillingCost',
      expectedSavingCost: 'ExpectedSavingCost',
      gmtModified: 'GmtModified',
      optCheckItemNum: 'OptCheckItemNum',
      optResourceNum: 'OptResourceNum',
      processedResourceCount: 'ProcessedResourceCount',
      processedSaveAmount: 'ProcessedSaveAmount',
      taskId: 'TaskId',
      waitProcessResourceCount: 'WaitProcessResourceCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingCycleDate: 'string',
      currentBillingCost: 'string',
      expectedSavingCost: 'string',
      gmtModified: 'number',
      optCheckItemNum: 'string',
      optResourceNum: 'string',
      processedResourceCount: 'string',
      processedSaveAmount: 'string',
      taskId: 'number',
      waitProcessResourceCount: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCostOptimizationOverviewResponseBody extends $dara.Model {
  accessDeniedDetail?: DescribeCostOptimizationOverviewResponseBodyAccessDeniedDetail;
  /**
   * @example
   * 200
   */
  code?: string;
  data?: DescribeCostOptimizationOverviewResponseBodyData;
  /**
   * @example
   * Internal service issue. Detail:.
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 566331F9-****-550F-B745-A730331F97A9
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: DescribeCostOptimizationOverviewResponseBodyAccessDeniedDetail,
      code: 'string',
      data: DescribeCostOptimizationOverviewResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.accessDeniedDetail && typeof (this.accessDeniedDetail as any).validate === 'function') {
      (this.accessDeniedDetail as any).validate();
    }
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

