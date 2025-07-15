// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddDatasetDocumentResponseBodyData extends $dara.Model {
  /**
   * @example
   * 文档业务唯一标识
   */
  docId?: string;
  /**
   * @example
   * 8df2d69d63a247b6b52ff455b2d426b6
   */
  docUuid?: string;
  /**
   * @example
   * Success
   */
  errorCode?: string;
  errorMessage?: string;
  /**
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      docId: 'DocId',
      docUuid: 'DocUuid',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docId: 'string',
      docUuid: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDatasetDocumentResponseBody extends $dara.Model {
  /**
   * @example
   * NoData
   */
  code?: string;
  data?: AddDatasetDocumentResponseBodyData;
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
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
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
      data: AddDatasetDocumentResponseBodyData,
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

