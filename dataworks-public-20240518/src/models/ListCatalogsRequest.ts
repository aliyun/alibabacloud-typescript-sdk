// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCatalogsRequest extends $dara.Model {
  /**
   * @example
   * this is a comment
   */
  comment?: string;
  /**
   * @example
   * abc
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
   * The parent entity ID. For more information, see [Concepts related to metadata entities](https://help.aliyun.com/document_detail/2880092.html).
   * 
   * Only DLF and StarRocks data sources support this parameter.
   * 
   * *   For DLF data sources, you can call this API operation to query all catalogs. In this case, you must set the `ParentMetaEntityId` parameter to `dlf`.
   * *   For StarRocks data sources, you can call this API operation to query the catalogs in a specific instance. In this case, you can configure the `ParentMetaEntityId` parameter in the `starrocks:(instance_id|encoded_jdbc_url)` format.
   * 
   * > \\
   * `instance_id`: the ID of an instance. If the related data source is added to DataWorks in Alibaba Cloud instance mode, you must configure this parameter.\\
   * `encoded_jdbc_url`: the JDBC connection string that is URL-encoded. If the related data source is added to DataWorks in connection string mode, you must configure this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * dlf
   * starrocks:c-abc123xxx
   */
  parentMetaEntityId?: string;
  /**
   * @example
   * CreateTime
   */
  sortBy?: string;
  types?: string[];
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      name: 'Name',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      parentMetaEntityId: 'ParentMetaEntityId',
      sortBy: 'SortBy',
      types: 'Types',
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
      types: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.types)) {
      $dara.Model.validateArray(this.types);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

