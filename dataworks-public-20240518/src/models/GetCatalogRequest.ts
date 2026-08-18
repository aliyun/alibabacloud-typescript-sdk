// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCatalogRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the data catalog entity. Currently, DLF and StarRocks types are supported. You can obtain the ID from the response of the ListCatalogs operation. For more information, see [Metadata entity concepts](https://help.aliyun.com/document_detail/2880092.html).
   * 
   * 
   * - For the DLF type, the format is `dlf-catalog::catalog_id`.
   * 
   * - For the StarRocks type, the format is `starrocks-catalog:(instance_id|encoded_jdbc_url):catalog_name`.
   * 
   * > Where  
   * `catalog_id`: the ID of the DLF catalog.  
   * `instance_id`: the instance ID, which is required when the data source is registered in instance mode.  
   * `encoded_jdbc_url`: the URL-encoded JDBC connection string, which is required when the data source is registered in connection string mode.  
   * `catalog_name`: the name of the StarRocks catalog.
   * 
   * This parameter is required.
   * 
   * @example
   * dlf-catalog::catalog_id
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

