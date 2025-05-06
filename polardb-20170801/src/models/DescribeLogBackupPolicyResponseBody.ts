// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLogBackupPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the log backup feature is enabled. Valid values:
   * 
   * *   0: The log backup feature is disabled.
   * *   1: The log backup feature is enabled. By default, the log backup feature is enabled and cannot be disabled.
   * 
   * @example
   * 1
   */
  enableBackupLog?: number;
  /**
   * @remarks
   * The region in which you want to store cross-region log backups. For more information about regions that support the cross-region backup feature, see [Overview](https://help.aliyun.com/document_detail/72672.html).
   * 
   * @example
   * cn-beijing
   */
  logBackupAnotherRegionRegion?: string;
  /**
   * @remarks
   * The retention period of cross-region log backups. Valid values:
   * 
   * *   **0**: The cross-region backup feature is disabled.
   * *   **30 to 7300**: Cross-region log backups are retained for 30 to 7,300 days.
   * *   **-1**: The log backups are permanently retained.
   * 
   * >  When you create a cluster, the default value of this parameter is **0**.
   * 
   * @example
   * 0
   */
  logBackupAnotherRegionRetentionPeriod?: string;
  /**
   * @remarks
   * The retention period of the log backups. Valid values:
   * 
   * *   3 to 7300: The log backups are retained for 3 to 7,300 days.
   * *   \\-1: The log backups are permanently retained.
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
      enableBackupLog: 'EnableBackupLog',
      logBackupAnotherRegionRegion: 'LogBackupAnotherRegionRegion',
      logBackupAnotherRegionRetentionPeriod: 'LogBackupAnotherRegionRetentionPeriod',
      logBackupRetentionPeriod: 'LogBackupRetentionPeriod',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableBackupLog: 'number',
      logBackupAnotherRegionRegion: 'string',
      logBackupAnotherRegionRetentionPeriod: 'string',
      logBackupRetentionPeriod: 'number',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

