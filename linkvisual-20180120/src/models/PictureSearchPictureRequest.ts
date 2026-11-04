// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PictureSearchPictureRequest extends $dara.Model {
  /**
   * @remarks
   * Instance ID of the image search application instance. You can call the [QueryPictureSearchApps](https://help.aliyun.com/document_detail/206608.html) operation to query instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 5a502d3fbab8410e8fd4be9037c7****
   */
  appInstanceId?: string;
  /**
   * @remarks
   * Specifies whether the response includes the image URL.
   * 
   * > Currently, the response is returned regardless of whether this parameter is set to true or false.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  containPicUrl?: boolean;
  /**
   * @remarks
   * The page number of the page to return. Pages start from page 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The end time of the search range. The time is a 13-digit timestamp in milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1614850651299
   */
  endTime?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Maximum value: 10.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The search type. Valid values:
   * - **1** (default): face
   * - **0**: human body
   * 
   * @example
   * 1
   */
  pictureSearchType?: number;
  /**
   * @remarks
   * The URL of the image to search for.
   * 
   * This parameter is required.
   */
  searchPicUrl?: string;
  /**
   * @remarks
   * The start time of the search range. The time is a 13-digit timestamp in milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1614297000000
   */
  startTime?: number;
  /**
   * @remarks
   * The search threshold. Valid values: 0 to 1.
   * 
   * > Set the search threshold to a value greater than or equal to 0.3 to ensure a match with the detected object.
   * 
   * This parameter is required.
   * 
   * @example
   * 0.5
   */
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      appInstanceId: 'AppInstanceId',
      containPicUrl: 'ContainPicUrl',
      currentPage: 'CurrentPage',
      endTime: 'EndTime',
      pageSize: 'PageSize',
      pictureSearchType: 'PictureSearchType',
      searchPicUrl: 'SearchPicUrl',
      startTime: 'StartTime',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceId: 'string',
      containPicUrl: 'boolean',
      currentPage: 'number',
      endTime: 'number',
      pageSize: 'number',
      pictureSearchType: 'number',
      searchPicUrl: 'string',
      startTime: 'number',
      threshold: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

