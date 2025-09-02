// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OfflineNodeRequest extends $dara.Model {
  /**
   * @remarks
   * The node ID. You can call the [ListNodes](https://help.aliyun.com/document_detail/173979.html) operation to obtain the node ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  nodeId?: number;
  /**
   * @remarks
   * The DataWorks workspace ID. You can call the [ListProjects](https://help.aliyun.com/document_detail/178393.html) operation to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 9527
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      nodeId: 'NodeId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeId: 'number',
      projectId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

