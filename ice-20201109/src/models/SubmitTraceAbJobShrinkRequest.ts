// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitTraceAbJobShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The key that is encoded by using the Base64 algorithm.
   * 
   * @example
   * Qh6OdgIMcliQSI1fReOw****
   */
  cipherBase64ed?: string;
  /**
   * @remarks
   * The source video file for A/B watermarking.
   * 
   * > OSS object or media asset must reside in the same region as the IMS service region. This API supports only videos that last at least 3 minutes. If the video is too short, the call may fail, or no output may be returned.
   * 
   * This parameter is required.
   */
  inputShrink?: string;
  /**
   * @remarks
   * The watermark level, which specifies the channel to embed watermarks. Valid values: 0 specifies the 0u channel, 1 specifies the 1uv channel, and 2 specifies the 2yuv channel.
   * 
   * @example
   * 0
   */
  level?: number;
  /**
   * @remarks
   * The output directory path.
   * 
   * This parameter is required.
   */
  outputShrink?: string;
  /**
   * @remarks
   * The start point of watermark embedding. Unit: seconds.
   * 
   * @example
   * 0
   */
  startTime?: number;
  /**
   * @remarks
   * The duration of the watermark embedding. Unit: seconds.
   * 
   * @example
   * 360
   */
  totalTime?: number;
  /**
   * @remarks
   * The custom data, which can be up to 1,024 bytes in size.
   * 
   * @example
   * 123
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      cipherBase64ed: 'CipherBase64ed',
      inputShrink: 'Input',
      level: 'Level',
      outputShrink: 'Output',
      startTime: 'StartTime',
      totalTime: 'TotalTime',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cipherBase64ed: 'string',
      inputShrink: 'string',
      level: 'number',
      outputShrink: 'string',
      startTime: 'number',
      totalTime: 'number',
      userData: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

