// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateConsumerResponseBodyData extends $dara.Model {
  /**
   * @example
   * cs-cvnjramm1hks1r3fmmug
   */
  consumerId?: string;
  static names(): { [key: string]: string } {
    return {
      consumerId: 'consumerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConsumerResponseBody extends $dara.Model {
  /**
   * @example
   * Ok
   */
  code?: string;
  data?: CreateConsumerResponseBodyData;
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
   * 479AE38F-A574-52F7-87EA-E91199999F9E
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
      data: CreateConsumerResponseBodyData,
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

