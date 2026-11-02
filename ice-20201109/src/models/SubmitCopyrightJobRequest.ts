// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitCopyrightJobRequestInput extends $dara.Model {
  /**
   * @remarks
   * The information about the input file. Both OSS URLs and media asset IDs are supported.
   * The OSS URL rules are as follows:
   * 
   * 1. oss://bucket/object
   * 
   * 2. http(s)://bucket.oss-[regionId].aliyuncs.com/object
   * 
   * In the URLs, bucket is the name of the OSS bucket that is in the same region as the current project, and object is the file path.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://bucket/object
   */
  media?: string;
  /**
   * @remarks
   * The type of the input file. Valid values:
   * 1. OSS: the URL of the OSS file.
   * 2. Media: the ID of the media asset.
   * 
   * This parameter is required.
   * 
   * @example
   * OSS
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      media: 'Media',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      media: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitCopyrightJobRequestOutput extends $dara.Model {
  /**
   * @remarks
   * The information about the output file. Only OSS URLs are supported. The OSS URL rules are as follows:
   * 
   * 1. oss://bucket/object
   * 
   * 2. http(s)://bucket.oss-[regionId].aliyuncs.com/object
   * In the URLs, bucket is the name of the OSS bucket that is in the same region as the current project, and object is the file path.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://test-bucket/output.mp4
   */
  media?: string;
  /**
   * @remarks
   * The type of the output file. Valid values:
   * 
   * 1. OSS: the URL of the OSS file.
   * 
   * This parameter is required.
   * 
   * @example
   * OSS
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      media: 'Media',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      media: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitCopyrightJobRequest extends $dara.Model {
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
  input?: SubmitCopyrightJobRequestInput;
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
  output?: SubmitCopyrightJobRequestOutput;
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
      input: 'Input',
      level: 'Level',
      message: 'Message',
      output: 'Output',
      params: 'Params',
      startTime: 'StartTime',
      totalTime: 'TotalTime',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      input: SubmitCopyrightJobRequestInput,
      level: 'number',
      message: 'string',
      output: SubmitCopyrightJobRequestOutput,
      params: 'string',
      startTime: 'number',
      totalTime: 'number',
      userData: 'string',
    };
  }

  validate() {
    if(this.input && typeof (this.input as any).validate === 'function') {
      (this.input as any).validate();
    }
    if(this.output && typeof (this.output as any).validate === 'function') {
      (this.output as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

