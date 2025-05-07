// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateReadOnlyDBInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The internal endpoint that is used to connect to the read-only instance.
   * 
   * @example
   * rr-****.mysql.rds.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @remarks
   * The ID of the read-only instance.
   * 
   * @example
   * rr-uf6wjk5****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The ID of the order.
   * 
   * @example
   * 10078937****
   */
  orderId?: string;
  /**
   * @remarks
   * The internal port number that is used to connect to the read-only instance.
   * 
   * @example
   * 3306
   */
  port?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1E43AAE0-BEE8-43DA-860D-EAF2AA0724DC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      connectionString: 'ConnectionString',
      DBInstanceId: 'DBInstanceId',
      orderId: 'OrderId',
      port: 'Port',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionString: 'string',
      DBInstanceId: 'string',
      orderId: 'string',
      port: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

