// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProjectFeaturesResponseBodyFeatures extends $dara.Model {
  /**
   * @remarks
   * A comma-separated list of aliases for the feature.
   * 
   * @example
   * age1,age2
   */
  aliasNames?: string;
  /**
   * @remarks
   * The ID of the parent feature view.
   * 
   * @example
   * 1
   */
  featureViewId?: string;
  /**
   * @remarks
   * The name of the parent feature view.
   * 
   * @example
   * fv1
   */
  featureViewName?: string;
  /**
   * @remarks
   * The time the feature was created, in ISO 8601 format.
   * 
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The number of model features that reference this feature.
   * 
   * @example
   * 10
   */
  modelFeatureCount?: number;
  /**
   * @remarks
   * The name of the feature.
   * 
   * @example
   * f1
   */
  name?: string;
  /**
   * @remarks
   * The owner of the feature.
   * 
   * @example
   * 123456
   */
  owner?: string;
  /**
   * @remarks
   * The data type of the feature.
   * 
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
  /**
   * @remarks
   * The list of returned features.
   */
  features?: ListProjectFeaturesResponseBodyFeatures[];
  /**
   * @remarks
   * The total number of features that match the query criteria.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  /**
   * @remarks
   * The request ID.
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

