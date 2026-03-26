// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Database extends $dara.Model {
  /**
   * @remarks
   * The comments.
   * 
   * @example
   * test comment
   */
  comment?: string;
  /**
   * @remarks
   * The creation time. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1736852168000
   */
  createTime?: number;
  /**
   * @remarks
   * The database ID. For more information, see [Concepts related to metadata entities](https://help.aliyun.com/document_detail/2880092.html).
   * 
   * The common format of this parameter is `${Entity type}:${Instance ID or escaped URL}:${Catalog identifier}:${Database name}`. If a level does not exist, specify an empty string as a placeholder.
   * 
   * >  For StarRocks data sources, specify a catalog name at the Catalog identifier level. For DLF data sources, specify a catalog ID at the Catalog identifier level. Other types of data sources do not support the Catalog identifier level. You can specify an empty string as a placeholder.
   * 
   * You can configure this parameter in one of the following formats based on your data source type:
   * 
   * `dlf-database::catalog_id:database_name`
   * 
   * `holo-database:instance_id::database_name`
   * 
   * `mysql-database:(instance_id|encoded_jdbc_url)::database_name`
   * 
   * > \\
   * `catalog_id`: the ID of a DLF catalog.\\
   * `instance_id`: the ID of an instance. If the related data source is added to DataWorks in Alibaba Cloud instance mode, you must configure this parameter.\\
   * `encoded_jdbc_url`: the JDBC connection string that is URL-encoded. If the related data source is added to DataWorks in connection string mode, you must configure this parameter.\\
   * `database_name`: the name of a database.
   * 
   * @example
   * holo-database:h-xxxx::test_db
   */
  id?: string;
  /**
   * @remarks
   * The uniform resource identifier (URI) of the storage location.
   * 
   * @example
   * oss://test-bucket/test_db
   */
  locationUri?: string;
  /**
   * @remarks
   * The update time. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1736852168000
   */
  modifyTime?: number;
  /**
   * @remarks
   * The database name.
   * 
   * @example
   * test_db
   */
  name?: string;
  /**
   * @remarks
   * The parent entity ID. For more information, see [Concepts related to metadata entities](https://help.aliyun.com/document_detail/2880092.html).
   * 
   * You can call the ListCrawlerTypes operation to query the parent entity types.
   * 
   * *   If the parent entity is a catalog, you can configure the `ParentMetaEntityId` parameter by referring to the `Catalog` topic.
   * *   If the parent entity is a metadata crawler, you can configure the `ParentMetaEntityId` parameter in the `${Crawler type}:${Instance ID or escaped URL}` format.
   * 
   * You can configure the ParentMetaEntityId parameter in one of the following formats based on your data source type:
   * 
   * `dlf-catalog::catalog_id`
   * 
   * `holo:instance_id`
   * 
   * `mysql:(instance_id|encoded_jdbc_url)`
   * 
   * > \\
   * `catalog_id`: the ID of a DLF catalog.\\
   * `instance_id`: the ID of an instance. If the related data source is added to DataWorks in Alibaba Cloud instance mode, you must configure this parameter.\\
   * `encoded_jdbc_url`: the JDBC connection string that is URL-encoded. If the related data source is added to DataWorks in connection string mode, you must configure this parameter.
   * 
   * @example
   * holo:h-xxxx
   */
  parentMetaEntityId?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      createTime: 'CreateTime',
      id: 'Id',
      locationUri: 'LocationUri',
      modifyTime: 'ModifyTime',
      name: 'Name',
      parentMetaEntityId: 'ParentMetaEntityId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      createTime: 'number',
      id: 'string',
      locationUri: 'string',
      modifyTime: 'number',
      name: 'string',
      parentMetaEntityId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

