// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFeatureViewsRequest extends $dara.Model {
  /**
   * @remarks
   * Filters the results by feature name.
   * 
   * @example
   * feature1
   */
  featureName?: string;
  /**
   * @remarks
   * The feature view IDs by which to filter the results.
   */
  featureViewIds?: string[];
  /**
   * @remarks
   * Filters the results by feature view name.
   * 
   * @example
   * fv1
   */
  name?: string;
  /**
   * @remarks
   * The sort order. Valid values: `Desc` (descending) and `Asc` (ascending).
   * 
   * @example
   * Desc
   */
  order?: string;
  /**
   * @remarks
   * Filters the results by owner.
   * 
   * @example
   * 1232143243242****
   */
  owner?: string;
  /**
   * @remarks
   * The page number of the results to return.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of feature views to return on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The project ID. You can obtain this ID by calling the `ListProjects` operation.
   * 
   * @example
   * 3
   */
  projectId?: string;
  /**
   * @remarks
   * The field by which to sort the results.
   * 
   * @example
   * GmtCreateTime
   */
  sortBy?: string;
  /**
   * @remarks
   * Filters the results by tag.
   * 
   * @example
   * tag1
   */
  tag?: string;
  /**
   * @remarks
   * Filters the results by type. Valid values:
   * 
   * ● `Batch`: batch feature
   * 
   * ● `Stream`: stream feature
   * 
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

