// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWorkspaceQueuesResponseBodyQueuesAllowActions extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of a behavior.
   * 
   * @example
   * acs:emr::workspaceId:action/create_queue
   */
  actionArn?: string;
  /**
   * @remarks
   * The name of the permission.
   * 
   * @example
   * view
   */
  actionName?: string;
  /**
   * @remarks
   * The dependencies of the operation.
   * 
   * @example
   * ["view"]
   */
  dependencies?: string[];
  /**
   * @remarks
   * The description of the operation.
   * 
   * @example
   * 文件目录遍历、文件浏览
   */
  description?: string;
  /**
   * @remarks
   * The display name of the permission.
   * 
   * @example
   * 文件目录遍历、文件浏览
   */
  displayName?: string;
  static names(): { [key: string]: string } {
    return {
      actionArn: 'actionArn',
      actionName: 'actionName',
      dependencies: 'dependencies',
      description: 'description',
      displayName: 'displayName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionArn: 'string',
      actionName: 'string',
      dependencies: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
      displayName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dependencies)) {
      $dara.Model.validateArray(this.dependencies);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

