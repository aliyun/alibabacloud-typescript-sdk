// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListFeatureViewRelationshipsResponseBodyRelationshipsModels } from "./ListFeatureViewRelationshipsResponseBodyRelationshipsModels";


export class ListFeatureViewRelationshipsResponseBodyRelationships extends $dara.Model {
  /**
   * @example
   * fv1
   */
  featureViewName?: string;
  models?: ListFeatureViewRelationshipsResponseBodyRelationshipsModels[];
  /**
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

