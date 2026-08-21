// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVideoListRequest extends $dara.Model {
  /**
   * @remarks
   * The category ID. You can obtain the category ID by using the following methods:
   * - Log on to the [ApsaraVideo VOD console](https://vod.console.aliyun.com) and choose **Configuration Management** > **Media Management Configuration** > **Category Management** to view the category ID.
   * - Obtain the value of CateId from the response when you call the [CreateCategory](https://help.aliyun.com/document_detail/56401.html) operation.
   * - Obtain the value of CateId from the response when you call the [GetCategories](https://help.aliyun.com/document_detail/56406.html) operation.
   * 
   * @example
   * 781111
   */
  cateId?: number;
  /**
   * @remarks
   * The end of the time range to query based on CreationTime. The end time must be later than the start time. Specify the time in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format (UTC).
   * 
   * @example
   * 2017-01-11T12:59:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The page number. Default value: **1**.
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
   * The list of custom IDs. Specify one or more custom IDs separated by commas (,). A maximum of 20 IDs are supported.
   * 
   * @example
   * 123-123,1234-1234
   */
  referenceIds?: string;
  /**
   * @remarks
   * The sorting rule of the results. Valid values:
   * 
   * - **CreationTime:Desc** (default): sorted by creation time in descending order.
   * - **CreationTime:Asc**: sorted by creation time in ascending order.
   * 
   * @example
   * CreationTime:Asc
   */
  sortBy?: string;
  /**
   * @remarks
   * The beginning of the time range to query based on CreationTime (creation time). Specify the time in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format (UTC).
   * 
   * @example
   * 2017-01-11T12:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The video status. You can specify multiple statuses. Separate multiple statuses with commas (,). Valid values:
   * 
   * - **Uploading**: The video is being uploaded.
   * - **UploadFail**: The video failed to be uploaded.
   * - **UploadSucc**: The video has been uploaded.
   * - **Transcoding**: The video is being transcoded.
   * - **TranscodeFail**: The video failed to be transcoded.
   * - **Checking**: The video is being reviewed.
   * - **Blocked**: The video is blocked.
   * - **Normal**: The video is in a normal state.
   * - **ProduceFail**: The video failed to be produced.
   * 
   * For more information about video statuses and related limits, see [Status: video status](~~52839#section-p7c-jgy-070~~).
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

