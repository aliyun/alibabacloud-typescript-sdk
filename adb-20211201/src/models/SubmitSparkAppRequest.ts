// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitSparkAppRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the client. The value can be up to 64 characters in length.
   * 
   * @example
   * CONSOLE
   */
  agentSource?: string;
  /**
   * @remarks
   * The version of the client. The value can be up to 64 characters in length.
   * 
   * @example
   * 1.091
   */
  agentVersion?: string;
  /**
   * @remarks
   * The name of the application. The value can be up to 64 characters in length.
   * 
   * @example
   * TestApp
   */
  appName?: string;
  /**
   * @remarks
   * The type of the application. Valid values:
   * 
   * *   **SQL**
   * *   **STREAMING**
   * *   **BATCH** (default)
   * 
   * @example
   * SQL
   */
  appType?: string;
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition cluster.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/454250.html) operation to query the IDs of all AnalyticDB for MySQL clusters within a region.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp11q28kvl688****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The data of the application template.
   * 
   * > For information about the application template configuration, see [Spark application configuration guide](https://help.aliyun.com/document_detail/452402.html).
   * 
   * This parameter is required.
   * 
   * @example
   * conf spark.driver.resourceSpec=small; conf spark.executor.instances=1; conf spark.executor.resourceSpec=small; conf spark.app.name=TestApp;
   */
  data?: string;
  /**
   * @remarks
   * The name of the job resource group.
   * 
   * >  You can call the [DescribeDBResourceGroup](https://help.aliyun.com/document_detail/612410.html) operation to query the name of a resource group within a cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * adb
   */
  resourceGroupName?: string;
  /**
   * @remarks
   * The ID of the application template.
   * 
   * > You can call the [GetSparkTemplateFullTree](https://help.aliyun.com/document_detail/456205.html) operation to query the application template ID.
   * 
   * @example
   * 15
   */
  templateFileId?: number;
  static names(): { [key: string]: string } {
    return {
      agentSource: 'AgentSource',
      agentVersion: 'AgentVersion',
      appName: 'AppName',
      appType: 'AppType',
      DBClusterId: 'DBClusterId',
      data: 'Data',
      resourceGroupName: 'ResourceGroupName',
      templateFileId: 'TemplateFileId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentSource: 'string',
      agentVersion: 'string',
      appName: 'string',
      appType: 'string',
      DBClusterId: 'string',
      data: 'string',
      resourceGroupName: 'string',
      templateFileId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

