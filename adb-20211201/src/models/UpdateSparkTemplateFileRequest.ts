// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSparkTemplateFileRequest extends $dara.Model {
  /**
   * @remarks
   * The template data to be updated.
   * 
   * >  If you do not specify this parameter, the application template is not updated. For information about how to configure a Spark application template, see [Configure a Spark application](https://help.aliyun.com/document_detail/452402.html).
   * 
   * @example
   * set spark.driver.resourceSpec=medium;set spark.executor.instances=2;set spark.executor.resourceSpec=medium;set spark.app.name=Spark SQL Test;
   */
  content?: string;
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-pz5vp4585l466****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The application template ID.
   * 
   * >  You can call the [GetSparkTemplateFullTree](https://help.aliyun.com/document_detail/456205.html) operation to query the application template ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 718056
   */
  id?: number;
  /**
   * @remarks
   * The name of the job resource group.
   * 
   * @example
   * adb
   */
  resourceGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      DBClusterId: 'DBClusterId',
      id: 'Id',
      resourceGroupName: 'ResourceGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      DBClusterId: 'string',
      id: 'number',
      resourceGroupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

