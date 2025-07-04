// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAdvanceConfigsRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the data source.
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
   * Specifies whether the OpenSearch Vector Search Edition instance is of the new version.
   * 
   * @example
   * true
   */
  newMode?: boolean;
  pageNumber?: string;
  pageSize?: string;
  /**
   * @remarks
   * The type of advanced configurations that you want to query. Valid values: - online -offline (default)
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

