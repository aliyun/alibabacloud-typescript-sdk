// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCloudGtmMonitorTemplateRequestIspCityNodes extends $dara.Model {
  /**
   * @remarks
   * The city code of the health check node.
   * 
   * @example
   * 503
   */
  cityCode?: string;
  /**
   * @remarks
   * The Internet service provider (ISP) code of the health check node.
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

