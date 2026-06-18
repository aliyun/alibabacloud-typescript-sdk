// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupSetResponseBodyDataOSSList extends $dara.Model {
  /**
   * @remarks
   * The OSS file name.
   * 
   * @example
   * hins3084_data_20220418110623_qp.xb
   */
  backupSetFile?: string;
  /**
   * @remarks
   * The public download URL.
   * 
   * @example
   * https://pre-rdsbak-cn-xxx.oss-cn-beijing.aliyuncs.com/custins2255/hins3084_data_20220418110623_qp.xb?OSSAccessKeyId=LTAI****************&Expires=1650441697&dd=7KJzkUSbXf6dwy
   */
  downloadLink?: string;
  /**
   * @remarks
   * The internal network download URL for the OSS file.
   * 
   * @example
   * http://pre-rdsbak-cn-beijing.oss-cn-beijing-internal.aliyuncs.com/custins2255/hins3084_data_20220418110623_qp.xb?
   */
  intranetDownloadLink?: string;
  /**
   * @remarks
   * The expiration time of the OSS file link.
   * 
   * @example
   * 2022-04-20T08:01:37Z
   */
  linkExpiredTime?: string;
  static names(): { [key: string]: string } {
    return {
      backupSetFile: 'BackupSetFile',
      downloadLink: 'DownloadLink',
      intranetDownloadLink: 'IntranetDownloadLink',
      linkExpiredTime: 'LinkExpiredTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupSetFile: 'string',
      downloadLink: 'string',
      intranetDownloadLink: 'string',
      linkExpiredTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupSetResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The backup mode. Valid values:
   * 
   * - **0**: Automatic backup.
   * - **1**: Manual backup.
   * 
   * @example
   * 0
   */
  backupModel?: number;
  /**
   * @remarks
   * The backup set ID.
   * 
   * @example
   * 111
   */
  backupSetId?: number;
  /**
   * @remarks
   * The size of the backup set, in bytes.
   * 
   * @example
   * 88803195
   */
  backupSetSize?: number;
  /**
   * @remarks
   * The backup type. Valid values:
   * 
   * - **0**: Fast backup.
   * - **1**: Consistent backup.
   * 
   * @example
   * 1
   */
  backupType?: number;
  /**
   * @remarks
   * The time when the backup started.
   * 
   * @example
   * 1650250861754
   */
  beginTime?: number;
  /**
   * @remarks
   * The time when the backup ended.
   * 
   * @example
   * 1650251308000
   */
  endTime?: number;
  /**
   * @remarks
   * The list of OSS information for the backup set.
   */
  OSSList?: DescribeBackupSetResponseBodyDataOSSList[];
  /**
   * @remarks
   * The status of the backup set. Valid values:
   * 
   * - **0**: Backing up.
   * - **1**: Backup succeeded.
   * - **2**: Backup failed.
   * 
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      backupModel: 'BackupModel',
      backupSetId: 'BackupSetId',
      backupSetSize: 'BackupSetSize',
      backupType: 'BackupType',
      beginTime: 'BeginTime',
      endTime: 'EndTime',
      OSSList: 'OSSList',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupModel: 'number',
      backupSetId: 'number',
      backupSetSize: 'number',
      backupType: 'number',
      beginTime: 'number',
      endTime: 'number',
      OSSList: { 'type': 'array', 'itemType': DescribeBackupSetResponseBodyDataOSSList },
      status: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.OSSList)) {
      $dara.Model.validateArray(this.OSSList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupSetResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data list.
   */
  data?: DescribeBackupSetResponseBodyData[];
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * successs
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1A6D328C-84B8-40DC-BF49-6C73984D7494
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeBackupSetResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

