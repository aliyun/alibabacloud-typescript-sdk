// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCustomLiveStreamTranscodeRequest extends $dara.Model {
  /**
   * @remarks
   * The AppName of the live stream. This parameter cannot be modified.
   * 
   * This parameter is required.
   * 
   * @example
   * liveApp****
   */
  app?: string;
  /**
   * @remarks
   * The output audio bitrate. Unit: kbps. Valid values: 1 to **1000**.
   * 
   * @example
   * 512
   */
  audioBitrate?: number;
  /**
   * @remarks
   * The number of audio channels. Valid values:
   * 
   * - 1: mono.
   * 
   * - 2: stereo.
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
   * @example
   * aac
   */
  audioCodec?: string;
  /**
   * @remarks
   * The audio profile. Valid values:
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
   * The audio sample rate. Valid values: 22050, 32000, 44100, 48000, and 96000. Unit: Hz.
   * 
   * > If you set **AudioProfile** to **aac_ld**, the sample rate cannot exceed 44100.
   * 
   * @example
   * 96000
   */
  audioRate?: number;
  /**
   * @remarks
   * The adaptive bitrate settings. If specified, it overrides the VideoBitrate parameter. Fields:
   * 
   * - **UpLimit (integer):** Required. The upper limit of the bitrate. This must be an integer from 128 to 10000 and greater than the lower limit.
   * 
   * - **LowerLimit (integer):** Required. The lower limit of the bitrate. This must be an integer from 128 to 10000 and less than the upper limit.
   * 
   * - **Factor (float):** Required: The factor by which the source bitrate is multiplied to calculate the output bitrate. Valid values: 0.1 to 1. The value can be accurate to one decimal place. A value of 1 indicates that the output bitrate is the same as the source bitrate.
   * 
   * @example
   * {"UpLimit":2500,"LowerLimit":800,"Factor":1}
   */
  bitrateWithSource?: string;
  /**
   * @remarks
   * Specifies whether to automatically detect and remove interlacing during transcoding. Deinterlacing converts interlaced video into progressive video.
   * 
   * - true: enables deinterlacing.
   * 
   * - false: keeps the source format. This is the default value.
   */
  deInterlaced?: boolean;
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
   * The encryption settings, formatted as a JSON string.
   * 
   * - **EncryptType**: The encryption type. Set the value to aliyun.
   * 
   * - **KmsKeyID**: The ID of the customer master key (CMK) in Key Management Service (KMS).
   * 
   * - **KmsKeyExpireInterval**: The key rotation period. Unit: seconds. Valid values: **60 to 3600.**
   * 
   * > When you use Digital Rights Management (DRM) encryption, you cannot modify KmsKeyID.
   * 
   * @example
   * {"EncryptType": "aliyun", "KmsKeyID":"afce5722-81d2-43c3-9930-7601da11****","KmsKeyExpireInterval":"3600"}
   */
  encryptParameters?: string;
  /**
   * @remarks
   * Other adaptive settings that align the transcoded stream with the source stream. Fields:
   * 
   * - **KeyFrameOpen**: Specifies whether to align keyframes with the source stream. Valid values: yes and no.
   * 
   * - **Copyts (string)**: Specifies whether to align the presentation timestamp (PTS) with the source stream. Valid values: yes and no.
   * 
   * - **SeiMode**: The pass-through mode for Supplemental Enhancement Information (SEI). Valid values: 0 (disabled), 1 (pass through partial parameters), and 2 (pass through all).
   * 
   * @example
   * {"KeyFrameOpen":"yes","Copyts":"yes","SeiMode":1}
   */
  extWithSource?: string;
  /**
   * @remarks
   * The frame rate of the output video. Unit: frames per second (FPS). Valid values: 1 to **60**.
   * 
   * @example
   * 30
   */
  FPS?: number;
  /**
   * @remarks
   * Adapts the output frame rate based on the source\\"s frame rate, while keeping it within a specified range. If specified, it overrides the FPS parameter. Fields:
   * 
   * - **UpLimit (integer):** Required. The upper limit of the frame rate. This must be an integer from 1 to 60 and greater than the lower limit.
   * 
   * - **LowerLimit (integer):** Required. The lower limit of the frame rate. This must be an integer from 1 to 60 and less than the upper limit.
   * 
   * @example
   * {"UpLimit":60,"LowerLimit":1}
   */
  fpsWithSource?: string;
  /**
   * @remarks
   * The Group of Pictures (GOP) size. The unit can be frame or second. Valid values:
   * 
   * - By frames: 1 to 3000.
   * 
   * - By seconds: 1s to 20s.
   * 
   * @example
   * 1
   */
  gop?: string;
  /**
   * @remarks
   * Output video height in pixels. Requirements:
   * 
   * - **Height ≥ 100**
   * 
   * - **max(Height, Width) ≤ 2560**
   * 
   * - **min(Height, Width) ≤ 1440**
   * 
   * > For h265-nbhd templates, it cannot exceed 720.
   * 
   * @example
   * 720
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
   * yes
   */
  lazy?: string;
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
   * The adaptive resolution settings. If specified, it overrides the Height and Width parameters. Fieds:
   * 
   * - **Type (string):** Required. Valid values:
   * 
   *   - **short**: sets the shorter edge of the video to the specified value and scales the other edge to maintain the original aspect ratio.
   * 
   *   - **long**: sets the longer edge of the video to the specified value and scales the other edge to maintain the original aspect ratio.
   * 
   *   - **screen**: Matches the output to a standard resolution, automatically flipping the dimensions based on the source\\"s orientation.
   * 
   * - **Value (string):** Required. Valid values:
   * 
   *   - For short: 360, 480, 540, 720, and 1080.
   * 
   *   - For long: 640, 848, 960, 1280, and 1920.
   * 
   *   - For screen: 640×360, 848×480, 960×540, 1280×720, and 1920×1080.
   * 
   * @example
   * {"Type":"short","Value":"1080"}
   */
  resWithSource?: string;
  /**
   * @remarks
   * The custom name of the transcoding template. This parameter cannot be modified.
   * 
   * This parameter is required.
   * 
   * @example
   * LiveCusTranscode****
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
   * > The system tries to transcode the video at the specified bitrate. However, the actual bitrate may not be the same as the specified value, especially when the specified value is too high or too low.
   * 
   * @example
   * 720
   */
  videoBitrate?: number;
  /**
   * @remarks
   * Output video width in pixels.
   * 
   * Requirements:
   * 
   * - **Width ≥ 100**
   * 
   * - **max(Height, Width) ≤ 2560**
   * 
   * - **min(Height, Width) ≤ 1440**
   * 
   * > For h265-nbhd templates, it cannot exceed 1280.
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
      deInterlaced: 'DeInterlaced',
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
      deInterlaced: 'boolean',
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

