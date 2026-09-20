// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunSmokeTestRequest extends $dara.Model {
  /**
   * @remarks
   * The business date.
   * 
   * The format is `yyyy-MM-dd HH:mm:ss`. Example: `2020-05-26 00:00:00`.
   * 
   * This parameter is required.
   * 
   * @example
   * 2020-05-26 00:00:00
   */
  bizdate?: string;
  /**
   * @remarks
   * The name of the workflow.
   * 
   * This parameter is required.
   * 
   * @example
   * xm_create_test
   */
  name?: string;
  /**
   * @remarks
   * The ID of the node. You can call the [ListNodes](https://help.aliyun.com/document_detail/173979.html) operation to obtain the node ID.
   * 
   * Full retrieval path: first call ListProjects to obtain the ProjectId, then call ListNodes, and obtain the node ID from Data.Nodes[].NodeId.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  nodeId?: number;
  /**
   * @remarks
   * The parameters of the node. This parameter is configured as a JSON string. The key is the node ID, and the value is the actual parameter value.
   * 
   * @example
   * bizdate=$bizdate tbods=$tbods
   */
  nodeParams?: string;
  /**
   * @remarks
   * The environment of the workspace. Valid values:
   * 
   * - PROD: production environment.
   * - DEV: development environment.
   * 
   * Workspaces in basic mode do not have a development environment. For more information, see [Basic mode and standard mode](https://help.aliyun.com/document_detail/85772.html).
   * 
   * This parameter is required.
   * 
   * @example
   * PROD
   */
  projectEnv?: string;
  static names(): { [key: string]: string } {
    return {
      bizdate: 'Bizdate',
      name: 'Name',
      nodeId: 'NodeId',
      nodeParams: 'NodeParams',
      projectEnv: 'ProjectEnv',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizdate: 'string',
      name: 'string',
      nodeId: 'number',
      nodeParams: 'string',
      projectEnv: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

