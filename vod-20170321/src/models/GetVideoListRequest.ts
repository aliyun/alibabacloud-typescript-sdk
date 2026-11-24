// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVideoListRequest extends $dara.Model {
  /**
   * @remarks
   * The category ID. You can obtain the category ID by using one of the following methods:
   * - Log on to the [ApsaraVideo VOD console](https://vod.console.aliyun.com) and choose **Configuration Management** > **Media Asset Configuration** > **Category Management** to view the category ID.
   * - Call the [Create a category](https://help.aliyun.com/document_detail/56401.html) operation to create a category. The category ID is the value of the CateId response parameter.
   * - Call the [Get categories and subcategories](https://help.aliyun.com/document_detail/56406.html) operation to query categories. The category ID is the value of the CateId response parameter.
   * 
   * @example
   * 781111
   */
  cateId?: number;
  /**
   * @remarks
   * The end time of the creation time, which must be later than the start time. Specify the time in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format. The time must be in UTC.
   * 
   * @example
   * 2017-01-11T12:59:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The current page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: **10**. Maximum value: **100**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The list of custom IDs. You can specify one or more custom IDs separated by commas (,). You can specify up to 20 custom IDs.
   * 
   * @example
   * 123-123,1234-1234
   */
  referenceIds?: string;
  /**
   * @remarks
   * The sorting method of the query results. Valid values:
   * 
   * - **CreationTime:Desc** (default): Sort by creation time in descending order.
   * - **CreationTime:Asc**: Sort by creation time in ascending order.
   * 
   * @example
   * CreationTime:Asc
   */
  sortBy?: string;
  /**
   * @remarks
   * The start time of the creation time. Specify the time in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format. The time must be in UTC.
   * 
   * @example
   * 2017-01-11T12:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The video status. You can specify multiple statuses separated by commas (,). Valid values:
   * 
   * - **Uploading**: The video is being uploaded.
   * - **UploadFail**: The video failed to be uploaded.
   * - **UploadSucc**: The video is uploaded.
   * - **Transcoding**: The video is being transcoded.
   * - **TranscodeFail**: The video failed to be transcoded.
   * - **Checking**: The video is being reviewed.
   * - **Blocked**: The video is blocked.
   * - **Normal**: The video is normal.
   * - **ProduceFail**: The video failed to be produced.
   * 
   * For more information about the definitions and limits of video statuses, refer to [Status: video status](~~52839#section-p7c-jgy-070~~).
   * 
   * @example
   * Uploading,Normal
   */
  status?: string;
  /**
   * @remarks
   * The storage address of the audio or video file.
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

