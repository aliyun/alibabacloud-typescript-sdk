// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DiagnoseVpnConnectionsResponseBodyVpnConnections extends $dara.Model {
  /**
   * @remarks
   * The cause of the error.
   * 
   * @example
   * Phase1 negotiation timeout
   */
  failedReason?: string;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * Phase1NegotiationTimeout
   */
  failedReasonCode?: string;
  /**
   * @remarks
   * The timestamp when the current error occurred on the IPsec-VPN connection. Unit: milliseconds.
   * 
   * The timestamp follows the UNIX timestamp format, which indicates the total duration from 00:00:00 on January 1, 1970 (UTC) to the time when the current error occurred on the IPsec-VPN connection.
   * 
   * @example
   * 1673581161000
   */
  failedTime?: number;
  /**
   * @remarks
   * The parameter values configured on the IPsec-VPN connection when the parameter values configured on the IPsec-VPN connection and the peer gateway device do not match.
   * 
   * @example
   * SHA256
   */
  mismatchLocalParam?: string;
  /**
   * @remarks
   * The parameter values configured on the peer gateway device when the parameter values configured on the IPsec-VPN connection and the peer gateway device do not match.
   * 
   * @example
   * SHA
   */
  mismatchRemoteParam?: string;
  /**
   * @remarks
   * The severity level of the current error. Valid values:
   * 
   * - **Critical**: Critical. Troubleshoot and resolve the issue as soon as possible.
   * - **Warn**: Warning. Troubleshoot and resolve the issue promptly.
   * - **Normal**: Normal.
   * 
   * @example
   * Warn
   */
  severity?: string;
  /**
   * @remarks
   * The log information related to the current error.
   * 
   * @example
   * 2023-01-13 11:39:21 vco-bp1spxu8hlcvpd7ry**** [PROTO_ERR]: ikev1.c:1433:isakmp_ph1resend(): phase1 negotiation failed due to time up. [{remote id:4}{ph1: 172.16.0.88[500] <=> 192.168.0.206[500], 172.16.0.88 <=> 192.168.0.206}]
   */
  sourceLog?: string;
  /**
   * @remarks
   * The ID of the tunnel.
   * 
   * @example
   * tun-64n1sr9dig64k6****
   */
  tunnelId?: string;
  /**
   * @remarks
   * The ID of the IPsec-VPN connection.
   * 
   * @example
   * vco-bp1spxu8hlcvpd7ry****
   */
  vpnConnectionId?: string;
  static names(): { [key: string]: string } {
    return {
      failedReason: 'FailedReason',
      failedReasonCode: 'FailedReasonCode',
      failedTime: 'FailedTime',
      mismatchLocalParam: 'MismatchLocalParam',
      mismatchRemoteParam: 'MismatchRemoteParam',
      severity: 'Severity',
      sourceLog: 'SourceLog',
      tunnelId: 'TunnelId',
      vpnConnectionId: 'VpnConnectionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedReason: 'string',
      failedReasonCode: 'string',
      failedTime: 'number',
      mismatchLocalParam: 'string',
      mismatchRemoteParam: 'string',
      severity: 'string',
      sourceLog: 'string',
      tunnelId: 'string',
      vpnConnectionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DiagnoseVpnConnectionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page in a paging query.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B8094E1E-935B-1397-96A8-4F87A5D1BF29
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  /**
   * @remarks
   * The diagnostic information about the IPsec-VPN connections.
   */
  vpnConnections?: DiagnoseVpnConnectionsResponseBodyVpnConnections[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      vpnConnections: 'VpnConnections',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      vpnConnections: { 'type': 'array', 'itemType': DiagnoseVpnConnectionsResponseBodyVpnConnections },
    };
  }

  validate() {
    if(Array.isArray(this.vpnConnections)) {
      $dara.Model.validateArray(this.vpnConnections);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

