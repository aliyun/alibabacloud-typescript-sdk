// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFeatureViewsRequest extends $dara.Model {
  /**
   * @example
   * feature1
   */
  featureName?: string;
  featureViewIds?: string[];
  /**
   * @example
   * fv1
   */
  name?: string;
  /**
   * @example
   * Desc
   */
  order?: string;
  /**
   * @example
   * 1232143243242****
   */
  owner?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 3
   */
  projectId?: string;
  /**
   * @example
   * GmtCreateTime
   */
  sortBy?: string;
  /**
   * @example
   * tag1
   */
  tag?: string;
  /**
   * @example
   * Batch
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      featureName: 'FeatureName',
      featureViewIds: 'FeatureViewIds',
      name: 'Name',
      order: 'Order',
      owner: 'Owner',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      sortBy: 'SortBy',
      tag: 'Tag',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      featureName: 'string',
      featureViewIds: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      order: 'string',
      owner: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'string',
      sortBy: 'string',
      tag: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.featureViewIds)) {
      $dara.Model.validateArray(this.featureViewIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

