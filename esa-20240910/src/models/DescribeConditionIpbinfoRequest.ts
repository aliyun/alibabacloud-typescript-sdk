// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeConditionIPBInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration ID. Valid values:
   * - condition_region_config_cn: Provides a mapping list of Chinese region names and their corresponding codes.
   * - condition_region_config_en: Provides a mapping list of English region names and their corresponding codes.
   * - condition_isp_config_cn: Provides a mapping list of Chinese ISP names and their corresponding codes.
   * - condition_isp_config_en: Provides a mapping list of English ISP names and their corresponding codes.
   * - condition_country_config_cn: Provides a mapping list of Chinese country names and their corresponding codes.
   * - condition_country_config_en: Provides a mapping list of English country names and their corresponding codes.
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

