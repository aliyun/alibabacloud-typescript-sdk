// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserStatusResponseBodyUserStatus extends $dara.Model {
  /**
   * @remarks
   * The AccessKey ID of the current account.
   * 
   * @example
   * yourAccessKeyID
   */
  accessKeyId?: string;
  /**
   * @remarks
   * Indicates whether the SQL Explorer feature can be disabled. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * true
   */
  auditClosable?: boolean;
  /**
   * @remarks
   * Indicates whether the audit resources can be released.
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * true
   */
  auditReleasable?: boolean;
  /**
   * @remarks
   * Indicates whether DSC has permission to access user resources within the current account. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * true
   */
  authed?: boolean;
  /**
   * @remarks
   * The billing method of DCS that is purchased by using the current account. Valid values:
   * 
   * *   **PREPAY**: subscription
   * *   **POSTPAY**: pay-as-you-go
   * 
   * @example
   * PREPAY
   */
  chargeType?: string;
  /**
   * @remarks
   * The permissions that the current account has. Valid values:
   * 
   * *   **0**: The current account has the administrative permissions or read-only permissions on Data Security Center.
   * *   **1**: The current account has the permissions to manage data domains.
   * 
   * @example
   * 1
   */
  dataManagerRole?: number;
  /**
   * @remarks
   * The ID of the data security center instance purchased by the main account.
   * 
   * @example
   * sddp-cn-****
   */
  instanceId?: string;
  /**
   * @remarks
   * The number of instances within the current account.
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
   * Indicates whether the data security lab feature is enabled. Valid values:
   * 
   * *   **1**: yes
   * *   **0**: no
   * 
   * @example
   * 1
   */
  labStatus?: number;
  /**
   * @remarks
   * OSS total storage capacity. Unit: Bytes.
   * 
   * @example
   * 2048
   */
  ossTotalSize?: number;
  /**
   * @remarks
   * Accumulate the number of days to protect user assets.
   * 
   * @example
   * 2
   */
  protectionDays?: number;
  /**
   * @remarks
   * Indicates whether DSC is purchased. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * true
   */
  purchased?: boolean;
  /**
   * @remarks
   * The grace period between when DSC is expired and when DSC is released. Unit: days.
   * 
   * @example
   * 15
   */
  releaseDays?: number;
  /**
   * @remarks
   * The time when the audit resources are released. Unit: milliseconds.
   * 
   * @example
   * 15000
   */
  releaseTime?: number;
  /**
   * @remarks
   * The remaining period for which the data assets within the current account can be protected by DSC.
   * 
   * @example
   * 131
   */
  remainDays?: number;
  /**
   * @remarks
   * Indicates whether the current account uses a free trial of DSC. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * true
   */
  trail?: boolean;
  /**
   * @remarks
   * Indicates whether the agent audit feature is used. Valid values:
   * 
   * *   **1**: yes
   * *   **0**: no
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
   * The occupied space of the Object Storage Service (OSS) bucket. Unit: bytes.
   * 
   * @example
   * 234
   */
  useOssSize?: number;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
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

