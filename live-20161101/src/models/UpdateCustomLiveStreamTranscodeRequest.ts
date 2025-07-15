// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCustomLiveStreamTranscodeRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the application to which the stream belongs, and it cannot be modified.
   * 
   * This parameter is required.
   * 
   * @example
   * liveApp****
   */
  app?: string;
  /**
   * @remarks
   * Audio transcoding bitrate. Unit: kbps, value range: 1 to 1000.
   * 
   * @example
   * 512
   */
  audioBitrate?: number;
  /**
   * @remarks
   * Number of audio channels. Values: 
   * - 1: Mono. 
   * - 2: Stereo.
   * 
   * @example
   * 2
   */
  audioChannelNum?: number;
  /**
   * @remarks
   * Audio encoding format. Values: 
   * - aac 
   * - mp3
   * 
   * @example
   * aac
   */
  audioCodec?: string;
  /**
   * @remarks
   * Audio encoding. Values: 
   * - aac_low
   *  - aac_he
   *  - aac_he_v2 
   * - aac_ld
   * 
   * @example
   * aac_low
   */
  audioProfile?: string;
  /**
   * @remarks
   * Audio sampling rate. Values: 22050, 32000, 44100, 48000, 96000. Unit: Hz.
   * > If **AudioProfile** is set to **aac_ld**, the sampling rate must not exceed 44100.
   * 
   * @example
   * 96000
   */
  audioRate?: number;
  /**
   * @remarks
   * The source-based bitrate settings. This parameter takes precedence over other bitrate settings. The following fields must be included:
   * 
   * *   **UpLimit**: the maximum bitrate. Set this field to an integer from 128 to 10000. The value must be greater than the minimum bitrate.
   * *   **LowerLimit**: the minimum bitrate. Set this field to an integer from 128 to 10000. The value must be smaller than the maximum bitrate.
   * *   **Factor**: the ratio of the output bitrate to the source bitrate. Valid values: 0.1 to 1. The value is accurate to one decimal place. A value of 1 indicates that the output video has the same bitrate as the source video.
   * 
   * @example
   * {\\"UpLimit\\":2500,\\"LowerLimit\\":800,\\"Factor\\":1}
   */
  bitrateWithSource?: string;
  /**
   * @remarks
   * Streamer domain name, unmodifiable.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domain?: string;
  /**
   * @remarks
   * Encryption configuration. JSON format, with the following fields: 
   * -  EncryptType: Type of encryption. Fixed value is aliyun.
   *  -  KmsKeyID: User\\"s KMS master key ID. 
   * -  KmsKeyExpireInterval: Key rotation period. Value range: 60~3600, unit: seconds.
   * > When using DRM encryption, KmsKeyID cannot be modified.
   * 
   * @example
   * {"EncryptType": "aliyun", "KmsKeyID":"afce5722-81d2-43c3-9930-7601da11****","KmsKeyExpireInterval":"3600"}
   */
  encryptParameters?: string;
  /**
   * @remarks
   * Other source-based settings. The following fields are included:
   * 
   * *   **KeyFrameOpen**: Valid values: yes and no.
   * *   **Copyts**: Valid values: yes and no.
   * *   **SeiMode**: Valid values: 0, 1, and 2. 0 specifies that no supplemental enhancement information (SEI) messages are passed through, 1 specifies that part of SEI messages are passed through, and 2 specifies that all SEI messages are passed through.
   * 
   * @example
   * {\\"KeyFrameOpen\\":\\"yes\\",\\"Copyts\\":\\"yes\\",\\"SeiMode\\":1}
   */
  extWithSource?: string;
  /**
   * @remarks
   * Transcode video frame rate. Unit: FPS, value range: 1 to 60.
   * 
   * @example
   * 30
   */
  FPS?: number;
  /**
   * @remarks
   * The source-based frame rate settings. This parameter takes precedence over other frame rate settings. The following fields must be included:
   * 
   * *   **UpLimit**: the maximum frame rate. Set this field to an integer from 1 to 60. The value must be greater than the minimum frame rate.
   * *   **LowerLimit**: the minimum frame rate. Set this field to an integer from 1 to 60. The value must be smaller than the maximum frame rate.
   * 
   * @example
   * {\\"UpLimit\\":60,\\"LowerLimit\\":1}
   */
  fpsWithSource?: string;
  /**
   * @remarks
   * Video GOP (Group of Pictures), supports units in frames or seconds. When the unit is frames, the value should be {number}; when the unit is seconds, the value should be {number}s. 
   * - For frames, the range is 1 to 3000. 
   * - For seconds, the range is 1 to 20s.
   * 
   * @example
   * 1
   */
  gop?: string;
  /**
   * @remarks
   * Video transcoding height. Unit: pixels. The value must meet the following three conditions:
   *  - Height ≥ 100: The height of the video must be no less than 100 pixels.
   *  - max(Height, Width) ≤ 2560: The larger of the video\\"s width and height cannot exceed 2560.
   *  - min(Height, Width) ≤ 1440: The smaller of the video\\"s width and height cannot exceed 1440.
   *  > For 265 narrowband HD templates, the maximum resolution is 1280×720.
   * 
   * @example
   * 720
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
   * yes
   */
  lazy?: string;
  ownerId?: number;
  /**
   * @remarks
   * Encoding level. A set of specific encoding features supported by the video, generally, the higher the value, the better the picture quality, but also the higher the resources consumed for encoding and decoding. Values: 
   * - 1: baseline (suitable for mobile devices).
   *  - 2: main (suitable for standard resolution devices). 
   * - 3: high (suitable for high-resolution devices).
   * 
   * @example
   * 2
   */
  profile?: number;
  regionId?: string;
  /**
   * @remarks
   * The source-based resolution settings. This parameter takes precedence over other resolution settings. The following fields must be included:
   * 
   * *   **Type**: You can set this field to short, long, or screen. short specifies that the resolution of the output video is adapted to the shorter side, long specifies that the resolution of the output video is adapted to the longer side, and screen specifies that the output video has an adaptive resolution.
   * 
   * *   **Value**:
   * 
   *     *   Set this field to 360, 480, 540, 720, or 1080 if the Type field is set to short.
   *     *   Set this field to 640, 848, 960, 1280, or 1920 if the Type field is set to long.
   *     *   Set this field to 640\\*360, 848\\*480, 960\\*540, 1280\\*720, or 1920\\*1080 if the Type field is set to screen.
   * 
   * @example
   * {\\"Type\\":\\"short\\",\\"Value\\":\\"1080\\"}
   */
  resWithSource?: string;
  /**
   * @remarks
   * Custom name of the transcoding template, not modifiable.
   * 
   * This parameter is required.
   * 
   * @example
   * LiveCusTranscode****
   */
  template?: string;
  /**
   * @remarks
   * Custom transcoding template type, unmodifiable.
   * 
   * This parameter is required.
   * 
   * @example
   * h264
   */
  templateType?: string;
  /**
   * @remarks
   * Video transcoding bitrate. Unit: kbps, value range: 1 to 6000.
   * > The actual bitrate of the transcoded video will try to be as close as possible to the one you set, but it cannot be guaranteed to be exactly the same, especially when the set bitrate is too high or too low.
   * 
   * @example
   * 720
   */
  videoBitrate?: number;
  /**
   * @remarks
   * Video transcoding width. Unit: pixels. The value must meet the following three conditions: 
   * - Width ≥ 100: The video width must be no less than 100 pixels. 
   * - max(Height, Width) ≤ 2560: The larger of the video\\"s height and width cannot exceed 2560. 
   * - min(Height, Width) ≤ 1440: The smaller of the video\\"s height and width cannot exceed 1440.
   * > For 265 narrowband HD templates, the maximum resolution is 1280×720.
   * 
   * @example
   * 576
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
      bitrateWithSource: 'BitrateWithSource',
      domain: 'Domain',
      encryptParameters: 'EncryptParameters',
      extWithSource: 'ExtWithSource',
      FPS: 'FPS',
      fpsWithSource: 'FpsWithSource',
      gop: 'Gop',
      height: 'Height',
      lazy: 'Lazy',
      ownerId: 'OwnerId',
      profile: 'Profile',
      regionId: 'RegionId',
      resWithSource: 'ResWithSource',
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
      bitrateWithSource: 'string',
      domain: 'string',
      encryptParameters: 'string',
      extWithSource: 'string',
      FPS: 'number',
      fpsWithSource: 'string',
      gop: 'string',
      height: 'number',
      lazy: 'string',
      ownerId: 'number',
      profile: 'number',
      regionId: 'string',
      resWithSource: 'string',
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

