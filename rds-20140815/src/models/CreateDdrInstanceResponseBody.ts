// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDdrInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The endpoint of the new instance.
   * > The **DBInstanceNetType** parameter determines whether this endpoint is an internal endpoint or a public endpoint.
   * 
   * @example
   * rm-****.mysql.rds.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @remarks
   * The instance ID of the new instance.
   * 
   * @example
   * rm-****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 2038691****
   */
  orderId?: string;
  /**
   * @remarks
   * The port of the new instance.
   * > The **DBInstanceNetType** parameter determines whether this port is an internal port or a public port.
   * 
   * @example
   * 3306
   */
  port?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E52666CC-330E-418A-8E5B-A19E3FB42D13
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

