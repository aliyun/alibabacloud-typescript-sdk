// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyEventTypeStatusRequest extends $dara.Model {
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
   * The language of the request and response. Valid values are **zh** for Chinese and **en** for English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The unique IDs of the anomalous activity subtypes. Separate multiple IDs with commas.
   * 
   * > To enable SDDP to detect anomalous activities for subtypes, provide the unique IDs of the anomalous activity subtypes. Call the **DescribeEventTypes** operation to obtain the IDs.
   * 
   * @example
   * 020008
   */
  subTypeIds?: string;
  static names(): { [key: string]: string } {
    return {
      featureType: 'FeatureType',
      lang: 'Lang',
      subTypeIds: 'SubTypeIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      featureType: 'number',
      lang: 'string',
      subTypeIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

