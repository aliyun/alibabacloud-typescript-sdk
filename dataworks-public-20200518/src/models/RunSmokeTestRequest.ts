// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunSmokeTestRequest extends $dara.Model {
  /**
   * @remarks
   * The data timestamp.
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
   * The node ID. You can call the [ListNodes](https://help.aliyun.com/document_detail/173979.html) operation to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  nodeId?: number;
  /**
   * @remarks
   * The parameters related to the node. Set this parameter to a JSON string. A key in the string indicates a parameter, and a value in the string indicates the value of the related parameter.
   * 
   * @example
   * bizdate=$bizdate tbods=$tbods
   */
  nodeParams?: string;
  /**
   * @remarks
   * The environment of the workspace. Valid values: PROD and DEV. The value PROD indicates the production environment, and the value DEV indicates the development environment. A workspace in basic mode does not have a development environment. For more information, see [Differences between workspaces in basic mode and workspaces in standard mode](https://help.aliyun.com/document_detail/85772.html).
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

