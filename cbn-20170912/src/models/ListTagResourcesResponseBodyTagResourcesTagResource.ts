// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTagResourcesResponseBodyTagResourcesTagResource extends $dara.Model {
  /**
   * @remarks
   * The ID of the CEN instance.
   * 
   * @example
   * cen-8z69wtwqel33lq****
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of the resource. Valid values:
   * 
   * **Cen**: CEN instance
   * 
   * **BandwidthPackage**: bandwidth plan
   * 
   * **TransitRouter**: transit router
   * 
   * **TransitRouterVpcAttachment**: virtual private cloud (VPC) connection
   * 
   * **TransitRouterVbrAttachment**: virtual border router (VBR) connection
   * 
   * **TransitRouterPeerAttachment**: inter-region connection
   * 
   * **TransitRouterVpnAttachment**: VPN connection
   * 
   * **TransitRouterRouteTable**: route table
   * 
   * **Flowlog**: flow log
   * 
   * **TransitRouterMulticastDomain**: multicast domain
   * 
   * @example
   * CEN
   */
  resourceType?: string;
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * test
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * Bp
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceType: 'string',
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

