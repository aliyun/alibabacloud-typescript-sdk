// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVpnGatewayDiagnoseResultResponseBodyDiagnoseResult extends $dara.Model {
  /**
   * @remarks
   * The diagnostic item.
   * 
   * - **RouteEntryConflict**: route conflict.
   * - **VpnRouteQuota**: VPN gateway destination route quota.
   * - **VpnIPsecQuota**: VPN gateway IPsec-VPN connection quota.
   * - **VpnPbrRouteQuota**: VPN gateway policy-based route quota.
   * - **VcoConfigConsistency**: IPsec configuration consistency.
   * - **VcoUserInternetIpConnectivity**: public connectivity of the customer gateway.
   * - **VcoPrivateConnectivity**: private network connectivity.
   * 
   * For more information about each diagnostic item, see [One-click diagnostics background information](https://help.aliyun.com/document_detail/190330.html).
   * 
   * @example
   * RouteEntryConflict
   */
  diagnoseName?: string;
  /**
   * @remarks
   * The diagnostic result of the diagnostic item.
   * 
   * The operation returns different information for each diagnostic item:
   * 
   * - **RouteEntryConflict**: The system returns information about the route conflict.
   * - **VpnRouteQuota**:
   *     - **quotaName**: the ID of the destination route quota.
   *     - **quantity**: the number of destination routes that the current VPN gateway instance supports.
   *     - **used**: the number of destination routes that have been created for the current VPN gateway instance.
   * - **VpnIPsecQuota**:
   *     - **quotaName**: the ID of the IPsec-VPN connection quota.
   *     - **quantity**: the number of IPsec-VPN connections that the current VPN gateway instance supports.
   *     - **used**: the number of IPsec-VPN connections that have been created for the current VPN gateway instance.
   * - **VpnPbrRouteQuota**:
   *     - **quotaName**: the ID of the policy-based route quota.
   *     - **quantity**: the number of policy-based routes that the current VPN gateway instance supports.
   *     - **used**: the number of policy-based routes that have been created for the current VPN gateway instance.
   * - **VcoConfigConsistency**:
   *     - **vcoLackConf**: the system cannot obtain the configuration of the peer end of the IPsec-VPN connection.
   *     - **vcoRunningConf**: the configuration that has been added to the peer end of the IPsec-VPN connection.
   *     - **vcoDiffConf**: the list of configurations that are inconsistent between the local end and the peer end of the IPsec-VPN connection.
   *     - **vcoConf**: the configuration that has been added to the local end of the IPsec-VPN connection.
   * - **VcoUserInternetIpConnectivity**:
   *     - **targetIp**: the public IP address of the customer gateway.
   *     - **rtt**: the latency when the system accesses the public IP address of the customer gateway. Unit: ms.
   *     - **lossRate**: the packet loss rate when the system accesses the public IP address of the customer gateway.
   * - **VcoPrivateConnectivity**:
   *     - **targetIp**: the source IP address.
   *     - **srcIp**: the destination IP address.
   *     - **rtt**: the latency when the source IP address accesses the destination IP address. Unit: ms.
   *     - **lossRate**: the packet loss rate when the source IP address accesses the destination IP address.
   * 
   * @example
   * {\\"targetIp\\":\\"192.168.0.1\\",\\"srcIp\\":\\"192.168.1.1\\",\\"rtt\\":-1.0,\\"lossRate\\":100.0}
   */
  diagnoseResultDescription?: string;
  /**
   * @remarks
   * The diagnostic result level of the diagnostic item.
   * 
   * - **normal**: Normal.
   * - **warning**: Warning.
   * - **error**: Error.
   * 
   * For more information about the diagnostic result levels of each diagnostic item, see [One-click diagnostics background information](https://help.aliyun.com/document_detail/190330.html).
   * 
   * @example
   * normal
   */
  diagnoseResultLevel?: string;
  static names(): { [key: string]: string } {
    return {
      diagnoseName: 'DiagnoseName',
      diagnoseResultDescription: 'DiagnoseResultDescription',
      diagnoseResultLevel: 'DiagnoseResultLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diagnoseName: 'string',
      diagnoseResultDescription: 'string',
      diagnoseResultLevel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVpnGatewayDiagnoseResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time when the diagnostic started.
   * 
   * The time is displayed in UTC in the `YYYY-MM-DDThh:mm:ssZ` format.
   * 
   * @example
   * 2022-12-15T05:28:57Z
   */
  beginTime?: string;
  /**
   * @remarks
   * The diagnostic ID.
   * 
   * @example
   * vpndgn-uf6sgneym02lxyuv4****
   */
  diagnoseId?: string;
  /**
   * @remarks
   * The list of diagnostic items.
   */
  diagnoseResult?: GetVpnGatewayDiagnoseResultResponseBodyDiagnoseResult[];
  /**
   * @remarks
   * The time when the diagnostic ended.
   * 
   * The time is displayed in UTC in the `YYYY-MM-DDThh:mm:ssZ` format.
   * 
   * @example
   * 2022-12-15T05:29:08Z
   */
  finishTime?: string;
  /**
   * @remarks
   * The number of diagnostic items that have been completed.
   * 
   * @example
   * 7
   */
  finishedCount?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 312C4D5A-6563-5FC6-8C6E-A43A5A316FEB
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the diagnosed resource.
   * 
   * @example
   * vco-uf6huqsu63azl7mdp****
   */
  resourceInstanceId?: string;
  /**
   * @remarks
   * The type of the diagnosed resource.
   * 
   * Valid values: **IPsec**, which indicates an IPsec-VPN connection.
   * 
   * @example
   * IPsec
   */
  resourceType?: string;
  /**
   * @remarks
   * The total number of diagnostic items.
   * 
   * @example
   * 7
   */
  totalCount?: number;
  /**
   * @remarks
   * The VPN gateway instance ID.
   * 
   * @example
   * vpn-uf6fzwp0ck3frwtbk****
   */
  vpnGatewayId?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      diagnoseId: 'DiagnoseId',
      diagnoseResult: 'DiagnoseResult',
      finishTime: 'FinishTime',
      finishedCount: 'FinishedCount',
      requestId: 'RequestId',
      resourceInstanceId: 'ResourceInstanceId',
      resourceType: 'ResourceType',
      totalCount: 'TotalCount',
      vpnGatewayId: 'VpnGatewayId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'string',
      diagnoseId: 'string',
      diagnoseResult: { 'type': 'array', 'itemType': GetVpnGatewayDiagnoseResultResponseBodyDiagnoseResult },
      finishTime: 'string',
      finishedCount: 'number',
      requestId: 'string',
      resourceInstanceId: 'string',
      resourceType: 'string',
      totalCount: 'number',
      vpnGatewayId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.diagnoseResult)) {
      $dara.Model.validateArray(this.diagnoseResult);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

