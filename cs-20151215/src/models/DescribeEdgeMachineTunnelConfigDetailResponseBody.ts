// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEdgeMachineTunnelConfigDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The device name.
   * 
   * @example
   * TEST0621N0FF****
   */
  deviceName?: string;
  /**
   * @remarks
   * The model of the cloud-native box.
   * 
   * @example
   * ACK-A-S001
   */
  model?: string;
  /**
   * @remarks
   * Product Key
   * 
   * @example
   * a11rXul****
   */
  productKey?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * bfd12953-31cb-42f1-8a36-7b80ec345094
   */
  requestId?: string;
  /**
   * @remarks
   * The serial number of the cloud-native box.
   * 
   * @example
   * Q2CB5XZAFBFG****
   */
  sn?: string;
  /**
   * @remarks
   * Token
   * 
   * @example
   * abcd****
   */
  token?: string;
  /**
   * @remarks
   * The tunnel endpoint.
   * 
   * @example
   * wss://frontend-iotx-r-debug.aliyun-inc.test
   */
  tunnelEndpoint?: string;
  static names(): { [key: string]: string } {
    return {
      deviceName: 'device_name',
      model: 'model',
      productKey: 'product_key',
      requestId: 'request_id',
      sn: 'sn',
      token: 'token',
      tunnelEndpoint: 'tunnel_endpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceName: 'string',
      model: 'string',
      productKey: 'string',
      requestId: 'string',
      sn: 'string',
      token: 'string',
      tunnelEndpoint: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

