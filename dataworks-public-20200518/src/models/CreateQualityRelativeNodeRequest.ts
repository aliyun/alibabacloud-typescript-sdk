// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateQualityRelativeNodeRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the compute engine or data source.
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
   * The node ID. You can call the [ListNodes](https://help.aliyun.com/document_detail/173979.html) operation to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 12321
   */
  nodeId?: number;
  /**
   * @remarks
   * The workspace ID.
   * 
   * This parameter is required.
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
  /**
   * @remarks
   * The ID of the workspace to which the node belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  targetNodeProjectId?: number;
  /**
   * @remarks
   * The name of the workspace to which the node to be associated with the partition filter expression belongs.
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

