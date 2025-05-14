// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateModelFeatureRequestFeatures } from "./UpdateModelFeatureRequestFeatures";


export class UpdateModelFeatureRequest extends $dara.Model {
  features?: UpdateModelFeatureRequestFeatures[];
  /**
   * @example
   * 0
   */
  labelPriorityLevel?: number;
  /**
   * @example
   * 4
   */
  labelTableId?: string;
  sequenceFeatureViewIds?: string[];
  static names(): { [key: string]: string } {
    return {
      features: 'Features',
      labelPriorityLevel: 'LabelPriorityLevel',
      labelTableId: 'LabelTableId',
      sequenceFeatureViewIds: 'SequenceFeatureViewIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      features: { 'type': 'array', 'itemType': UpdateModelFeatureRequestFeatures },
      labelPriorityLevel: 'number',
      labelTableId: 'string',
      sequenceFeatureViewIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.features)) {
      $dara.Model.validateArray(this.features);
    }
    if(Array.isArray(this.sequenceFeatureViewIds)) {
      $dara.Model.validateArray(this.sequenceFeatureViewIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

