// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddRtsLiveStreamTranscodeRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the application to which the live stream belongs. Value requirements:
   * 
   * *   The name can contain letters, digits, underscores (_), and hyphens (-).
   * *   We recommend that you specify a name that is more than three characters in length. The name must start with a letter or digit.
   * 
   * This parameter is required.
   * 
   * @example
   * aliyun-test
   */
  app?: string;
  /**
   * @remarks
   * The bitrate of the output audio. Unit: Kbit/s. Valid values: **1** to **1000**.
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
   * *   **aac**
   * *   **mp3**
   * 
   * > If you want to use the Opus encoding format, set the Opus parameter to true.
   * 
   * @example
   * aac
   */
  audioCodec?: string;
  /**
   * @remarks
   * The audio codec profile. Valid values:
   * 
   * *   **aac_low**
   * *   **aac_he**
   * *   **aac_he_v2**
   * *   **aac_ld**
   * 
   * @example
   * aac_low
   */
  audioProfile?: string;
  /**
   * @remarks
   * The audio sampling rate. Valid values: **22050 to 96000**. The value 44100 is commonly used. Unit: Hz.
   * 
   * > If you set the AudioProfile parameter to aac_ld, the audio sampling rate cannot exceed 44,100 Hz.
   * 
   * @example
   * 44100
   */
  audioRate?: number;
  /**
   * @remarks
   * Specifies whether to remove B-frames during transcoding. Valid values:
   * 
   * >  This parameter is required if you set the TemplateType parameter to h264, h264-nbhd, or h264-origin.
   * 
   * *   **true**: removes B-frames.
   * *   **false**: retains B-frames. This is the default value.
   * 
   * > If you do not specify this parameter, the default value **false** is used.
   * 
   * @example
   * false
   */
  deleteBframes?: boolean;
  /**
   * @remarks
   * The main streaming domain.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domain?: string;
  /**
   * @remarks
   * The frame rate of the output video. Unit: FPS. Valid values: **1** to **60**.
   * 
   * >  This parameter is required if you set the TemplateType parameter to h264, h264-nbhd, or h264-origin.
   * 
   * @example
   * 30
   */
  FPS?: number;
  /**
   * @remarks
   * The group of pictures (GOP) size of the output video. This parameter is used to specify the keyframe interval. Unit: seconds. Valid values: **1** to **3**.
   * 
   * @example
   * 2
   */
  gop?: string;
  /**
   * @remarks
   * The height of the output video. Unit: pixels.
   * 
   * >  This parameter is required if you set the TemplateType parameter to h264, h264-nbhd, or h264-origin.
   * 
   * The value must comply with the following rules:****
   * 
   * *   **Height ≥ 100**: The height of the video is no less than 100 pixels.
   * *   **max(Height,Width) ≤ 2560**: The width or height of the video, whichever is greater, cannot exceed 2,560 pixels.
   * *   **min(Height,Width) ≤ 1440**: The width or height of the video, whichever is smaller, cannot exceed 1,440 pixels.
   * 
   * For example, a resolution of 1560 × 1560 pixels is invalid.
   * 
   * > An original quality template needs to retain the source information. Therefore, the video resolution cannot exceed 4K.
   * 
   * @example
   * 1280
   */
  height?: number;
  /**
   * @remarks
   * Specifies whether to trigger transcoding only when a stream is pulled. Valid values:
   * 
   * *   **yes**: triggers transcoding only when a stream is pulled.
   * *   **no**: triggers transcoding whenever a stream is ingested, no matter whether the stream is pulled.
   * 
   * @example
   * no
   */
  lazy?: string;
  /**
   * @remarks
   * Specifies whether to transcode audio to the Opus format to be compatible with native WebRTC. Valid values:
   * 
   * *   **true**: transcodes audio to the Opus format.
   * *   **false**: does not transcode audio to the Opus format.
   * 
   * > If you do not specify this parameter, the default value **false** is used.
   * 
   * @example
   * true
   */
  opus?: boolean;
  ownerId?: number;
  /**
   * @remarks
   * The codec profile. The video codec profile determines how ApsaraVideo Live performs codec on the video. In normal cases, a greater value indicates a higher image quality and requires more codec resources. Valid values:
   * 
   * *   **1**: baseline, which is suitable for mobile devices.
   * *   **2**: main, which is suitable for standard-definition devices.
   * *   **3**: high, which is suitable for high-definition devices.
   * 
   * @example
   * 2
   */
  profile?: number;
  regionId?: string;
  /**
   * @remarks
   * The name of the transcoding template. Value requirements:
   * 
   * *   The name can contain letters, digits, underscores (_), and hyphens (-).
   * *   We recommend that you specify a name that is more than three characters in length. The name must start with a letter or digit.
   * 
   * > The name cannot be the same as that of a default transcoding template.
   * 
   * This parameter is required.
   * 
   * @example
   * ld
   */
  template?: string;
  /**
   * @remarks
   * The type of the transcoding template.
   * 
   * If you set this parameter to h264, h264-nbhd, or h264-origin, you must also specify the Height, Width, FPS, VideoBitrate, and DeleteBframes parameters. Valid values:
   * 
   * *   **h264**: H.264 standard transcoding template.
   * *   **h264-nbhd**: H.264 Narrowband HD™ transcoding template.
   * *   **h264-origin**: H.264 original quality template. If you use this type of template, the same transcoding parameters of the video source are retained by default.
   * *   **audio**: audio-only transcoding template. If you use this type of template, images are removed from the video source and an audio-only stream is generated. In addition, you must also specify the AudioBitrate parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * h264
   */
  templateType?: string;
  /**
   * @remarks
   * The bitrate of the output video. Unit: Kbit/s. Valid values: **1** to **6000**.
   * 
   * >  This parameter is required if you set the TemplateType parameter to h264, h264-nbhd, or h264-origin.
   * 
   * > The bitrate of the output video is as close to the value that you specify as possible, but not exactly the same as the value, especially when the value is excessively large or small.
   * 
   * @example
   * 2000
   */
  videoBitrate?: number;
  /**
   * @remarks
   * The width of the output video. Unit: pixels.
   * 
   * >  This parameter is required if you set the TemplateType parameter to h264, h264-nbhd, or h264-origin.
   * 
   * The value must comply with the following rules:
   * 
   * *   **Width ≥ 100**: The width of the video is no less than 100 pixels.
   * *   **max(Height,Width) ≤ 2560**: The width or height of the video, whichever is greater, cannot exceed 2,560 pixels.
   * *   **min(Height,Width) ≤ 1440**: The width or height of the video, whichever is smaller, cannot exceed 1,440 pixels.
   * 
   * For example, a resolution of 1560 × 1560 pixels is invalid.
   * 
   * > An original quality template needs to retain the source information. Therefore, the video resolution cannot exceed 4K.
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

