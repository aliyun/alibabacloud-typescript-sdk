// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AISearchResourceUpdateResponseBodyData extends $dara.Model {
  /**
   * @example
   * WzMGQZwB7nQEs3Qk3ajH
   */
  resourceId?: string;
  /**
   * @example
   * miniapp
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'resourceId',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AISearchResourceUpdateResponseBody extends $dara.Model {
  data?: AISearchResourceUpdateResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * FDE51A3B-09C0-57E5-96FC-31E85EEFF318
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: AISearchResourceUpdateResponseBodyData,
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

