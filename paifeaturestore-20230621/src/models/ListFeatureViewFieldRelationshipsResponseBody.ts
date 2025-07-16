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

export class ListFeatureViewFieldRelationshipsResponseBodyRelationships extends $dara.Model {
  /**
   * @example
   * featureView1
   */
  featureName?: string;
  models?: ListFeatureViewFieldRelationshipsResponseBodyRelationshipsModels[];
  /**
   * @example
   * table2
   */
  offlineTableName?: string;
  /**
   * @example
   * table1
   */
  onlineTableName?: string;
  static names(): { [key: string]: string } {
    return {
      featureName: 'FeatureName',
      models: 'Models',
      offlineTableName: 'OfflineTableName',
      onlineTableName: 'OnlineTableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      featureName: 'string',
      models: { 'type': 'array', 'itemType': ListFeatureViewFieldRelationshipsResponseBodyRelationshipsModels },
      offlineTableName: 'string',
      onlineTableName: 'string',
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

export class ListFeatureViewFieldRelationshipsResponseBody extends $dara.Model {
  relationships?: ListFeatureViewFieldRelationshipsResponseBodyRelationships[];
  /**
   * @example
   * BF349686-C932-55B5-9B31-DAFA395C0E06
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
      relationships: { 'type': 'array', 'itemType': ListFeatureViewFieldRelationshipsResponseBodyRelationships },
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

