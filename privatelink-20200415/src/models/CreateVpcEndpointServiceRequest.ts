// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVpcEndpointServiceRequestResource extends $dara.Model {
  /**
   * @remarks
   * The ID of the service resource to add to the endpoint service.
   * 
   * @example
   * lb-hp32z1wp5peaoox2q****
   */
  resourceId?: string;
  /**
   * @remarks
   * The EPS resource type to add to the endpoint service. You can add up to 20 service resources to an endpoint service. Valid values:
   * 
   * - **slb**: Classic Load Balancer (CLB).
   * 
   * - **alb**: Application Load Balancer (ALB).
   * - **nlb**: Network Load Balancer (NLB).
   * - **gwlb**: Gateway Load Balancer (GWLB).
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
   * The tag key of the instance. You can specify up to 20 tag keys. The tag key cannot be an empty string.
   * 
   * The tag key can be up to 64 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * env
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the instance. You can specify up to 20 tag values. The tag value can be an empty string.
   * 
   * The tag value can be up to 128 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
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
   * The protocol version. Valid values:
   * 
   * - **IPv4**: IPv4 (default).
   * - **DualStack**: dual-stack.
   * > Only endpoint services whose backend resource type is nlb or gwlb support the DualStack IP address protocol. If the endpoint service supports dual-stack, the backend resources must also support dual-stack.
   * 
   * @example
   * IPv4
   */
  addressIpVersion?: string;
  /**
   * @remarks
   * Specifies whether to automatically accept endpoint connections. Valid values:
   * 
   * - **true**: automatically accept endpoint connections.
   * 
   * - **false** (default): do not automatically accept endpoint connections.
   * 
   * @example
   * false
   */
  autoAcceptEnabled?: boolean;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe637760
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
   * 
   * - **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error code is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * 
   * - **false** (default): performs a dry run and performs the actual request. If the request passes the dry run, an HTTP 2xx status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The payer. Valid values:
   * 
   * - **Endpoint**: service consumer.
   * 
   * - **EndpointService**: service provider.
   * 
   * @example
   * Endpoint
   */
  payer?: string;
  /**
   * @remarks
   * The region ID of the endpoint service.
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
   * The service resources of the endpoint service. You can add up to 10 resources during creation. After creation, you can add more resources by adding service resources to the endpoint.
   */
  resource?: CreateVpcEndpointServiceRequestResource[];
  /**
   * @remarks
   * The resource group ID.
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
   * The EPS resource type. Valid values:
   * 
   * - **slb**: Classic Load Balancer (CLB).
   * 
   * - **alb**: Application Load Balancer (ALB).
   * - **nlb**: Network Load Balancer (NLB).
   * - **gwlb**: Gateway Load Balancer (GWLB).
   * 
   * > Access to TCPSSL listeners of NLB is not supported.
   * 
   * @example
   * slb
   */
  serviceResourceType?: string;
  /**
   * @remarks
   * Specifies whether the endpoint service supports IPv6. Valid values:
   * 
   * - **true**: supported.
   * 
   * - **false** (default): not supported.
   * 
   * @example
   * false
   * 
   * @deprecated
   */
  serviceSupportIPv6?: boolean;
  /**
   * @remarks
   * The list of regions supported by the endpoint service. Service consumers can initiate endpoint connections from the regions in the list.
   */
  supportedRegionList?: string[];
  /**
   * @remarks
   * The list of tags.
   */
  tag?: CreateVpcEndpointServiceRequestTag[];
  /**
   * @remarks
   * Specifies whether to support zone affinity for the endpoint domain name of the endpoint service. Valid values:
   * 
   * - **true**: supported.
   * 
   * - **false** (default): not supported.
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

