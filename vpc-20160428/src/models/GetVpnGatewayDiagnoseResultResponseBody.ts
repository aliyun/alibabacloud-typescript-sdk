// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetVpnGatewayDiagnoseResultResponseBodyDiagnoseResult } from "./GetVpnGatewayDiagnoseResultResponseBodyDiagnoseResult";


export class GetVpnGatewayDiagnoseResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time when the diagnostic started.
   * 
   * The time follows the ISO8601 standard in the `yyyy-MM-ddTHH:mm:ssZ` format. The time is displayed in UTC.
   * 
   * @example
   * 2022-12-15T05:28:57Z
   */
  beginTime?: string;
  /**
   * @remarks
   * The ID of the diagnostic.
   * 
   * @example
   * vpndgn-uf6sgneym02lxyuv4****
   */
  diagnoseId?: string;
  /**
   * @remarks
   * The information about the diagnostic items.
   */
  diagnoseResult?: GetVpnGatewayDiagnoseResultResponseBodyDiagnoseResult[];
  /**
   * @remarks
   * The timestamp when the system finishes diagnosing the item.
   * 
   * The time follows the ISO8601 standard in the `yyyy-MM-ddTHH:mm:ssZ` format. The time is displayed in UTC.
   * 
   * @example
   * 2022-12-15T05:29:08Z
   */
  finishTime?: string;
  /**
   * @remarks
   * The number of diagnostic items that have been diagnosed.
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
   * The ID of the resource that is diagnosed.
   * 
   * @example
   * vco-uf6huqsu63azl7mdp****
   */
  resourceInstanceId?: string;
  /**
   * @remarks
   * The type of the resource.
   * 
   * The value is set to **IPsec**, which indicates an IPsec-VPN connection.
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
   * The ID of the VPN gateway.
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

