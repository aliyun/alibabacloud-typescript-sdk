// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetADBSparkNecessaryRAMPermissionsResponseBodyDataDeniedDetail extends $dara.Model {
  /**
   * @example
   * ListSparkApps
   */
  action?: string;
  /**
   * @example
   * ImplicitDeny
   */
  noPermissionType?: string;
  /**
   * @example
   * ControlPolicy
   */
  policyType?: string;
  /**
   * @example
   * SubUser
   */
  principalType?: string;
  /**
   * @example
   * 223345695632****
   */
  resourceAuthTargetInfo?: string;
  /**
   * @example
   * 11685695632****
   */
  resourceOwnerId?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      noPermissionType: 'NoPermissionType',
      policyType: 'PolicyType',
      principalType: 'PrincipalType',
      resourceAuthTargetInfo: 'ResourceAuthTargetInfo',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      noPermissionType: 'string',
      policyType: 'string',
      principalType: 'string',
      resourceAuthTargetInfo: 'string',
      resourceOwnerId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetADBSparkNecessaryRAMPermissionsResponseBodyData extends $dara.Model {
  deniedDetail?: GetADBSparkNecessaryRAMPermissionsResponseBodyDataDeniedDetail;
  /**
   * @example
   * true
   */
  passed?: boolean;
  /**
   * @example
   * Grant the system RAM policy \\"AliyunADBDeveloperAccess\\" to current RAM user can quickly solve this issue.
   */
  suggestion?: string;
  static names(): { [key: string]: string } {
    return {
      deniedDetail: 'DeniedDetail',
      passed: 'Passed',
      suggestion: 'Suggestion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deniedDetail: GetADBSparkNecessaryRAMPermissionsResponseBodyDataDeniedDetail,
      passed: 'boolean',
      suggestion: 'string',
    };
  }

  validate() {
    if(this.deniedDetail && typeof (this.deniedDetail as any).validate === 'function') {
      (this.deniedDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetADBSparkNecessaryRAMPermissionsResponseBody extends $dara.Model {
  data?: GetADBSparkNecessaryRAMPermissionsResponseBodyData;
  /**
   * @example
   * 642F3512-C628-5D0C-8815-F6670C****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetADBSparkNecessaryRAMPermissionsResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

