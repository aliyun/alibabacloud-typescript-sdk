// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRobotCallDialogResponseBodyData extends $dara.Model {
  content?: string;
  /**
   * @example
   * normal
   */
  nodeType?: string;
  /**
   * @example
   * robot
   */
  role?: string;
  tag?: string;
  /**
   * @example
   * 1621483557000
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      nodeType: 'NodeType',
      role: 'Role',
      tag: 'Tag',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      nodeType: 'string',
      role: 'string',
      tag: 'string',
      time: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

