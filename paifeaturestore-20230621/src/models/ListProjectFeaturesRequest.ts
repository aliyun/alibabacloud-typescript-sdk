// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProjectFeaturesRequest extends $dara.Model {
  /**
   * @remarks
   * The feature alias. Fuzzy search is supported.
   * 
   * @example
   * ff1
   */
  aliasName?: string;
  /**
   * @remarks
   * Additional filter conditions in a JSON object. Conditions are combined by using the AND operator.
   * 
   * @example
   * {"feature_view_name":"fv1"}
   */
  filter?: string;
  /**
   * @remarks
   * The feature name. Fuzzy search is supported.
   * 
   * @example
   * f1
   */
  name?: string;
  /**
   * @remarks
   * Specifies the sort order. Valid values: `Asc` and `Desc`.
   * 
   * @example
   * Desc
   */
  order?: string;
  /**
   * @remarks
   * The page number. Starts from 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of features to return per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The field used to sort the returned features.
   * 
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

