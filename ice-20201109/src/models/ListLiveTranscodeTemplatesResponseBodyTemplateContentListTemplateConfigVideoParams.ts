// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLiveTranscodeTemplatesResponseBodyTemplateContentListTemplateConfigVideoParams extends $dara.Model {
  /**
   * @remarks
   * The video bitrate.
   * 
   * @example
   * 2500
   */
  bitrate?: string;
  /**
   * @remarks
   * The encoding format.
   * 
   * @example
   * 264
   */
  codec?: string;
  /**
   * @remarks
   * The video frame rate.
   * 
   * @example
   * 30
   */
  fps?: string;
  /**
   * @remarks
   * The group of pictures (GOP) of the output video. Unit: frame.
   * 
   * @example
   * 1000
   */
  gop?: string;
  /**
   * @remarks
   * The vertical resolution of the video.
   * 
   * @example
   * 1280
   */
  height?: string;
  /**
   * @remarks
   * The encoding profile.
   * 
   * @example
   * 3
   */
  profile?: string;
  /**
   * @remarks
   * The horizontal resolution of the video.
   * 
   * @example
   * 720
   */
  width?: string;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      codec: 'Codec',
      fps: 'Fps',
      gop: 'Gop',
      height: 'Height',
      profile: 'Profile',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'string',
      codec: 'string',
      fps: 'string',
      gop: 'string',
      height: 'string',
      profile: 'string',
      width: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

