// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupsResponseBodyItemsBackupBackupDownloadLinkByDBBackupDownloadLinkByDB extends $dara.Model {
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * dbs
   */
  dataBase?: string;
  /**
   * @remarks
   * The public URL from which you can download the backup set.
   * 
   * @example
   * https://cn-hangzhou.bak.rds.aliyuncs.com/custins53664665/hins18676859_2021072909473127987849.zip?Expires=*****&dbList=tb1
   */
  downloadLink?: string;
  /**
   * @remarks
   * The internal URL from which you can download the backup set.
   * 
   * @example
   * https://cn-hangzhou-internal.bak.rds.aliyuncs.com/custins53664665/hins18676859_2021072909473127987849.zip?Expires=*****&dbList=tb1
   */
  intranetDownloadLink?: string;
  static names(): { [key: string]: string } {
    return {
      dataBase: 'DataBase',
      downloadLink: 'DownloadLink',
      intranetDownloadLink: 'IntranetDownloadLink',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataBase: 'string',
      downloadLink: 'string',
      intranetDownloadLink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

