// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisableUserConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The code of the configuration item in the general anomaly alert configuration module. Call the [DescribeConfigs](~~DescribeConfigs~~) operation to obtain the code.
   * 
   * @example
   * access_failed_cnt
   */
  code?: string;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * 2
   */
  featureType?: number;
  /**
   * @remarks
   * The language of the request and response. Valid values:
   * 
   * - **zh_cn**: Chinese. This is the default value.
   * 
   * - **en_us**: English.
   * 
   * @example
   * zh_cn
   */
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      featureType: 'FeatureType',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      featureType: 'number',
      lang: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

