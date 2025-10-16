// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVpcFirewallTaskRequest extends $dara.Model {
  /**
   * @example
   * test
   */
  content?: string;
  /**
   * @example
   * zh
   */
  lang?: string;
  /**
   * @example
   * 1
   */
  priority?: string;
  /**
   * @remarks
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

