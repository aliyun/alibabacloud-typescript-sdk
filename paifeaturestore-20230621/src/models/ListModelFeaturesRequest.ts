// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListModelFeaturesRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the model features.
   */
  modelFeatureIds?: string[];
  /**
   * @remarks
   * The name of the model feature.
   * 
   * @example
   * model_feature1
   */
  name?: string;
  /**
   * @remarks
   * The sort order.
   * 
   * - `ASC`: ascending order.
   * 
   * - `DESC`: descending order.
   * 
   * @example
   * ASC
   */
  order?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the user who creates the model feature.
   * 
   * @example
   * 12323143****
   */
  owner?: string;
  /**
   * @remarks
   * The page number. The value must be a positive integer. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The project ID. You can call the `ListProjects` API to obtain the project ID.
   * 
   * @example
   * 4
   */
  projectId?: string;
  /**
   * @remarks
   * The field by which to sort the results.
   * 
   * - `GmtCreateTime`: the creation time.
   * 
   * - `GmtModifiedTime`: the update time.
   * 
   * @example
   * DESC
   */
  sortBy?: string;
  static names(): { [key: string]: string } {
    return {
      modelFeatureIds: 'ModelFeatureIds',
      name: 'Name',
      order: 'Order',
      owner: 'Owner',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      sortBy: 'SortBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelFeatureIds: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      order: 'string',
      owner: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'string',
      sortBy: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.modelFeatureIds)) {
      $dara.Model.validateArray(this.modelFeatureIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

