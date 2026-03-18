// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAvailableZonesResponseBodyData extends $dara.Model {
  officialAvailableZones?: string[];
  trialAvailableZones?: string[];
  static names(): { [key: string]: string } {
    return {
      officialAvailableZones: 'OfficialAvailableZones',
      trialAvailableZones: 'TrialAvailableZones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      officialAvailableZones: { 'type': 'array', 'itemType': 'string' },
      trialAvailableZones: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.officialAvailableZones)) {
      $dara.Model.validateArray(this.officialAvailableZones);
    }
    if(Array.isArray(this.trialAvailableZones)) {
      $dara.Model.validateArray(this.trialAvailableZones);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableZonesResponseBody extends $dara.Model {
  /**
   * @remarks
   * AccessDeniedDetail
   * 
   * @example
   * {     "PolicyType": "AccountLevelIdentityBasedPolicy",     "AuthPrincipalOwnerId": "xxx",     "EncodedDiagnosticMessage": "xxx",     "AuthPrincipalType": "xxx",     "AuthPrincipalDisplayName": "xxx",     "NoPermissionType": "ImplicitDeny",     "AuthAction": "sr:xxx"   }
   */
  accessDeniedDetail?: string;
  data?: DescribeAvailableZonesResponseBodyData;
  /**
   * @example
   * Success
   */
  errCode?: string;
  /**
   * @example
   * Invalid params: [Region id should be select from set [cn-beijing, cn-hangzhou]]
   */
  errMessage?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * 32A44F0D-BFF6-5664-999A-218BBDE7****
   */
  requestId?: string;
  /**
   * @example
   * false
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      data: 'Data',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      data: DescribeAvailableZonesResponseBodyData,
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
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

