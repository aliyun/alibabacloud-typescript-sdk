// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVpcFirewallTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The content of the task.
   * 
   * @example
   * test
   */
  content?: string;
  /**
   * @remarks
   * The language of the response message. Valid values:
   * 
   * - **zh** (default): Chinese
   * 
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The priority of the rule.
   * 
   * @example
   * 1
   */
  priority?: string;
  /**
   * @remarks
   * The name of the task.
   * 
   * This parameter is required.
   * 
   * @example
   * sync
   */
  taskAction?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      lang: 'Lang',
      priority: 'Priority',
      taskAction: 'TaskAction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      lang: 'string',
      priority: 'string',
      taskAction: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

