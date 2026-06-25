// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDatasourceRequest extends $dara.Model {
  /**
   * @remarks
   * Cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * xxljob-b6ec1xxxx
   */
  clusterId?: string;
  /**
   * @remarks
   * Connection parameters of the data source, in JSON format
   * 
   * This parameter is required.
   * 
   * @example
   * {"host":"rm-bp1f03mxxxxx.mysql.rds.aliyuncs.com","port":3306,"userName":"test01","database":"test01","other":{"useSSL":"false"}}
   */
  connectionParams?: string;
  /**
   * @remarks
   * Datasource Name
   * 
   * @example
   * my first datasource
   */
  description?: string;
  /**
   * @remarks
   * Datasource Name
   * 
   * This parameter is required.
   * 
   * @example
   * myDatasouce
   */
  name?: string;
  /**
   * @remarks
   * Database password
   * 
   * This parameter is required.
   * 
   * @example
   * ***
   */
  password?: string;
  /**
   * @remarks
   * Data Source Type  
   * - 0: MySQL  
   * - 1: PostgreSQL
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      connectionParams: 'ConnectionParams',
      description: 'Description',
      name: 'Name',
      password: 'Password',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      connectionParams: 'string',
      description: 'string',
      name: 'string',
      password: 'string',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

