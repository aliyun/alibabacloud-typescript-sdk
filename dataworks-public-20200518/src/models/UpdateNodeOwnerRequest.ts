// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateNodeOwnerRequest extends $dara.Model {
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
   * The ID of the Alibaba Cloud account used by the node owner. You can log on to the DataWorks console and move the pointer over the profile picture in the upper-right corner to view the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 19337906836551
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      nodeId: 'NodeId',
      projectEnv: 'ProjectEnv',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeId: 'number',
      projectEnv: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

