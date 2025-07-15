// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FetchExportTermsTaskResponseBodyData extends $dara.Model {
  /**
   * @example
   * https//xxxx
   */
  fileUrl?: string;
  /**
   * @example
   * PENDING-待执行、RUNNING-执行中、SUCCESSED-成功、SUSPENDED-暂停、FAILED-失败、CANCELLED-取消
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      fileUrl: 'FileUrl',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileUrl: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FetchExportTermsTaskResponseBody extends $dara.Model {
  /**
   * @example
   * DataNotExists
   */
  code?: string;
  data?: FetchExportTermsTaskResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * F2F366D6-E9FE-1006-BB70-2C650896AAB5
   */
  requestId?: string;
  /**
   * @example
   * true
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
      data: FetchExportTermsTaskResponseBodyData,
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

