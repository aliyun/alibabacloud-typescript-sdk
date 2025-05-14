// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListModelFeaturesShrinkRequest extends $dara.Model {
  modelFeatureIdsShrink?: string;
  /**
   * @example
   * model_feature1
   */
  name?: string;
  /**
   * @example
   * ASC
   */
  order?: string;
  /**
   * @example
   * 12323143****
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
   * 4
   */
  projectId?: string;
  /**
   * @example
   * DESC
   */
  sortBy?: string;
  static names(): { [key: string]: string } {
    return {
      modelFeatureIdsShrink: 'ModelFeatureIds',
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
      modelFeatureIdsShrink: 'string',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

