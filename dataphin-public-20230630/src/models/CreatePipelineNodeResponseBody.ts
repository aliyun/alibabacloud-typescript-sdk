// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePipelineNodeResponseBodyData extends $dara.Model {
  errorCodeList?: string[];
  errorMessageList?: string[];
  /**
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
   * @example
   * OK
   */
  code?: string;
  data?: CreatePipelineNodeResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
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

