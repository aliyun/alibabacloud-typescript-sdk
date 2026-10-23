// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RebootCloudPhoneNodesRequest extends $dara.Model {
  /**
   * @example
   * false
   */
  force?: boolean;
  /**
   * @example
   * cpn-05e4d1cec2urdh1j****
   */
  nodeIds?: string[];
  static names(): { [key: string]: string } {
    return {
      force: 'Force',
      nodeIds: 'NodeIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      force: 'boolean',
      nodeIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.nodeIds)) {
      $dara.Model.validateArray(this.nodeIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

