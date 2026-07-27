// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateQualityEntityRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * 0
   */
  entityLevel?: number;
  /**
   * @remarks
   * The type of the engine or data source. Valid values: ODPS, EMR, CDH, and HOLO.
   * 
   * This parameter is required.
   * 
   * @example
   * ODPS
   */
  envType?: string;
  /**
   * @remarks
   * The partition expression.
   * 
   * This parameter is required.
   * 
   * @example
   * dt=$[yyyymmdd]
   */
  matchExpression?: string;
  /**
   * @remarks
   * The ID of the DataWorks workspace. You can go to the DataWorks console to obtain the workspace ID.
   * 
   * @example
   * 123
   */
  projectId?: number;
  /**
   * @remarks
   * The name of the engine or data source.
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

