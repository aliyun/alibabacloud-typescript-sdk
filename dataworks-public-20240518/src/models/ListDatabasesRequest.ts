// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDatabasesRequest extends $dara.Model {
  /**
   * @remarks
   * The comment. Supports fuzzy match.
   * 
   * @example
   * test comment
   */
  comment?: string;
  /**
   * @remarks
   * The name. Supports fuzzy match.
   * 
   * @example
   * test_tbl
   */
  name?: string;
  /**
   * @remarks
   * The sort order. Default value: Asc. Valid values:
   * 
   * *   Asc: ascending.
   * *   Desc: descending.
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
   * The number of records per page. Default: 10. Maximum: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The parent entity ID. For more information, see [Concepts related to metadata entities](https://help.aliyun.com/document_detail/2880092.html).
   * 
   * You can refer to the ListCrawlerTypes operation for the parent entity type.
   * 
   * *   If the parent entity is a catalog, the format of `ParentMetaEntityId` follows the response of the ListCatalogs API.
   * *   If the parent entity is a metadata crawler, the format of `ParentMetaEntityId` is `${CrawlerType}:${Instance ID or encoded URL}`.
   * 
   * ParentMetaEntityId format examples
   * 
   * *   `dlf-catalog::catalog_id`
   * *   `holo:instance_id`
   * *   `mysql:(instance_id|encoded_jdbc_url)`
   * 
   * > 
   * 
   * *   `catalog_id`: The ID of the DLF catalog.
   * *   `instance_id`: The instance ID. Required when the data source is registered in instance mode.
   * *   `encoded_jdbc_url`: The URL-encoded JDBC connection string. Required when the data source is registered by connection string.
   * 
   * This parameter is required.
   * 
   * @example
   * mysql:rm-abc123xxx
   * dlf-catalog:123456XXX:test_catalog
   */
  parentMetaEntityId?: string;
  /**
   * @remarks
   * The sort field. Default value: CreateTime. Valid values:
   * 
   * *   CreateTime
   * *   ModifyTime
   * *   Name
   * 
   * @example
   * CreateTime
   */
  sortBy?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      name: 'Name',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      parentMetaEntityId: 'ParentMetaEntityId',
      sortBy: 'SortBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      name: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      parentMetaEntityId: 'string',
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

