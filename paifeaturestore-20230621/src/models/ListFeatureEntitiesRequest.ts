// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFeatureEntitiesRequest extends $dara.Model {
  featureEntityIds?: string[];
  /**
   * @example
   * feature_entity_1
   */
  name?: string;
  /**
   * @example
   * Desc
   */
  order?: string;
  /**
   * @example
   * 1231432*****
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

