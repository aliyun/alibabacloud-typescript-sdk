// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVideoListRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the category.
   * 
   * @example
   * 781111
   */
  cateId?: number;
  /**
   * @remarks
   * The end of the time range to query. The end time must be later than the start time. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2017-01-11T12:59:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. Maximum value: 50.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The sorting method of the results. Valid values:
   * 
   * *   CreationTime:Desc (default): sorts results in reverse chronological order.
   * *   CreationTime:Asc: sorts results in chronological order.
   * 
   * @example
   * CreationTime:Asc
   */
  sortBy?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2017-01-11T12:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the video. You can specify multiple video statuses and separate them with commas (,).
   * 
   * Valid values:
   * 
   * *   PrepareFail: The file is abnormal.
   * *   UploadFail: The video failed to be uploaded.
   * *   UploadSucc: The video is uploaded.
   * *   Transcoding: The video is being transcoded.
   * *   TranscodeFail: The video failed to be transcoded.
   * *   ProduceFail: The video failed to be produced.
   * *   Normal: The video is normal.
   * *   Uploading: The video is being uploaded.
   * *   Preparing: The file is being generated.
   * *   Blocked: The video is blocked.
   * *   checking: The video is being reviewed.
   * 
   * @example
   * Uploading,Normal
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      cateId: 'CateId',
      endTime: 'EndTime',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cateId: 'number',
      endTime: 'string',
      pageNo: 'number',
      pageSize: 'number',
      sortBy: 'string',
      startTime: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

