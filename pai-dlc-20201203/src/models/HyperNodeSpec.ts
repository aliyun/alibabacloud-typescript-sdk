// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HyperNodeSpec extends $dara.Model {
  /**
   * @remarks
   * The name of the HyperNode.
   * 
   * @example
   * mg1234567
   */
  hyperNodeName?: string;
  /**
   * @remarks
   * The comma-separated names of the specified nodes in the HyperNode. If you leave this parameter empty, all nodes in the HyperNode are specified.
   * 
   * @example
   * lingjxxxxxxxx
   */
  nodeNames?: string;
  static names(): { [key: string]: string } {
    return {
      hyperNodeName: 'HyperNodeName',
      nodeNames: 'NodeNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hyperNodeName: 'string',
      nodeNames: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

