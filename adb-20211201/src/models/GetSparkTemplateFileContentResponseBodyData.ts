// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSparkTemplateFileContentResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The application type. Valid values:
   * 
   * *   **SQL**
   * *   **STREAMING**
   * *   **BATCH**
   * 
   * @example
   * SQL
   */
  appType?: string;
  /**
   * @remarks
   * The content of the application template.
   * 
   * @example
   * set spark.driver.resourceSpec=medium;set spark.executor.instances=2;set spark.executor.resourceSpec=medium;set spark.app.name=Spark SQL Test;
   */
  content?: string;
  /**
   * @remarks
   * The application template ID.
   * 
   * @example
   * 725204
   */
  id?: number;
  /**
   * @remarks
   * The name of the resource group.
   * 
   * @example
   * test
   */
  resourceGroupName?: string;
  /**
   * @remarks
   * The file type. Valid values:
   * 
   * *   **folder**
   * *   **file**
   * 
   * @example
   * file
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      appType: 'AppType',
      content: 'Content',
      id: 'Id',
      resourceGroupName: 'ResourceGroupName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appType: 'string',
      content: 'string',
      id: 'number',
      resourceGroupName: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

