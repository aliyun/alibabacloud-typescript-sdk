// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQualityEntityRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the compute engine or data source. Valid values:
   * 
   * *   cdh
   * *   analyticdb_for_mysql
   * *   odps
   * *   emr
   * *   hadoop
   * *   holodb
   * *   hybriddb_for_postgresql
   * 
   * This parameter is required.
   * 
   * @example
   * odps
   */
  envType?: string;
  /**
   * @remarks
   * The partition filter expression.
   * 
   * @example
   * dt=$[yyyymmdd]
   */
  matchExpression?: string;
  /**
   * @remarks
   * The DataWorks workspace ID. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace page to query the ID.
   * 
   * @example
   * 12345
   */
  projectId?: number;
  /**
   * @remarks
   * The name of the compute engine instance or data source. You can obtain the name from data source configurations.
   * 
   * This parameter is required.
   * 
   * @example
   * autotest
   */
  projectName?: string;
  /**
   * @remarks
   * The name of the partitioned table. You can call the [GetMetaTablePartition](https://help.aliyun.com/document_detail/173923.html) operation to obtain the name.
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

