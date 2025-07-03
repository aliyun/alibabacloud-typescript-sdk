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

