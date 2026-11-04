// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePictureSearchJobRequest extends $dara.Model {
  /**
   * @remarks
   * Instance ID of the image search application instance. You can call the [QueryPictureSearchApps](https://help.aliyun.com/document_detail/206608.html) operation to query instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 3e429560124b44b685095df81a27****
   */
  appInstanceId?: string;
  /**
   * @remarks
   * The threshold for human body search. Valid values: 0 to 1.
   * 
   * To ensure the accuracy of search results, set this parameter to a value greater than or equal to 0.8. If this parameter is not specified, the value of the Threshold parameter is used.
   * 
   * @example
   * 0.9
   */
  bodyThreshold?: number;
  /**
   * @remarks
   * The end time of the search range. The time is a 13-digit timestamp in milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1614327915000
   */
  endTime?: number;
  /**
   * @remarks
   * The search type. Valid values:
   * 
   * - 1: face
   * - 0: human body
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pictureSearchType?: number;
  /**
   * @remarks
   * The URL of the image to be searched.
   * 
   * This parameter is required.
   * 
   * @example
   * http://xxx.xxx/1.jpg
   */
  searchPicUrl?: string;
  /**
   * @remarks
   * The start time of the search range. The time is a 13-digit timestamp in milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1614227915000
   */
  startTime?: number;
  /**
   * @remarks
   * The threshold for face search. Valid values: 0 to 1.
   * 
   * To ensure the accuracy of search results, set this parameter to a value between 0.3 and 0.6.
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
      bodyThreshold: 'BodyThreshold',
      endTime: 'EndTime',
      pictureSearchType: 'PictureSearchType',
      searchPicUrl: 'SearchPicUrl',
      startTime: 'StartTime',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceId: 'string',
      bodyThreshold: 'number',
      endTime: 'number',
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

