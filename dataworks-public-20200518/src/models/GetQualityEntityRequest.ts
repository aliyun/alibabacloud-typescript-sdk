// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQualityEntityRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the engine or data source. Valid values:
   * 
   * - `cdh`
   * 
   * - `analyticdb_for_mysql`
   * 
   * - `odps`
   * 
   * - `emr`
   * 
   * - `hadoop`
   * 
   * - `holodb`
   * 
   * - `hybriddb_for_postgresql`
   * 
   * This parameter is required.
   * 
   * @example
   * odps
   */
  envType?: string;
  /**
   * @remarks
   * The partition expression.
   * 
   * @example
   * dt=$[yyyymmdd]
   */
  matchExpression?: string;
  /**
   * @remarks
   * The ID of the DataWorks workspace. To find the workspace ID, log in to the [DataWorks Console](https://workbench.data.aliyun.com/console) and go to the Workspace Configurations page.
   * 
   * @example
   * 123456
   */
  projectId?: number;
  /**
   * @remarks
   * The name of the engine or data source. You can find this name on the Data Source Configuration page.
   * 
   * This parameter is required.
   * 
   * @example
   * autotest
   */
  projectName?: string;
  /**
   * @remarks
   * The name of the partitioned table. You can call the [GetMetaTablePartition](https://help.aliyun.com/document_detail/173923.html) operation to get the table name.
   * 
   * This parameter is required.
   * 
   * @example
   * dual
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      envType: 'EnvType',
      matchExpression: 'MatchExpression',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      envType: 'string',
      matchExpression: 'string',
      projectId: 'number',
      projectName: 'string',
      tableName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

