// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetApplicationResponseBodyApplicationActionsActionParams } from "./GetApplicationResponseBodyApplicationActionsActionParams";


export class GetApplicationResponseBodyApplicationActions extends $dara.Model {
  /**
   * @remarks
   * 操作名称。
   * 
   * @example
   * START
   */
  actionName?: string;
  /**
   * @remarks
   * 操作参数。
   */
  actionParams?: GetApplicationResponseBodyApplicationActionsActionParams[];
  /**
   * @remarks
   * 命令。
   * 
   * @example
   * START
   */
  command?: string;
  /**
   * @remarks
   * 组件名称。
   * 
   * @example
   * DataNode
   */
  componentName?: string;
  /**
   * @remarks
   * 操作描述。
   * 
   * @example
   * 描述
   */
  description?: string;
  /**
   * @remarks
   * 执行范围。
   * 
   * @example
   * CLUSTER
   */
  runActionScope?: string;
  static names(): { [key: string]: string } {
    return {
      actionName: 'ActionName',
      actionParams: 'ActionParams',
      command: 'Command',
      componentName: 'ComponentName',
      description: 'Description',
      runActionScope: 'RunActionScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionName: 'string',
      actionParams: { 'type': 'array', 'itemType': GetApplicationResponseBodyApplicationActionsActionParams },
      command: 'string',
      componentName: 'string',
      description: 'string',
      runActionScope: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.actionParams)) {
      $dara.Model.validateArray(this.actionParams);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

