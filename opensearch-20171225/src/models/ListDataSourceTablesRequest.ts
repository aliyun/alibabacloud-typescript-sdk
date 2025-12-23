// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataSourceTablesRequest extends $dara.Model {
  /**
   * @remarks
   * The parameters of the data source. The value is a JSON string which must be encoded in the urlencode format.
   * 
   * Different types of data sources use different parameters. For more information, see the following sections of the "DataSource" topic:
   * 
   * *   [rds](https://help.aliyun.com/document_detail/170005.html)
   * *   [polardb](https://help.aliyun.com/document_detail/170005.html)
   * *   [odps](https://help.aliyun.com/document_detail/170005.html)
   * *   [mysql](https://help.aliyun.com/document_detail/173627.html)
   * *   [drds](https://help.aliyun.com/document_detail/173627.html)
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

