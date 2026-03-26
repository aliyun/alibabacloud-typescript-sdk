// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Catalog extends $dara.Model {
  /**
   * @remarks
   * The comment.
   * 
   * @example
   * this is a comment
   */
  comment?: string;
  /**
   * @remarks
   * The creation time. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1722073854000
   */
  createTime?: number;
  /**
   * @remarks
   * The catalog ID. Currently, only the DLF and StarRocks types are supported. For details, see [description of concepts related to metadata entities.](https://help.aliyun.com/document_detail/2880092.html)
   * 
   * *   For the DLF type, the format is `dlf-catalog::catalog_id`.
   * *   For the starrocks type, the format is `starrocks-catalog:(instance_id|encoded_jdbc_url):catalog_name`.
   * 
   * > \\
   * `catalog_id`: The the DLF catalog ID.\\
   * `instance_id`: The instance ID, required if the data source is registered in instance mode.\\
   * `encoded_jdbc_url`: The URL-encoded JDBC connection string, required if the data source is registered using a connection string.\\
   * `catalog_name`: The StarRocks catalog name.
   * 
   * @example
   * dlf-catalog:123456XXX:test_catalog
   * starrocks-catalog:c-abc123xxx:default_catalog
   */
  id?: string;
  /**
   * @remarks
   * The modification time. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1722073854000
   */
  modifyTime?: number;
  /**
   * @remarks
   * The catalog name.
   * 
   * @example
   * default_catalog
   */
  name?: string;
  /**
   * @remarks
   * The parent entity ID.
   * 
   * *   For the DLF type, the format of `ParentMetaEntityId` is `dlf`.
   * *   For the StarRocks type, the format of `ParentMetaEntityId` is `starrocks:(instance_id|encoded_jdbc_url)`.
   * 
   * > \\
   * `instance_id`: The instance ID, required when the data source is registered in instance mode.\\
   * `encoded_jdbc_url`: The URL-encoded JDBC connection string, required if the data source is registered via a connection string.
   * 
   * @example
   * dlf
   * starrocks:c-abc123xxx
   */
  parentMetaEntityId?: string;
  /**
   * @remarks
   * The catalog type. The value of this parameter varies based on the type of the metadata crawler.
   * 
   * @example
   * Internal
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

