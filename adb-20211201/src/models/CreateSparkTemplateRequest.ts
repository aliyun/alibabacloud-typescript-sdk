// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSparkTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The application type. Valid values:
   * 
   * *   **SQL**
   * *   **STREAMING**
   * *   **BATCH**
   * 
   * >  You do not need to specify this parameter when Type is set to folder.
   * 
   * @example
   * SQL
   */
  appType?: string;
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
   * The name of the application template. The name can be up to 64 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * batchfile
   */
  name?: string;
  /**
   * @remarks
   * The ID of the directory to which the application template belongs.
   * 
   * >  You can call the [GetSparkTemplateFolderTree](https://help.aliyun.com/document_detail/456218.html) operation to query the directory ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  parentId?: number;
  /**
   * @remarks
   * The type of the application template. Valid values:
   * 
   * *   **folder**: directory.
   * *   **file**: application.
   * 
   * This parameter is required.
   * 
   * @example
   * file
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      appType: 'AppType',
      DBClusterId: 'DBClusterId',
      name: 'Name',
      parentId: 'ParentId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appType: 'string',
      DBClusterId: 'string',
      name: 'string',
      parentId: 'number',
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

