// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBNodeRequestDBNode extends $dara.Model {
  /**
   * @remarks
   * The specification information about the node.
   * 
   * @example
   * mysql.n2.medium.xc
   */
  classCode?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * rn-6256r4a87xvv7he5p
   */
  nodeId?: string;
  static names(): { [key: string]: string } {
    return {
      classCode: 'classCode',
      nodeId: 'nodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classCode: 'string',
      nodeId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

