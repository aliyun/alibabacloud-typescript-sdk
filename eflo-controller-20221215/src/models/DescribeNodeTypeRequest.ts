// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNodeTypeRequest extends $dara.Model {
  /**
   * @remarks
   * The node scaling mode.
   * 
   * @example
   * standard
   */
  nodeType?: string;
  static names(): { [key: string]: string } {
    return {
      nodeType: 'NodeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

