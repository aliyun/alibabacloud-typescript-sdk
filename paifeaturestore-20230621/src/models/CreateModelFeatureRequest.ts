// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateModelFeatureRequestFeatures extends $dara.Model {
  /**
   * @remarks
   * The alias of the feature.
   * 
   * @example
   * userid
   */
  aliasName?: string;
  /**
   * @remarks
   * The feature view ID. You can call the ListFeatureViews operation to obtain the feature view ID.
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
   * user_id
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

export class CreateModelFeatureRequest extends $dara.Model {
  /**
   * @remarks
   * The list of features.
   * 
   * This parameter is required.
   */
  features?: CreateModelFeatureRequestFeatures[];
  /**
   * @remarks
   * The priority level of the label table. Default value: 0, which indicates that conflicts between label table features and feature view features are not allowed. A value of 1 indicates that the label table takes precedence when conflicts occur. A value of 2 indicates that the feature view takes precedence.
   * 
   * @example
   * 0
   */
  labelPriorityLevel?: number;
  /**
   * @remarks
   * The label table ID. You can call the ListLabelTables operation to obtain the label table ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 4
   */
  labelTableId?: string;
  /**
   * @remarks
   * The name of the model feature.
   * 
   * This parameter is required.
   * 
   * @example
   * model_feature_1
   */
  name?: string;
  /**
   * @remarks
   * The project ID. You can call the ListProjects operation to obtain the project ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  projectId?: string;
  /**
   * @remarks
   * The sequence feature view IDs.
   */
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

