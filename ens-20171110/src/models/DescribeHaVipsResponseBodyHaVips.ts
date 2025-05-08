// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeHaVipsResponseBodyHaVipsAssociatedEipAddresses } from "./DescribeHaVipsResponseBodyHaVipsAssociatedEipAddresses";
import { DescribeHaVipsResponseBodyHaVipsAssociatedInstances } from "./DescribeHaVipsResponseBodyHaVipsAssociatedInstances";


export class DescribeHaVipsResponseBodyHaVips extends $dara.Model {
  /**
   * @remarks
   * The elastic IP addresses (EIPs) that are associated with the HAVIP.
   */
  associatedEipAddresses?: DescribeHaVipsResponseBodyHaVipsAssociatedEipAddresses[];
  /**
   * @remarks
   * The information about instances that are associated with the HAVIP.
   */
  associatedInstances?: DescribeHaVipsResponseBodyHaVipsAssociatedInstances[];
  /**
   * @remarks
   * The time when the HAVIP was created.
   * 
   * @example
   * 2023-03-29T11:17:38Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The description of the HAVIP.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-guiyang-14
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The ID of the HAVIP.
   * 
   * @example
   * havip-52y28****
   */
  haVipId?: string;
  /**
   * @remarks
   * The IP address of the HAVIP.
   * 
   * @example
   * 192.XX.XX.5
   */
  ipAddress?: string;
  /**
   * @remarks
   * The name of the HAVIP.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The ID of the network.
   * 
   * @example
   * n-5wtkyrk****
   */
  networkId?: string;
  /**
   * @remarks
   * The status of the HAVIP. Valid values:
   * 
   * *   Creating
   * *   Available
   * *   InUse
   * *   Deleting
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * @example
   * vsw-5yc8d****
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      associatedEipAddresses: 'AssociatedEipAddresses',
      associatedInstances: 'AssociatedInstances',
      creationTime: 'CreationTime',
      description: 'Description',
      ensRegionId: 'EnsRegionId',
      haVipId: 'HaVipId',
      ipAddress: 'IpAddress',
      name: 'Name',
      networkId: 'NetworkId',
      status: 'Status',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associatedEipAddresses: { 'type': 'array', 'itemType': DescribeHaVipsResponseBodyHaVipsAssociatedEipAddresses },
      associatedInstances: { 'type': 'array', 'itemType': DescribeHaVipsResponseBodyHaVipsAssociatedInstances },
      creationTime: 'string',
      description: 'string',
      ensRegionId: 'string',
      haVipId: 'string',
      ipAddress: 'string',
      name: 'string',
      networkId: 'string',
      status: 'string',
      vSwitchId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.associatedEipAddresses)) {
      $dara.Model.validateArray(this.associatedEipAddresses);
    }
    if(Array.isArray(this.associatedInstances)) {
      $dara.Model.validateArray(this.associatedInstances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

