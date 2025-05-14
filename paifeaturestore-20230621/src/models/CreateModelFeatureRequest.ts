// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateModelFeatureRequestFeatures } from "./CreateModelFeatureRequestFeatures";


export class CreateModelFeatureRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  features?: CreateModelFeatureRequestFeatures[];
  /**
   * @example
   * 0
   */
  labelPriorityLevel?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 4
   */
  labelTableId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * model_feature_1
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3
   */
  projectId?: string;
  sequenceFeatureViewIds?: string[];
  static names(): { [key: string]: string } {
    return {
      features: 'Features',
      labelPriorityLevel: 'LabelPriorityLevel',
      labelTableId: 'LabelTableId',
      name: 'Name',
      projectId: 'ProjectId',
      sequenceFeatureViewIds: 'SequenceFeatureViewIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      features: { 'type': 'array', 'itemType': CreateModelFeatureRequestFeatures },
      labelPriorityLevel: 'number',
      labelTableId: 'string',
      name: 'string',
      projectId: 'string',
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

