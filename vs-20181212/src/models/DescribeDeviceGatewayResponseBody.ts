// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDeviceGatewayResponseBody extends $dara.Model {
  /**
   * @example
   * 192.168.0.1
   */
  host?: string;
  /**
   * @example
   * 8080
   */
  port?: number;
  /**
   * @example
   * gb28181
   */
  protocol?: string;
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @example
   * f5578fbc-694c-461d-a2a2-eb090775cef0
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      host: 'Host',
      port: 'Port',
      protocol: 'Protocol',
      requestId: 'RequestId',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: 'string',
      port: 'number',
      protocol: 'string',
      requestId: 'string',
      token: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

