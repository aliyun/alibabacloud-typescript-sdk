// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateGtmMonitorRequestIspCityNode extends $dara.Model {
  /**
   * @remarks
   * The code of the city where the monitored node is deployed.
   * 
   * @example
   * 572
   */
  cityCode?: string;
  /**
   * @remarks
   * *   The code of the Internet service provider (ISP) to which the monitored node belongs. For more information about specific values, see the response parameters of DescribeGtmMonitorAvailableConfig.
   * *   If the value of the GroupType parameter is BGP or OVERSEAS, IspCode is optional. The default value is 465.
   * *   If the value of the GroupType parameter is not BGP or OVERSEAS, IspCode is required and is used together with CityCode.
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

