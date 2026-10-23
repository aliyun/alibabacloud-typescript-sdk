// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Catalog extends $dara.Model {
  /**
   * @remarks
   * The comment.
   * 
   * @example
   * Default catalog
   */
  comment?: string;
  /**
   * @remarks
   * The creation time. The value is a millisecond-level timestamp.
   * 
   * @example
   * 1725330777000
   */
  createTime?: number;
  /**
   * @remarks
   * The ID of the data catalog entity. Currently, the DLF and StarRocks types are supported. For more information, see [Concepts of metadata entities](https://help.aliyun.com/document_detail/2880092.html).
   * 
   * - For the DLF type, the format is `dlf-catalog::catalog_id`.
   * 
   * - For the StarRocks type, the format is `starrocks-catalog:(instance_id|encoded_jdbc_url):catalog_name`.
   * 
   * > Where:  
   * `catalog_id`: The DLF catalog ID.  
   * `instance_id`: The instance ID, which is required when the data source is registered in instance mode.  
   * `encoded_jdbc_url`: the URL-encoded JDBC connection string, which is required when the data source is registered by using a connection string.  
   * `catalog_name`: the name of the StarRocks catalog.
   * 
   * @example
   * dlf-catalog::catalog1
   */
  id?: string;
  /**
   * @remarks
   * The modification time. The value is a millisecond-level timestamp.
   * 
   * @example
   * 1725330777000
   */
  modifyTime?: number;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * catalog1
   */
  name?: string;
  /**
   * @remarks
   * The ID of the parent entity.
   * 
   * - For the DLF type, the format of `ParentMetaEntityId` is `dlf`.
   * 
   * - For the StarRocks type, the format of `ParentMetaEntityId` is `starrocks:(instance_id|encoded_jdbc_url)`.
   * 
   * > Where:  
   * `instance_id`: The instance ID, which is required when the data source is registered in instance mode.  
   * `encoded_jdbc_url`: the URL-encoded JDBC connection string, which is required when the data source is registered by using a connection string.
   * 
   * @example
   * dlf
   */
  parentMetaEntityId?: string;
  /**
   * @remarks
   * The catalog type. The valid values depend on the metadata collector type.
   * 
   * @example
   * HIVE
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      createTime: 'CreateTime',
      id: 'Id',
      modifyTime: 'ModifyTime',
      name: 'Name',
      parentMetaEntityId: 'ParentMetaEntityId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      createTime: 'number',
      id: 'string',
      modifyTime: 'number',
      name: 'string',
      parentMetaEntityId: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

