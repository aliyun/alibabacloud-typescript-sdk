// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDBInstanceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The endpoint.
   * 
   * @example
   * cc-bp100p4q1g9z3****-clickhouse.clickhouseserver.rds.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * cc-bp100p4q1g9z3****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 21154955706****
   */
  orderId?: number;
  static names(): { [key: string]: string } {
    return {
      connectionString: 'ConnectionString',
      DBInstanceId: 'DBInstanceId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionString: 'string',
      DBInstanceId: 'string',
      orderId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response parameters.
   */
  data?: CreateDBInstanceResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F5178C10-1407-4987-9133-DE4DC9119F75
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
      data: CreateDBInstanceResponseBodyData,
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

