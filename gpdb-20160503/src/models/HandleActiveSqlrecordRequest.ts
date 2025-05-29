// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HandleActiveSQLRecordRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-bp***************
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The type of the operation on the process ID. Valid values:
   * 
   * *   **0**: cancel.
   * *   **1**: terminate.
   * *   **2**: forcefully terminate.
   * 
   * @example
   * 0
   */
  operateType?: number;
  /**
   * @remarks
   * The process IDs. A process ID is a unique identifier of a query.
   * 
   * This parameter is required.
   * 
   * @example
   * "3003925,3003928"
   */
  pids?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      operateType: 'OperateType',
      pids: 'Pids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      operateType: 'number',
      pids: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

