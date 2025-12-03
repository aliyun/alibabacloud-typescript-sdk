// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVideoListRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the category. You can use one of the following methods to obtain the category ID:
   * 
   * *   Log on to the [ApsaraVideo VOD console](https://vod.console.aliyun.com). In the left-side navigation pane, choose **Configuration Management** > **Media Management** > **Categories** to view the category ID.
   * *   Obtain the value of CateId from the response to the [AddCategory](https://help.aliyun.com/document_detail/56401.html) operation.
   * *   Obtain the value of CateId from the response to the [GetCategories](https://help.aliyun.com/document_detail/56406.html) operation.
   * 
   * @example
   * 781111
   */
  cateId?: number;
  /**
   * @remarks
   * The end of the time range to query. The end time must be later than the start time. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time must be in UTC.
   * 
   * @example
   * 2017-01-11T12:59:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The number of the page to return. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: **10**. Maximum value: **100**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 123-123,1234-1234
   */
  referenceIds?: string;
  /**
   * @remarks
   * The sorting method of the results. Valid values:
   * 
   * *   **CreationTime:Desc** (default): The results are sorted in reverse chronological order based on the creation time.
   * *   **CreationTime:Asc**: The results are sorted in chronological order based on the creation time.
   * 
   * @example
   * CreationTime:Asc
   */
  sortBy?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time must be in UTC.
   * 
   * @example
   * 2017-01-11T12:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the video. You can specify multiple video statuses and separate them with commas (,). Valid values:
   * 
   * *   **Uploading**: The video is being uploaded.
   * *   **UploadFail**: The video failed to be uploaded.
   * *   **UploadSucc**: The video has been uploaded.
   * *   **Transcoding**: The video is being transcoded.
   * *   **TranscodeFail**: The video failed to be transcoded.
   * *   **checking**: The video is being reviewed.
   * *   **Blocked**: The video is blocked.
   * *   **Normal**: The video is normal.
   * *   **ProduceFail**: The video failed to be produced.
   * 
   * For more information about each video status, see the "Status: the status of a video" section of the [Basic data types](~~52839#section-p7c-jgy-070~~) topic.
   * 
   * @example
   * Uploading,Normal
   */
  status?: string;
  /**
   * @remarks
   * The storage address of the media file.
   * 
   * @example
   * out-****.oss-cn-shanghai.aliyuncs.com
   */
  storageLocation?: string;
  static names(): { [key: string]: string } {
    return {
      cateId: 'CateId',
      endTime: 'EndTime',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      referenceIds: 'ReferenceIds',
      sortBy: 'SortBy',
      startTime: 'StartTime',
      status: 'Status',
      storageLocation: 'StorageLocation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cateId: 'number',
      endTime: 'string',
      pageNo: 'number',
      pageSize: 'number',
      referenceIds: 'string',
      sortBy: 'string',
      startTime: 'string',
      status: 'string',
      storageLocation: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

