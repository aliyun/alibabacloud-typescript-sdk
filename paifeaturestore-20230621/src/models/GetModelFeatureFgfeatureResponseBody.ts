// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetModelFeatureFGFeatureResponseBodyLookupFeatures } from "./GetModelFeatureFgfeatureResponseBodyLookupFeatures";
import { GetModelFeatureFGFeatureResponseBodyRawFeatures } from "./GetModelFeatureFgfeatureResponseBodyRawFeatures";
import { GetModelFeatureFGFeatureResponseBodySequenceFeatures } from "./GetModelFeatureFgfeatureResponseBodySequenceFeatures";


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

