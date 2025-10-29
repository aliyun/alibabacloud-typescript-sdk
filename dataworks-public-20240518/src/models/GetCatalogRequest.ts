// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCatalogRequest extends $dara.Model {
  /**
   * @remarks
   * The catalog entity ID. Currently supports dlf and starrocks types. You can refer to the results returned by the ListCatalogs operation and the [Concepts related to metadata entities](https://help.aliyun.com/document_detail/2880092.html).
   * 
   * *   For the DLF type, the format is `dlf-catalog::catalog_id`.
   * *   For the StarRocks type, the format is `starrocks-catalog:(instance_id|encoded_jdbc_url):catalog_name`.
   * 
   * > \\
   * `catalog_id`: The ID of the DLF catalog.\\
   * `instance_id`: The instance ID, required if the data source is registered in instance mode.\\
   * `encoded_jdbc_url`: The URL-encoded JDBC connection string. Required if the data source is registered in connection string mode.\\
   * `catalog_name`: The name of the StarRocks catalog.
   * 
   * This parameter is required.
   * 
   * @example
   * dlf-catalog:123456XXX:test_catalog
   * starrocks-catalog:c-abc123xxx:default_catalog
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

