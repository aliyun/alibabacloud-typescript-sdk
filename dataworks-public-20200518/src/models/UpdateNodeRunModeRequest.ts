// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateNodeRunModeRequest extends $dara.Model {
  /**
   * @remarks
   * The node ID. You can call the [ListNodes](https://help.aliyun.com/document_detail/173979.html) operation to query the node ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  nodeId?: number;
  /**
   * @remarks
   * The environment in which the node runs. Valid values: DEV and PROD. The value DEV indicates the development environment, and the value PROD indicates the production environment.
   * 
   * *   PROD
   * *   DEV
   * 
   * This parameter is required.
   * 
   * @example
   * PROD
   */
  projectEnv?: string;
  /**
   * @remarks
   * The operation that you want to perform on the node. Valid values:
   * 
   * *   0: indicates that you want to unfreeze the node.
   * *   2: indicates that you want to freeze the node.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  schedulerType?: number;
  static names(): { [key: string]: string } {
    return {
      nodeId: 'NodeId',
      projectEnv: 'ProjectEnv',
      schedulerType: 'SchedulerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeId: 'number',
      projectEnv: 'string',
      schedulerType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

