// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDynamicImageRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the video.
   * 
   * This parameter is required.
   * 
   * @example
   * 2e114f1100590c3193918fd449a****
   */
  videoId?: string;
  static names(): { [key: string]: string } {
    return {
      videoId: 'VideoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

