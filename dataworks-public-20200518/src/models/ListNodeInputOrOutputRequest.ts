// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNodeInputOrOutputRequest extends $dara.Model {
  /**
   * @remarks
   * The type of node that you want to query. Valid values:
   * 
   * *   input: ancestor node
   * *   output: descendant node
   * 
   * This parameter is required.
   * 
   * @example
   * output
   */
  ioType?: string;
  /**
   * @remarks
   * The node ID. You can call the [ListNodes](https://help.aliyun.com/document_detail/173979.html) operation to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 12314567
   */
  nodeId?: number;
  /**
   * @remarks
   * The environment of the workspace. Valid values: DEV and PROD.
   * 
   * This parameter is required.
   * 
   * @example
   * PROD
   */
  projectEnv?: string;
  static names(): { [key: string]: string } {
    return {
      ioType: 'IoType',
      nodeId: 'NodeId',
      projectEnv: 'ProjectEnv',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ioType: 'string',
      nodeId: 'number',
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

