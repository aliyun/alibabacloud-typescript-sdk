// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProjectFeatureViewsResponseBodyFeatureViewsFeatures extends $dara.Model {
  attributes?: string[];
  /**
   * @example
   * f1
   */
  name?: string;
  /**
   * @example
   * INT32
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.attributes)) {
      $dara.Model.validateArray(this.attributes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class ListProjectFeatureViewsResponseBody extends $dara.Model {
  featureViews?: ListProjectFeatureViewsResponseBodyFeatureViews[];
  /**
   * @example
   * AE2AF33E-0C0D-51A8-B89B-C5F1DF261D92
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      featureViews: 'FeatureViews',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      featureViews: { 'type': 'array', 'itemType': ListProjectFeatureViewsResponseBodyFeatureViews },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.featureViews)) {
      $dara.Model.validateArray(this.featureViews);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

