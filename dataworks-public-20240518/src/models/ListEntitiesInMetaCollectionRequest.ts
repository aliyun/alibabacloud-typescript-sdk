// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEntitiesInMetaCollectionRequest extends $dara.Model {
  /**
   * @remarks
   * The description specified when the entity was added to the collection. Supports fuzzy matching. Valid only for the album type.
   * 
   * @example
   * test
   */
  entityDescription?: string;
  /**
   * @remarks
   * The entity name. Supports fuzzy matching.
   * 
   * @example
   * test1
   */
  entityName?: string;
  /**
   * @remarks
   * The entity type.
   * 
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
   * @remarks
   * The sort order. Valid values:
   * 
   * *   Asc (default): ascending order.
   * *   Desc
   * 
   * @example
   * Asc
   */
  order?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of records per page. Default value: 10. Maximum value: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The sort field. Valid values:
   * 
   * *   Name (default)
   * *   CreateTime
   * 
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

