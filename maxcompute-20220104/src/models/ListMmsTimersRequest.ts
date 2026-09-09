// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMmsTimersRequest extends $dara.Model {
  /**
   * @remarks
   * The timer name.
   * 
   * @example
   * demo
   */
  name?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The source database name.
   * 
   * @example
   * test_db_1
   */
  srcDbName?: string;
  /**
   * @remarks
   * The source table name.
   * 
   * @example
   * test_table_1
   */
  srcTableName?: string;
  /**
   * @remarks
   * Filters timers by their stopped state.
   * 
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

