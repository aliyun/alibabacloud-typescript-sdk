// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBinaryLogListResponseBodyLogList extends $dara.Model {
  /**
   * @remarks
   * The start time of the log.
   * 
   * @example
   * 2021-09-09 10:27:46
   */
  beginTime?: string;
  /**
   * @remarks
   * The creation time of the file.
   * 
   * @example
   * 2021-09-09 10:27:46
   */
  createdTime?: string;
  /**
   * @remarks
   * The download link of the file. The link is valid for 2 days.
   * 
   * @example
   * http://polarx-cdc-binlog-cn-hangzhou.oss-cn-hangzhou.aliyuncs.com/polardbx_cdc/pxc-hzfd132143sfds1/binlog.000001?Expires=1636469502&OSSAccessKeyId=LT13fds12dsafddsf&Signature=fdpm%bdsfadsa%2F%bdsafdsaf%3D
   */
  downloadLink?: string;
  /**
   * @remarks
   * The end time of the current binary log.
   * 
   * @example
   * 2021-11-09 10:27:46
   */
  endTime?: string;
  /**
   * @remarks
   * The name of the binary log file.
   * 
   * @example
   * binlog.000001
   */
  fileName?: string;
  /**
   * @remarks
   * The unique ID of the current record.
   * 
   * @example
   * 100
   */
  id?: number;
  /**
   * @remarks
   * The size of the current log file.
   * 
   * @example
   * 536870912
   */
  logSize?: number;
  /**
   * @remarks
   * The last modified time.
   * 
   * @example
   * 2021-11-09 10:27:46
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The purge status. Valid values:
   * 
   * - 0: not deleted. 
   * - 1: deleted.
   * 
   * @example
   * 0
   */
  purgeStatus?: number;
  /**
   * @remarks
   * The backup host.
   * 
   * @example
   * 10.110.88.9
   */
  uploadHost?: string;
  /**
   * @remarks
   * The backup status. Valid values:
   * 
   * - 0: not backed up. 
   * - 1: being backed up. 
   * - 2: backed up.
   * 
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

export class DescribeBinaryLogListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of binary log files.
   */
  logList?: DescribeBinaryLogListResponseBodyLogList[];
  /**
   * @remarks
   * The page number of the current query.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of binary logs displayed on the current page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2DFF784E-DC31-5BBC-9B25-9261CD9E0AA9
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of binary log files returned.
   * 
   * @example
   * 100
   */
  totalNumber?: number;
  static names(): { [key: string]: string } {
    return {
      logList: 'LogList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalNumber: 'TotalNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logList: { 'type': 'array', 'itemType': DescribeBinaryLogListResponseBodyLogList },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalNumber: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.logList)) {
      $dara.Model.validateArray(this.logList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

