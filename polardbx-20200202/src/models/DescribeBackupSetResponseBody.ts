// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupSetResponseBodyDataOSSList extends $dara.Model {
  /**
   * @example
   * hins3084_data_20220418110623_qp.xb
   */
  backupSetFile?: string;
  /**
   * @example
   * https://pre-rdsbak-cn-xxx.oss-cn-beijing.aliyuncs.com/custins2255/hins3084_data_20220418110623_qp.xb?OSSAccessKeyId=LTAI5tJEmRFdJ8aBPDR7****&Expires=1650441697&dd=7KJzkUSbXf6dwy
   */
  downloadLink?: string;
  /**
   * @example
   * http://pre-rdsbak-cn-beijing.oss-cn-beijing-internal.aliyuncs.com/custins2255/hins3084_data_20220418110623_qp.xb?
   */
  intranetDownloadLink?: string;
  /**
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
   * @example
   * 0
   */
  backupModel?: number;
  /**
   * @example
   * 111
   */
  backupSetId?: number;
  /**
   * @example
   * 88803195
   */
  backupSetSize?: number;
  /**
   * @example
   * 1
   */
  backupType?: number;
  /**
   * @example
   * 1650250861754
   */
  beginTime?: number;
  /**
   * @example
   * 1650251308000
   */
  endTime?: number;
  OSSList?: DescribeBackupSetResponseBodyDataOSSList[];
  /**
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
  data?: DescribeBackupSetResponseBodyData[];
  /**
   * @example
   * successs
   */
  message?: string;
  /**
   * @example
   * 1A6D328C-84B8-40DC-BF49-6C73984D7494
   */
  requestId?: string;
  /**
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

