// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBinaryLogListResponseBodyLogList extends $dara.Model {
  /**
   * @example
   * 2021-09-09 10:27:46
   */
  beginTime?: string;
  /**
   * @example
   * 2021-09-09 10:27:46
   */
  createdTime?: string;
  /**
   * @example
   * http://polarx-cdc-binlog-cn-hangzhou.oss-cn-hangzhou.aliyuncs.com/polardbx_cdc/pxc-hzfd132143sfds1/binlog.000001?Expires=1636469502&OSSAccessKeyId=LT13fds12dsafddsf&Signature=fdpm%bdsfadsa%2F%bdsafdsaf%3D
   */
  downloadLink?: string;
  /**
   * @example
   * 2021-11-09 10:27:46
   */
  endTime?: string;
  /**
   * @example
   * binlog.000001
   */
  fileName?: string;
  /**
   * @example
   * 100
   */
  id?: number;
  /**
   * @example
   * 536870912
   */
  logSize?: number;
  /**
   * @example
   * 2021-11-09 10:27:46
   */
  modifiedTime?: string;
  /**
   * @example
   * 0
   */
  purgeStatus?: number;
  /**
   * @example
   * 10.110.88.9
   */
  uploadHost?: string;
  /**
   * @example
   * 2
   */
  uploadStatus?: number;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      createdTime: 'CreatedTime',
      downloadLink: 'DownloadLink',
      endTime: 'EndTime',
      fileName: 'FileName',
      id: 'Id',
      logSize: 'LogSize',
      modifiedTime: 'ModifiedTime',
      purgeStatus: 'PurgeStatus',
      uploadHost: 'UploadHost',
      uploadStatus: 'UploadStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'string',
      createdTime: 'string',
      downloadLink: 'string',
      endTime: 'string',
      fileName: 'string',
      id: 'number',
      logSize: 'number',
      modifiedTime: 'string',
      purgeStatus: 'number',
      uploadHost: 'string',
      uploadStatus: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

