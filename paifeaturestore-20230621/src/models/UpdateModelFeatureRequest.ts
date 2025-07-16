// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateModelFeatureRequestFeatures extends $dara.Model {
  /**
   * @example
   * sex
   */
  aliasName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 5
   */
  featureViewId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * gender
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * STRING
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      aliasName: 'AliasName',
      featureViewId: 'FeatureViewId',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasName: 'string',
      featureViewId: 'string',
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

