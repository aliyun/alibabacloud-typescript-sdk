// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataSourceTablesRequest extends $dara.Model {
  /**
   * @remarks
   * The parameters for the data source. The value must be a URL-encoded JSON string.
   * 
   * The parameters vary based on the data source type. For more information, see:
   * 
   * - [rds](https://help.aliyun.com/document_detail/170005.html)
   * 
   * - [polardb](https://help.aliyun.com/document_detail/170005.html)
   * 
   * - [odps](https://help.aliyun.com/document_detail/170005.html)
   * 
   * - [mysql](https://help.aliyun.com/document_detail/173627.html)
   * 
   * - [drds](https://help.aliyun.com/document_detail/173627.html)
   * 
   * This parameter is required.
   * 
   * @example
   * -
   */
  params?: string;
  static names(): { [key: string]: string } {
    return {
      params: 'params',
    };
  }

  static types(): { [key: string]: any } {
    return {
      params: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

