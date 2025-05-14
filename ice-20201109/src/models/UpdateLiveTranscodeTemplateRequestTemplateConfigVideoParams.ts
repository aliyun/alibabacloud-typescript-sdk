// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLiveTranscodeTemplateRequestTemplateConfigVideoParams extends $dara.Model {
  /**
   * @remarks
   * The bitrate of the output video. Unit: Kbit/s. Valid values: 1 to 6000.
   * 
   * @example
   * 2500
   */
  bitrate?: string;
  /**
   * @remarks
   * The encoding type. Valid values:
   * 
   * *   H.264
   * *   H.265
   * 
   * @example
   * H.264
   */
  codec?: string;
  /**
   * @remarks
   * The frame rate of the output video. Unit: frames per second (FPS). Valid values: 1 to 60.
   * 
   * @example
   * 30
   */
  fps?: string;
  /**
   * @remarks
   * The group of pictures (GOP) of the output video. Unit: frame. Valid values: 1 to 3000.
   * 
   * @example
   * 1000
   */
  gop?: string;
  /**
   * @remarks
   * The height of the output video. Valid values:
   * 
   * *   Height ≥ 128
   * *   max (Height,Width) ≤ 2560
   * *   min（Height,Width）≤ 1440
   * 
   * >  The resolution of a video transcoded by using the H.265 Narrowband HD template cannot exceed 1,280 × 720 pixels.
   * 
   * @example
   * 720
   */
  height?: string;
  /**
   * @remarks
   * The video encoding profile. The profile determines how a video is encoded. In most cases, a greater value indicates better image quality and higher resource consumption. Valid values:
   * 
   * *   1: baseline. This value is suitable for mobile devices.
   * *   2: main. This value is suitable for standard-definition devices.
   * *   3: high. This value is suitable for high-definition devices.
   * 
   * @example
   * 2
   */
  profile?: string;
  /**
   * @remarks
   * The width of the output video. Valid values:
   * 
   * *   Width ≥ 128
   * *   max (Height,Width) ≤ 2560
   * *   min（Height,Width）≤ 1440
   * 
   * >  The resolution of a video transcoded by using the H.265 Narrowband HD template cannot exceed 1,280 × 720 pixels.
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

