// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RecognizeVideoCastCrewListShrinkRequest extends $dara.Model {
  paramsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://shanghai.oss-cn-shanghai.aliyuncs.com/download/xxxx.mp4
   */
  videoUrl?: string;
  static names(): { [key: string]: string } {
    return {
      paramsShrink: 'Params',
      videoUrl: 'VideoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paramsShrink: 'string',
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

