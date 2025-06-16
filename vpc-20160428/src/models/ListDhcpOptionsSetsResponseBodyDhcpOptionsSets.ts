// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDhcpOptionsSetsResponseBodyDhcpOptionsSetsDhcpOptions } from "./ListDhcpOptionsSetsResponseBodyDhcpOptionsSetsDhcpOptions";
import { ListDhcpOptionsSetsResponseBodyDhcpOptionsSetsTags } from "./ListDhcpOptionsSetsResponseBodyDhcpOptionsSetsTags";


export class ListDhcpOptionsSetsResponseBodyDhcpOptionsSets extends $dara.Model {
  /**
   * @remarks
   * The number of VPCs with which the DHCP options set is associated.
   * 
   * @example
   * 2
   */
  associateVpcCount?: number;
  creationTime?: string;
  /**
   * @remarks
   * The configuration information about the DHCP options set.
   */
  dhcpOptions?: ListDhcpOptionsSetsResponseBodyDhcpOptionsSetsDhcpOptions;
  /**
   * @remarks
   * The description of the DHCP options set.
   * 
   * @example
   * test
   */
  dhcpOptionsSetDescription?: string;
  /**
   * @remarks
   * The ID of the DHCP options set.
   * 
   * @example
   * dopt-o6w0df4epg9zo8isy****
   */
  dhcpOptionsSetId?: string;
  /**
   * @remarks
   * The name of the DHCP options set.
   * 
   * @example
   * test
   */
  dhcpOptionsSetName?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the DHCP options set belongs.
   * 
   * @example
   * 253460731706911258
   */
  ownerId?: number;
  /**
   * @remarks
   * The ID of the resource group to which the DHCP options set belongs.
   * 
   * @example
   * rg-acfmxazb4ph****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The status of the DHCP options set. Valid values:
   * 
   * *   **Available**
   * *   **InUse**
   * *   **Pending**
   * *   **Deleted**
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The tag list.
   */
  tags?: ListDhcpOptionsSetsResponseBodyDhcpOptionsSetsTags[];
  static names(): { [key: string]: string } {
    return {
      associateVpcCount: 'AssociateVpcCount',
      creationTime: 'CreationTime',
      dhcpOptions: 'DhcpOptions',
      dhcpOptionsSetDescription: 'DhcpOptionsSetDescription',
      dhcpOptionsSetId: 'DhcpOptionsSetId',
      dhcpOptionsSetName: 'DhcpOptionsSetName',
      ownerId: 'OwnerId',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associateVpcCount: 'number',
      creationTime: 'string',
      dhcpOptions: ListDhcpOptionsSetsResponseBodyDhcpOptionsSetsDhcpOptions,
      dhcpOptionsSetDescription: 'string',
      dhcpOptionsSetId: 'string',
      dhcpOptionsSetName: 'string',
      ownerId: 'number',
      resourceGroupId: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': ListDhcpOptionsSetsResponseBodyDhcpOptionsSetsTags },
    };
  }

  validate() {
    if(this.dhcpOptions && typeof (this.dhcpOptions as any).validate === 'function') {
      (this.dhcpOptions as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

