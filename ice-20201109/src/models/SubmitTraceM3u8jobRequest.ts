// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitTraceM3u8JobRequestOutput extends $dara.Model {
  /**
   * @remarks
   * The output file path. Only OSS paths are supported. You can use one of the following formats:
   * 
   * 1\\. `oss://bucket/object`
   * 
   * 2\\. `http(s)://bucket.oss-[regionId].aliyuncs.com/object`. In these formats, `bucket` specifies the name of an OSS bucket in the same region as your project, and `object` specifies the file path.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://bucket/object
   */
  media?: string;
  /**
   * @remarks
   * The type of the output destination. Valid values:
   * 
   * 1. `OSS`: an OSS file location.
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

export class SubmitTraceM3u8JobRequest extends $dara.Model {
  /**
   * @remarks
   * The URI of the key server.
   * 
   * @example
   * https://cipher.abc.com
   */
  keyUri?: string;
  /**
   * @remarks
   * The OSS destination for the output M3U8 file.
   * 
   * > The OSS bucket must be in the same region as your MPS service.
   * 
   * This parameter is required.
   */
  output?: SubmitTraceM3u8JobRequestOutput;
  /**
   * @remarks
   * A JSON string that contains parameters for the watermarking job. The following parameter is supported:
   * 
   * - `m3u8Type`: The algorithm type. The default value is `v1`.
   * 
   *   - `v1`: Generates an M3U8 file that uses an absolute path. The file can be played directly. The signature is valid for 24 hours. After expiration, you must submit a new job to get a new M3U8 file.
   * 
   *   - `v2`: Generates an M3U8 file that uses a relative path. This file must be stored in the same directory as the TS files.
   * 
   * @example
   * {"m3u8Type":"v1"}
   */
  params?: string;
  /**
   * @remarks
   * The watermark content to embed.
   * 
   * @example
   * Trace watermark test
   */
  trace?: string;
  /**
   * @remarks
   * The media ID of the processed A/B stream for video watermarking for tracing. This ID is returned in the response when you submit the A/B stream job.
   * 
   * @example
   * 437bd2b516ffda105d07b12a9a82****
   */
  traceMediaId?: string;
  static names(): { [key: string]: string } {
    return {
      keyUri: 'KeyUri',
      output: 'Output',
      params: 'Params',
      trace: 'Trace',
      traceMediaId: 'TraceMediaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyUri: 'string',
      output: SubmitTraceM3u8JobRequestOutput,
      params: 'string',
      trace: 'string',
      traceMediaId: 'string',
    };
  }

  validate() {
    if(this.output && typeof (this.output as any).validate === 'function') {
      (this.output as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

