// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitCopyrightJobShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the watermark.
   * 
   * @example
   * Description
   */
  description?: string;
  /**
   * @remarks
   * The source video file that you want to add a watermark to.
   * 
   * > The OSS object or media asset must reside in the same region as the IMS service region.
   * 
   * This parameter is required.
   * 
   * @example
   * {"Bucket":"example-bucket","Location":"oss-cn-shanghai","Object":"example.mp4"}
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
   * The information about the watermark to be added.
   * 
   * This parameter is required.
   * 
   * @example
   * Test
   */
  message?: string;
  /**
   * @remarks
   * The URL of the output file.
   * 
   * > The OSS bucket must reside in the same region as the IMS service region.
   * 
   * This parameter is required.
   * 
   * @example
   * {"Bucket":"example-bucket","Location":"oss-cn-shanghai","Object":"example_result.mp4"}
   */
  outputShrink?: string;
  /**
   * @remarks
   * The parameters related to watermark jobs. The value is a JSON string. Supported parameter:
   * 
   * *   algoType: the algorithm type. Default value: v1.
   * 
   *     *   v1: watermarking for long videos that last at least 3 minutes.
   *     *   v2: watermarking for videos shorter than 3 minutes.
   * 
   * @example
   * {"algoType":"v2"}
   */
  params?: string;
  /**
   * @remarks
   * The start time of the watermark. Unit: seconds. If you do not specify this parameter, the default value 0 is used.
   * 
   * @example
   * 0
   */
  startTime?: number;
  /**
   * @remarks
   * The end time of the watermark. Unit: seconds. If you do not specify this parameter, the default value is the video duration.
   * 
   * @example
   * 10
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

