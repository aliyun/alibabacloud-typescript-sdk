// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMediaRefreshJobsRequest extends $dara.Model {
  /**
   * @remarks
   * The audio or video ID. The value is the `MediaIds` parameter passed when you call the [Submit audio and video refresh or prefetch tasks](https://help.aliyun.com/document_detail/431095.html) API operation. You can specify only one audio or video ID.
   * 
   * If you do not specify this parameter, the task information of all audio and video files under the `MediaRefreshJobId` is queried. If you specify this parameter, only the task information of the specified audio or video file under the `MediaRefreshJobId` is queried.
   * 
   * @example
   * ca3a8f6e4957b658067095869****
   */
  mediaId?: string;
  /**
   * @remarks
   * The task ID of the audio or video refresh or prefetch task. The value is the MediaRefreshJobId parameter returned by the [Submit audio and video refresh or prefetch tasks](https://help.aliyun.com/document_detail/431095.html) API operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 41d465e31957****
   */
  mediaRefreshJobId?: string;
  static names(): { [key: string]: string } {
    return {
      mediaId: 'MediaId',
      mediaRefreshJobId: 'MediaRefreshJobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaId: 'string',
      mediaRefreshJobId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

