// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateModelFeatureFGFeatureRequestSequenceFeaturesSubFeatures } from "./UpdateModelFeatureFgfeatureRequestSequenceFeaturesSubFeatures";


export class UpdateModelFeatureFGFeatureRequestSequenceFeatures extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * #
   */
  attributeDelim?: string;
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
   * ;
   */
  sequenceDelim?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 50
   */
  sequenceLength?: number;
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

