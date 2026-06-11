// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVpcEndpointServiceRequestResource extends $dara.Model {
  /**
   * @remarks
   * The ID of the service resource that is added to the endpoint service.
   * 
   * @example
   * lb-hp32z1wp5peaoox2q****
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of the service resource that is added to the endpoint service. You can add at most 20 service resources to an endpoint service. Valid values:
   * 
   * - **slb**: a Classic Load Balancer (CLB) instance.
   * 
   * - **alb**: an Application Load Balancer (ALB) instance.
   * - **nlb**: a Network Load Balancer (NLB) instance.
   * - **gwlb**: a Gateway Load Balancer (GWLB) instance.
   * 
   * @example
   * slb
   */
  resourceType?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-huhehaote-a
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceType: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVpcEndpointServiceRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. You can specify at most 20 tag keys. The tag key cannot be an empty string.
   * 
   * The tag key can be at most 64 characters in length. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
   * 
   * @example
   * env
   */
  key?: string;
  /**
   * @remarks
   * The tag value. You can specify at most 20 tag values. The tag value can be an empty string.
   * 
   * The tag value can be at most 128 characters in length. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
   * 
   * @example
   * prod
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

export class CreateVpcEndpointServiceRequest extends $dara.Model {
  /**
   * @remarks
   * The IP version. Valid values:
   * 
   * - **IPv4** (default): IPv4.
   * - **DualStack**: dual stack.
   * > Only endpoint services whose backend resource type is nlb or gwlb support DualStack. If the endpoint service supports dual stack, its backend resources must also support dual stack.
   * 
   * @example
   * IPv4
   */
  addressIpVersion?: string;
  /**
   * @remarks
   * Specifies whether to automatically accept endpoint connection requests. Valid values:
   * 
   * - **true**: automatically accepts endpoint connection requests.
   * 
   * - **false** (default): does not automatically accept endpoint connection requests.
   * 
   * @example
   * false
   */
  autoAcceptEnabled?: boolean;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the value, but you must ensure that it is unique among different requests. **ClientToken** can contain only ASCII characters.
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe637760
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
   * 
   * - **true**: performs only a dry run. The system checks the request for required parameters, request format, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * 
   * - **false** (default): performs a dry run and sends the request. If the request passes the dry run, an HTTP 2xx status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The payer of the endpoint service. Valid values:
   * 
   * - **Endpoint**: the service consumer.
   * 
   * - **EndpointService**: the service provider.
   * 
   * @example
   * Endpoint
   */
  payer?: string;
  /**
   * @remarks
   * The ID of the region where the endpoint service is created.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/469325.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-huhehaote
   */
  regionId?: string;
  /**
   * @remarks
   * The list of service resources of the endpoint service. You can add at most 10 service resources when you create the endpoint service. After the endpoint service is created, you can continue to add service resources.
   */
  resource?: CreateVpcEndpointServiceRequestResource[];
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmy*****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The description of the endpoint service.
   * 
   * @example
   * This is my EndpointService.
   */
  serviceDescription?: string;
  /**
   * @remarks
   * The type of the service resource. Valid values:
   * 
   * - **slb**: a Classic Load Balancer (CLB) instance.
   * 
   * - **alb**: an Application Load Balancer (ALB) instance.
   * - **nlb**: a Network Load Balancer (NLB) instance.
   * - **gwlb**: a Gateway Load Balancer (GWLB) instance.
   * 
   * > TCPSSL listeners of NLB instances cannot be accessed.
   * 
   * @example
   * slb
   */
  serviceResourceType?: string;
  /**
   * @remarks
   * Specifies whether the endpoint service supports IPv6. Valid values:
   * 
   * - **true**: yes.
   * 
   * - **false** (default): no.
   * 
   * @example
   * false
   * 
   * @deprecated
   */
  serviceSupportIPv6?: boolean;
  /**
   * @remarks
   * The list of regions in which the endpoint service is available. Service consumers can initiate endpoint connections from the regions in the list.
   */
  supportedRegionList?: string[];
  /**
   * @remarks
   * The tag list.
   */
  tag?: CreateVpcEndpointServiceRequestTag[];
  /**
   * @remarks
   * Specifies whether to enable zone affinity for endpoint domain name resolution. Valid values:
   * 
   * - **true**: yes.
   * 
   * - **false** (default): no.
   * 
   * @example
   * false
   */
  zoneAffinityEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      addressIpVersion: 'AddressIpVersion',
      autoAcceptEnabled: 'AutoAcceptEnabled',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      payer: 'Payer',
      regionId: 'RegionId',
      resource: 'Resource',
      resourceGroupId: 'ResourceGroupId',
      serviceDescription: 'ServiceDescription',
      serviceResourceType: 'ServiceResourceType',
      serviceSupportIPv6: 'ServiceSupportIPv6',
      supportedRegionList: 'SupportedRegionList',
      tag: 'Tag',
      zoneAffinityEnabled: 'ZoneAffinityEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressIpVersion: 'string',
      autoAcceptEnabled: 'boolean',
      clientToken: 'string',
      dryRun: 'boolean',
      payer: 'string',
      regionId: 'string',
      resource: { 'type': 'array', 'itemType': CreateVpcEndpointServiceRequestResource },
      resourceGroupId: 'string',
      serviceDescription: 'string',
      serviceResourceType: 'string',
      serviceSupportIPv6: 'boolean',
      supportedRegionList: { 'type': 'array', 'itemType': 'string' },
      tag: { 'type': 'array', 'itemType': CreateVpcEndpointServiceRequestTag },
      zoneAffinityEnabled: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.resource)) {
      $dara.Model.validateArray(this.resource);
    }
    if(Array.isArray(this.supportedRegionList)) {
      $dara.Model.validateArray(this.supportedRegionList);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

