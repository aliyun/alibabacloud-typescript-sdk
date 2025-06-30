// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserStatusRequest extends $dara.Model {
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
   * *   **zh_cn**: Simplified Chinese (default)
   * *   **en_us**: English
   * 
   * @example
   * zh_cn
   */
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      featureType: 'FeatureType',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

