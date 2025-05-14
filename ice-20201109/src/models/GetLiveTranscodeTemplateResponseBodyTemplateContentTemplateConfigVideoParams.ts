// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLiveTranscodeTemplateResponseBodyTemplateContentTemplateConfigVideoParams extends $dara.Model {
  /**
   * @remarks
   * The bitrate of the output video.
   * 
   * @example
   * 2500
   */
  bitrate?: string;
  /**
   * @remarks
   * The encoding type.
   * 
   * @example
   * H.264
   */
  codec?: string;
  /**
   * @remarks
   * The frame rate of the output video.
   * 
   * @example
   * 30
   */
  fps?: string;
  /**
   * @remarks
   * The group of pictures (GOP) of the output video.
   * 
   * @example
   * 1000
   */
  gop?: string;
  /**
   * @remarks
   * The height of the output video.
   * 
   * @example
   * 720
   */
  height?: string;
  /**
   * @remarks
   * The encoding profile.
   * 
   * @example
   * 2
   */
  profile?: string;
  /**
   * @remarks
   * The width of the output video.
   * 
   * @example
   * 1280
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

