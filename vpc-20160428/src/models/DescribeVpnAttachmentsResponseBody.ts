// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpnAttachmentsResponseBodyVpnAttachmentsTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * TagKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * TagValue
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpnAttachmentsResponseBodyVpnAttachments extends $dara.Model {
  /**
   * @remarks
   * The type of resource to which the IPsec-VPN connection is attached. The value is **CEN**, which indicates that the IPsec-VPN connection is associated with a transit router instance.
   * 
   * @example
   * CEN
   */
  attachType?: string;
  /**
   * @remarks
   * Indicates whether the IPsec-VPN connection is associated with a transit router instance that belongs to a different Alibaba Cloud account.
   * 
   * - **true**: The IPsec-VPN connection is associated with a cross-account transit router instance.
   * - **false**: The IPsec-VPN connection is not associated with a cross-account transit router instance.
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
   * You can use the system tags to check whether the IPsec-VPN connection supports BGP. You can ignore the other properties.
   * 
   * **BGPSupport**: indicates whether the IPsec-VPN connection supports BGP.
   *    - **true**: Supported.
   *    - **false**: Not supported.
   * 
   * @example
   * {\\"description\\":\\"forwarding1.7.22\\",\\"VisuallySsl\\":\\"true\\",\\"PbrPriority\\":\\"true\\",\\"BGPSupport\\":\\"true\\",\\"IDaaSNewVersion\\":\\"true\\"}
   */
  tag?: string;
  /**
   * @remarks
   * The list of tags associated with the IPsec-VPN connection.
   */
  tags?: DescribeVpnAttachmentsResponseBodyVpnAttachmentsTags[];
  /**
   * @remarks
   * The instance ID of the forward routing vRouter to which the IPsec-VPN connection is attached.
   * 
   * @example
   * tr-p0wkh4yryb1dnanqw****
   */
  transitRouterId?: string;
  /**
   * @remarks
   * The name of the transit router instance.
   * 
   * @example
   * nametest2
   */
  transitRouterName?: string;
  /**
   * @remarks
   * The bandwidth specification of a single VPN tunnel. Valid values:
   * Standard (default): Standard. The default bandwidth is 1 Gbit/s.
   * Large: Large. The default bandwidth is 3 Gbit/s.
   * 
   * @example
   * Standard
   */
  tunnelBandwidth?: string;
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
      tunnelBandwidth: 'TunnelBandwidth',
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
      tunnelBandwidth: 'string',
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

export class DescribeVpnAttachmentsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page when using paging.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9F0725BB-186A-3564-91C3-AAE48042F853
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  /**
   * @remarks
   * The list of IPsec-VPN connections that are associated with transit router instances.
   */
  vpnAttachments?: DescribeVpnAttachmentsResponseBodyVpnAttachments[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      vpnAttachments: 'VpnAttachments',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      vpnAttachments: { 'type': 'array', 'itemType': DescribeVpnAttachmentsResponseBodyVpnAttachments },
    };
  }

  validate() {
    if(Array.isArray(this.vpnAttachments)) {
      $dara.Model.validateArray(this.vpnAttachments);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

