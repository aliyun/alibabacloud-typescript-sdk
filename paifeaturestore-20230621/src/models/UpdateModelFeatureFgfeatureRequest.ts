// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateModelFeatureFGFeatureRequestLookupFeatures } from "./UpdateModelFeatureFgfeatureRequestLookupFeatures";
import { UpdateModelFeatureFGFeatureRequestRawFeatures } from "./UpdateModelFeatureFgfeatureRequestRawFeatures";
import { UpdateModelFeatureFGFeatureRequestSequenceFeatures } from "./UpdateModelFeatureFgfeatureRequestSequenceFeatures";


export class UpdateModelFeatureFGFeatureRequest extends $dara.Model {
  lookupFeatures?: UpdateModelFeatureFGFeatureRequestLookupFeatures[];
  rawFeatures?: UpdateModelFeatureFGFeatureRequestRawFeatures[];
  reserves?: string[];
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

