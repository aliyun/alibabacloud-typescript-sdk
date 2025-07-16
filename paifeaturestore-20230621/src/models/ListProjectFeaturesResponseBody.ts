// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProjectFeaturesResponseBodyFeatures extends $dara.Model {
  /**
   * @example
   * age1,age2
   */
  aliasNames?: string;
  /**
   * @example
   * 1
   */
  featureViewId?: string;
  /**
   * @example
   * fv1
   */
  featureViewName?: string;
  /**
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 10
   */
  modelFeatureCount?: number;
  /**
   * @example
   * f1
   */
  name?: string;
  /**
   * @example
   * 123456
   */
  owner?: string;
  /**
   * @example
   * STRING
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      aliasNames: 'AliasNames',
      featureViewId: 'FeatureViewId',
      featureViewName: 'FeatureViewName',
      gmtCreateTime: 'GmtCreateTime',
      modelFeatureCount: 'ModelFeatureCount',
      name: 'Name',
      owner: 'Owner',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasNames: 'string',
      featureViewId: 'string',
      featureViewName: 'string',
      gmtCreateTime: 'string',
      modelFeatureCount: 'number',
      name: 'string',
      owner: 'string',
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

export class ListProjectFeaturesResponseBody extends $dara.Model {
  features?: ListProjectFeaturesResponseBodyFeatures[];
  /**
   * @example
   * 10
   */
  totalCount?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 7D497816-607C-5B67-97B1-61354B6ACB2B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      features: 'Features',
      totalCount: 'TotalCount',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      features: { 'type': 'array', 'itemType': ListProjectFeaturesResponseBodyFeatures },
      totalCount: 'number',
      requestId: 'string',
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

