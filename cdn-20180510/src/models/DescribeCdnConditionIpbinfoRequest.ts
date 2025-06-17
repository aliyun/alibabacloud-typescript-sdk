// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCdnConditionIPBInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration ID. Valid values:
   * 
   * *   condition_region_config_cn
   * *   condition_region_config_en
   * *   condition_isp_config_cn
   * *   condition_isp_config_en
   * *   condition_country_config_cn
   * *   condition_country_config_en
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

