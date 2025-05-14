// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetModelFeatureResponseBodyFeatures extends $dara.Model {
  /**
   * @example
   * feature2
   */
  aliasName?: string;
  /**
   * @example
   * 3
   */
  featureViewId?: string;
  /**
   * @example
   * feature_view_1
   */
  featureViewName?: string;
  /**
   * @example
   * feature1
   */
  name?: string;
  /**
   * @example
   * INT32
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      aliasName: 'AliasName',
      featureViewId: 'FeatureViewId',
      featureViewName: 'FeatureViewName',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasName: 'string',
      featureViewId: 'string',
      featureViewName: 'string',
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

