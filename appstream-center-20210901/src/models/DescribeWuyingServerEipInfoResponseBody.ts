// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWuyingServerEipInfoResponseBodyEipInfoModel extends $dara.Model {
  eipId?: string;
  /**
   * @remarks
   * The public IP address.
   * 
   * @example
   * 171.xxx.xxx.221
   */
  ipAddress?: string;
  /**
   * @remarks
   * The ID of the elastic network interface (ENI).
   * 
   * @example
   * eni-bp174p2xxxxxbyh02ix
   */
  networkInterfaceId?: string;
  /**
   * @remarks
   * The port range.
   * 
   * @example
   * 6606/6607
   */
  serverPortRange?: string;
  static names(): { [key: string]: string } {
    return {
      eipId: 'EipId',
      ipAddress: 'IpAddress',
      networkInterfaceId: 'NetworkInterfaceId',
      serverPortRange: 'ServerPortRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eipId: 'string',
      ipAddress: 'string',
      networkInterfaceId: 'string',
      serverPortRange: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWuyingServerEipInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the associated EIP.
   */
  eipInfoModel?: DescribeWuyingServerEipInfoResponseBodyEipInfoModel;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      eipInfoModel: 'EipInfoModel',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eipInfoModel: DescribeWuyingServerEipInfoResponseBodyEipInfoModel,
      requestId: 'string',
    };
  }

  validate() {
    if(this.eipInfoModel && typeof (this.eipInfoModel as any).validate === 'function') {
      (this.eipInfoModel as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

