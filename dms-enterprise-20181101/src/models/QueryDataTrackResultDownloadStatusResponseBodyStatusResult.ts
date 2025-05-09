// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDataTrackResultDownloadStatusResponseBodyStatusResult extends $dara.Model {
  /**
   * @remarks
   * The status of the download task. Valid values:
   * 
   * *   **INIT**: The download task is being initialized.
   * *   **LISTING**: The download task is in a transient intermediate state during the initialization.
   * *   **DOWNLOADING**: The download task is being processed.
   * *   **DOWNLOAD_SUCCESS**: The download task was successfully processed.
   * *   **DOWNLOAD_FAIL**: The download task failed.
   * 
   * @example
   * DOWNLOAD_SUCCESS
   */
  downloadStatus?: string;
  /**
   * @remarks
   * The URL that is used to download data tracking logs. This parameter is returned only when the value of DownloadStatus is DOWNLOAD_SUCCESS.
   * 
   * @example
   * https://idbsaasstore.oss-cn-zhangjiakou.aliyuncs.com/****_REDO_31201_207.zip?Expires=1682239593&OSSAccessKeyId=****&Signature=****
   */
  downloadUrl?: string;
  /**
   * @remarks
   * The description of the state.
   * 
   * @example
   * SUCCESS
   */
  statusDesc?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 69
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      downloadStatus: 'DownloadStatus',
      downloadUrl: 'DownloadUrl',
      statusDesc: 'StatusDesc',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadStatus: 'string',
      downloadUrl: 'string',
      statusDesc: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

