// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MediaConvertTransConfig extends $dara.Model {
  /**
   * @remarks
   * The method for adjusting the resolution. This parameter takes effect only if both the Width and Height parameters are specified. You can use this parameter together with the LongShortMode parameter.
   * 
   * *   Valid values: rescale, crop, pad, and none.
   * *   Default value: none.
   * *
   * 
   * @example
   * rescale
   */
  adjDarMethod?: string;
  /**
   * @remarks
   * Specifies whether to check the audio bitrate. Mutually exclusive with IsCheckVideoBitrateFail. IsCheckVideoBitrateFail has a higher priority.
   * 
   * *   true: checks the audio bitrate. If the source bitrate is lower than the target, the task will transcode using the source bitrate.
   * 
   * *   false: does not check the audio bitrate.
   * 
   * *   Default value:
   * 
   *     *   If this parameter is not specified and the codec of the output audio is different from that of the input audio, the default value is false.
   *     *   If this parameter is not specified and the codec of the output audio is the same as that of the input audio, the default value is true.
   */
  isCheckAudioBitrate?: boolean;
  /**
   * @remarks
   * Specifies whether to check the audio bitrate. Mutually exclusive with IsCheckAudioBitrate. This parameter has a higher priority.
   * 
   * *   true: checks the audio bitrate. If the source bitrate is lower than the target, the task will fail.
   * *   false: does not check the audio bitrate.
   * *   Default value: false.
   */
  isCheckAudioBitrateFail?: boolean;
  /**
   * @remarks
   * Specifies whether to check the video resolution. Mutually exclusive with IsCheckResoFail. IsCheckResoFail has a higher priority.
   * 
   * *   true: checks the video resolution. If the source resolution (width or height) is smaller than the target, the task will transcode using the source resolution.
   * *   false: does not check the video resolution.
   * *   Default value: false.
   */
  isCheckReso?: boolean;
  /**
   * @remarks
   * Specifies whether to check the video resolution. Mutually exclusive with IsCheckReso. This parameter has a higher priority.
   * 
   * *   true: checks the video resolution. If the source resolution (width or height) is smaller than the target, the task will fail.
   * *   false: does not check the video resolution.
   * *   Default value: false.
   */
  isCheckResoFail?: boolean;
  /**
   * @remarks
   * Specifies whether to check the video bitrate. Mutually exclusive with IsCheckVideoBitrateFail. IsCheckVideoBitrateFail has a higher priority.
   * 
   * *   true: checks the video bitrate. If the source bitrate is lower than the target, the task will transcode using the source bitrate.
   * *   false: does not check the video bitrate.
   * *   Default value: false.
   */
  isCheckVideoBitrate?: boolean;
  /**
   * @remarks
   * Specifies whether to check the video bitrate. Mutually exclusive with IsCheckVideoBitrate. This parameter has a higher priority.
   * 
   * *   true: checks the video bitrate. If the source bitrate is lower than the target, the task will fail.
   * *   false: does not check the video bitrate.
   * *   Default value: false.
   */
  isCheckVideoBitrateFail?: boolean;
  /**
   * @remarks
   * The video bitrate control mode. This is only valid for H.264, H.265, and AV1 codecs and must be used with the correct Bitrate or Crf settings. Valid values:
   * 
   * *   CBR: Constant bitrate mode.
   * *   onepass: Typically used for Average bitrate mode (ABR). Faster than twopass.
   * *   twopass: Typically used for variable bitrate mode (VBR). Slower than onepass.
   * *   fixCRF: Constant Rate Factor (quality-based) mode.
   * *   If you specify the Bitrate parameter, the default value of this parameter is onepass. If you do not specify the Bitrate parameter, the default value of this parameter is fixCRF, and the default value of the Crf parameter is used.
   * 
   * @example
   * onepass
   */
  transMode?: string;
  static names(): { [key: string]: string } {
    return {
      adjDarMethod: 'AdjDarMethod',
      isCheckAudioBitrate: 'IsCheckAudioBitrate',
      isCheckAudioBitrateFail: 'IsCheckAudioBitrateFail',
      isCheckReso: 'IsCheckReso',
      isCheckResoFail: 'IsCheckResoFail',
      isCheckVideoBitrate: 'IsCheckVideoBitrate',
      isCheckVideoBitrateFail: 'IsCheckVideoBitrateFail',
      transMode: 'TransMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adjDarMethod: 'string',
      isCheckAudioBitrate: 'boolean',
      isCheckAudioBitrateFail: 'boolean',
      isCheckReso: 'boolean',
      isCheckResoFail: 'boolean',
      isCheckVideoBitrate: 'boolean',
      isCheckVideoBitrateFail: 'boolean',
      transMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

