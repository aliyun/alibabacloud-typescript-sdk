// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateModelFeatureFGFeatureRequestLookupFeatures extends $dara.Model {
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
   * item_id
   */
  featureName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Item
   */
  keyFeatureDomain?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  keyFeatureName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * User
   */
  mapFeatureDomain?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * item_id
   */
  mapFeatureName?: string;
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

