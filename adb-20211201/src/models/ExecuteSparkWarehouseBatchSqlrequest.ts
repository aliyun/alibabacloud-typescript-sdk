// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteSparkWarehouseBatchSQLRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the client.
   * 
   * @example
   * DataWorks
   */
  agency?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp11q28kvl688****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The maximum amount of execution result data that can be written to Object Storage Service (OSS). Unit: MB. Default value: 4096. The size of compressed objects is difficult to estimate. The data that is actually written to OSS is smaller than the specified value.
   * 
   * @example
   * 4096
   */
  executeResultLimit?: number;
  /**
   * @remarks
   * The maximum execution duration. Unit: seconds. If a set of SQL statements fail to be executed for the specified period of time after submission, they are marked as a timeout error. The default value is 360000 seconds, which is equivalent to 100 hours.
   * 
   * @example
   * 3600000
   */
  executeTimeLimitInSeconds?: number;
  /**
   * @remarks
   * The SQL statements that you want to execute in batches. Separate multiple SQL statements with semicolons (;). The execution engine executes the SQL statements in sequence in the same session.
   * 
   * This parameter is required.
   * 
   * @example
   * CREATE TABLE user(id INT, name STRING);
   * INSERT INTO t VALUE(1, \\"Bob\\");
   * SELECT * FROM t;
   */
  query?: string;
  /**
   * @remarks
   * The name of the resource group.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  resourceGroupName?: string;
  /**
   * @remarks
   * The additional runtime parameter. Specify the parameter in the JSON format.
   * 
   * @example
   * {
   *  "OSSURL": "oss://testBucketname/"
   * }
   */
  runtimeConfig?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * adb_demo
   */
  schema?: string;
  static names(): { [key: string]: string } {
    return {
      agency: 'Agency',
      DBClusterId: 'DBClusterId',
      executeResultLimit: 'ExecuteResultLimit',
      executeTimeLimitInSeconds: 'ExecuteTimeLimitInSeconds',
      query: 'Query',
      resourceGroupName: 'ResourceGroupName',
      runtimeConfig: 'RuntimeConfig',
      schema: 'Schema',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agency: 'string',
      DBClusterId: 'string',
      executeResultLimit: 'number',
      executeTimeLimitInSeconds: 'number',
      query: 'string',
      resourceGroupName: 'string',
      runtimeConfig: 'string',
      schema: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

