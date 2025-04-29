// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeNetworkInterfaceAttributeResponseBodyAttachmentMemberNetworkInterfaceIds } from "./DescribeNetworkInterfaceAttributeResponseBodyAttachmentMemberNetworkInterfaceIds";


export class DescribeNetworkInterfaceAttributeResponseBodyAttachment extends $dara.Model {
  /**
   * @remarks
   * >  This parameter is in invitational preview and unavailable for general users.
   * 
   * @example
   * hide
   */
  deviceIndex?: number;
  /**
   * @remarks
   * >  This parameter is in invitational preview and unavailable for general users.
   * 
   * @example
   * hide
   */
  instanceId?: string;
  /**
   * @remarks
   * >  This parameter is in invitational preview and unavailable for general users.
   */
  memberNetworkInterfaceIds?: DescribeNetworkInterfaceAttributeResponseBodyAttachmentMemberNetworkInterfaceIds;
  /**
   * @remarks
   * The index of the network interface controller (NIC).
   * 
   * *   If the ENI is in the Available state or if no NIC index was specified when the ENI was attached, this parameter has no value.
   * *   If the ENI is in the InUse state and an NIC index was specified when the ENI was attached, the specified NIC index is returned as the value of this parameter.
   * 
   * @example
   * 0
   */
  networkCardIndex?: number;
  /**
   * @remarks
   * >  This parameter is in invitational preview and unavailable for general users.
   * 
   * @example
   * hide
   */
  trunkNetworkInterfaceId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceIndex: 'DeviceIndex',
      instanceId: 'InstanceId',
      memberNetworkInterfaceIds: 'MemberNetworkInterfaceIds',
      networkCardIndex: 'NetworkCardIndex',
      trunkNetworkInterfaceId: 'TrunkNetworkInterfaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceIndex: 'number',
      instanceId: 'string',
      memberNetworkInterfaceIds: DescribeNetworkInterfaceAttributeResponseBodyAttachmentMemberNetworkInterfaceIds,
      networkCardIndex: 'number',
      trunkNetworkInterfaceId: 'string',
    };
  }

  validate() {
    if(this.memberNetworkInterfaceIds && typeof (this.memberNetworkInterfaceIds as any).validate === 'function') {
      (this.memberNetworkInterfaceIds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

