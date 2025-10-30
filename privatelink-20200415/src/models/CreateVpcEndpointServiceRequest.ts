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
   * The type of the service resource that is added to the endpoint service. You can add up to 20 service resources to the endpoint service. Valid values:
   * 
   * *   **slb**: CLB instance
   * *   **alb**: ALB instance
   * *   **nlb**: NLB instance
   * 
   * >  In regions where PrivateLink is supported, CLB instances deployed in virtual private clouds (VPCs) can serve as the service resources of the endpoint service. You cannot access TCP/SSL listeners configured for NLB instances.
   * 
   * @example
   * slb
   */
  resourceType?: string;
  /**
   * @remarks
   * The zone ID of the cluster.
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
   * The key of the tag to add to the resource. You can specify up to 20 tag keys. The tag key cannot be an empty string.
   * 
   * The tag key can be up to 64 characters in length and cannot contain `http://` or `https://`. The tag key cannot start with `aliyun` or `acs:`.
   * 
   * @example
   * env
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag to add to the resource. You can specify up to 20 tag values. The tag value can be an empty string.
   * 
   * The tag value can be up to 128 characters in length and cannot contain `http://` or `https://`. The tag value cannot start with `aliyun` or `acs:`.
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
   * The protocol. Valid values:
   * 
   * *   **IPv4** (default)
   * *   **DualStack**
   * 
   * >  You can set the protocol to DualStack only for endpoint services whose backend resource type is NLB. An endpoint service supports dual-stack only if its backend resources support dual-stack.
   * 
   * @example
   * IPv4
   */
  addressIpVersion?: string;
  /**
   * @remarks
   * Specifies whether to automatically accept endpoint connection requests. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
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
   * Specifies whether to perform only a dry run, without performing the actual request.
   * 
   * *   **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   **false** (default): performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The payer. Valid values:
   * 
   * *   **Endpoint**: service consumer
   * *   **EndpointService**: service provider
   * 
   * @example
   * Endpoint
   */
  payer?: string;
  /**
   * @remarks
   * The region ID of the endpoint service.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/120468.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-huhehaote
   */
  regionId?: string;
  /**
   * @remarks
   * The service resources of the endpoint service. You can create at most 10 resources. After the resource is created, you can continue to add service resources to the endpoint.
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
   * The type of the service resource. Valid values:
   * 
   * *   **slb**: Classic Load Balancer (CLB) instance
   * *   **alb**: Application Load Balancer (ALB) instance
   * *   **nlb**: Network Load Balancer (NLB) instance
   * 
   * >  You cannot access TCP/SSL listeners configured for NLB instances.
   * 
   * @example
   * slb
   */
  serviceResourceType?: string;
  /**
   * @remarks
   * Specifies whether to enable IPv6 for the endpoint service. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * @example
   * false
   * 
   * @deprecated
   */
  serviceSupportIPv6?: boolean;
  /**
   * @remarks
   * The tags to add to the resource.
   */
  tag?: CreateVpcEndpointServiceRequestTag[];
  /**
   * @remarks
   * Specifies whether to first resolve the domain name of the nearest endpoint that is associated with the endpoint service. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
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
      tag: { 'type': 'array', 'itemType': CreateVpcEndpointServiceRequestTag },
      zoneAffinityEnabled: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.resource)) {
      $dara.Model.validateArray(this.resource);
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

