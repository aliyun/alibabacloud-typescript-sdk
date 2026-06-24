// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserStatusResponseBodyUserStatus extends $dara.Model {
  /**
   * @remarks
   * The authorized AccessKey ID of the user.
   * 
   * @example
   * yourAccessKeyID
   */
  accessKeyId?: string;
  /**
   * @remarks
   * Indicates whether the currently logged-in account has been granted the service role permissions for DSC asset synchronization. Valid values:
   * 
   * - **true**: authorized.
   * 
   * - **false**: unauthorized.
   * 
   * @example
   * true
   */
  assetRoleAuthed?: boolean;
  /**
   * @remarks
   * Indicates whether SQL Insights can be disabled. Valid values:
   * 
   * - **true**: yes.
   * 
   * - **false**: no.
   * 
   * @example
   * true
   */
  auditClosable?: boolean;
  /**
   * @remarks
   * Indicates whether SQL Insights can be released.
   * 
   * - **true**: yes.
   * 
   * - **false**: no.
   * 
   * @example
   * true
   */
  auditReleasable?: boolean;
  /**
   * @remarks
   * Indicates whether the current account is granted Resource Access Management (RAM) permissions on DSC. Valid values:
   * 
   * - **true**: The account is granted the permissions.
   * 
   * - **false**: The account is not granted the permissions.
   * 
   * @example
   * true
   */
  authed?: boolean;
  /**
   * @remarks
   * The billing method of the DSC service for the current account. Valid values:
   * 
   * - **PREPAY**: subscription.
   * 
   * - **POSTPAY**: pay-as-you-go.
   * 
   * @example
   * PREPAY
   */
  chargeType?: string;
  /**
   * @remarks
   * The permissions that the current account has. Valid values:
   * 
   * - **0**: The account has the management or read-only permissions on Data Security Center.
   * 
   * - **1**: The account has the management permissions on data domains.
   * 
   * @example
   * 1
   */
  dataManagerRole?: number;
  /**
   * @remarks
   * The ID of the Data Security Center instance purchased by the Alibaba Cloud account.
   * 
   * @example
   * sddp-cn-****
   */
  instanceId?: string;
  /**
   * @remarks
   * The number of instances in the current account.
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
   * Indicates whether the Asset Lab feature is enabled. Valid values:
   * 
   * - **1**: enabled.
   * 
   * - **0**: disabled.
   * 
   * @example
   * 1
   */
  labStatus?: number;
  /**
   * @remarks
   * The total OSS storage. Unit: bytes.
   * 
   * @example
   * 2048
   */
  ossTotalSize?: number;
  /**
   * @remarks
   * The total number of days that assets have been protected.
   * 
   * @example
   * 22
   */
  protectionDays?: number;
  /**
   * @remarks
   * Indicates whether the DSC service is purchased. Valid values:
   * 
   * - **true**: yes.
   * 
   * - **false**: no.
   * 
   * @example
   * true
   */
  purchased?: boolean;
  /**
   * @remarks
   * The number of days from service expiration to service release. Unit: days.
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
   * The number of remaining days in the protection period for the assets of the current account.
   * 
   * @example
   * 131
   */
  remainDays?: number;
  /**
   * @remarks
   * Indicates whether the current account uses the trial version of the DSC service. Valid values:
   * 
   * - **true**: yes.
   * 
   * - **false**: no.
   * 
   * @example
   * true
   */
  trail?: boolean;
  /**
   * @remarks
   * Indicates whether the agent-based audit feature has been used. Valid values:
   * 
   * - **1**: yes.
   * 
   * - **0**: no.
   * 
   * @example
   * 1
   */
  useAgentAudit?: boolean;
  /**
   * @remarks
   * The number of used instances.
   * 
   * @example
   * 125
   */
  useInstanceNum?: number;
  /**
   * @remarks
   * The used Object Storage Service (OSS) storage. Unit: bytes.
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
   * The ID of the request.
   * 
   * @example
   * 769FB3C1-F4C9-42DF-9B72-7077A8989C13
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the current account.
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

