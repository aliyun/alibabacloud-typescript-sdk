// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAdvanceConfigsRequest extends $dara.Model {
  /**
   * @remarks
   * The data source name.
   * 
   * @example
   * ha-cn-pl32rf0****_test_api
   */
  dataSourceName?: string;
  /**
   * @remarks
   * The index name.
   * 
   * @example
   * test_api
   */
  indexName?: string;
  /**
   * @remarks
   * Specifies whether to use the new version of the page.
   * 
   * @example
   * true
   */
  newMode?: boolean;
  /**
   * @remarks
   * The page number. The default value is 1.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries to return on each page. The default value is 10.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The type of the advanced configuration. Valid values:
   * \\- online
   * \\- offline (default)
   * 
   * @example
   * online
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceName: 'dataSourceName',
      indexName: 'indexName',
      newMode: 'newMode',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceName: 'string',
      indexName: 'string',
      newMode: 'boolean',
      pageNumber: 'string',
      pageSize: 'string',
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

