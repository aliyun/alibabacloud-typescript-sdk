// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSetAttachment extends $dara.Model {
  /**
   * @remarks
   * >  This parameter is in invitational preview and is not publicly available.
   * 
   * @example
   * 0
   */
  deviceIndex?: number;
  /**
   * @remarks
   * >  This parameter is in invitational preview and is not publicly available.
   * 
   * @example
   * null
   */
  instanceId?: string;
  /**
   * @remarks
   * The index of the network card.
   * 
   * *   If the ENI is in the Available state or if no network card index was specified when the ENI was attached, this parameter is empty.
   * *   If the ENI is in the InUse state and a network card index was specified when the ENI was attached, the specified network card index is returned as the value of this parameter.
   * 
   * @example
   * 0
   */
  networkCardIndex?: number;
  /**
   * @remarks
   * >  This parameter is in invitational preview and is not publicly available.
   * 
   * @example
   * null
   */
  trunkNetworkInterfaceId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceIndex: 'DeviceIndex',
      instanceId: 'InstanceId',
      networkCardIndex: 'NetworkCardIndex',
      trunkNetworkInterfaceId: 'TrunkNetworkInterfaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceIndex: 'number',
      instanceId: 'string',
      networkCardIndex: 'number',
      trunkNetworkInterfaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

