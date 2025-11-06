// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMdsCubeTaskResponseBodyResultContentData extends $dara.Model {
  /**
   * @example
   * 1010
   */
  content?: string;
  /**
   * @example
   * NONE
   */
  errorCode?: string;
  /**
   * @example
   * 0CC8A9CB-9BA3-13FD-A404-6E2E7461881A
   */
  requestId?: string;
  /**
   * @example
   * success
   */
  resultMsg?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      errorCode: 'ErrorCode',
      requestId: 'RequestId',
      resultMsg: 'ResultMsg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      errorCode: 'string',
      requestId: 'string',
      resultMsg: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMdsCubeTaskResponseBodyResultContent extends $dara.Model {
  data?: CreateMdsCubeTaskResponseBodyResultContentData;
  /**
   * @example
   * 0CC8A9CB-9BA3-13FD-A404-6E2E7461881A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateMdsCubeTaskResponseBodyResultContentData,
      requestId: 'string',
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

export class CreateMdsCubeTaskResponseBody extends $dara.Model {
  /**
   * @example
   * 0CC8A9CB-9BA3-13FD-A404-6E2E7461881A
   */
  requestId?: string;
  /**
   * @example
   * OK
   */
  resultCode?: string;
  resultContent?: CreateMdsCubeTaskResponseBodyResultContent;
  /**
   * @example
   * success
   */
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultContent: 'ResultContent',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultContent: CreateMdsCubeTaskResponseBodyResultContent,
      resultMessage: 'string',
    };
  }

  validate() {
    if(this.resultContent && typeof (this.resultContent as any).validate === 'function') {
      (this.resultContent as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

