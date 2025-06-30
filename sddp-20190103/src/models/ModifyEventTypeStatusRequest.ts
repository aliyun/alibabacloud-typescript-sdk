// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyEventTypeStatusRequest extends $dara.Model {
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
   * The language of the content within the request and response. Valid values: **zh** and **en**. The value zh indicates Chinese, and the value en indicates English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The ID of the anomalous event subtype. Separate multiple IDs with commas (,).
   * 
   * > You can call the **DescribeEventTypes** operation to query the ID of anomalous event subtype.
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

