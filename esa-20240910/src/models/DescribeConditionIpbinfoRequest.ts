// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeConditionIPBInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration ID. Valid values:
   * - condition_region_config_cn: provides a mapping list of region Chinese names and their corresponding codes.
   * - condition_region_config_en: provides a mapping list of region English names and their corresponding codes.
   * - condition_isp_config_cn: provides a mapping list of ISP Chinese names and their corresponding codes.
   * - condition_isp_config_en: provides a mapping list of ISP English names and their corresponding codes.
   * - condition_country_config_cn: provides a mapping list of country Chinese names and their corresponding codes.
   * - condition_country_config_en: provides a mapping list of country English names and their corresponding codes.
   * 
   * This parameter is required.
   * 
   * @example
   * condition_region_config_cn
   */
  dataId?: string;
  static names(): { [key: string]: string } {
    return {
      dataId: 'DataId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

