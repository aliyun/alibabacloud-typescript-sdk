// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddGatewayResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * code
   * 
   * @example
   * gw-5017305290e14cebbrvec4a5****
   */
  gatewayUniqueId?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayUniqueId: 'GatewayUniqueId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayUniqueId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGatewayResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   `true`: The request was successful.
   * *   `false`: The request failed.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The unique ID of the gateway.
   */
  data?: AddGatewayResponseBodyData;
  /**
   * @remarks
   * The message returned.
   * 
   * *   If the request is successful, a success message is returned.
   * *   If the request fails, an error message is returned.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The request is successfully processed.
   * 
   * @example
   * The return value.
   */
  message?: string;
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 2F46B9E7-67EF-5C8A-BA52-D38D5B32AF2C
   */
  requestId?: string;
  /**
   * @remarks
   * The returned data.
   * 
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
      code: 'number',
      data: AddGatewayResponseBodyData,
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

