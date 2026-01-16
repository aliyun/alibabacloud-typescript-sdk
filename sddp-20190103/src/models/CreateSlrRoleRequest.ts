// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSlrRoleRequest extends $dara.Model {
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
   * The language of the content within the request and response. Default value: **zh_cn**. Valid values:
   * 
   * *   **zh_cn**: Simplified Chinese
   * *   **en_us**: English
   * 
   * @example
   * zh_cn
   */
  lang?: string;
  serviceName?: string;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * 39.170.XX.XX
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      featureType: 'FeatureType',
      lang: 'Lang',
      serviceName: 'ServiceName',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      featureType: 'number',
      lang: 'string',
      serviceName: 'string',
      sourceIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

