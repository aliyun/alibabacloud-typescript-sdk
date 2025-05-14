// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFeatureViewFieldRelationshipsResponseBodyRelationshipsModels extends $dara.Model {
  /**
   * @example
   * f1
   */
  featureAliasName?: string;
  /**
   * @example
   * 3
   */
  modelId?: string;
  /**
   * @example
   * dbmtl
   */
  modelName?: string;
  static names(): { [key: string]: string } {
    return {
      featureAliasName: 'FeatureAliasName',
      modelId: 'ModelId',
      modelName: 'ModelName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      featureAliasName: 'string',
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

