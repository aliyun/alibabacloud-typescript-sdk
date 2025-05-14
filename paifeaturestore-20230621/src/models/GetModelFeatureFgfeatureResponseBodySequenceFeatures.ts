// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetModelFeatureFGFeatureResponseBodySequenceFeaturesSubFeatures } from "./GetModelFeatureFgfeatureResponseBodySequenceFeaturesSubFeatures";


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

