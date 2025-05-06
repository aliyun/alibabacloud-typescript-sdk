// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGlobalDatabaseNetworkResponseBodyConnections extends $dara.Model {
  /**
   * @remarks
   * The endpoint URL of the database service.
   * 
   * @example
   * abc.polardb.rds.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @remarks
   * The network type for the database connection.
   * 
   * @example
   * Private
   */
  netType?: string;
  /**
   * @remarks
   * The port number for the database connection.
   * 
   * @example
   * 3306
   */
  port?: string;
  static names(): { [key: string]: string } {
    return {
      connectionString: 'ConnectionString',
      netType: 'NetType',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionString: 'string',
      netType: 'string',
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

