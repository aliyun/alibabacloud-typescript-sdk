// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFeatureEntitiesShrinkRequest extends $dara.Model {
  featureEntityIdsShrink?: string;
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
   * 1
   */
  parentFeatureEntityId?: string;
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
      featureEntityIdsShrink: 'FeatureEntityIds',
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
      featureEntityIdsShrink: 'string',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

