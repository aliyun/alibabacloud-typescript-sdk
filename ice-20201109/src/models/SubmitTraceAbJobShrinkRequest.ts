// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitTraceAbJobShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The Base64-encoded encryption key.
   * 
   * @example
   * Qh6OdgIMcliQSI1fReOw****
   */
  cipherBase64ed?: string;
  /**
   * @remarks
   * The input video for the A/B stream forensic watermarking job.
   * 
   * > - The Object Storage Service (OSS) file or media asset must be in the same region where Intelligent Media Services (IMS) is deployed.
   * >
   * > - This operation supports only videos that are three minutes or longer. Using a shorter video may cause the API call to fail or produce no output.
   * 
   * This parameter is required.
   */
  inputShrink?: string;
  /**
   * @remarks
   * The watermark level, which specifies the embedding channel. Valid values: `0` (U channel), `1` (UV channels), and `2` (YUV channels).
   * 
   * @example
   * 0
   */
  level?: number;
  /**
   * @remarks
   * The output location for the A/B stream job. This must be an OSS directory.
   * 
   * This parameter is required.
   */
  outputShrink?: string;
  /**
   * @remarks
   * The start time for watermark embedding, in seconds.
   * 
   * @example
   * 0
   */
  startTime?: number;
  /**
   * @remarks
   * The total duration for watermark embedding, in seconds.
   * 
   * @example
   * 360
   */
  totalTime?: number;
  /**
   * @remarks
   * User data to include in the request. The maximum length is 1,024 bytes.
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

