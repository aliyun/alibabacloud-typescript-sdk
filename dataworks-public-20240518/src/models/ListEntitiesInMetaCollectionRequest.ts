// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEntitiesInMetaCollectionRequest extends $dara.Model {
  entityDescription?: string;
  /**
   * @example
   * test1
   */
  entityName?: string;
  /**
   * @example
   * dlf-table
   */
  entityType?: string;
  /**
   * @remarks
   * The collection ID.
   * 
   * This parameter is required.
   * 
   * @example
   * category.123
   */
  id?: string;
  /**
   * @example
   * Asc
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
   * Name
   */
  sortBy?: string;
  static names(): { [key: string]: string } {
    return {
      entityDescription: 'EntityDescription',
      entityName: 'EntityName',
      entityType: 'EntityType',
      id: 'Id',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityDescription: 'string',
      entityName: 'string',
      entityType: 'string',
      id: 'string',
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

