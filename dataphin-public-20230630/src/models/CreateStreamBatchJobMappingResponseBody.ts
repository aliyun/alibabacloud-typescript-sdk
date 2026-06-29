// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateStreamBatchJobMappingResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The job file ID.
   * 
   * @example
   * 7083701105376640
   */
  fileId?: string;
  /**
   * @remarks
   * JobId
   * 
   * @example
   * 123123
   */
  jobId?: number;
  /**
   * @remarks
   * The redirect relative path.
   * 
   * @example
   * /dev/streamJob/7083701105376640?env=DEV&projectId=7081229106458752&tenantId=300001420
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      fileId: 'FileId',
      jobId: 'JobId',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'string',
      jobId: 'number',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStreamBatchJobMappingResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code. A value of OK indicates that the request was successful.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The result returned when the node is created.
   */
  data?: CreateStreamBatchJobMappingResponseBodyData;
  /**
   * @remarks
   * The HTTP status code returned by the backend.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateStreamBatchJobMappingResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

