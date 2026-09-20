// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQualityEntityRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the engine or data source. Valid values:
   * - cdh
   * - analyticdb_for_mysql
   * - odps
   * - emr
   * - hadoop
   * - holodb
   * - hybriddb_for_postgresql
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
   * The ID of the DataWorks workspace. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the workspace configuration page to obtain the workspace ID.
   * 
   * @example
   * 123456
   */
  projectId?: number;
  /**
   * @remarks
   * The name of the engine or data source. You can obtain the name from the datasource config.
   * 
   * This parameter is required.
   * 
   * @example
   * autotest
   */
  projectName?: string;
  /**
   * @remarks
   * The name of the partitioned table. You can call [GetMetaTablePartition](https://help.aliyun.com/document_detail/173923.html) to query the partitioned table name.
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

