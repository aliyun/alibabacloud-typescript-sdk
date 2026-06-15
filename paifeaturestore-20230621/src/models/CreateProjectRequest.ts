// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateProjectRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the project. This description is displayed in the PAI console.
   * 
   * @example
   * This is a test.
   */
  description?: string;
  /**
   * @remarks
   * The name of the project. The name must be unique within the instance. It must be 2 to 18 characters long, begin with a letter, and contain only letters, digits, and underscores (_). Regex: ^[a-zA-Z][a-zA-Z0-9_]+$.
   * 
   * This parameter is required.
   * 
   * @example
   * project1
   */
  name?: string;
  /**
   * @remarks
   * The ID of the offline data source, which must be of the **MaxCompute** type. You can call the ListDatasources operation to obtain this ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 4
   */
  offlineDatasourceId?: string;
  /**
   * @remarks
   * The retention period in days for offline tables created by FeatureStore. This setting does not affect existing tables registered with the RegisterTable operation. A default value of 0 means the tables are never automatically deleted.
   * 
   * @example
   * 90
   */
  offlineLifeCycle?: number;
  /**
   * @remarks
   * The ID of the online data source. The data source type must be **Hologres**, **Tablestore**, or **FeatureDB**. You can call the ListDatasources operation to obtain this ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  onlineDatasourceId?: string;
  /**
   * @remarks
   * The ID of the PAI workspace. You can call the [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html) operation to obtain this ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 324
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      offlineDatasourceId: 'OfflineDatasourceId',
      offlineLifeCycle: 'OfflineLifeCycle',
      onlineDatasourceId: 'OnlineDatasourceId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      offlineDatasourceId: 'string',
      offlineLifeCycle: 'number',
      onlineDatasourceId: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

