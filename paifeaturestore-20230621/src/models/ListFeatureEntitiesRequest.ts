// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFeatureEntitiesRequest extends $dara.Model {
  /**
   * @remarks
   * Filters the results by a list of feature entity IDs.
   */
  featureEntityIds?: string[];
  /**
   * @remarks
   * Filters the results by feature entity name.
   * 
   * @example
   * feature_entity_1
   */
  name?: string;
  /**
   * @remarks
   * The sort order. Valid values:
   * 
   * - `Asc`: Ascending order.
   * 
   * - `Desc`: Descending order.
   * 
   * @example
   * Desc
   */
  order?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the creator.
   * 
   * @example
   * 1231432*****
   */
  owner?: string;
  /**
   * @remarks
   * The page number. Values start at 1. Default value: 1.
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
   * Filters the results by parent feature entity ID. Omit this parameter to return all feature entities. Set it to `0` to return all root feature entities. Set it to a non-zero value to return all child feature entities of the specified parent.
   * 
   * @example
   * 1
   */
  parentFeatureEntityId?: string;
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
   * The field to sort the results by.
   * 
   * @example
   * GmtModifiedTime
   */
  sortBy?: string;
  static names(): { [key: string]: string } {
    return {
      featureEntityIds: 'FeatureEntityIds',
      name: 'Name',
      order: 'Order',
      owner: 'Owner',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      parentFeatureEntityId: 'ParentFeatureEntityId',
      projectId: 'ProjectId',
      sortBy: 'SortBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      featureEntityIds: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      order: 'string',
      owner: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      parentFeatureEntityId: 'string',
      projectId: 'string',
      sortBy: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.featureEntityIds)) {
      $dara.Model.validateArray(this.featureEntityIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

