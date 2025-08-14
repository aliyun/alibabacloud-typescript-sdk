// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryTraceAbJobListResponseBodyDataInput extends $dara.Model {
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

export class QueryTraceAbJobListResponseBodyDataOutput extends $dara.Model {
  /**
   * @example
   * oss://bucket/dir/
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

export class QueryTraceAbJobListResponseBodyData extends $dara.Model {
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
  input?: QueryTraceAbJobListResponseBodyDataInput;
  /**
   * @example
   * bfb786c639894f4d80648792021eff90
   */
  jobId?: string;
  /**
   * @example
   * 2
   */
  level?: number;
  output?: QueryTraceAbJobListResponseBodyDataOutput;
  /**
   * @example
   * {"Code":"success","Message":"ok"}
   */
  result?: string;
  /**
   * @example
   * success
   */
  status?: string;
  /**
   * @example
   * ****437bd2b51105d07b12a9****
   */
  traceMediaId?: string;
  /**
   * @example
   * 123
   */
  userData?: string;
  /**
   * @example
   * 13466932****
   */
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      input: 'Input',
      jobId: 'JobId',
      level: 'Level',
      output: 'Output',
      result: 'Result',
      status: 'Status',
      traceMediaId: 'TraceMediaId',
      userData: 'UserData',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'number',
      gmtModified: 'number',
      input: QueryTraceAbJobListResponseBodyDataInput,
      jobId: 'string',
      level: 'number',
      output: QueryTraceAbJobListResponseBodyDataOutput,
      result: 'string',
      status: 'string',
      traceMediaId: 'string',
      userData: 'string',
      userId: 'number',
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

export class QueryTraceAbJobListResponseBody extends $dara.Model {
  data?: QueryTraceAbJobListResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': QueryTraceAbJobListResponseBodyData },
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

