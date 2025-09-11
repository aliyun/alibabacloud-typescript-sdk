// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RestartDBInstanceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * cc-bp100p4q1g9z3****
   */
  DBInstanceID?: number;
  /**
   * @remarks
   * The cluster name.
   * 
   * @example
   * test1
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 100001080
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceID: 'DBInstanceID',
      DBInstanceName: 'DBInstanceName',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceID: 'number',
      DBInstanceName: 'string',
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

export class RestartDBInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: RestartDBInstanceResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D0CEC6AC-7760-409A-A0D5-E6CD8660E9CC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: RestartDBInstanceResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

