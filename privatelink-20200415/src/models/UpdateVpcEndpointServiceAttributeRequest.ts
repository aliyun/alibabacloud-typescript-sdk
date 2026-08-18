// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateVpcEndpointServiceAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The list of remote regions to add for the endpoint service.
   */
  addSupportedRegionSet?: string[];
  /**
   * @remarks
   * The protocol version. Valid values:
   * 
   * - **IPv4**: IPv4.
   * - **DualStack**: dual-stack.
   * > Currently, only endpoint services whose backend resource type is NLB or GWLB support setting the IP address protocol to DualStack.
   * 
   * @example
   * IPv4
   */
  addressIpVersion?: string;
  /**
   * @remarks
   * Specifies whether to automatically accept endpoint connections. Valid values:
   * 
   * - **true**: automatically accepts endpoint connections.
   * 
   * - **false**: does not automatically accept endpoint connections.
   * 
   * @example
   * false
   */
  autoAcceptEnabled?: boolean;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The **ClientToken** parameter supports only ASCII characters.
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe637760
   */
  clientToken?: string;
  /**
   * @remarks
   * The default bandwidth limit. Default value: **3072**. Unit: Mbit/s.
   * 
   * Valid values: **100** to **10240**.
   * 
   * > Settings for the default bandwidth limit are supported when the service resource is a Classic Load Balancer (CLB) instance or an Application Load Balancer (ALB) instance. When the service resource is a Network Load Balancer (NLB) instance, the connection bandwidth cannot be configured.
   * 
   * @example
   * 3072
   */
  connectBandwidth?: number;
  /**
   * @remarks
   * The list of remote regions to remove from the endpoint service.
   */
  deleteSupportedRegionSet?: string[];
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
   * 
   * - **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error code is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * 
   * - **false** (default): performs a dry run and performs the actual request. If the request passes the dry run, an HTTP 2xx status code is returned and the resource attributes are modified.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The region ID of the endpoint service.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/120468.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
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
   * The ID of the endpoint service.
   * 
   * This parameter is required.
   * 
   * @example
   * epsrv-hp3vpx8yqxblby3i****
   */
  serviceId?: string;
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
   * Specifies whether to resolve the domain name of the endpoint that is connected to the endpoint service to the nearest access point. Valid values:
   * 
   * - **true** (default): yes.
   * - **false**: no.
   * 
   * @example
   * true
   */
  zoneAffinityEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      addSupportedRegionSet: 'AddSupportedRegionSet',
      addressIpVersion: 'AddressIpVersion',
      autoAcceptEnabled: 'AutoAcceptEnabled',
      clientToken: 'ClientToken',
      connectBandwidth: 'ConnectBandwidth',
      deleteSupportedRegionSet: 'DeleteSupportedRegionSet',
      dryRun: 'DryRun',
      regionId: 'RegionId',
      serviceDescription: 'ServiceDescription',
      serviceId: 'ServiceId',
      serviceSupportIPv6: 'ServiceSupportIPv6',
      zoneAffinityEnabled: 'ZoneAffinityEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addSupportedRegionSet: { 'type': 'array', 'itemType': 'string' },
      addressIpVersion: 'string',
      autoAcceptEnabled: 'boolean',
      clientToken: 'string',
      connectBandwidth: 'number',
      deleteSupportedRegionSet: { 'type': 'array', 'itemType': 'string' },
      dryRun: 'boolean',
      regionId: 'string',
      serviceDescription: 'string',
      serviceId: 'string',
      serviceSupportIPv6: 'boolean',
      zoneAffinityEnabled: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.addSupportedRegionSet)) {
      $dara.Model.validateArray(this.addSupportedRegionSet);
    }
    if(Array.isArray(this.deleteSupportedRegionSet)) {
      $dara.Model.validateArray(this.deleteSupportedRegionSet);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

