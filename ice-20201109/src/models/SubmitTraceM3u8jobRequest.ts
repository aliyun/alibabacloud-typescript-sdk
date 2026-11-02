// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitTraceM3u8JobRequestOutput extends $dara.Model {
  /**
   * @remarks
   * The output file information. OSS addresses are supported. The OSS address rules are as follows:
   * 
   * 1. oss://bucket/object
   * 
   * 2. http(s)://bucket.oss-[regionId].aliyuncs.com/object
   * where bucket is the name of the OSS bucket that resides in the same region as the current project, and object is the file path.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://bucket/object
   */
  media?: string;
  /**
   * @remarks
   * The output file type. Valid values:
   * 
   * 1. OSS: OSS file address.
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
   * The OSS output address of the m3u8 file.
   * 
   * 
   * > The region of the OSS bucket must be the same as the region of the current MPS.
   * 
   * This parameter is required.
   */
  output?: SubmitTraceM3u8JobRequestOutput;
  /**
   * @remarks
   * The watermark job parameters. The value is a JSON string. The following parameters are supported:
   * 
   * - m3u8Type: the algorithm type. Default value: v1.
   * 
   *   - v1: generates an m3u8 file with an absolute path, which can be played directly. The signature authentication is valid for 24 hours. After the authentication expires, you must resubmit the job to obtain the m3u8 file.
   * 
   *   - v2: generates an m3u8 file with a relative path, which must be placed in the same directory as the TS files.
   * 
   * @example
   * {"m3u8Type":"v1"}
   */
  params?: string;
  /**
   * @remarks
   * The tracing watermark information.
   * 
   * @example
   * Traceability Watermark Test
   */
  trace?: string;
  /**
   * @remarks
   * The media ID of the processed tracing watermark AB stream. You can obtain this ID from the response parameters of the operation that submits a video tracing watermark AB stream job.
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

