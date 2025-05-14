// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListFeatureViewFieldRelationshipsResponseBodyRelationshipsModels } from "./ListFeatureViewFieldRelationshipsResponseBodyRelationshipsModels";


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

