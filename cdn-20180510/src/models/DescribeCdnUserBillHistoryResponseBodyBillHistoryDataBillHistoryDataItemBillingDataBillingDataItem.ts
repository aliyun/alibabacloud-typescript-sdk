// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCdnUserBillHistoryResponseBodyBillHistoryDataBillHistoryDataItemBillingDataBillingDataItem extends $dara.Model {
  /**
   * @remarks
   * The bandwidth. Unit: bit/s.
   * 
   * @example
   * 4041
   */
  bandwidth?: number;
  /**
   * @remarks
   * The billable region. Valid values:
   * 
   * *   **CN**: Chinese mainland
   * *   **OverSeas**: outside the Chinese mainland
   * *   **AP1**: Asia Pacific 1
   * *   **AP2**: Asia Pacific 2
   * *   **AP3**: Asia Pacific 3
   * *   **NA**: North America
   * *   **SA**: South America
   * *   **EU**: Europe
   * *   **MEAA**: Middle East and Africa
   * 
   * @example
   * AP1
   */
  cdnRegion?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * *   **StaticHttp**: static HTTP requests
   * *   **DynamicHttp**: dynamic HTTP requests
   * *   **DynamicHttps**: dynamic HTTPS requests
   * 
   * @example
   * DynamicHttp
   */
  chargeType?: string;
  /**
   * @remarks
   * The number of requests.
   * 
   * @example
   * 203601
   */
  count?: number;
  /**
   * @remarks
   * The amount of network traffic. Unit: bytes.
   * 
   * @example
   * 24567
   */
  flow?: number;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      cdnRegion: 'CdnRegion',
      chargeType: 'ChargeType',
      count: 'Count',
      flow: 'Flow',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      cdnRegion: 'string',
      chargeType: 'string',
      count: 'number',
      flow: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

