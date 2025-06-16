// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpnGatewaysResponseBodyVpnGatewaysVpnGatewayReservationData extends $dara.Model {
  /**
   * @remarks
   * If the value of ReservationOrderType is **TEMP_UPGRADE**, this parameter indicates the time when the temporary upgrade expires.
   * 
   * If the value of ReservationOrderType is **RENEWCHANGE** or **RENEW**, this parameter indicates the time when the renewal or renewal with a specification change takes effect.
   * 
   * @example
   * 2021-07-20T16:00:00Z
   */
  reservationEndTime?: string;
  /**
   * @remarks
   * The IPsec-VPN status of the pending order. Valid values:
   * 
   * *   **enable**
   * *   **disable**
   * 
   * @example
   * enable
   */
  reservationIpsec?: string;
  /**
   * @remarks
   * The maximum number of concurrent SSL-VPN connections of the pending order.
   * 
   * @example
   * 5
   */
  reservationMaxConnections?: number;
  /**
   * @remarks
   * The type of the order that has not taken effect. Valid values:
   * 
   * *   **RENEWCHANGE**: renewal with upgrade or downgrade
   * *   **TEMP_UPGRADE**: temporary upgrade
   * *   **RENEW**: renewal
   * 
   * @example
   * TEMP_UPGRADE
   */
  reservationOrderType?: string;
  /**
   * @remarks
   * The bandwidth of the pending order. Unit: Mbit/s.
   * 
   * @example
   * 5
   */
  reservationSpec?: string;
  /**
   * @remarks
   * The SSL-VPN status of the pending order. Valid values:
   * 
   * *   **enable**
   * *   **disable**
   * 
   * @example
   * enable
   */
  reservationSsl?: string;
  /**
   * @remarks
   * The status of the pending order.
   * 
   * *   **1**: indicates that the order for renewal or the order for renewal with a specification change has not taken effect.
   * *   **2**: indicates that the order of the temporary upgrade has taken effect. After the temporary upgrade expires, the system restores the VPN gateway to its previous specifications. In this case, the values of **ReservationIpsec**, **ReservationMaxConnections**, **ReservationSpec**, and **ReservationSsl** indicate the previous specifications of the VPN gateway.
   * 
   * @example
   * 1
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      reservationEndTime: 'ReservationEndTime',
      reservationIpsec: 'ReservationIpsec',
      reservationMaxConnections: 'ReservationMaxConnections',
      reservationOrderType: 'ReservationOrderType',
      reservationSpec: 'ReservationSpec',
      reservationSsl: 'ReservationSsl',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reservationEndTime: 'string',
      reservationIpsec: 'string',
      reservationMaxConnections: 'number',
      reservationOrderType: 'string',
      reservationSpec: 'string',
      reservationSsl: 'string',
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

