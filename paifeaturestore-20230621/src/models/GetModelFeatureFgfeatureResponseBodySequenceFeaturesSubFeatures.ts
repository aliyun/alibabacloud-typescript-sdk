// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetModelFeatureFGFeatureResponseBodySequenceFeaturesSubFeatures extends $dara.Model {
  /**
   * @example
   * -1024
   */
  defaultValue?: string;
  /**
   * @example
   * User
   */
  featureDomain?: string;
  /**
   * @example
   * item_id
   */
  featureName?: string;
  /**
   * @example
   * IdFeature
   */
  featureType?: string;
  /**
   * @example
   * item_id
   */
  inputFeatureName?: string;
  /**
   * @example
   * STRING
   */
  valueType?: string;
  static names(): { [key: string]: string } {
    return {
      defaultValue: 'DefaultValue',
      featureDomain: 'FeatureDomain',
      featureName: 'FeatureName',
      featureType: 'FeatureType',
      inputFeatureName: 'InputFeatureName',
      valueType: 'ValueType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultValue: 'string',
      featureDomain: 'string',
      featureName: 'string',
      featureType: 'string',
      inputFeatureName: 'string',
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

