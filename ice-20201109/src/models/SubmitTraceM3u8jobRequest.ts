// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitTraceM3u8JobRequestOutput extends $dara.Model {
  /**
   * @remarks
   * The OSS path where the output file is saved. You can specify the path in one of the following formats:
   * 
   * 1\\. oss://bucket/object
   * 
   * 2\\. http(s)://bucket.oss-[regionId].aliyuncs.com/object where bucket specifies an OSS bucket that resides in the same region as the job, and object specifies the object path in OSS.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://bucket/object
   */
  media?: string;
  /**
   * @remarks
   * The type of the output file. Valid value:
   * 
   * 1.  OSS: an OSS object.
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
   * The OSS URL of the output M3U8 file.
   * 
   * > The OSS bucket must reside in the same region as the service region.
   * 
   * This parameter is required.
   */
  output?: SubmitTraceM3u8JobRequestOutput;
  /**
   * @remarks
   * Additional parameters for the watermark job, provided as a JSON string. Supported parameter:
   * 
   * *   m3u8Type: The type of M3U8 to generate. Defaults to v1.
   * 
   *     *   v1: Generates an M3U8 with absolute paths, playable directly. The signed URL for access is valid for 24 hours. If you need to use it after expiration, you must call this API again.
   *     *   v2: Generates an M3U8 with relative paths. It must be placed in the same directory as the TS segment files to be playable.
   * 
   * @example
   * {"m3u8Type":"v1"}
   */
  params?: string;
  /**
   * @remarks
   * The specific trace watermark information.
   */
  trace?: string;
  /**
   * @remarks
   * The media ID for the trace watermark. You can obtain this from the response of the SubmitTraceAbJob operation.
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

