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

export class GetModelFeatureFGFeatureResponseBodyRawFeatures extends $dara.Model {
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

export class GetModelFeatureFGFeatureResponseBodySequenceFeatures extends $dara.Model {
  /**
   * @example
   * #
   */
  attributeDelim?: string;
  /**
   * @example
   * item_id
   */
  featureName?: string;
  /**
   * @example
   * ;
   */
  sequenceDelim?: string;
  /**
   * @example
   * 50
   */
  sequenceLength?: number;
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
  lookupFeatures?: GetModelFeatureFGFeatureResponseBodyLookupFeatures[];
  rawFeatures?: GetModelFeatureFGFeatureResponseBodyRawFeatures[];
  /**
   * @example
   * E23EFF09-58AA-5420-934F-8453AE01548D
   */
  requestId?: string;
  reserves?: string[];
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

