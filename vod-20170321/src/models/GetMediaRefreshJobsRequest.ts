// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMediaRefreshJobsRequest extends $dara.Model {
  /**
   * @remarks
   * The audio or video ID, which is the `MediaIds` value specified when calling the [SubmitMediaRefreshJob](https://help.aliyun.com/document_detail/431095.html) operation. Only one audio or video ID can be specified.
   * 
   * If this parameter is not specified, task information for all audio or video files under the specified `MediaRefreshJobId` is returned. If this parameter is specified, only the task information for the specified audio or video ID under the `MediaRefreshJobId` is returned.
   * 
   * @example
   * ca3a8f6e4957b658067095869****
   */
  mediaId?: string;
  /**
   * @remarks
   * The ID of the audio or video purge or prefetch task. This is the value of MediaRefreshJobId returned by the [SubmitMediaRefreshJob](https://help.aliyun.com/document_detail/431095.html) operation.
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

