// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitTraceAbJobRequestInput extends $dara.Model {
  /**
   * @remarks
   * The location of the input file. This can be an OSS URL or a media asset ID.
   * The supported OSS URL formats are:
   * 
   * 1\\. `oss://<bucket>/<object>`
   * 
   * 2\\. `http(s)://<bucket>.oss-[regionId].aliyuncs.com/<object>`
   * 
   * In these formats, `<bucket>` is the name of the OSS bucket, which must be in the same region as your project, and `<object>` is the path to the file.
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
   * 1. `OSS`: The file is specified by an OSS URL.
   * 
   * 2. `Media`: The file is specified by a media asset ID.
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
   * The output path. Specify an OSS directory URL or a media asset ID. If you specify an OSS URL, use one of the following formats for the output directory:
   * 
   * 1\\. `oss://<bucket>/<dir>/`
   * 
   * 2\\. `http(s)://<bucket>.oss-[regionId].aliyuncs.com/<dir>/`
   * 
   * In these formats, `<bucket>` is the name of the OSS bucket, which must be in the same region as your project, and `<dir>` is the output directory path.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://bucket/dir/
   */
  media?: string;
  /**
   * @remarks
   * The type of the output object.
   * Valid values:
   * 
   * - `OSS`: An OSS object.
   * 
   * - `Media`: A media asset ID.
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
  input?: SubmitTraceAbJobRequestInput;
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
  output?: SubmitTraceAbJobRequestOutput;
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

