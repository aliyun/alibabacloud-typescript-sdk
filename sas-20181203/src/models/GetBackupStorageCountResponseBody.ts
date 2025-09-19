// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBackupStorageCountResponseBodyBackupStorageCount extends $dara.Model {
  /**
   * @remarks
   * The anti-ransomware capacity that you purchased. Unit: bytes.
   * 
   * @example
   * 2276332666880
   */
  buyStorageByte?: number;
  /**
   * @remarks
   * The storage capacity that is occupied by the backup data of your servers. Unit: bytes.
   * 
   * @example
   * 817262417803
   */
  ecsUsageStorageByte?: number;
  /**
   * @remarks
   * Indicates whether the anti-ransomware capacity that is used exceeds the anti-ransomware capacity that you purchased. Valid values:
   * 
   * *   **0**: no
   * *   **1**: yes
   * 
   * @example
   * 0
   */
  overflow?: number;
  /**
   * @remarks
   * The storage capacity that is occupied by the backup data of your databases. Unit: bytes.
   * 
   * @example
   * 7453049350
   */
  uniUsageStorageByte?: number;
  /**
   * @remarks
   * The total anti-ransomware capacity that is used. Unit: bytes.
   * 
   * @example
   * 839621565853
   */
  usageStorageByte?: number;
  static names(): { [key: string]: string } {
    return {
      buyStorageByte: 'BuyStorageByte',
      ecsUsageStorageByte: 'EcsUsageStorageByte',
      overflow: 'Overflow',
      uniUsageStorageByte: 'UniUsageStorageByte',
      usageStorageByte: 'UsageStorageByte',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buyStorageByte: 'number',
      ecsUsageStorageByte: 'number',
      overflow: 'number',
      uniUsageStorageByte: 'number',
      usageStorageByte: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBackupStorageCountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the anti-ransomware capacity.
   */
  backupStorageCount?: GetBackupStorageCountResponseBodyBackupStorageCount;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 33C2CCFF-4BF8-5F88-9B5C-22F932F80E5A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      backupStorageCount: 'BackupStorageCount',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupStorageCount: GetBackupStorageCountResponseBodyBackupStorageCount,
      requestId: 'string',
    };
  }

  validate() {
    if(this.backupStorageCount && typeof (this.backupStorageCount as any).validate === 'function') {
      (this.backupStorageCount as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

