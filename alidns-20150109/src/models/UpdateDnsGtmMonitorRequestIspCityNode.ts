// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDnsGtmMonitorRequestIspCityNode extends $dara.Model {
  /**
   * @remarks
   * The code of the city where the monitored node is deployed.
   * 
   * @example
   * 123
   */
  cityCode?: string;
  /**
   * @remarks
   * The code of the Internet service provider (ISP) to which the monitored node belongs.
   * 
   * @example
   * 123
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

