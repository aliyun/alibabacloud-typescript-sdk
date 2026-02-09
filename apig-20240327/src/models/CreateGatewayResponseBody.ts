// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGatewayResponseBodyData extends $dara.Model {
  /**
   * @example
   * gw-cq2vundlhtg***
   */
  gatewayId?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'gatewayId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGatewayResponseBody extends $dara.Model {
  /**
   * @example
   * Ok
   */
  code?: string;
  data?: CreateGatewayResponseBodyData;
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
   * 9CDE3E69-69C2-5402-83AD-ACA80B1AF35B
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
      data: CreateGatewayResponseBodyData,
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

