// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBInstanceConnectionStringResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The connection string.
   * 
   * @example
   * test2.polarx.huhehaote.rds.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * pxc-unrf5ssig0ecg8
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The network type of the connection string.
   * 
   * @example
   * 1
   */
  DBInstanceNetType?: string;
  /**
   * @remarks
   * The port number.
   * 
   * @example
   * 3300
   */
  port?: string;
  static names(): { [key: string]: string } {
    return {
      connectionString: 'ConnectionString',
      DBInstanceName: 'DBInstanceName',
      DBInstanceNetType: 'DBInstanceNetType',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionString: 'string',
      DBInstanceName: 'string',
      DBInstanceNetType: 'string',
      port: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceConnectionStringResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The new connection string information.
   */
  data?: ModifyDBInstanceConnectionStringResponseBodyData;
  /**
   * @remarks
   * The response message. This is typically an error message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID. It is a unique identifier.
   * 
   * @example
   * c3cf535c-a585-11ea-8263-00163e04d3a7
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: ModifyDBInstanceConnectionStringResponseBodyData,
      message: 'string',
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

