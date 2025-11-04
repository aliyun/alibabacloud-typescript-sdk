// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryTraceM3u8JobListResponseBodyDataOutput extends $dara.Model {
  /**
   * @remarks
   * The specific output information.
   * 
   * @example
   * oss://bucket/object
   */
  media?: string;
  /**
   * @remarks
   * The type of the output file. Valid values:
   * 
   * *   OSS: an OSS object.
   * *   Media: a media asset.
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

export class QueryTraceM3u8JobListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The creation time of the job.
   * 
   * @example
   * 1627357322
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The last modification time of the job.
   * 
   * @example
   * 1627357322
   */
  gmtModified?: number;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * ****d718e2ff4f018ccf419a7b71****
   */
  jobId?: string;
  /**
   * @remarks
   * The output video.
   */
  output?: QueryTraceM3u8JobListResponseBodyDataOutput;
  /**
   * @remarks
   * The current status of the job.
   * 
   * @example
   * success
   */
  status?: string;
  /**
   * @remarks
   * The watermark information.
   * 
   * @example
   * test
   */
  trace?: string;
  /**
   * @remarks
   * The media ID for the trace watermark.
   * 
   * @example
   * ****437bd2b105d07b12a9a82****
   */
  traceMediaId?: string;
  /**
   * @remarks
   * The user-defined data.
   * 
   * @example
   * 112
   */
  userData?: string;
  /**
   * @remarks
   * The ID of the user who initiated the job.
   * 
   * @example
   * 1346693276****
   */
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      jobId: 'JobId',
      output: 'Output',
      status: 'Status',
      trace: 'Trace',
      traceMediaId: 'TraceMediaId',
      userData: 'UserData',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'number',
      gmtModified: 'number',
      jobId: 'string',
      output: QueryTraceM3u8JobListResponseBodyDataOutput,
      status: 'string',
      trace: 'string',
      traceMediaId: 'string',
      userData: 'string',
      userId: 'number',
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

export class QueryTraceM3u8JobListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: QueryTraceM3u8JobListResponseBodyData[];
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * ok
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * ******11-DB8D-4A9A-875B-275798******
   */
  requestId?: string;
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': QueryTraceM3u8JobListResponseBodyData },
      message: 'string',
      requestId: 'string',
      statusCode: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

