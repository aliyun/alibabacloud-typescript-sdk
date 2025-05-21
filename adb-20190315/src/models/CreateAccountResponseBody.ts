// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAccountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * @example
   * am-bp1r053byu48p****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2FED790E-FB61-4721-8C1C-07C627FA5A19
   */
  requestId?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 1564657730
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      requestId: 'string',
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

