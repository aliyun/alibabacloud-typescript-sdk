// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitTraceAbJobRequestInput extends $dara.Model {
  /**
   * @remarks
   * The source file. The file can be an OSS object or a media asset. You can specify the path of an OSS object in one of the following formats:
   * 
   * 1\\. oss://bucket/object
   * 
   * 2\\. http(s)://bucket.oss-[regionId].aliyuncs.com/object
   * 
   * where bucket specifies an OSS bucket that resides in the same region as the job, and object specifies the object path in OSS.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://bucket/object
   */
  media?: string;
  /**
   * @remarks
   * The type of the source file. Valid values:
   * 
   * 1.  OSS: an OSS object.
   * 2.  Media: a media asset.
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

export class SubmitTraceAbJobRequestOutput extends $dara.Model {
  /**
   * @remarks
   * The output file. The file can be an OSS object or a media asset. OSS URL formats:
   * 
   * 1\\. oss://bucket/dir/
   * 
   * 2\\. http(s)://bucket.oss-[regionId].aliyuncs.com/dir/
   * 
   * In the URL, bucket specifies an OSS bucket that resides in the same region as the job, and dir specifies the object path in OSS.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://bucket/dir/
   */
  media?: string;
  /**
   * @remarks
   * The type of the output file. Valid values:
   * 
   * *   OSS: an OSS object.
   * *   Media: a media asset.
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

export class SubmitTraceAbJobRequest extends $dara.Model {
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
  input?: SubmitTraceAbJobRequestInput;
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
  output?: SubmitTraceAbJobRequestOutput;
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
      input: 'Input',
      level: 'Level',
      output: 'Output',
      startTime: 'StartTime',
      totalTime: 'TotalTime',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cipherBase64ed: 'string',
      input: SubmitTraceAbJobRequestInput,
      level: 'number',
      output: SubmitTraceAbJobRequestOutput,
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

