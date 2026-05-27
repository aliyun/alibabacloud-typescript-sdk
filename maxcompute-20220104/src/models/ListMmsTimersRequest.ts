// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMmsTimersRequest extends $dara.Model {
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
   * test_db_1
   */
  srcDbName?: string;
  /**
   * @example
   * test_table_1
   */
  srcTableName?: string;
  /**
   * @example
   * false
   */
  stopped?: boolean;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      pageNum: 'pageNum',
      pageSize: 'pageSize',
      srcDbName: 'srcDbName',
      srcTableName: 'srcTableName',
      stopped: 'stopped',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      pageNum: 'number',
      pageSize: 'number',
      srcDbName: 'string',
      srcTableName: 'string',
      stopped: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

