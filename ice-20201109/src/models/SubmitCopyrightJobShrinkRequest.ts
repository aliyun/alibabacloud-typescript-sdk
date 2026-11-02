// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitCopyrightJobShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the watermark information.
   * 
   * @example
   * Task description
   */
  description?: string;
  /**
   * @remarks
   * The video file to which the watermark is to be added.
   * 
   * > - The region of the OSS file or media asset must be the same as the region of the current IMS.
   * 
   * This parameter is required.
   */
  inputShrink?: string;
  /**
   * @remarks
   * The watermark level, which indicates the embedding channel. Valid values: 0 (0u), 1 (1uv), and 2 (2yuv).
   * 
   * @example
   * 0
   */
  level?: number;
  /**
   * @remarks
   * The watermark information to be added.
   * 
   * This parameter is required.
   * 
   * @example
   * Copyright watermark test
   */
  message?: string;
  /**
   * @remarks
   * The URL of the output file.
   * 
   * > - The region of OSS must be the same as the region of the current IMS.
   * 
   * This parameter is required.
   */
  outputShrink?: string;
  /**
   * @remarks
   * The parameters of the watermark job, in the JSON string format. The following parameters are supported:
   * 
   * - algoType: the algorithm type. Default value: v1.
   *   - v1: long video copyright watermark, which supports only videos longer than 3 minutes.
   *   - v2: short video copyright watermark.
   * 
   * @example
   * {"algoType":"v2"}
   */
  params?: string;
  /**
   * @remarks
   * The start time of the watermark, in seconds. If you do not specify this parameter, the default value is 0.
   * 
   * @example
   * 0
   */
  startTime?: number;
  /**
   * @remarks
   * The end time of the watermark, in seconds. If you do not specify this parameter, the default value is the duration of the video.
   * 
   * @example
   * 10
   */
  totalTime?: number;
  /**
   * @remarks
   * The user-defined data, with a maximum length of 1,024 bytes.
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

