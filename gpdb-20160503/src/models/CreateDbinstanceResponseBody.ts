// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDBInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * This parameter is deprecated and will not return a value.
   * 
   * You can use the [DescribeDBInstanceAttribute](https://help.aliyun.com/document_detail/86910.html) interface to view the connection address of the instance.
   * 
   * @example
   * gp-bp12ga6v69h86****.gpdb.rds.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @remarks
   * Instance ID.
   * 
   * @example
   * gp-bp12ga6v69h86****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * Order ID.
   * 
   * @example
   * 111111111111
   */
  orderId?: string;
  /**
   * @remarks
   * This parameter is deprecated and will not return a value.
   * 
   * You can use the [DescribeDBInstanceAttribute](https://help.aliyun.com/document_detail/86910.html) interface to view the port number of the instance.
   * 
   * @example
   * 3432
   */
  port?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 5414A4E5-4C36-4461-95FC-************
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

