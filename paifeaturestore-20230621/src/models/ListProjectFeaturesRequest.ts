// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProjectFeaturesRequest extends $dara.Model {
  /**
   * @example
   * ff1
   */
  aliasName?: string;
  /**
   * @example
   * {"feature_view_name":"fv1"}
   */
  filter?: string;
  /**
   * @example
   * f1
   */
  name?: string;
  /**
   * @example
   * Desc
   */
  order?: string;
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
   * ModelFeatureCount
   */
  sortBy?: string;
  static names(): { [key: string]: string } {
    return {
      aliasName: 'AliasName',
      filter: 'Filter',
      name: 'Name',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasName: 'string',
      filter: 'string',
      name: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
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

