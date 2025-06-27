// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCatalogRequest extends $dara.Model {
  /**
   * @remarks
   * Data catalog entity ID. Currently, only DLF and StarRocks types are supported. You can refer to the response of the ListCatalogs operation and [the description of metadata entity concepts.](https://help.aliyun.com/document_detail/2880092.html)
   * 
   * *   For the DLF type, the format is `dlf-catalog::catalog_id`.
   * *   For the StarRocks type, the format is `starrocks-catalog:(instance_id|encoded_jdbc_url):catalog_name`.
   * 
   * >  Parameter descriptions:\\
   * `catalog_id`: The DLF catalog ID.\\
   * `instance_id`: The instance ID, required for the data source registered in instance mode.\\
   * `encoded_jdbc_url`: The JDBC connection string that has been URL encoded, required for the data source registered via a connection string.\\
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

