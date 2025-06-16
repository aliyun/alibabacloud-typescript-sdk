// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeVpnAttachmentsResponseBodyVpnAttachmentsTags } from "./DescribeVpnAttachmentsResponseBodyVpnAttachmentsTags";


export class DescribeVpnAttachmentsResponseBodyVpnAttachments extends $dara.Model {
  /**
   * @remarks
   * The type of resource that is associated with the IPsec-VPN connection. The value is set to **CEN**, which indicates that the IPsec-VPN connection is associated with a transit router.
   * 
   * @example
   * CEN
   */
  attachType?: string;
  /**
   * @remarks
   * Indicates whether the IPsec-VPN connection is associated with a transit router that belongs to another Alibaba Cloud account. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  crossAccountAuthorized?: boolean;
  /**
   * @remarks
   * The description of the IPsec-VPN connection.
   * 
   * @example
   * desctest
   */
  description?: string;
  /**
   * @remarks
   * The ID of the IPsec-VPN connection.
   * 
   * @example
   * vco-p0w2jpkhi2eeop6q6****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the IPsec-VPN connection.
   * 
   * @example
   * nametest1
   */
  name?: string;
  /**
   * @remarks
   * The system tags of the IPsec-VPN connection.
   * 
   * You can check whether an IPsec-VPN connection supports BGP based on the system tags.
   * 
   * **BGPSupport**: indicates whether the IPsec-VPN connection supports BGP.
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * {\\"description\\":\\"forwarding 1.7.22\\",\\"VisuallySsl\\":\\"true\\",\\"PbrPriority\\":\\"true\\",\\"BGPSupport\\":\\"true\\",\\"IDaaSNewVersion\\":\\"true\\"}
   */
  tag?: string;
  /**
   * @remarks
   * The list of tags to be added to the IPsec-VPN connection.
   */
  tags?: DescribeVpnAttachmentsResponseBodyVpnAttachmentsTags[];
  /**
   * @remarks
   * The ID of the transit router with which the IPsec-VPN connection is associated.
   * 
   * @example
   * tr-p0wkh4yryb1dnanqw****
   */
  transitRouterId?: string;
  /**
   * @remarks
   * The name of the transit router.
   * 
   * @example
   * nametest2
   */
  transitRouterName?: string;
  static names(): { [key: string]: string } {
    return {
      attachType: 'AttachType',
      crossAccountAuthorized: 'CrossAccountAuthorized',
      description: 'Description',
      instanceId: 'InstanceId',
      name: 'Name',
      tag: 'Tag',
      tags: 'Tags',
      transitRouterId: 'TransitRouterId',
      transitRouterName: 'TransitRouterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachType: 'string',
      crossAccountAuthorized: 'boolean',
      description: 'string',
      instanceId: 'string',
      name: 'string',
      tag: 'string',
      tags: { 'type': 'array', 'itemType': DescribeVpnAttachmentsResponseBodyVpnAttachmentsTags },
      transitRouterId: 'string',
      transitRouterName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

