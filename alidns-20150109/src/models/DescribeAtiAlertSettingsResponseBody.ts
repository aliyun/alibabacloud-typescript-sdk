// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAtiAlertSettingsResponseBodyAccessDeniedDetail extends $dara.Model {
  /**
   * @remarks
   * The unauthorized operation that was attempted.
   * 
   * @example
   * UpdateRspDomainServerProhibitStatusForGatewayOte
   */
  authAction?: string;
  /**
   * @remarks
   * The display name of the authorization principal.
   * 
   * @example
   * 2015555733387XXXX
   */
  authPrincipalDisplayName?: string;
  /**
   * @remarks
   * The ID of the authorization principal owner.
   * 
   * @example
   * 10469733312XXX
   */
  authPrincipalOwnerId?: string;
  /**
   * @remarks
   * The identity type.
   * 
   * @example
   * SubUser
   */
  authPrincipalType?: string;
  /**
   * @remarks
   * The encrypted diagnostic message.
   * 
   * @example
   * AQEAAAAAaNIARXXXXUQwNjE0LUQzN0XXXXVEQy1BQzExLTMzXXXXNTkxRjk1Ng==
   */
  encodedDiagnosticMessage?: string;
  /**
   * @remarks
   * The reason for the authentication failure. Valid values:
   * - ExplicitDeny: explicit deny.
   * - ImplicitDeny: implicit deny.
   * 
   * @example
   * ImplicitDeny
   */
  noPermissionType?: string;
  /**
   * @remarks
   * The policy type.
   * 
   * @example
   * DlpSend
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

export class DescribeAtiAlertSettingsResponseBodyAlertConfigAlertConfig extends $dara.Model {
  dingtalkNotice?: boolean;
  emailNotice?: boolean;
  noticeType?: string;
  smsNotice?: boolean;
  static names(): { [key: string]: string } {
    return {
      dingtalkNotice: 'DingtalkNotice',
      emailNotice: 'EmailNotice',
      noticeType: 'NoticeType',
      smsNotice: 'SmsNotice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dingtalkNotice: 'boolean',
      emailNotice: 'boolean',
      noticeType: 'string',
      smsNotice: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAtiAlertSettingsResponseBodyAlertConfig extends $dara.Model {
  alertConfig?: DescribeAtiAlertSettingsResponseBodyAlertConfigAlertConfig[];
  static names(): { [key: string]: string } {
    return {
      alertConfig: 'AlertConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertConfig: { 'type': 'array', 'itemType': DescribeAtiAlertSettingsResponseBodyAlertConfigAlertConfig },
    };
  }

  validate() {
    if(Array.isArray(this.alertConfig)) {
      $dara.Model.validateArray(this.alertConfig);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAtiAlertSettingsResponseBodyAlertGroup extends $dara.Model {
  alertGroup?: string[];
  static names(): { [key: string]: string } {
    return {
      alertGroup: 'AlertGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertGroup: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.alertGroup)) {
      $dara.Model.validateArray(this.alertGroup);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAtiAlertSettingsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial. This field is returned only when the RAM authentication fails.
   */
  accessDeniedDetail?: DescribeAtiAlertSettingsResponseBodyAccessDeniedDetail;
  alertConfig?: DescribeAtiAlertSettingsResponseBodyAlertConfig;
  alertGroup?: DescribeAtiAlertSettingsResponseBodyAlertGroup;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 29D0F8F8-5499-4F6C-9FDC-1EE13BF55925
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      alertConfig: 'AlertConfig',
      alertGroup: 'AlertGroup',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: DescribeAtiAlertSettingsResponseBodyAccessDeniedDetail,
      alertConfig: DescribeAtiAlertSettingsResponseBodyAlertConfig,
      alertGroup: DescribeAtiAlertSettingsResponseBodyAlertGroup,
      requestId: 'string',
    };
  }

  validate() {
    if(this.accessDeniedDetail && typeof (this.accessDeniedDetail as any).validate === 'function') {
      (this.accessDeniedDetail as any).validate();
    }
    if(this.alertConfig && typeof (this.alertConfig as any).validate === 'function') {
      (this.alertConfig as any).validate();
    }
    if(this.alertGroup && typeof (this.alertGroup as any).validate === 'function') {
      (this.alertGroup as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

