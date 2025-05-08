// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GatewayService } from "./GatewayService";


export class UpdateGatewayServiceTrafficPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code returned.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The details of the data.
   * 
   * @example
   * {\\"GatewayUniqueId\\": \\"gw-2b8ebd75dc554c37a4279ba9917379f2\\", \\"Id\\": 417, \\"GatewayTrafficPolicy\\": {\\"LoadBalancerSettings\\": {\\"LoadbalancerType\\": \\"ROUND_ROBIN\\"}, \\"TlsSetting\\": {\\"TlsMode\\": \\"DISABLE\\"}}}
   */
  data?: GatewayService;
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * The request was successfully processed.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 11A61389-F896-5231-A4FB-074D9E2E0055
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * *   **true**: The request was successful.
   * *   **false**: The request failed.
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
      data: GatewayService,
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

