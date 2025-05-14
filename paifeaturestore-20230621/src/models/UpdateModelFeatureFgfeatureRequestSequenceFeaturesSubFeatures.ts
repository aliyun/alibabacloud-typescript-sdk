// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateModelFeatureFGFeatureRequestSequenceFeaturesSubFeatures extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * -1024
   */
  defaultValue?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * User
   */
  featureDomain?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * item_id
   */
  featureName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * RawFeature
   */
  featureType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * item_id
   */
  inputFeatureName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
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

