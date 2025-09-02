// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateQualityEntityRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * The value 0 indicates that the partition filter expression is at the SQL level, and the system checks data quality after each SQL statement is executed.
   * 
   * * 0
   * * 1
   * 
   * @example
   * 0
   */
  entityLevel?: number;
  /**
   * @remarks
   * The type of the compute engine or data source.
   * 
   * Valid values:
   * 
   * *   odps
   * *   emr
   * *   hadoop
   * *   cdh
   * *   analyticdb_for_mysql
   * *   hybriddb_for_postgresql
   * *   holodb
   * 
   * This parameter is required.
   * 
   * @example
   * ODPS
   */
  envType?: string;
  /**
   * @remarks
   * The partition filter expression.
   * 
   * This parameter is required.
   * 
   * @example
   * dt=$[yyyymmdd]
   */
  matchExpression?: string;
  /**
   * @remarks
   * The DataWorks workspace ID. You can log on to the DataWorks console to query the ID.
   * 
   * @example
   * 123
   */
  projectId?: number;
  /**
   * @remarks
   * The name of the compute engine or data source.
   * 
   * This parameter is required.
   * 
   * @example
   * autotest
   */
  projectName?: string;
  /**
   * @remarks
   * The name of the table.
   * 
   * This parameter is required.
   * 
   * @example
   * dual
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      entityLevel: 'EntityLevel',
      envType: 'EnvType',
      matchExpression: 'MatchExpression',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityLevel: 'number',
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

