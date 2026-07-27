// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteQualityRelativeNodeRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the engine or data source. Valid values:
   * 
   * - cdh
   * 
   * - analyticdb_for_mysql
   * 
   * - odps
   * 
   * - emr
   * 
   * - hadoop
   * 
   * - holodb
   * 
   * - hybriddb_for_postgresql
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
   * The node ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 156234
   */
  nodeId?: number;
  /**
   * @remarks
   * The workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  projectId?: number;
  /**
   * @remarks
   * The name of the workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * autotest
   */
  projectName?: string;
  /**
   * @remarks
   * The table name.
   * 
   * This parameter is required.
   * 
   * @example
   * dual
   */
  tableName?: string;
  /**
   * @remarks
   * The ID of the workspace that contains the associated scheduling node.
   * 
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  targetNodeProjectId?: number;
  /**
   * @remarks
   * The name of the workspace that contains the associated scheduling node.
   * 
   * This parameter is required.
   * 
   * @example
   * autotest
   */
  targetNodeProjectName?: string;
  static names(): { [key: string]: string } {
    return {
      envType: 'EnvType',
      matchExpression: 'MatchExpression',
      nodeId: 'NodeId',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      tableName: 'TableName',
      targetNodeProjectId: 'TargetNodeProjectId',
      targetNodeProjectName: 'TargetNodeProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      envType: 'string',
      matchExpression: 'string',
      nodeId: 'number',
      projectId: 'number',
      projectName: 'string',
      tableName: 'string',
      targetNodeProjectId: 'number',
      targetNodeProjectName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

