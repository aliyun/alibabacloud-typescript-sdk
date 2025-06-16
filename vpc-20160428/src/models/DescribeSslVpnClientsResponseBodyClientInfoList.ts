// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSslVpnClientsResponseBodyClientInfoList extends $dara.Model {
  /**
   * @remarks
   * The SSL client certificate used by the client.
   * 
   * >  If the client uses two-factor authentication to establish an SSL-VPN connection to Alibaba Cloud, the return value is the username of the client.
   * 
   * @example
   * CN=vsc-gw8gkh6gtilf1whgc****
   */
  commonName?: string;
  /**
   * @remarks
   * The timestamp that indicates when the client connected to Alibaba Cloud through an SSL-VPN connection. Unit: milliseconds.
   * 
   * This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1670985008000
   */
  connectedTime?: number;
  /**
   * @remarks
   * The actual public IP address used by the client when the client established an SSL-VPN connection to Alibaba Cloud.
   * 
   * @example
   * 8.XX.XX.15
   */
  ip?: string;
  /**
   * @remarks
   * The port used by the client when the client established an SSL-VPN connection to Alibaba Cloud.
   * 
   * @example
   * 4****
   */
  port?: string;
  /**
   * @remarks
   * The private IP address allocated to the client by the VPN gateway when the client established an SSL-VPN connection to Alibaba Cloud.
   * 
   * @example
   * 10.10.10.10
   */
  privateIp?: string;
  /**
   * @remarks
   * The amount of data transferred from the client to the VPN gateway through the SSL-VPN connection. Unit: bytes.
   * 
   * @example
   * 60782
   */
  receiveBytes?: number;
  /**
   * @remarks
   * The amount of data transferred from the VPN gateway to the client through the SSL-VPN connection. Unit: bytes.
   * 
   * @example
   * 57144
   */
  sendBytes?: number;
  /**
   * @remarks
   * The status of the SSL-VPN connection.
   * 
   * The value is set to **online**, which indicates that the client has connected to Alibaba Cloud through an SSL-VPN connection.
   * 
   * @example
   * online
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      commonName: 'CommonName',
      connectedTime: 'ConnectedTime',
      ip: 'Ip',
      port: 'Port',
      privateIp: 'PrivateIp',
      receiveBytes: 'ReceiveBytes',
      sendBytes: 'SendBytes',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonName: 'string',
      connectedTime: 'number',
      ip: 'string',
      port: 'string',
      privateIp: 'string',
      receiveBytes: 'number',
      sendBytes: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

