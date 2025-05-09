// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataSourceSharedRulesResponseBodyDataSourceSharedRules extends $dara.Model {
  /**
   * @remarks
   * The time when the rule was created. This value is a UNIX timestamp.
   * 
   * @example
   * 1724379762000
   */
  createTime?: number;
  /**
   * @remarks
   * The ID of the user who creates the rule.
   * 
   * @example
   * 1
   */
  createUser?: string;
  /**
   * @remarks
   * The data source ID. You can call the [ListDataSources](https://help.aliyun.com/document_detail/211431.html) operation to query the ID.
   * 
   * @example
   * 1
   */
  dataSourceId?: number;
  /**
   * @remarks
   * The environment to which the target data source belongs. The values are as follows:
   * - Dev: the development environment.
   * - Prod: the production environment.
   * 
   * @example
   * Dev
   */
  envType?: string;
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The name of the data source in the destination workspace.
   * 
   * @example
   * targetProject.datasource
   */
  sharedDataSourceName?: string;
  /**
   * @remarks
   * The user in the workspace to which the data source is shared. If the data source is shared to the entire workspace, this parameter is left empty.
   * 
   * @example
   * 1
   */
  sharedUser?: string;
  /**
   * @remarks
   * The ID of the workspace with which the data source is associated.
   * 
   * @example
   * 1
   */
  sourceProjectId?: number;
  /**
   * @remarks
   * The ID of the workspace to which the data source is shared.
   * 
   * @example
   * 1
   */
  targetProjectId?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      dataSourceId: 'DataSourceId',
      envType: 'EnvType',
      id: 'Id',
      sharedDataSourceName: 'SharedDataSourceName',
      sharedUser: 'SharedUser',
      sourceProjectId: 'SourceProjectId',
      targetProjectId: 'TargetProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      createUser: 'string',
      dataSourceId: 'number',
      envType: 'string',
      id: 'number',
      sharedDataSourceName: 'string',
      sharedUser: 'string',
      sourceProjectId: 'number',
      targetProjectId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

