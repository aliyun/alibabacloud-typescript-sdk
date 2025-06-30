// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisableUserConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The code of the configuration item. You can call the [DescribeConfigs](~~DescribeConfigs~~) operation to obtain the code of the configuration item.
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
   * 1
   */
  featureType?: number;
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh_cn**: Chinese (default)
   * *   **en_us**: English
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

