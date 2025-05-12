// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNodeInfoForPodRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the node for this operation.
   * 
   * This parameter is required.
   * 
   * @example
   * node-be70****
   */
  nodeId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      nodeId: 'NodeId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

