// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRtsLiveStreamTranscodeRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the application to which the live stream belongs, which cannot be modified.
   * 
   * This parameter is required.
   * 
   * @example
   * aliyun-test
   */
  app?: string;
  /**
   * @remarks
   * The bitrate of the output audio. Unit: Kbit/s. Valid values: 1 to 1000.
   * 
   * >  This parameter is required if you set the TemplateType parameter to audio.
   * 
   * @example
   * 128
   */
  audioBitrate?: number;
  /**
   * @remarks
   * The number of sound channels. Valid values:
   * 
   * *   **1**: mono
   * *   **2**: stereo
   * 
   * @example
   * 2
   */
  audioChannelNum?: number;
  /**
   * @remarks
   * The audio encoder. Valid values:
   * 
   * *   aac
   * *   mp3
   * 
   * >  To use the Opus encoder, you need only to set the Opus parameter to true.
   * 
   * @example
   * aac
   */
  audioCodec?: string;
  /**
   * @remarks
   * The audio codec profile. Valid values:
   * 
   * *   aac_low
   * *   aac_he
   * *   aac_he_v2
   * *   aac_ld
   * 
   * @example
   * aac_low
   */
  audioProfile?: string;
  /**
   * @remarks
   * The audio sampling rate. Valid values: 22050, 32000, 44100, 48000, and 96000. 44100 is commonly used. Unit: Hz.
   * 
   * >  If the value of the AudioProfile parameter is aac_ld, the audio sampling rate cannot exceed 44,100.
   * 
   * @example
   * 44100
   */
  audioRate?: number;
  /**
   * @remarks
   * Specifies whether to remove B frames during transcoding. Valid values:
   * 
   * *   true: Remove B frames.
   * *   false (default): Retain B frames.
   * 
   * > 
   * 
   * *   This parameter is required when the TemplateType parameter is set to h264, h264-nbhd, or h264-origin.
   * 
   * *   If this parameter is not specified, the default value false is used.
   * 
   * @example
   * false
   */
  deleteBframes?: boolean;
  /**
   * @remarks
   * The main streaming domain, which cannot be modified.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domain?: string;
  /**
   * @remarks
   * The frame rate of the output video. Unit: frames per second (FPS). Valid values: 1 to 60.
   * 
   * >  This parameter is required when the TemplateType parameter is set to h264, h264-nbhd, or h264-origin.
   * 
   * @example
   * 30
   */
  FPS?: number;
  /**
   * @remarks
   * The group of pictures (GOP) of the output video. This parameter is used to specify the keyframe interval. Unit: seconds. Valid values: 1 to 3.
   * 
   * @example
   * 2
   */
  gop?: string;
  /**
   * @remarks
   * The height of the output video. Unit: pixel.
   * 
   * The value must comply with the following rules:
   * 
   * *   Height ≥ 100: The height of the video is at least 100 pixels.
   * *   max(Height,Width) ≤ 2560: The larger of the width and height of the video cannot exceed 2,560 pixels.
   * *   min(Height,Width) ≤ 1440: The smaller of the width and height of the video cannot exceed 1,440 pixels. For example, a resolution of 1560 × 1560 pixels is invalid.
   * 
   * > 
   * 
   * *   This parameter is required when the TemplateType parameter is set to h264, h264-nbhd, or h264-origin.
   * 
   * *   If the TemplateType parameter is set to h264-origin, the highest resolution supported is 4K.
   * 
   * @example
   * 1280
   */
  height?: number;
  /**
   * @remarks
   * Specifies whether to enable triggered transcoding. Valid values:
   * 
   * *   **yes**: enables triggered transcoding.
   * *   **no**: disables triggered transcoding.
   * 
   * @example
   * no
   */
  lazy?: string;
  /**
   * @remarks
   * Specifies whether to transcode streams to the Opus format to be compatible with native WebRTC. Valid values:
   * 
   * *   true: Transcode streams to the Opus format.
   * *   false: Do not transcode streams to the Opus format.
   * 
   * >  If this parameter is not specified, the default value false is used.
   * 
   * @example
   * true
   */
  opus?: boolean;
  ownerId?: number;
  /**
   * @remarks
   * The video encoding profile. The profile defines a set of parameters that are used to encode a video. In most cases, a greater value indicates better image quality and higher resource consumption. Valid values:
   * 
   * *   **1**: baseline. This value is suitable for mobile devices.
   * *   **2**: main. This value is suitable for standard-definition devices.
   * *   **3**: high. This value is suitable for high-definition devices.
   * 
   * @example
   * 2
   */
  profile?: number;
  regionId?: string;
  /**
   * @remarks
   * The ID of the custom transcoding template, which cannot be modified.
   * 
   * This parameter is required.
   * 
   * @example
   * ld
   */
  template?: string;
  /**
   * @remarks
   * The type of the custom transcoding template, which cannot be modified.
   * 
   * This parameter is required.
   * 
   * @example
   * h264
   */
  templateType?: string;
  /**
   * @remarks
   * The bitrate of the output video. Unit: Kbit/s. Valid values: 1 to 6000.
   * 
   * > 
   * 
   * *   This parameter is required when the TemplateType parameter is set to h264, h264-nbhd, or h264-origin.
   * 
   * *   The bitrate of the output video is as close to the value that you specify as possible, but not the same as the value, especially when the value is excessively large or small.
   * 
   * @example
   * 2000
   */
  videoBitrate?: number;
  /**
   * @remarks
   * The width of the output video. Unit: pixel.
   * 
   * The value must comply with the following rules:
   * 
   * *   Width ≥ 100: The width of the video is at least 100 pixels.
   * *   max(Height,Width) ≤ 2560: The larger of the width and height of the video cannot exceed 2,560 pixels.
   * *   min(Height,Width) ≤ 1440: The smaller of the width and height of the video cannot exceed 1,440 pixels. For example, a resolution of 1560 × 1560 pixels is invalid.
   * 
   * > 
   * 
   * *   This parameter is required when the TemplateType parameter is set to h264, h264-nbhd, or h264-origin.
   * 
   * *   If the TemplateType parameter is set to h264-origin, the highest resolution supported is 4K.
   * 
   * @example
   * 720
   */
  width?: number;
  static names(): { [key: string]: string } {
    return {
      app: 'App',
      audioBitrate: 'AudioBitrate',
      audioChannelNum: 'AudioChannelNum',
      audioCodec: 'AudioCodec',
      audioProfile: 'AudioProfile',
      audioRate: 'AudioRate',
      deleteBframes: 'DeleteBframes',
      domain: 'Domain',
      FPS: 'FPS',
      gop: 'Gop',
      height: 'Height',
      lazy: 'Lazy',
      opus: 'Opus',
      ownerId: 'OwnerId',
      profile: 'Profile',
      regionId: 'RegionId',
      template: 'Template',
      templateType: 'TemplateType',
      videoBitrate: 'VideoBitrate',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      app: 'string',
      audioBitrate: 'number',
      audioChannelNum: 'number',
      audioCodec: 'string',
      audioProfile: 'string',
      audioRate: 'number',
      deleteBframes: 'boolean',
      domain: 'string',
      FPS: 'number',
      gop: 'string',
      height: 'number',
      lazy: 'string',
      opus: 'boolean',
      ownerId: 'number',
      profile: 'number',
      regionId: 'string',
      template: 'string',
      templateType: 'string',
      videoBitrate: 'number',
      width: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

