// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetModelFeatureFGFeatureResponseBodyLookupFeatures extends $dara.Model {
  /**
   * @remarks
   * The default value.
   * 
   * @example
   * -1024
   */
  defaultValue?: string;
  /**
   * @remarks
   * The name of the generated feature.
   * 
   * @example
   * item_id
   */
  featureName?: string;
  /**
   * @remarks
   * The domain of the key feature.
   * 
   * - User: The user side.
   * 
   * - Item: The item side.
   * 
   * - Context: The context.
   * 
   * @example
   * Item
   */
  keyFeatureDomain?: string;
  /**
   * @remarks
   * The name of the key feature.
   * 
   * @example
   * 1
   */
  keyFeatureName?: string;
  /**
   * @remarks
   * The domain of the map feature.
   * 
   * - User: The user side.
   * 
   * - Item: The item side.
   * 
   * - Context: The context.
   * 
   * @example
   * User
   */
  mapFeatureDomain?: string;
  /**
   * @remarks
   * The name of the map feature.
   * 
   * @example
   * item_id
   */
  mapFeatureName?: string;
  /**
   * @remarks
   * The value type of the feature.
   * 
   * - INTEGER
   * 
   * - DOUBLE
   * 
   * - STRING
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

export class GetModelFeatureFGFeatureResponseBodyRawFeatures extends $dara.Model {
  /**
   * @remarks
   * The default value.
   * 
   * @example
   * -1024
   */
  defaultValue?: string;
  /**
   * @remarks
   * The domain of the original feature.
   * 
   * - User: The user side.
   * 
   * - Item: The item side.
   * 
   * - Context: The context.
   * 
   * @example
   * User
   */
  featureDomain?: string;
  /**
   * @remarks
   * The name of the generated feature.
   * 
   * @example
   * item_id
   */
  featureName?: string;
  /**
   * @remarks
   * The type of the raw FG feature.
   * 
   * - IdFeature: The primary key.
   * 
   * - RawFeature: The raw feature.
   * 
   * @example
   * IdFeature
   */
  featureType?: string;
  /**
   * @remarks
   * The name of the original feature.
   * 
   * @example
   * item_id
   */
  inputFeatureName?: string;
  /**
   * @remarks
   * The value type of the feature.
   * 
   * - INTEGER
   * 
   * - DOUBLE
   * 
   * - STRING
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

export class GetModelFeatureFGFeatureResponseBodySequenceFeaturesSubFeatures extends $dara.Model {
  /**
   * @remarks
   * The default value.
   * 
   * @example
   * -1024
   */
  defaultValue?: string;
  /**
   * @remarks
   * The domain of the original feature.
   * 
   * - User: The user side.
   * 
   * - Item: The item side.
   * 
   * - Context: The context.
   * 
   * @example
   * User
   */
  featureDomain?: string;
  /**
   * @remarks
   * The name of the generated feature.
   * 
   * @example
   * item_id
   */
  featureName?: string;
  /**
   * @remarks
   * The type of the FG feature.
   * 
   * - IdFeature: The primary key.
   * 
   * - RawFeature: The raw feature.
   * 
   * @example
   * IdFeature
   */
  featureType?: string;
  /**
   * @remarks
   * The name of the original feature.
   * 
   * @example
   * item_id
   */
  inputFeatureName?: string;
  /**
   * @remarks
   * The value type of the feature.
   * 
   * - INTEGER
   * 
   * - DOUBLE
   * 
   * - STRING
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

export class GetModelFeatureFGFeatureResponseBodySequenceFeatures extends $dara.Model {
  /**
   * @remarks
   * The separator for feature attributes.
   * 
   * @example
   * #
   */
  attributeDelim?: string;
  /**
   * @remarks
   * The name of the sequence feature.
   * 
   * @example
   * item_id
   */
  featureName?: string;
  /**
   * @remarks
   * The separator for the sequence feature.
   * 
   * @example
   * ;
   */
  sequenceDelim?: string;
  /**
   * @remarks
   * The maximum length of the sequence feature.
   * 
   * @example
   * 50
   */
  sequenceLength?: number;
  /**
   * @remarks
   * A list of sub-features for the sequence feature.
   */
  subFeatures?: GetModelFeatureFGFeatureResponseBodySequenceFeaturesSubFeatures[];
  static names(): { [key: string]: string } {
    return {
      attributeDelim: 'AttributeDelim',
      featureName: 'FeatureName',
      sequenceDelim: 'SequenceDelim',
      sequenceLength: 'SequenceLength',
      subFeatures: 'SubFeatures',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeDelim: 'string',
      featureName: 'string',
      sequenceDelim: 'string',
      sequenceLength: 'number',
      subFeatures: { 'type': 'array', 'itemType': GetModelFeatureFGFeatureResponseBodySequenceFeaturesSubFeatures },
    };
  }

  validate() {
    if(Array.isArray(this.subFeatures)) {
      $dara.Model.validateArray(this.subFeatures);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModelFeatureFGFeatureResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the lookup features.
   */
  lookupFeatures?: GetModelFeatureFGFeatureResponseBodyLookupFeatures[];
  /**
   * @remarks
   * The information about the raw features.
   */
  rawFeatures?: GetModelFeatureFGFeatureResponseBodyRawFeatures[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * E23EFF09-58AA-5420-934F-8453AE01548D
   */
  requestId?: string;
  /**
   * @remarks
   * The reserved fields.
   */
  reserves?: string[];
  /**
   * @remarks
   * The information about the sequence features.
   */
  sequenceFeatures?: GetModelFeatureFGFeatureResponseBodySequenceFeatures[];
  static names(): { [key: string]: string } {
    return {
      lookupFeatures: 'LookupFeatures',
      rawFeatures: 'RawFeatures',
      requestId: 'RequestId',
      reserves: 'Reserves',
      sequenceFeatures: 'SequenceFeatures',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lookupFeatures: { 'type': 'array', 'itemType': GetModelFeatureFGFeatureResponseBodyLookupFeatures },
      rawFeatures: { 'type': 'array', 'itemType': GetModelFeatureFGFeatureResponseBodyRawFeatures },
      requestId: 'string',
      reserves: { 'type': 'array', 'itemType': 'string' },
      sequenceFeatures: { 'type': 'array', 'itemType': GetModelFeatureFGFeatureResponseBodySequenceFeatures },
    };
  }

  validate() {
    if(Array.isArray(this.lookupFeatures)) {
      $dara.Model.validateArray(this.lookupFeatures);
    }
    if(Array.isArray(this.rawFeatures)) {
      $dara.Model.validateArray(this.rawFeatures);
    }
    if(Array.isArray(this.reserves)) {
      $dara.Model.validateArray(this.reserves);
    }
    if(Array.isArray(this.sequenceFeatures)) {
      $dara.Model.validateArray(this.sequenceFeatures);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

