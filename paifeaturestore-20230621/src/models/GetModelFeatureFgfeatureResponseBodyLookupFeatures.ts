// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetModelFeatureFGFeatureResponseBodyLookupFeatures extends $dara.Model {
  /**
   * @example
   * -1024
   */
  defaultValue?: string;
  /**
   * @example
   * item_id
   */
  featureName?: string;
  /**
   * @example
   * Item
   */
  keyFeatureDomain?: string;
  /**
   * @example
   * 1
   */
  keyFeatureName?: string;
  /**
   * @example
   * User
   */
  mapFeatureDomain?: string;
  /**
   * @example
   * item_id
   */
  mapFeatureName?: string;
  /**
   * @example
   * STRING
   */
  valueType?: string;
  static names(): { [key: string]: string } {
    return {
      defaultValue: 'DefaultValue',
      featureName: 'FeatureName',
      keyFeatureDomain: 'KeyFeatureDomain',
      keyFeatureName: 'KeyFeatureName',
      mapFeatureDomain: 'MapFeatureDomain',
      mapFeatureName: 'MapFeatureName',
      valueType: 'ValueType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultValue: 'string',
      featureName: 'string',
      keyFeatureDomain: 'string',
      keyFeatureName: 'string',
      mapFeatureDomain: 'string',
      mapFeatureName: 'string',
      valueType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

