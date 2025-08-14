// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryTraceM3u8JobListResponseBodyDataOutput extends $dara.Model {
  /**
   * @example
   * oss://bucket/object
   */
  media?: string;
  /**
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
   * @example
   * 1627357322
   */
  gmtCreate?: number;
  /**
   * @example
   * 1627357322
   */
  gmtModified?: number;
  /**
   * @example
   * ****d718e2ff4f018ccf419a7b71****
   */
  jobId?: string;
  output?: QueryTraceM3u8JobListResponseBodyDataOutput;
  /**
   * @example
   * success
   */
  status?: string;
  /**
   * @example
   * test
   */
  trace?: string;
  /**
   * @example
   * ****437bd2b105d07b12a9a82****
   */
  traceMediaId?: string;
  /**
   * @example
   * 112
   */
  userData?: string;
  /**
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
  data?: QueryTraceM3u8JobListResponseBodyData[];
  /**
   * @example
   * ok
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * ******11-DB8D-4A9A-875B-275798******
   */
  requestId?: string;
  /**
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

