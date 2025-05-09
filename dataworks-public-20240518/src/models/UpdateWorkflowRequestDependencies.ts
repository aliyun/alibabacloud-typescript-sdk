// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWorkflowRequestDependencies extends $dara.Model {
  /**
   * @remarks
   * The dependency type. Valid values:
   * 
   * *   CrossCycleDependsOnChildren: cross-cycle dependency on level-1 descendant nodes
   * *   CrossCycleDependsOnSelf: cross-cycle dependency on the current node
   * *   CrossCycleDependsOnOtherNode: cross-cycle dependency on other nodes
   * *   Normal: same-cycle scheduling dependency
   * 
   * This parameter is required.
   * 
   * @example
   * Normal
   */
  type?: string;
  /**
   * @remarks
   * The identifier of the output of the ancestor task. This parameter is returned only if `same-cycle scheduling dependencies` and the node input are configured.
   * 
   * @example
   * pre.odps_sql_demo_0
   */
  upstreamOutput?: string;
  /**
   * @remarks
   * The ancestor task ID. This parameter is returned only if `cross-cycle scheduling dependencies` or `same-cycle scheduling dependencies` and the node input are not configured.
   * 
   * @example
   * 1234
   */
  upstreamTaskId?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      upstreamOutput: 'UpstreamOutput',
      upstreamTaskId: 'UpstreamTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      upstreamOutput: 'string',
      upstreamTaskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

