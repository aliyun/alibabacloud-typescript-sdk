// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWuyingServerEipInfoResponseBodyEipInfoModel extends $dara.Model {
  /**
   * @example
   * 171.xxx.xxx.221
   */
  ipAddress?: string;
  /**
   * @example
   * eni-bp174p2xxxxxbyh02ix
   */
  networkInterfaceId?: string;
  /**
   * @example
   * 6606/6607
   */
  serverPortRange?: string;
  static names(): { [key: string]: string } {
    return {
      ipAddress: 'IpAddress',
      networkInterfaceId: 'NetworkInterfaceId',
      serverPortRange: 'ServerPortRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

