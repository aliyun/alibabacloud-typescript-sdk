// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEndpointsResponseBodyDataEndpointsPorts extends $dara.Model {
  /**
   * @remarks
   * The port used to connect to the cluster. Valid values:
   * 
   * *   8123: This value is returned when the value of Protocol is HttpPort.
   * *   8443: This value is returned when the value of Protocol is HttpsPort.
   * *   9000: This value is returned when the value of Protocol is TcpPort.
   * 
   * @example
   * 8123
   */
  port?: number;
  /**
   * @remarks
   * The protocol type. Valid values:
   * 
   * *   HttpPort
   * *   HttpsPort
   * *   TcpPort
   * 
   * @example
   * HttpPort
   */
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      port: 'Port',
      protocol: 'Protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      port: 'number',
      protocol: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

