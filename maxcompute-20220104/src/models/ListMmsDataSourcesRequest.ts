// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMmsDataSourcesRequest extends $dara.Model {
  /**
   * @example
   * demo
   */
  name?: string;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * cn-shanghai
   */
  region?: string;
  /**
   * @example
   * BIGQUERY
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      pageNum: 'pageNum',
      pageSize: 'pageSize',
      region: 'region',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      pageNum: 'number',
      pageSize: 'number',
      region: 'string',
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

