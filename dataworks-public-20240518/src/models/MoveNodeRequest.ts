// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MoveNodeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the node.
   * 
   * This parameter is required.
   * 
   * @example
   * 652567824470354XXXX
   */
  id?: number;
  /**
   * @remarks
   * The path to which you want to move the node. You do not need to specify a node name in the path.
   * 
   * For example, if you want to move the test node to root/demo/test, you must set this parameter to root/demo.
   * 
   * This parameter is required.
   * 
   * @example
   * root/demo
   */
  path?: string;
  /**
   * @remarks
   * The DataWorks workspace ID. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace page to query the ID.
   * 
   * You can use this parameter to specify the DataWorks workspace on which you want to perform the API operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      path: 'Path',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      path: 'string',
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

