// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataLimitDetailRequest extends $dara.Model {
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
   * The unique ID of the data asset that you want to query.
   * 
   * > You can call the [DescribeDataLimits](~~DescribeDataLimits~~) operation to query the ID of the data asset.
   * 
   * This parameter is required.
   * 
   * @example
   * 12300
   */
  id?: number;
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh**: Simplified Chinese.
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The network type of the data asset that you want to query. Valid values:
   * 
   * *   **1**: virtual private cloud (VPC)
   * *   **2**: classic network
   * 
   * @example
   * 1
   */
  networkType?: number;
  static names(): { [key: string]: string } {
    return {
      featureType: 'FeatureType',
      id: 'Id',
      lang: 'Lang',
      networkType: 'NetworkType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      featureType: 'number',
      id: 'number',
      lang: 'string',
      networkType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

