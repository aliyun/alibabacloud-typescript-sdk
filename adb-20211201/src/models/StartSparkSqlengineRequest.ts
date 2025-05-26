// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartSparkSQLEngineRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration that is required to start the Spark SQL engine. Specify this value in the JSON format. For more information, see [Conf configuration parameters](https://help.aliyun.com/document_detail/471203.html).
   * 
   * @example
   * { "spark.shuffle.timeout": ":0s" }
   */
  config?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-abcd****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The Object Storage Service (OSS) paths of third-party JAR packages that are required to start the Spark SQL engine. Separate multiple OSS paths with commas (,).
   * 
   * @example
   * oss://testBuckname/test.jar,oss://testBuckname/test2.jar
   */
  jars?: string;
  /**
   * @remarks
   * The maximum number of executors that are required to execute SQL statements. Valid values: 1 to 2000. If this value exceeds the total number of executes that are supported by the resource group, the Spark SQL engine fails to be started.
   * 
   * @example
   * 10
   */
  maxExecutor?: number;
  /**
   * @remarks
   * The minimum number of executors that are required to execute SQL statements. Valid values: 0 to 2000. A value of 0 indicates that no executors are permanent if no SQL statements are executed. If this value exceeds the total number of executors that are supported by the resource group, the Spark SQL engine fails to be started. The value must be less than the value of MaxExecutor.
   * 
   * @example
   * 1
   */
  minExecutor?: number;
  /**
   * @remarks
   * The name of the resource group.
   * 
   * This parameter is required.
   * 
   * @example
   * spark-rg-name
   */
  resourceGroupName?: string;
  /**
   * @remarks
   * The maximum number of slots that are required to maintain Spark sessions for executing SQL statements. Valid values: 1 to 500.
   * 
   * @example
   * 100
   */
  slotNum?: number;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      DBClusterId: 'DBClusterId',
      jars: 'Jars',
      maxExecutor: 'MaxExecutor',
      minExecutor: 'MinExecutor',
      resourceGroupName: 'ResourceGroupName',
      slotNum: 'SlotNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      DBClusterId: 'string',
      jars: 'string',
      maxExecutor: 'number',
      minExecutor: 'number',
      resourceGroupName: 'string',
      slotNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

