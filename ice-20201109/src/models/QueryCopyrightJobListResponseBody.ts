// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCopyrightJobListResponseBodyDataInput extends $dara.Model {
  /**
   * @remarks
   * The specific input information.
   * 
   * @example
   * oss://bucket/object
   */
  media?: string;
  /**
   * @remarks
   * The type of the input file. Valid values:
   * 
   * 1.  OSS: an Object Storage Service (OSS) object.
   * 2.  Media: a media asset.
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

export class QueryCopyrightJobListResponseBodyDataOutput extends $dara.Model {
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

export class QueryCopyrightJobListResponseBodyData extends $dara.Model {
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
   * Information about the input video for watermarking.
   */
  input?: QueryCopyrightJobListResponseBodyDataInput;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * bfb786c639894f4d80648792021****
   */
  jobId?: string;
  /**
   * @remarks
   * The watermark level.
   * 
   * @example
   * 2
   */
  level?: number;
  /**
   * @remarks
   * The content of the embedded watermark.
   * 
   * @example
   * test
   */
  message?: string;
  /**
   * @remarks
   * Information about the watermarked output video.
   */
  output?: QueryCopyrightJobListResponseBodyDataOutput;
  /**
   * @remarks
   * The job result.
   * 
   * @example
   * {"Code":"success","Message":"ok"}
   */
  result?: string;
  /**
   * @remarks
   * The status of the job.
   * 
   * @example
   * success
   */
  status?: string;
  /**
   * @remarks
   * The user-defined data.
   * 
   * @example
   * 123
   */
  userData?: string;
  /**
   * @remarks
   * The ID of the user who initiated the job.
   * 
   * @example
   * 1346693***
   */
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      input: 'Input',
      jobId: 'JobId',
      level: 'Level',
      message: 'Message',
      output: 'Output',
      result: 'Result',
      status: 'Status',
      userData: 'UserData',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'number',
      gmtModified: 'number',
      input: QueryCopyrightJobListResponseBodyDataInput,
      jobId: 'string',
      level: 'number',
      message: 'string',
      output: QueryCopyrightJobListResponseBodyDataOutput,
      result: 'string',
      status: 'string',
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

export class QueryCopyrightJobListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: QueryCopyrightJobListResponseBodyData[];
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
   * ******36-3C1E-4417-BDB2-1E034F******
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
      data: { 'type': 'array', 'itemType': QueryCopyrightJobListResponseBodyData },
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

