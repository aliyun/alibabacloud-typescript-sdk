// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLinkResponseBodyResultContent extends $dara.Model {
  /**
   * @example
   * https://xxx/xxx
   */
  data?: string;
  /**
   * @example
   * https://xxx/xxx/xxx
   */
  target?: string;
  /**
   * @example
   * 0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      target: 'Target',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      target: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLinkResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 0CC8A9CB-9BA3-13FD-A404-6E2E7461881A
   */
  requestId?: string;
  /**
   * @example
   * 100
   */
  resultCode?: string;
  resultContent?: CreateLinkResponseBodyResultContent;
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
      resultContent: CreateLinkResponseBodyResultContent,
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

