// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRtsLiveStreamTranscodeRequest extends $dara.Model {
  /**
   * @remarks
   * The AppName of the live stream. This parameter cannot be modified.
   * 
   * This parameter is required.
   * 
   * @example
   * aliyun-test
   */
  app?: string;
  /**
   * @remarks
   * The output audio bitrate. Unit: kbps. Valid values: 1 to **1000**.
   * 
   * > Required if you set TemplateType to audio.
   * 
   * @example
   * 128
   */
  audioBitrate?: number;
  /**
   * @remarks
   * The number of audio channels. Valid values:
   * 
   * - **1**: mono.
   * 
   * - **2**: stereo.
   * 
   * @example
   * 2
   */
  audioChannelNum?: number;
  /**
   * @remarks
   * The audio codec. Valid values:
   * 
   * - aac
   * 
   * - mp3
   * 
   * > To use the Opus codec, set the Opus parameter to true.
   * 
   * @example
   * aac
   */
  audioCodec?: string;
  /**
   * @remarks
   * The audio codec profile. Valid values:
   * 
   * - aac_low
   * 
   * - aac_he
   * 
   * - aac_he_v2
   * 
   * - aac_ld
   * 
   * @example
   * aac_low
   */
  audioProfile?: string;
  /**
   * @remarks
   * The audio sample rate. Valid values: 22050, 32000, 44100, 48000, 96000. Recommended: 44100. Unit: Hz.
   * 
   * > If AudioProfile is set to aac_ld, the sample rate cannot exceed 44100.
   * 
   * @example
   * 44100
   */
  audioRate?: number;
  /**
   * @remarks
   * Controls whether to remove B-frames from the transcoded output video. Valid values:
   * 
   * - **true**: The transcoded video has no B-frames.
   * 
   * - **false**: The transcoded video contains B-frames. This is the default value.
   * 
   * > Required if you set TemplateType to h264, h264-nbhd, or h264-origin.
   * 
   * @example
   * false
   */
  deleteBframes?: boolean;
  /**
   * @remarks
   * The streaming domain. This parameter cannot be modified.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domain?: string;
  /**
   * @remarks
   * The frame rate of the output video. Unit: frames per second (FPS). Valid values: 1 to **60**.
   * 
   * > Required if you set TemplateType to h264, h264-nbhd, or h264-origin.
   * 
   * @example
   * 30
   */
  FPS?: number;
  /**
   * @remarks
   * The Group of Pictures (GOP) size, which specifies the keyframe interval. Unit: seconds. Valid values: **1** to **3**.
   * 
   * @example
   * 2
   */
  gop?: string;
  /**
   * @remarks
   * Output video height in pixels.
   * 
   * Requirements:
   * 
   * - Height ≥ 100
   * 
   * - max(Height, Width) ≤ 2560
   * 
   * - min(Height, Width) ≤ 1440
   * 
   * > * Required if you set TemplateType to h264, h264-nbhd, or h264-origin.
   * >
   * > * For h264-origin templates, the resolution can be up to 4K to retain the information of the source stream.
   * 
   * @example
   * 1280
   */
  height?: number;
  /**
   * @remarks
   * Specifies whether to enable on-demand transcoding. Valid values:
   * 
   * - **yes**: Transcoding only starts when the first viewer requests this transcoded stream.
   * 
   * - **no**: Transcoding starts immediately after the stream is published.
   * 
   * @example
   * no
   */
  lazy?: string;
  /**
   * @remarks
   * Specifies whether to use the Opus codec for audio transcoding. This is mainly for compatibility with native WebRTC. Valid values:
   * 
   * - **true**: Transcodes the audio to the Opus format.
   * 
   * - **false**: Does not use the Opus format for transcoding. This is the default value.
   * 
   * @example
   * true
   */
  opus?: boolean;
  ownerId?: number;
  /**
   * @remarks
   * The video codec profile. A larger value indicates better video quality and higher resource consumption for encoding and decoding. Valid values:
   * 
   * - **1**: baseline (for mobile devices).
   * 
   * - **2**: main (for SD devices).
   * 
   * - **3**: high (for HD devices).
   * 
   * @example
   * 2
   */
  profile?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the custom transcoding template. This parameter cannot be modified.
   * 
   * This parameter is required.
   * 
   * @example
   * ld
   */
  template?: string;
  /**
   * @remarks
   * The type of the custom transcoding template. This parameter cannot be modified.
   * 
   * This parameter is required.
   * 
   * @example
   * h264
   */
  templateType?: string;
  /**
   * @remarks
   * The output video bitrate. Unit: kbps. Valid values: 1 to **6000**.
   * 
   * > - Required if you set TemplateType to h264, h264-nbhd, or h264-origin.
   * >
   * > - The system tries to transcode the video at the specified bitrate. However, the actual bitrate may not be the same as the specified value, especially when the specified value is too high or too low.
   * 
   * @example
   * 2000
   */
  videoBitrate?: number;
  /**
   * @remarks
   * Output video width in pixels.
   * 
   * Requirements:
   * 
   * - Width ≥ 100
   * 
   * - max(Height, Width) ≤ 2560
   * 
   * - min(Height, Width) ≤ 1440
   * 
   * > Required if you set TemplateType to h264, h264-nbhd, or h264-origin.
   * 
   * For h264-origin templates, the resolution can be up to 4K to retain the information of the source stream.
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

