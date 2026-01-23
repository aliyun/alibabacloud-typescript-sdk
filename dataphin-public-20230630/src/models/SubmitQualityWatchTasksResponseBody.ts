// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitQualityWatchTasksResponseBodySubmitResult extends $dara.Model {
  watchTaskIdList?: number[];
  static names(): { [key: string]: string } {
    return {
      watchTaskIdList: 'WatchTaskIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      watchTaskIdList: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.watchTaskIdList)) {
      $dara.Model.validateArray(this.watchTaskIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitQualityWatchTasksResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * internal error
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 82E78D6B-AA8F-1FEF-8AA3-5C9DA2A79140
   */
  requestId?: string;
  submitResult?: SubmitQualityWatchTasksResponseBodySubmitResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      submitResult: 'SubmitResult',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      submitResult: SubmitQualityWatchTasksResponseBodySubmitResult,
      success: 'boolean',
    };
  }

  validate() {
    if(this.submitResult && typeof (this.submitResult as any).validate === 'function') {
      (this.submitResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

