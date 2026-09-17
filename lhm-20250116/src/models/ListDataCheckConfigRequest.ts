// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataCheckConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The source table name for fuzzy search.
   * 
   * @example
   * table_demo
   */
  srcTable?: string;
  /**
   * @remarks
   * The ID of the data validation task.
   * 
   * This parameter is required.
   * 
   * @example
   * 10001
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      pageIndex: 'pageIndex',
      pageSize: 'pageSize',
      srcTable: 'srcTable',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageIndex: 'number',
      pageSize: 'number',
      srcTable: 'string',
      taskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

