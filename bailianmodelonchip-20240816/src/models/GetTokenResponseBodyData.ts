// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTokenResponseBodyData extends $dara.Model {
  /**
   * @example
   * 5b504f84b69b9a73d3a21a2cff05e190
   */
  deviceName?: string;
  /**
   * @example
   * b79d692c315d6bfb28312edf15
   */
  nonce?: string;
  /**
   * @example
   * el3SzmCU2p0x4RBc
   */
  productKey?: string;
  /**
   * @example
   * 127.0.0.1
   */
  requestIp?: string;
  /**
   * @example
   * 1748413248360
   */
  responseTime?: string;
  /**
   * @example
   * N1faAjFhhaRNFaZNC8woRpQyAzEfBaIoWQEgDfds/Fwm7nIyEDLlSK3Ttx2OFebiHZ/MpHRr/3MnI/jpVWB/xNYIQxm6sccHJENHNAz6gaW+itU5wUrh+46EpqySABV8kc2pQ0HmYlbePfjjOK6lCfQjEGpekSAgQ6tDhG1lXWfKdtggq58Ut5bImMxMhk4R/PFUWrJe4CDuFu072C+foI0JlUV9TnGtVQ58oz8VRndrGXyauS/xqg8iGSZn6FyprUf5p+0ow20E
   */
  signature?: string;
  static names(): { [key: string]: string } {
    return {
      deviceName: 'deviceName',
      nonce: 'nonce',
      productKey: 'productKey',
      requestIp: 'requestIp',
      responseTime: 'responseTime',
      signature: 'signature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceName: 'string',
      nonce: 'string',
      productKey: 'string',
      requestIp: 'string',
      responseTime: 'string',
      signature: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

