// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetProjectTaskResponseBody extends $dara.Model {
  /**
   * @example
   * error
   */
  errorMsg?: string;
  /**
   * @example
   * 5389BE87-571B-573C-90ED-F07C5E68760B
   */
  requestId?: string;
  /**
   * @example
   * SUCCESS
   */
  status?: string;
  /**
   * @example
   * www.ali.com
   */
  videoDownloadUrl?: string;
  /**
   * @example
   * 111
   */
  videoDuration?: number;
  /**
   * @example
   * www.ali.com
   */
  videoUrl?: string;
  static names(): { [key: string]: string } {
    return {
      errorMsg: 'errorMsg',
      requestId: 'requestId',
      status: 'status',
      videoDownloadUrl: 'videoDownloadUrl',
      videoDuration: 'videoDuration',
      videoUrl: 'videoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMsg: 'string',
      requestId: 'string',
      status: 'string',
      videoDownloadUrl: 'string',
      videoDuration: 'number',
      videoUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

