// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitCopyrightJobRequestInput extends $dara.Model {
  /**
   * @remarks
   * The input file, specified as either an OSS URL or a media asset ID. The following formats are supported for OSS URLs:
   * 
   * 1\\. `oss://bucket/object`
   * 
   * 2\\. `http(s)://bucket.oss-[regionId].aliyuncs.com/object`
   * 
   * In these formats, `bucket` specifies the name of an OSS bucket in the same region as the service, and `object` specifies the file path.
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
   * 
   * 1. `OSS`: The URL of an OSS object.
   * 
   * 2. `Media`: The media asset ID.
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
   * The OSS URL for the output file. The following formats are supported:
   * 
   * 1\\. `oss://bucket/object`
   * 
   * 2\\. `http(s)://bucket.oss-[regionId].aliyuncs.com/object`<br>In these formats, `bucket` specifies the name of an OSS bucket in the same region as the service, and `object` specifies the file path.<br>
   * 
   * This parameter is required.
   * 
   * @example
   * oss://test-bucket/output.mp4
   */
  media?: string;
  /**
   * @remarks
   * The type of the output file. Valid value:
   * 
   * 1. `OSS`: The URL of an OSS object.
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
  input?: SubmitCopyrightJobRequestInput;
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
  output?: SubmitCopyrightJobRequestOutput;
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

