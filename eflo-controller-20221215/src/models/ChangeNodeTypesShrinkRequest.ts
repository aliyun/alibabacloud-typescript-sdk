// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeNodeTypesShrinkRequest extends $dara.Model {
  nodeIdsShrink?: string;
  /**
   * @example
   * standard
   */
  nodeType?: string;
  static names(): { [key: string]: string } {
    return {
      nodeIdsShrink: 'NodeIds',
      nodeType: 'NodeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeIdsShrink: 'string',
      nodeType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

