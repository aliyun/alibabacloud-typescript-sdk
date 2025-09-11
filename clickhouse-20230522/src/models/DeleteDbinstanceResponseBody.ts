// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDBInstanceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * cc-bp100p4q1g9z3****
   */
  DBInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDBInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: DeleteDBInstanceResponseBodyData;
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
      data: DeleteDBInstanceResponseBodyData,
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

