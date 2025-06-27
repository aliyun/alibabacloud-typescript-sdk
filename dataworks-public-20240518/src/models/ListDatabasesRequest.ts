// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDatabasesRequest extends $dara.Model {
  /**
   * @example
   * test comment
   */
  comment?: string;
  /**
   * @example
   * test_tbl
   */
  name?: string;
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
   * @remarks
   * The parent entity ID. For more information, see [description of concepts related to metadata entities.](https://help.aliyun.com/document_detail/2880092.html)
   * 
   * The type of the parent entity can be found in the response of the ListCrawlerTypes operation.
   * 
   * *   If the parent entity is a catalog, the format of `ParentMetaEntityId` follows the response of the ListCatalogs API.
   * *   If the parent entity is a metadata crawler, the format of `ParentMetaEntityId` is `${CrawlerType}:${Instance ID or encoded URL}.`
   * 
   * ParentMetaEntityId format examples
   * 
   * `dlf-catalog::catalog_id`
   * 
   * `holo:instance_id`
   * 
   * `mysql:(instance_id|encoded_jdbc_url)`
   * 
   * > \\
   * `catalog_id`: The DLF catalog ID.\\
   * `instance_id`: The instance ID, required for the data source registered in instance mode.\\
   * `encoded_jdbc_url`: The JDBC connection string that has been URL encoded, required for the data source registered via a connection string.
   * 
   * This parameter is required.
   * 
   * @example
   * mysql:rm-abc123xxx
   * dlf-catalog:123456XXX:test_catalog
   */
  parentMetaEntityId?: string;
  /**
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

