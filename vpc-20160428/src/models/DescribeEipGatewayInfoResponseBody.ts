// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEipGatewayInfoResponseBodyEipInfosEipInfo extends $dara.Model {
  /**
   * @remarks
   * The IP address of the EIP.
   * 
   * @example
   * 47.XX.XX.236
   */
  ip?: string;
  /**
   * @remarks
   * The IP address of the gateway that is associated with the EIP.
   * 
   * @example
   * 47.XX.XX.1
   */
  ipGw?: string;
  /**
   * @remarks
   * The subnet mask of the EIP.
   * 
   * @example
   * 255.255.255.0
   */
  ipMask?: string;
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
      ipGw: 'IpGw',
      ipMask: 'IpMask',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: 'string',
      ipGw: 'string',
      ipMask: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEipGatewayInfoResponseBodyEipInfos extends $dara.Model {
  eipInfo?: DescribeEipGatewayInfoResponseBodyEipInfosEipInfo[];
  static names(): { [key: string]: string } {
    return {
      eipInfo: 'EipInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eipInfo: { 'type': 'array', 'itemType': DescribeEipGatewayInfoResponseBodyEipInfosEipInfo },
    };
  }

  validate() {
    if(Array.isArray(this.eipInfo)) {
      $dara.Model.validateArray(this.eipInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

