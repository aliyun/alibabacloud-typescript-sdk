// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBInstanceConnectionStringRequest extends $dara.Model {
  /**
   * @remarks
   * Idempotence check. For more information, see [How to Ensure Idempotence](https://help.aliyun.com/document_detail/327176.html).
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88**********
   */
  clientToken?: string;
  /**
   * @remarks
   * The endpoint prefix of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-test
   */
  connectionStringPrefix?: string;
  /**
   * @remarks
   * The current endpoint of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-t4n2qg19bnn98****-master.gpdb.rds.aliyuncs.com
   */
  currentConnectionString?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-t4n2qg19bnn98****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The port number. Example: 5432.
   * 
   * This parameter is required.
   * 
   * @example
   * 5432
   */
  port?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      connectionStringPrefix: 'ConnectionStringPrefix',
      currentConnectionString: 'CurrentConnectionString',
      DBInstanceId: 'DBInstanceId',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      connectionStringPrefix: 'string',
      currentConnectionString: 'string',
      DBInstanceId: 'string',
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

