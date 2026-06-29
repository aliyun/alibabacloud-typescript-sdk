// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePipelineNodeResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The error codes.
   */
  errorCodeList?: string[];
  /**
   * @remarks
   * The error messages.
   */
  errorMessageList?: string[];
  /**
   * @remarks
   * The ID of the pipeline created.
   * 
   * @example
   * 33749
   */
  pipelineId?: number;
  static names(): { [key: string]: string } {
    return {
      errorCodeList: 'ErrorCodeList',
      errorMessageList: 'ErrorMessageList',
      pipelineId: 'PipelineId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCodeList: { 'type': 'array', 'itemType': 'string' },
      errorMessageList: { 'type': 'array', 'itemType': 'string' },
      pipelineId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.errorCodeList)) {
      $dara.Model.validateArray(this.errorCodeList);
    }
    if(Array.isArray(this.errorMessageList)) {
      $dara.Model.validateArray(this.errorMessageList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePipelineNodeResponseBody extends $dara.Model {
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
   * The pipeline node information.
   */
  data?: CreatePipelineNodeResponseBodyData;
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
      data: CreatePipelineNodeResponseBodyData,
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

