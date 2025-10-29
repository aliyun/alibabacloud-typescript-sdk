// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddCustomLiveStreamTranscodeRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the application to which the live stream belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * liveApp****
   */
  app?: string;
  /**
   * @remarks
   * The bitrate of the output audio. Unit: Kbit/s. Valid values: **1 to 1000**.
   * 
   * @example
   * 512
   */
  audioBitrate?: number;
  /**
   * @remarks
   * The number of sound channels. Valid values:
   * 
   * *   **1**: mono.
   * *   **2**: binaural.
   * 
   * @example
   * 2
   */
  audioChannelNum?: number;
  /**
   * @remarks
   * The audio encoding format. Valid values:
   * 
   * *   **AAC**
   * *   **MP3**
   * 
   * @example
   * AAC
   */
  audioCodec?: string;
  /**
   * @remarks
   * The audio encoding profile. Valid values:
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
   * The audio sampling rate. Valid values: **22050 to 96000**.
   * 
   * 
   * >Notice: If you set AudioProfile to **aac_ld**, the audio sampling rate cannot exceed 44100.
   * 
   * @example
   * 96000
   */
  audioRate?: number;
  /**
   * @remarks
   * The source-based bitrate settings. This parameter takes precedence over other bitrate settings. The following fields must be included:
   * 
   * *   **UpLimit**: the maximum bitrate limit. Valid values: an integer from 128 to 10000. The value must be greater than the minimum bitrate.
   * *   **LowerLimit int** : the minimum bitrate rate. Valid values: an integer from 128 to 10000. The value must be smaller than the maximum bitrate.
   * *   **Factor**: The ratio of the output bitrate to the source bitrate. Valid values: 0.1 to 1. The value is accurate to one decimal place. A value of 1 indicates that the output video has the same bitrate as the source video.
   * 
   * @example
   * {"UpLimit":2500,"LowerLimit":800,"Factor":1}
   */
  bitrateWithSource?: string;
  deInterlaced?: boolean;
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
   * Encryption configuration. In JSON format, the fields are explained as follows:
   * - **EncryptType**: Encryption type. Fixed value is aliyun.
   * - **KmsKeyID**: User KMS master key ID.
   * - **KmsKeyExpireInterval**: Key rotation period. Range: 60~3600, unit: seconds.
   * > If the EncryptParameters is configured, the KmsKeyID, KmsUID, and KmsKeyExpireInterval parameters cannot be empty
   * 
   * @example
   * {"EncryptType": "aliyun", "KmsKeyID":"afce5722-81d2-43c3-9930-7601da11****","KmsKeyExpireInterval":"3600"}
   */
  encryptParameters?: string;
  /**
   * @remarks
   * Other source-based settings, including the following fields:
   * 
   * *   **KeyFrameOpen**: specifies whether to use the key frames of the source video. Valid values: yes or no.
   * *   **Copyts**: specifies whether to use the presentation time stamp (PTS) of the source video. Valid values: yes or no.
   * *   **SeiMode**: specifies whether to pass through supplemental enhancement information (SEI) messages. Valid values: 0, 1, and 2, where 0 specifies that no SEI messages are passed through, 1 specifies that part of SEI messages are passed through, and 2 specifies that all SEI messages are passed through.
   * 
   * @example
   * {"KeyFrameOpen":"yes","Copyts":"yes","SeiMode":1}
   */
  extWithSource?: string;
  /**
   * @remarks
   * The frame rate of the output video. Unit: frames per second (FPS). Valid values: **1 to 60**.
   * 
   * @example
   * 30
   */
  FPS?: number;
  /**
   * @remarks
   * The source-based frame rate settings. This parameter takes precedence over other frame rate settings. The following fields must be included:
   * 
   * *   **UpLimit**: the maximum frame rate. Valid values: an integer from 1 to 60. The value must be greater than the minimum frame rate.
   * *   **LowerLimit**: the minimum frame rate. Valid values: an integer from 1 to 60. The value must be smaller than the maximum frame rate.
   * 
   * @example
   * {"UpLimit":60,"LowerLimit":1}
   */
  fpsWithSource?: string;
  /**
   * @remarks
   * The Group of Picture (GOP) size of the video. Unit: frames or seconds.
   * 
   * *   Unit: frames. Valid values: **1 to 3000**.
   * *   Unit: seconds. Valid value: **1 to 20**.
   * 
   * @example
   * 1
   */
  gop?: string;
  /**
   * @remarks
   * The height of the output video. Unit: pixel. Valid values:
   * 
   * The value must comply with all the following rules:
   * 
   * *   **Height ≥ 100**: The height of the video is greater than or equal to 100 pixels.
   * *   **max(Height,Width) ≤ 2560**: The width or height of the video, whichever is greater, cannot exceed 2,560 pixels.
   * *   **min(Height,Width) ≤ 1440**: The width or height of the video, whichever is smaller, cannot exceed 1,440 pixels.
   * 
   * > The resolution of the output video that is transcoded by using the H.265 Narrowband HD™ transcoding template cannot exceed 1280 × 720 pixels.
   * 
   * @example
   * 720
   */
  height?: number;
  /**
   * @remarks
   * The rotation period of the CMK. Valid values: 60 to 3600. Unit: seconds.
   * 
   * @example
   * 3600
   */
  kmsKeyExpireInterval?: string;
  /**
   * @remarks
   * The ID of the customer master key (CMK) that you created in Key Management Service (KMS).
   * 
   * @example
   * afce5722-81d2-43c3-9930-7601da11****
   */
  kmsKeyID?: string;
  /**
   * @remarks
   * The ID of your KMS account.
   * 
   * @example
   * 25346073170691****
   */
  kmsUID?: string;
  /**
   * @remarks
   * Specifies whether to use the load-on-demand mechanism for transcoding. Valid values: yes and no. Default value: **yes**.
   * 
   * @example
   * yes
   */
  lazy?: string;
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
   * {"Type":"short","Value":"1080"}
   */
  resWithSource?: string;
  /**
   * @remarks
   * The name of the custom transcoding template.
   * 
   * > The name can contain digits, letters, and hyphens (-), and must start with a letter or digit. The name must be different from the names of any default transcoding templates.
   * 
   * This parameter is required.
   * 
   * @example
   * LiveCusTranscode****
   */
  template?: string;
  /**
   * @remarks
   * The type of the custom transcoding template. Valid values:
   * 
   * *   **h264**: custom H.264 standard transcoding.
   * *   **h264-nbhd**: custom H.264 Narrowband HD™ transcoding.
   * *   **h265**: custom H.265 standard transcoding.
   * *   **h265-nbhd**: custom H.265 Narrowband HD™ transcoding.
   * *   **audio**: audio-only transcoding.
   * 
   * > If you set **TemplateType** to **h264**, **h264-nbhd**, **h265**, or **h265-nbhd**, the **Height**, **Width**, **FPS**, and **VideoBitrate** parameters are required.
   * 
   * This parameter is required.
   * 
   * @example
   * h264
   */
  templateType?: string;
  /**
   * @remarks
   * The bitrate of the output video. Unit: Kbit/s. Valid values: **1 to 6000**.
   * 
   * > The bitrate of the output video may not be the same as the value that you specify, but is as close to the value as possible, especially when the value is excessively large or small.
   * 
   * @example
   * 720
   */
  videoBitrate?: number;
  /**
   * @remarks
   * The width of the output video. Unit: pixel. Valid values:
   * 
   * The value must comply with all the following rules:
   * 
   * *   **Width ≥ 100**: The width of the video is greater than or equal to 100 pixels.
   * *   **max(Height,Width) ≤ 2560**: The width or height of the video, whichever is greater, cannot exceed 2,560 pixels.
   * *   **min(Height,Width) ≤ 1440**: The width or height of the video, whichever is smaller, cannot exceed 1,440 pixels.
   * 
   * > The resolution of the output video that is transcoded by using the H.265 Narrowband HD™ transcoding template cannot exceed 1280 × 720 pixels.
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
      kmsKeyExpireInterval: 'KmsKeyExpireInterval',
      kmsKeyID: 'KmsKeyID',
      kmsUID: 'KmsUID',
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
      kmsKeyExpireInterval: 'string',
      kmsKeyID: 'string',
      kmsUID: 'string',
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

