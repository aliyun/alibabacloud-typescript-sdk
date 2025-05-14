// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListProjectFeatureViewsResponseBodyFeatureViewsFeatures } from "./ListProjectFeatureViewsResponseBodyFeatureViewsFeatures";


export class ListProjectFeatureViewsResponseBodyFeatureViews extends $dara.Model {
  /**
   * @example
   * 3
   */
  featureViewId?: string;
  features?: ListProjectFeatureViewsResponseBodyFeatureViewsFeatures[];
  /**
   * @example
   * feature_view1
   */
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      featureViewId: 'FeatureViewId',
      features: 'Features',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      featureViewId: 'string',
      features: { 'type': 'array', 'itemType': ListProjectFeatureViewsResponseBodyFeatureViewsFeatures },
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.features)) {
      $dara.Model.validateArray(this.features);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

