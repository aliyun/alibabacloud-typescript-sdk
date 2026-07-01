// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitCopyrightJobShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * A description of the watermark job.
   * 
   * @example
   * Task description
   */
  description?: string;
  /**
   * @remarks
   * The input video file to be watermarked.
   * 
   * > - The OSS object or media asset must be in the same region as the service call.
   * 
   * This parameter is required.
   * 
   * @example
   * {"Bucket":"example-bucket","Location":"oss-cn-shanghai","Object":"example.mp4"}
   */
  inputShrink?: string;
  /**
   * @remarks
   * The watermark level, which specifies the embedding channel. Valid values are 0, 1, and 2, which correspond to the U, UV, and YUV channels, respectively.
   * 
   * @example
   * 0
   */
  level?: number;
  /**
   * @remarks
   * The watermark content to embed.
   * 
   * This parameter is required.
   * 
   * @example
   * Copyright watermark test
   */
  message?: string;
  /**
   * @remarks
   * The location of the output file.
   * 
   * > - The OSS bucket must be in the same region as the service call.
   * 
   * This parameter is required.
   * 
   * @example
   * {"Bucket":"example-bucket","Location":"oss-cn-shanghai","Object":"example_result.mp4"}
   */
  outputShrink?: string;
  /**
   * @remarks
   * The parameters for the watermark job, specified as a JSON string. The following parameter is supported:
   * 
   * - `algoType`: The algorithm type. Defaults to `v1`.
   * 
   *   - `v1`: For videos 3 minutes or longer.
   * 
   *   - `v2`: For short videos.
   * 
   * @example
   * {"algoType":"v2"}
   */
  params?: string;
  /**
   * @remarks
   * The start time of the watermark in seconds. Defaults to 0.
   * 
   * @example
   * 0
   */
  startTime?: number;
  /**
   * @remarks
   * The end time of the watermark in seconds. If unspecified, the watermark is applied until the video ends.
   * 
   * @example
   * 10
   */
  totalTime?: number;
  /**
   * @remarks
   * The user data. The value can be up to 1,024 bytes in length.
   * 
   * @example
   * 123
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      inputShrink: 'Input',
      level: 'Level',
      message: 'Message',
      outputShrink: 'Output',
      params: 'Params',
      startTime: 'StartTime',
      totalTime: 'TotalTime',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      inputShrink: 'string',
      level: 'number',
      message: 'string',
      outputShrink: 'string',
      params: 'string',
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

