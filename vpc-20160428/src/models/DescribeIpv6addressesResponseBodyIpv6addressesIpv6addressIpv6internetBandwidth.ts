// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIpv6AddressesResponseBodyIpv6AddressesIpv6AddressIpv6InternetBandwidth extends $dara.Model {
  /**
   * @remarks
   * The dedicated Internet bandwidth of the IPv6 address. Unit: Mbit/s.
   * 
   * @example
   * 5
   */
  bandwidth?: number;
  /**
   * @remarks
   * The status of the Internet bandwidth of the IPv6 address. Valid values:
   * 
   * *   **Normal**
   * *   **FinancialLocked**
   * *   **SecurityLocked**
   * 
   * @example
   * Normal
   */
  businessStatus?: string;
  /**
   * @remarks
   * Indicates whether renewal data is included. Valid values:
   * 
   * *   **false**
   * *   **true** **true** is returned only when **IncludeReservationData** is set to **true** and some orders have not taken effect.
   * 
   * @example
   * false
   */
  hasReservationData?: boolean;
  /**
   * @remarks
   * The billing method of the Internet bandwidth of the IPv6 address. Valid values:
   * 
   * Only **PostPaid** may be returned, which indicates the pay-as-you-go billing method.
   * 
   * @example
   * PostPaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The billing method of the Internet bandwidth of the IPv6 address. Valid values:
   * 
   * *   **PayByTraffic**
   * *   **PayByBandwidth**
   * 
   * @example
   * PayByTraffic
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The Internet bandwidth ID of the IPv6 address.
   * 
   * @example
   * ipv6bw-hp3b35oq1fj50kbv****
   */
  ipv6InternetBandwidthId?: string;
  /**
   * @remarks
   * The time when the renewal takes effect. The time is displayed in the `YYYY-MM-DDThh:mm:ssZ` format.
   * 
   * @example
   * 2021-05-23T16:00:00Z
   */
  reservationActiveTime?: string;
  /**
   * @remarks
   * The maximum bandwidth after the renewal takes effect. Unit: Mbit/s.
   * 
   * @example
   * 12
   */
  reservationBandwidth?: number;
  /**
   * @remarks
   * The metering method that is used after the renewal takes effect.
   * 
   * *   **PayByTraffic**
   * *   **PayByBandwidth**
   * 
   * @example
   * PayByTraffic
   */
  reservationInternetChargeType?: string;
  /**
   * @remarks
   * The type of the renewal order. Only **RENEW** may be returned, which indicates that the order is placed for service renewal.
   * 
   * @example
   * RENEW
   */
  reservationOrderType?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      businessStatus: 'BusinessStatus',
      hasReservationData: 'HasReservationData',
      instanceChargeType: 'InstanceChargeType',
      internetChargeType: 'InternetChargeType',
      ipv6InternetBandwidthId: 'Ipv6InternetBandwidthId',
      reservationActiveTime: 'ReservationActiveTime',
      reservationBandwidth: 'ReservationBandwidth',
      reservationInternetChargeType: 'ReservationInternetChargeType',
      reservationOrderType: 'ReservationOrderType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      businessStatus: 'string',
      hasReservationData: 'boolean',
      instanceChargeType: 'string',
      internetChargeType: 'string',
      ipv6InternetBandwidthId: 'string',
      reservationActiveTime: 'string',
      reservationBandwidth: 'number',
      reservationInternetChargeType: 'string',
      reservationOrderType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

