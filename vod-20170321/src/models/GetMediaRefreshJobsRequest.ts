// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMediaRefreshJobsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the media file. It is the value of the `MediaIds` parameter that you specify when you call the [RefreshMediaPlayUrls](~~RefreshMediaPlayUrls~~) operation. You can specify only one media ID.
   * 
   * If you leave this parameter empty, information about all media files in the refresh or prefetch job specified by `MediaRefreshJobId` is returned. If you set this parameter, only the information about the specified media file is returned.``
   * 
   * @example
   * ca3a8f6e4957b658067095869****
   */
  mediaId?: string;
  /**
   * @remarks
   * The ID of the refresh or prefetch job. It is the value of the MediaRefreshJobId parameter that is returned from the call to the [RefreshMediaPlayUrls](~~RefreshMediaPlayUrls~~) operation.
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

