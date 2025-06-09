// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDownloadJobsResponseBodyResultsExecutionDetails extends $dara.Model {
  /**
   * @example
   * ETASFGASDASQWDasd
   */
  checkSum?: string;
  /**
   * @remarks
   * 下载错误信息
   * 
   * @example
   * timeout
   */
  errorMessage?: string;
  /**
   * @remarks
   * 下载执行时间
   * 
   * @example
   * 123
   */
  executeTime?: number;
  /**
   * @remarks
   * 下载结果链接
   * 
   * @example
   * https://sls-downloaded-xxxx.csv.gzip?Expiresxxx
   */
  filePath?: string;
  /**
   * @remarks
   * 下载文件大小
   * 
   * @example
   * 123456
   */
  fileSize?: number;
  /**
   * @remarks
   * 下载日志条数
   * 
   * @example
   * 123
   */
  logCount?: number;
  notice?: string;
  /**
   * @remarks
   * 下载进度
   * 
   * @example
   * 100
   */
  progress?: number;
  static names(): { [key: string]: string } {
    return {
      checkSum: 'checkSum',
      errorMessage: 'errorMessage',
      executeTime: 'executeTime',
      filePath: 'filePath',
      fileSize: 'fileSize',
      logCount: 'logCount',
      notice: 'notice',
      progress: 'progress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkSum: 'string',
      errorMessage: 'string',
      executeTime: 'number',
      filePath: 'string',
      fileSize: 'number',
      logCount: 'number',
      notice: 'string',
      progress: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

