// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeEipGatewayInfoResponseBodyEipInfos } from "./DescribeEipGatewayInfoResponseBodyEipInfos";


export class DescribeEipGatewayInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code of the operation.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The detailed information about the EIP.
   */
  eipInfos?: DescribeEipGatewayInfoResponseBodyEipInfos;
  /**
   * @remarks
   * The result of the operation.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C0FD0EED-F90D-4479-803D-DD62335357E5
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      eipInfos: 'EipInfos',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      eipInfos: DescribeEipGatewayInfoResponseBodyEipInfos,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.eipInfos && typeof (this.eipInfos as any).validate === 'function') {
      (this.eipInfos as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

