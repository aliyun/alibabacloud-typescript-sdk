// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateModelFeatureFGFeatureRequestLookupFeatures extends $dara.Model {
  /**
   * @remarks
   * Default value.
   * 
   * This parameter is required.
   * 
   * @example
   * -1024
   */
  defaultValue?: string;
  /**
   * @remarks
   * Generated feature name.
   * 
   * This parameter is required.
   * 
   * @example
   * item_id
   */
  featureName?: string;
  /**
   * @remarks
   * Key feature domain.
   * 
   * - User
   * 
   * - Item
   * 
   * - Context
   * 
   * This parameter is required.
   * 
   * @example
   * Item
   */
  keyFeatureDomain?: string;
  /**
   * @remarks
   * The name of the key feature.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  keyFeatureName?: string;
  /**
   * @remarks
   * Map feature domain.
   * 
   * - User
   * 
   * - Item
   * 
   * - Context
   * 
   * This parameter is required.
   * 
   * @example
   * User
   */
  mapFeatureDomain?: string;
  /**
   * @remarks
   * Map feature name.
   * 
   * This parameter is required.
   * 
   * @example
   * item_id
   */
  mapFeatureName?: string;
  /**
   * @remarks
   * Feature value type.
   * 
   * - INTEGER
   * 
   * - DOUBLE
   * 
   * - STRING
   * 
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

export class UpdateModelFeatureFGFeatureRequestRawFeatures extends $dara.Model {
  /**
   * @remarks
   * Default value.
   * 
   * This parameter is required.
   * 
   * @example
   * -1024
   */
  defaultValue?: string;
  /**
   * @remarks
   * Input feature domain.
   * 
   * - User
   * 
   * - Item
   * 
   * - Context
   * 
   * This parameter is required.
   * 
   * @example
   * User
   */
  featureDomain?: string;
  /**
   * @remarks
   * Generated feature name.
   * 
   * This parameter is required.
   * 
   * @example
   * item_id
   */
  featureName?: string;
  /**
   * @remarks
   * FG basic feature type.
   * 
   * - IdFeature
   * 
   * - RawFeature
   * 
   * This parameter is required.
   * 
   * @example
   * IdFeature
   */
  featureType?: string;
  /**
   * @remarks
   * The original name of the feature.
   * 
   * This parameter is required.
   * 
   * @example
   * item_id
   */
  inputFeatureName?: string;
  /**
   * @remarks
   * Feature value type.
   * 
   * - INTEGER
   * 
   * - DOUBLE
   * 
   * - STRING
   * 
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

export class UpdateModelFeatureFGFeatureRequestSequenceFeaturesSubFeatures extends $dara.Model {
  /**
   * @remarks
   * Default value.
   * 
   * This parameter is required.
   * 
   * @example
   * -1024
   */
  defaultValue?: string;
  /**
   * @remarks
   * Input feature domain.
   * 
   * - User
   * 
   * - Item
   * 
   * - Context
   * 
   * This parameter is required.
   * 
   * @example
   * User
   */
  featureDomain?: string;
  /**
   * @remarks
   * Generated subfeature name.
   * 
   * This parameter is required.
   * 
   * @example
   * item_id
   */
  featureName?: string;
  /**
   * @remarks
   * FG sequence subfeature type.
   * 
   * - IdFeature
   * 
   * - RawFeature
   * 
   * This parameter is required.
   * 
   * @example
   * RawFeature
   */
  featureType?: string;
  /**
   * @remarks
   * Original feature name.
   * 
   * This parameter is required.
   * 
   * @example
   * item_id
   */
  inputFeatureName?: string;
  /**
   * @remarks
   * Feature value type.
   * 
   * - INTEGER
   * 
   * - DOUBLE
   * 
   * - STRING
   * 
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

export class UpdateModelFeatureFGFeatureRequestSequenceFeatures extends $dara.Model {
  /**
   * @remarks
   * Feature attribute delimiter.
   * 
   * This parameter is required.
   * 
   * @example
   * #
   */
  attributeDelim?: string;
  /**
   * @remarks
   * Sequence feature name.
   * 
   * This parameter is required.
   * 
   * @example
   * item_id
   */
  featureName?: string;
  /**
   * @remarks
   * Sequence feature delimiter.
   * 
   * This parameter is required.
   * 
   * @example
   * ;
   */
  sequenceDelim?: string;
  /**
   * @remarks
   * Maximum length of the sequence feature.
   * 
   * This parameter is required.
   * 
   * @example
   * 50
   */
  sequenceLength?: number;
  /**
   * @remarks
   * List of subfeatures for the sequence feature.
   */
  subFeatures?: UpdateModelFeatureFGFeatureRequestSequenceFeaturesSubFeatures[];
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
      subFeatures: { 'type': 'array', 'itemType': UpdateModelFeatureFGFeatureRequestSequenceFeaturesSubFeatures },
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

export class UpdateModelFeatureFGFeatureRequest extends $dara.Model {
  /**
   * @remarks
   * Lookup feature information.
   */
  lookupFeatures?: UpdateModelFeatureFGFeatureRequestLookupFeatures[];
  /**
   * @remarks
   * Basic feature information.
   */
  rawFeatures?: UpdateModelFeatureFGFeatureRequestRawFeatures[];
  /**
   * @remarks
   * Reserved fields.
   */
  reserves?: string[];
  /**
   * @remarks
   * Sequence feature information.
   */
  sequenceFeatures?: UpdateModelFeatureFGFeatureRequestSequenceFeatures[];
  static names(): { [key: string]: string } {
    return {
      lookupFeatures: 'LookupFeatures',
      rawFeatures: 'RawFeatures',
      reserves: 'Reserves',
      sequenceFeatures: 'SequenceFeatures',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lookupFeatures: { 'type': 'array', 'itemType': UpdateModelFeatureFGFeatureRequestLookupFeatures },
      rawFeatures: { 'type': 'array', 'itemType': UpdateModelFeatureFGFeatureRequestRawFeatures },
      reserves: { 'type': 'array', 'itemType': 'string' },
      sequenceFeatures: { 'type': 'array', 'itemType': UpdateModelFeatureFGFeatureRequestSequenceFeatures },
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

