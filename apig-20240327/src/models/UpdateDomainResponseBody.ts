// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDomainResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The released version ID.
   * 
   * @example
   * apr-xxx
   */
  deployRevisionId?: string;
  static names(): { [key: string]: string } {
    return {
      deployRevisionId: 'deployRevisionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deployRevisionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDomainResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * The response parameters.
   */
  data?: UpdateDomainResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID. You can use this value to trace the API call.
   * 
   * @example
   * 4BACB05C-3FE2-588F-9148-700C5C026B74
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: UpdateDomainResponseBodyData,
      message: 'string',
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

