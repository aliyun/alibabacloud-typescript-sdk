// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSslVpnClientsResponseBodyClientInfoList extends $dara.Model {
  /**
   * @remarks
   * The SSL client certificate used by the client to establish the SSL-VPN connection to Alibaba Cloud.
   * 
   * > If the client uses two-factor identity authentication to establish the SSL-VPN connection to Alibaba Cloud, the value of this parameter is the username of the client.
   * 
   * @example
   * CN=vsc-gw8gkh6gtilf1whgc****
   */
  commonName?: string;
  /**
   * @remarks
   * The timestamp when the client established the SSL-VPN connection to Alibaba Cloud. Unit: milliseconds.
   * 
   * The timestamp is in the UNIX format and represents the total number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC to the time when the SSL-VPN connection was established.
   * 
   * @example
   * 1670985008000
   */
  connectedTime?: number;
  /**
   * @remarks
   * The public IP address that the client used to establish the SSL-VPN connection to Alibaba Cloud.
   * 
   * @example
   * 8.XX.XX.15
   */
  ip?: string;
  /**
   * @remarks
   * The port number that the client used to establish the SSL-VPN connection to Alibaba Cloud.
   * 
   * @example
   * 4****
   */
  port?: string;
  /**
   * @remarks
   * The private IP address that the VPN gateway assigned to the client when the client established an SSL-VPN connection to Alibaba Cloud.
   * 
   * @example
   * 10.10.10.10
   */
  privateIp?: string;
  /**
   * @remarks
   * The traffic that the VPN gateway received from the client over the SSL-VPN connection. Unit: bytes.
   * 
   * @example
   * 60782
   */
  receiveBytes?: number;
  /**
   * @remarks
   * The traffic that the VPN gateway sent to the client over the SSL-VPN connection. Unit: bytes.
   * 
   * @example
   * 57144
   */
  sendBytes?: number;
  /**
   * @remarks
   * The status of the SSL-VPN connection.
   * 
   * Valid values: **online**, which indicates that the client has successfully established an SSL-VPN connection to Alibaba Cloud.
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

export class DescribeSslVpnClientsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of client information.
   */
  clientInfoList?: DescribeSslVpnClientsResponseBodyClientInfoList[];
  /**
   * @remarks
   * The page number of the list.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The maximum number of entries per page in a paged query.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the VPN gateway instance.
   * 
   * @example
   * eu-central-1
   */
  regionId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 885E117D-06A9-38A3-8DD2-40BDAC429FFC
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries in the list.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  /**
   * @remarks
   * The VPN gateway instance ID.
   * 
   * @example
   * vpn-gw8gfb947ctddabja****
   */
  vpnGatewayId?: string;
  static names(): { [key: string]: string } {
    return {
      clientInfoList: 'ClientInfoList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      vpnGatewayId: 'VpnGatewayId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientInfoList: { 'type': 'array', 'itemType': DescribeSslVpnClientsResponseBodyClientInfoList },
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      requestId: 'string',
      totalCount: 'number',
      vpnGatewayId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.clientInfoList)) {
      $dara.Model.validateArray(this.clientInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

