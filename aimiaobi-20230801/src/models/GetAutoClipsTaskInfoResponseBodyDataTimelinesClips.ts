// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAutoClipsTaskInfoResponseBodyDataTimelinesClips extends $dara.Model {
  /**
   * @example
   * 20774ebd9abc71ef80486632b68f0102
   */
  clipId?: string;
  contentInner?: string;
  /**
   * @example
   * 0
   */
  in?: number;
  /**
   * @example
   * 5
   */
  out?: number;
  /**
   * @example
   * 20774ebd9abc71ef80486632b68f0102
   */
  videoId?: string;
  /**
   * @example
   * 123.mp4
   */
  videoName?: string;
  static names(): { [key: string]: string } {
    return {
      clipId: 'ClipId',
      contentInner: 'ContentInner',
      in: 'In',
      out: 'Out',
      videoId: 'VideoId',
      videoName: 'VideoName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clipId: 'string',
      contentInner: 'string',
      in: 'number',
      out: 'number',
      videoId: 'string',
      videoName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

