// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBackupJobsRequest extends $dara.Model {
  /**
   * @remarks
   * The backup mode. Valid values:
   * 
   * *   Automated
   * *   Manual
   * 
   * If you do not specify this parameter, all backup sets are returned.
   * 
   * @example
   * Automated
   */
  backupMode?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * >  You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to query the information about all AnalyticDB for PostgreSQL instances within a region, including instance IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-xxxxxxxxx
   */
  DBInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      backupMode: 'BackupMode',
      DBInstanceId: 'DBInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupMode: 'string',
      DBInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

