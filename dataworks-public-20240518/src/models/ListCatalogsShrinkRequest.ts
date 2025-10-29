// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCatalogsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The comment. Supports token-based matching.
   * 
   * @example
   * this is a comment
   */
  comment?: string;
  /**
   * @remarks
   * The name. Supports fuzzy matching.
   * 
   * @example
   * abc
   */
  name?: string;
  /**
   * @remarks
   * The order in which the tables are sorted. Default value: Asc. Valid values:
   * 
   * *   Asc: ascending order.
   * *   Desc: descending order.
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
   * The parent entity ID. For more information, see [Concepts related to metadata entities](https://help.aliyun.com/document_detail/2880092.html).
   * 
   * Currently, only the DLF and StarRocks types are supported.
   * 
   * *   For the DLF type, you can query all catalog lists. The format of `ParentMetaEntityId` is `DLF`.
   * *   For the StarRocks type, you can query the catalogs of a specific instance. The format of `ParentMetaEntityId` `is StarRocks:(instance_id|encoded_jdbc_url)`.
   * 
   * > \\
   * `instance_id`: The instance ID. Required if the data source is registered in instance mode.\\
   * `encoded_jdbc_url`: The JDBC connection string encoded with URL encoding. Required if the data source is registered in connection-string mode.
   * 
   * This parameter is required.
   * 
   * @example
   * dlf
   * starrocks:c-abc123xxx
   */
  parentMetaEntityId?: string;
  /**
   * @remarks
   * The sort field. Default value: CreateTime. Valid values:
   * 
   * *   CreateTime
   * *   ModifyTime
   * *   Name
   * *   Type
   * 
   * @example
   * CreateTime
   */
  sortBy?: string;
  /**
   * @remarks
   * The type. Supports exact match. If left empty, all types are queried.
   */
  typesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      name: 'Name',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      parentMetaEntityId: 'ParentMetaEntityId',
      sortBy: 'SortBy',
      typesShrink: 'Types',
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
      typesShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

