// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGatewayDfpExtProcServiceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the gateway is bound to a dynamic forwarding ExtProc service.
   * 
   * @example
   * true
   */
  bound?: boolean;
  /**
   * @remarks
   * The ID of the bound ExtProc gRPC service. This parameter is not returned if no service is bound.
   * 
   * @example
   * svc-cr8k0udlhtgt80sh7png
   */
  serviceId?: string;
  /**
   * @remarks
   * The gRPC port of the bound service. This parameter is not returned if no service is bound.
   * 
   * @example
   * 9002
   */
  servicePort?: number;
  static names(): { [key: string]: string } {
    return {
      bound: 'bound',
      serviceId: 'serviceId',
      servicePort: 'servicePort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bound: 'boolean',
      serviceId: 'string',
      servicePort: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGatewayDfpExtProcServiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result code of the request. The value is Ok if the request is successful.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * The binding information of the dynamic forwarding ExtProc service for the gateway.
   * 
   * @example
   * {"bound":true,"serviceId":"svc-cr8k0udlhtgt80sh7png","servicePort":9002}
   */
  data?: GetGatewayDfpExtProcServiceResponseBodyData;
  /**
   * @remarks
   * The result message of the request. If the request failed, the message contains the error message of the fault.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID, which is used for troubleshooting.
   * 
   * @example
   * F7B8A1C2-1234-5678-90AB-CDEF12345678
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
      data: GetGatewayDfpExtProcServiceResponseBodyData,
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

