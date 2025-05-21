// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBClusterAccessWhiteListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * rm-uf6wjk5xxxxxxxxxx
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D0CEC6AC-7760-409A-A0D5-E6CD8660E9CC
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

