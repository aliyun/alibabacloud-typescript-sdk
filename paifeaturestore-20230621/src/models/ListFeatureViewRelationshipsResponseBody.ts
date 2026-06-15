// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFeatureViewRelationshipsResponseBodyRelationshipsModels extends $dara.Model {
  /**
   * @remarks
   * The ID of the model.
   * 
   * @example
   * 3
   */
  modelId?: string;
  /**
   * @remarks
   * The name of the model.
   * 
   * @example
   * dbmtl
   */
  modelName?: string;
  static names(): { [key: string]: string } {
    return {
      modelId: 'ModelId',
      modelName: 'ModelName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelId: 'string',
      modelName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFeatureViewRelationshipsResponseBodyRelationships extends $dara.Model {
  /**
   * @remarks
   * The name of the feature view.
   * 
   * @example
   * fv1
   */
  featureViewName?: string;
  /**
   * @remarks
   * A list of models.
   */
  models?: ListFeatureViewRelationshipsResponseBodyRelationshipsModels[];
  /**
   * @remarks
   * The name of the project.
   * 
   * @example
   * project1
   */
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      featureViewName: 'FeatureViewName',
      models: 'Models',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      featureViewName: 'string',
      models: { 'type': 'array', 'itemType': ListFeatureViewRelationshipsResponseBodyRelationshipsModels },
      projectName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.models)) {
      $dara.Model.validateArray(this.models);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFeatureViewRelationshipsResponseBody extends $dara.Model {
  /**
   * @remarks
   * A list of relationships to models that use this feature view.
   */
  relationships?: ListFeatureViewRelationshipsResponseBodyRelationships[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0FBBE454-9BD1-5D8F-9129-D14DB7FAFE0B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      relationships: 'Relationships',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      relationships: { 'type': 'array', 'itemType': ListFeatureViewRelationshipsResponseBodyRelationships },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.relationships)) {
      $dara.Model.validateArray(this.relationships);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

