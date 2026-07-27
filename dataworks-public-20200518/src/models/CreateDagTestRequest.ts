// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDagTestRequest extends $dara.Model {
  /**
   * @remarks
   * The business date.
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
   * The ID of the node.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  nodeId?: number;
  /**
   * @remarks
   * The parameters of the node.
   * 
   * @example
   * bizdate=$bizdate tbods=$tbods
   */
  nodeParams?: string;
  /**
   * @remarks
   * The environment of the workspace. Valid values: PROD and DEV.
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

