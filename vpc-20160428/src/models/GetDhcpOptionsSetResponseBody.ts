// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDhcpOptionsSetResponseBodyAssociateVpcs } from "./GetDhcpOptionsSetResponseBodyAssociateVpcs";
import { GetDhcpOptionsSetResponseBodyDhcpOptions } from "./GetDhcpOptionsSetResponseBodyDhcpOptions";
import { GetDhcpOptionsSetResponseBodyTags } from "./GetDhcpOptionsSetResponseBodyTags";


export class GetDhcpOptionsSetResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the virtual private cloud (VPC) that is associated with the DHCP options set.
   */
  associateVpcs?: GetDhcpOptionsSetResponseBodyAssociateVpcs[];
  /**
   * @remarks
   * The configuration information about the DHCP options set.
   */
  dhcpOptions?: GetDhcpOptionsSetResponseBodyDhcpOptions;
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
   * 283117732402483989
   */
  ownerId?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0ED8D006-F706-4D23-88ED-E11ED28DCAC0
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmxazb4ph****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The status of the DHCP options set. Valid values:
   * 
   * *   **Available**: available
   * *   **InUse**: in use
   * *   **Deleted**: deleted
   * *   **Pending**: being configured
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The tag list.
   */
  tags?: GetDhcpOptionsSetResponseBodyTags[];
  static names(): { [key: string]: string } {
    return {
      associateVpcs: 'AssociateVpcs',
      dhcpOptions: 'DhcpOptions',
      dhcpOptionsSetDescription: 'DhcpOptionsSetDescription',
      dhcpOptionsSetId: 'DhcpOptionsSetId',
      dhcpOptionsSetName: 'DhcpOptionsSetName',
      ownerId: 'OwnerId',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associateVpcs: { 'type': 'array', 'itemType': GetDhcpOptionsSetResponseBodyAssociateVpcs },
      dhcpOptions: GetDhcpOptionsSetResponseBodyDhcpOptions,
      dhcpOptionsSetDescription: 'string',
      dhcpOptionsSetId: 'string',
      dhcpOptionsSetName: 'string',
      ownerId: 'number',
      requestId: 'string',
      resourceGroupId: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': GetDhcpOptionsSetResponseBodyTags },
    };
  }

  validate() {
    if(Array.isArray(this.associateVpcs)) {
      $dara.Model.validateArray(this.associateVpcs);
    }
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

