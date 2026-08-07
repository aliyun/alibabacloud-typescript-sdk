// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDataLimitRequest extends $dara.Model {
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
   * The unique ID of the data asset, such as an instance, database, or bucket.
   * 
   * Call the DescribeDataLimits operation to obtain the ID from the Id parameter in the response.
   * 
   * This parameter is required.
   * 
   * @example
   * 12033
   */
  id?: number;
  /**
   * @remarks
   * The language of the request and response. Default value: **zh_cn**. Valid values:
   * - **zh_cn**: Chinese.
   * - **en_us**: English.
   * 
   * @example
   * zh_cn
   */
  lang?: string;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * 106.11.XX.XX
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      featureType: 'FeatureType',
      id: 'Id',
      lang: 'Lang',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      featureType: 'number',
      id: 'number',
      lang: 'string',
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

