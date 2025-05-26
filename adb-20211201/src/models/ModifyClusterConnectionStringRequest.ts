// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyClusterConnectionStringRequest extends $dara.Model {
  /**
   * @remarks
   * The prefix of the public endpoint.
   * 
   * *   The prefix can contain lowercase letters, digits, and hyphens (-). It must start with a lowercase letter.
   * *   The prefix can be up to 30 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * test-123
   */
  connectionStringPrefix?: string;
  /**
   * @remarks
   * The public endpoint of the AnalyticDB for MySQL Data Lakehouse Edition cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp11q28kvl688****.ads.aliyuncs.com
   */
  currentConnectionString?: string;
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp11q28kvl688****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The port number. Set the value to **3306**.
   * 
   * @example
   * 3306
   */
  port?: number;
  static names(): { [key: string]: string } {
    return {
      connectionStringPrefix: 'ConnectionStringPrefix',
      currentConnectionString: 'CurrentConnectionString',
      DBClusterId: 'DBClusterId',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionStringPrefix: 'string',
      currentConnectionString: 'string',
      DBClusterId: 'string',
      port: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

