// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupTablesRequest extends $dara.Model {
  /**
   * @remarks
   * The backup record ID. You can call the DescribeBackupSummary operation to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 2020110302xxxx
   */
  backupRecordId?: string;
  /**
   * @remarks
   * The ID of the backup cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * ld-m5eznlga4k5bcxxxx
   */
  clusterId?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      backupRecordId: 'BackupRecordId',
      clusterId: 'ClusterId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupRecordId: 'string',
      clusterId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

