// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddDnsGtmAddressPoolRequestIspCityNode extends $dara.Model {
  /**
   * @remarks
   * The city code.
   * 
   * Specify the parameter according to the value of CityCode returned by the DescribeGtmMonitorAvailableConfig operation.
   * 
   * @example
   * 503
   */
  cityCode?: string;
  /**
   * @remarks
   * *   The Internet service provider (ISP) node. Specify the parameter according to the value of IspCode returned by the DescribeGtmMonitorAvailableConfig operation.
   * *   If the returned value of GroupType for the DescribeGtmMonitorAvailableConfig operation is BGP or Overseas, IspCode is not required and is set to 465 by default.
   * *   If the returned value of GroupType for the DescribeGtmMonitorAvailableConfig operation is not BGP or Overseas, IspCode is required. When IspCode is specified, CityCode is required.
   * 
   * @example
   * 465
   */
  ispCode?: string;
  static names(): { [key: string]: string } {
    return {
      cityCode: 'CityCode',
      ispCode: 'IspCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cityCode: 'string',
      ispCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

