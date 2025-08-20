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

export class GetSparkTemplateFileContentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: GetSparkTemplateFileContentResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D65A809F-34CE-4550-9BC1-0ED21ETG380
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetSparkTemplateFileContentResponseBodyData,
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

