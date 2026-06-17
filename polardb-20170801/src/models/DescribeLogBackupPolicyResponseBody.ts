// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLogBackupPolicyResponseBodyAdvancedLogPoliciesAdvancedLogPolicy extends $dara.Model {
  destRegion?: string;
  destType?: string;
  enableLogBackup?: number;
  logRetentionType?: string;
  logRetentionValue?: string;
  policyId?: string;
  srcRegion?: string;
  srcType?: string;
  static names(): { [key: string]: string } {
    return {
      destRegion: 'DestRegion',
      destType: 'DestType',
      enableLogBackup: 'EnableLogBackup',
      logRetentionType: 'LogRetentionType',
      logRetentionValue: 'LogRetentionValue',
      policyId: 'PolicyId',
      srcRegion: 'SrcRegion',
      srcType: 'SrcType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destRegion: 'string',
      destType: 'string',
      enableLogBackup: 'number',
      logRetentionType: 'string',
      logRetentionValue: 'string',
      policyId: 'string',
      srcRegion: 'string',
      srcType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogBackupPolicyResponseBodyAdvancedLogPolicies extends $dara.Model {
  advancedLogPolicy?: DescribeLogBackupPolicyResponseBodyAdvancedLogPoliciesAdvancedLogPolicy[];
  static names(): { [key: string]: string } {
    return {
      advancedLogPolicy: 'AdvancedLogPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advancedLogPolicy: { 'type': 'array', 'itemType': DescribeLogBackupPolicyResponseBodyAdvancedLogPoliciesAdvancedLogPolicy },
    };
  }

  validate() {
    if(Array.isArray(this.advancedLogPolicy)) {
      $dara.Model.validateArray(this.advancedLogPolicy);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogBackupPolicyResponseBody extends $dara.Model {
  advancedLogPolicies?: DescribeLogBackupPolicyResponseBodyAdvancedLogPolicies;
  /**
   * @remarks
   * Indicates whether the log backup feature is enabled. Valid values:
   * 
   * - 0: The feature is disabled.
   * 
   * - 1: The feature is enabled. By default, the log backup feature is enabled and cannot be disabled.
   * 
   * > If the advanced backup feature is enabled, this parameter is not recommended. Use the AdvancedLogPolicies parameter instead.
   * 
   * @example
   * 1
   */
  enableBackupLog?: number;
  /**
   * @remarks
   * The region in which the cross-region log backup is stored. For information about the regions that support cross-region backup, see [Overview](https://help.aliyun.com/document_detail/72672.html).
   * 
   * > If the advanced backup feature is enabled, this parameter is not recommended. Use the AdvancedLogPolicies parameter instead.
   * 
   * @example
   * cn-beijing
   */
  logBackupAnotherRegionRegion?: string;
  /**
   * @remarks
   * The retention period of the cross-region log backup. Valid values:
   * 
   * - **0**: The cross-region log backup feature is disabled.
   * 
   * - **30 to 7300**: The cross-region log backup is retained for 30 to 7300 days.
   * 
   * - **-1**: The cross-region log backups are retained permanently.
   * 
   * > * * When you create a cluster, the default value is **0**. This value indicates that the cross-region log backup feature is disabled.
   * >
   * > * - If the advanced backup feature is enabled, this parameter is not recommended. Use the AdvancedLogPolicies parameter instead.
   * 
   * @example
   * 0
   */
  logBackupAnotherRegionRetentionPeriod?: string;
  /**
   * @remarks
   * The retention period of the log backup. Valid values:
   * 
   * - 3 to 7300: The log backup is retained for 3 to 7300 days.
   * 
   * - -1: The log backups are retained permanently.
   * 
   * > * If the advanced backup feature is enabled, this parameter is not recommended. Use the AdvancedLogPolicies parameter instead.
   * 
   * @example
   * 7
   */
  logBackupRetentionPeriod?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 62EE0051-102B-488D-9C79-D607B8******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      advancedLogPolicies: 'AdvancedLogPolicies',
      enableBackupLog: 'EnableBackupLog',
      logBackupAnotherRegionRegion: 'LogBackupAnotherRegionRegion',
      logBackupAnotherRegionRetentionPeriod: 'LogBackupAnotherRegionRetentionPeriod',
      logBackupRetentionPeriod: 'LogBackupRetentionPeriod',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advancedLogPolicies: DescribeLogBackupPolicyResponseBodyAdvancedLogPolicies,
      enableBackupLog: 'number',
      logBackupAnotherRegionRegion: 'string',
      logBackupAnotherRegionRetentionPeriod: 'string',
      logBackupRetentionPeriod: 'number',
      requestId: 'string',
    };
  }

  validate() {
    if(this.advancedLogPolicies && typeof (this.advancedLogPolicies as any).validate === 'function') {
      (this.advancedLogPolicies as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

