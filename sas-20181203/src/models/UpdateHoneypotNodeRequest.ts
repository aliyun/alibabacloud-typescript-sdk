// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateHoneypotNodeRequest extends $dara.Model {
  /**
   * @remarks
   * The number of available probes.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  availableProbeNum?: number;
  /**
   * @remarks
   * The ID of the management node.
   * 
   * > You can call the [ListHoneypotNode](~~ListHoneypotNode~~) operation to query the IDs of management nodes.
   * 
   * This parameter is required.
   * 
   * @example
   * 67ab3f4c-3db5-4fc3-b51f-00f8bfabfa08
   */
  nodeId?: string;
  /**
   * @remarks
   * The name of the management node.
   * 
   * This parameter is required.
   * 
   * @example
   * HoneypotNodeTest
   */
  nodeName?: string;
  /**
   * @remarks
   * The CIDR blocks that are allowed to access the management node.
   */
  securityGroupProbeIpList?: string[];
  static names(): { [key: string]: string } {
    return {
      availableProbeNum: 'AvailableProbeNum',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      securityGroupProbeIpList: 'SecurityGroupProbeIpList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableProbeNum: 'number',
      nodeId: 'string',
      nodeName: 'string',
      securityGroupProbeIpList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.securityGroupProbeIpList)) {
      $dara.Model.validateArray(this.securityGroupProbeIpList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

