// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The enabling status of backup. Valid values:
   * - closed: not enabled.
   * - opened: enabled.
   * - opening: being enabled.
   * 
   * @example
   * opened
   */
  backupStatus?: string;
  /**
   * @remarks
   * The instance ID of the BDS instance used for backup.
   * 
   * @example
   * bds-m5e54q06ceyhxxxx
   */
  bdsClusterId?: string;
  /**
   * @remarks
   * The ID of the backup cluster.
   * 
   * @example
   * ld-m5eznlga4k5bcxxxx
   */
  clusterId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F7E71430-A825-470A-B40B-DF3F3AAC9BEE
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      backupStatus: 'BackupStatus',
      bdsClusterId: 'BdsClusterId',
      clusterId: 'ClusterId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupStatus: 'string',
      bdsClusterId: 'string',
      clusterId: 'string',
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

