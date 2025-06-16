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
   * The timestamp when the current error occurred on the IPsec-VPN connection. Unit: millisecond.
   * 
   * This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1673581161000
   */
  failedTime?: number;
  /**
   * @remarks
   * If the values of the parameters configured for the IPsec-VPN connection and the peer gateway device do not match, this parameter indicates the value of the parameters configured for the IPsec-VPN connection.
   * 
   * @example
   * SHA256
   */
  mismatchLocalParam?: string;
  /**
   * @remarks
   * If the parameter values configured for the IPsec-VPN connection and the peer gateway device do not match, this parameter indicates the value of the parameter configured for the peer gateway device.
   * 
   * @example
   * SHA
   */
  mismatchRemoteParam?: string;
  /**
   * @remarks
   * The error level. Valid values:
   * 
   * *   **Critical**
   * *   **Warn**
   * *   **Normal**
   * 
   * @example
   * Warn
   */
  severity?: string;
  /**
   * @remarks
   * The log information about the error.
   * 
   * @example
   * 2023-01-13 11:39:21 vco-bp1spxu8hlcvpd7ry**** [PROTO_ERR]: ikev1.c:1433:isakmp_ph1resend(): phase1 negotiation failed due to time up. [{remote id:4}{ph1: 172.16.0.88[500] <=> 192.168.0.206[500], 172.16.0.88 <=> 192.168.0.206}]
   */
  sourceLog?: string;
  /**
   * @remarks
   * The tunnel ID.
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

