// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserStatusResponseBodyUserStatus extends $dara.Model {
  /**
   * @remarks
   * The AccessKey ID authorized by the user.
   * 
   * @example
   * yourAccessKeyID
   */
  accessKeyId?: string;
  /**
   * @remarks
   * Indicates whether the current logon account has authorized the service-linked role for DSC asset synchronization. Valid values:
   * - **true**: authorized.
   * - **false**: not authorized.
   * 
   * @example
   * true
   */
  assetRoleAuthed?: boolean;
  /**
   * @remarks
   * Indicates whether SQL Explorer can be disabled. Valid values:
   * - **true**: can be disabled.
   * - **false**: cannot be disabled.
   * 
   * @example
   * true
   */
  auditClosable?: boolean;
  /**
   * @remarks
   * Indicates whether SQL Explorer can be released. Valid values:
   * - **true**: can be released.
   * - **false**: cannot be released.
   * 
   * @example
   * true
   */
  auditReleasable?: boolean;
  /**
   * @remarks
   * Indicates whether the current logon account has authorized DSC to access RAM. Valid values:
   * - **true**: authorized.
   * - **false**: not authorized.
   * 
   * @example
   * true
   */
  authed?: boolean;
  /**
   * @remarks
   * The billing method of the DSC service purchased by the current logon account. Valid values:
   * - **PREPAY**: subscription.
   * - **POSTPAY**: pay-as-you-go.
   * 
   * @example
   * PREPAY
   */
  chargeType?: string;
  /**
   * @remarks
   * The permissions of the current account. Valid values:
   * - **0**: has management or read-only permissions for Data Security Center.
   * - **1**: has data domain management permissions.
   * 
   * @example
   * 1
   */
  dataManagerRole?: number;
  /**
   * @remarks
   * The instance ID of the Data Security Center product purchased by the Alibaba Cloud account.
   * 
   * @example
   * sddp-cn-****
   */
  instanceId?: string;
  /**
   * @remarks
   * The number of instances in the current logon account.
   * 
   * @example
   * 32
   */
  instanceNum?: number;
  /**
   * @remarks
   * The total number of instances.
   * 
   * @example
   * 10
   */
  instanceTotalCount?: number;
  /**
   * @remarks
   * Indicates whether the asset lab feature is enabled. Valid values:
   * - **1**: enabled.
   * - **0**: not enabled.
   * 
   * @example
   * 1
   */
  labStatus?: number;
  /**
   * @remarks
   * The total OSS storage capacity. Unit: bytes.
   * 
   * @example
   * 2048
   */
  ossTotalSize?: number;
  /**
   * @remarks
   * The total number of days that user assets have been protected.
   * 
   * @example
   * 22
   */
  protectionDays?: number;
  /**
   * @remarks
   * Indicates whether the DSC service is purchased. Valid values:
   * 
   * - **true**: purchased.
   * - **false**: not purchased.
   * 
   * @example
   * true
   */
  purchased?: boolean;
  /**
   * @remarks
   * The number of days from expiration to release. Unit: days.
   * 
   * @example
   * 15
   */
  releaseDays?: number;
  /**
   * @remarks
   * The release time. Unit: milliseconds.
   * 
   * @example
   * 15000
   */
  releaseTime?: number;
  /**
   * @remarks
   * The remaining days of the protection period for assets in the current logon account.
   * 
   * @example
   * 131
   */
  remainDays?: number;
  /**
   * @remarks
   * Indicates whether the current logon account is using a trial version of DSC. Valid values:
   * - **true**: trial.
   * - **false**: non-trial.
   * 
   * @example
   * true
   */
  trail?: boolean;
  /**
   * @remarks
   * Indicates whether the Agent audit feature has been used. Valid values:
   * - **1**: has been used.
   * - **0**: has not been used.
   * 
   * @example
   * 1
   */
  useAgentAudit?: boolean;
  /**
   * @remarks
   * The number of instances that are used.
   * 
   * @example
   * 125
   */
  useInstanceNum?: number;
  /**
   * @remarks
   * The used OSS storage capacity. Unit: bytes.
   * 
   * @example
   * 234
   */
  useOssSize?: number;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      assetRoleAuthed: 'AssetRoleAuthed',
      auditClosable: 'AuditClosable',
      auditReleasable: 'AuditReleasable',
      authed: 'Authed',
      chargeType: 'ChargeType',
      dataManagerRole: 'DataManagerRole',
      instanceId: 'InstanceId',
      instanceNum: 'InstanceNum',
      instanceTotalCount: 'InstanceTotalCount',
      labStatus: 'LabStatus',
      ossTotalSize: 'OssTotalSize',
      protectionDays: 'ProtectionDays',
      purchased: 'Purchased',
      releaseDays: 'ReleaseDays',
      releaseTime: 'ReleaseTime',
      remainDays: 'RemainDays',
      trail: 'Trail',
      useAgentAudit: 'UseAgentAudit',
      useInstanceNum: 'UseInstanceNum',
      useOssSize: 'UseOssSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      assetRoleAuthed: 'boolean',
      auditClosable: 'boolean',
      auditReleasable: 'boolean',
      authed: 'boolean',
      chargeType: 'string',
      dataManagerRole: 'number',
      instanceId: 'string',
      instanceNum: 'number',
      instanceTotalCount: 'number',
      labStatus: 'number',
      ossTotalSize: 'number',
      protectionDays: 'number',
      purchased: 'boolean',
      releaseDays: 'number',
      releaseTime: 'number',
      remainDays: 'number',
      trail: 'boolean',
      useAgentAudit: 'boolean',
      useInstanceNum: 'number',
      useOssSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 769FB3C1-F4C9-42DF-9B72-7077A8989C13
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the current logon account.
   */
  userStatus?: DescribeUserStatusResponseBodyUserStatus;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      userStatus: 'UserStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      userStatus: DescribeUserStatusResponseBodyUserStatus,
    };
  }

  validate() {
    if(this.userStatus && typeof (this.userStatus as any).validate === 'function') {
      (this.userStatus as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

