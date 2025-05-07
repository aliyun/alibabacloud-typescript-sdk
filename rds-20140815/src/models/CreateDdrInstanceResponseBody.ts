// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDdrInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The endpoint that is used to connect to the destination instance.
   * 
   * >  The **DBInstanceNetType** parameter indicates whether the endpoint is internal or public.
   * 
   * @example
   * rm-xxxxx.mysql.rds.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @remarks
   * The destination instance ID.
   * 
   * @example
   * rm-xxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 2038691xxxxx
   */
  orderId?: string;
  /**
   * @remarks
   * The port number that is used to connect to the destination instance.
   * 
   * > **DBInstanceNetType** indicates whether the port is internal or public.
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

