// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateModelFeatureRequestFeatures extends $dara.Model {
  /**
   * @remarks
   * The feature alias.
   * 
   * @example
   * sex
   */
  aliasName?: string;
  /**
   * @remarks
   * The feature view ID. You can call the ListFeatureViews operation to query the feature view ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 5
   */
  featureViewId?: string;
  /**
   * @remarks
   * The feature name.
   * 
   * This parameter is required.
   * 
   * @example
   * gender
   */
  name?: string;
  /**
   * @example
   * cand_seq__
   */
  prefixName?: string;
  /**
   * @remarks
   * The feature type. Valid values:
   * 
   * - INT32
   * - INT64
   * - FLOAT
   * - DOUBLE
   * - STRING
   * - BOOLEAN
   * - TIMESTAMP.
   * 
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
      prefixName: 'PrefixName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasName: 'string',
      featureViewId: 'string',
      name: 'string',
      prefixName: 'string',
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
  /**
   * @remarks
   * The list of features.
   */
  features?: UpdateModelFeatureRequestFeatures[];
  /**
   * @example
   * 0
   */
  labelPriorityLevel?: number;
  /**
   * @remarks
   * The label table ID. You can call the ListLabelTables operation to query the label table ID.
   * 
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

