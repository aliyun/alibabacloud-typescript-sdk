// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateVpcEndpointServiceAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The remote regions to add to the list of supported regions.
   */
  addSupportedRegionSet?: string[];
  /**
   * @remarks
   * The IP version. Valid values:
   * 
   * - **IPv4**: IPv4.
   * 
   * - **DualStack**: dual-stack.
   * 
   * > Only endpoint services that use an NLB or GWLB instance as the service resource support the **DualStack** IP version.
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
   * A client-generated token that ensures the idempotence of the request.
   * 
   * Your client must generate a unique token for each request. **ClientToken** can contain only ASCII characters.
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe637760
   */
  clientToken?: string;
  /**
   * @remarks
   * The default maximum connection bandwidth. The default value is **3072**. Unit: Mbps.
   * 
   * Valid values: **100** to **10240**.
   * 
   * > You can set this parameter only if the service resource is a CLB or ALB instance, but not an NLB instance.
   * 
   * @example
   * 3072
   */
  connectBandwidth?: number;
  /**
   * @remarks
   * The remote regions to remove from the list of supported regions.
   */
  deleteSupportedRegionSet?: string[];
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * - **true**: performs a dry run. The system checks the required parameters, request format, and service limits. If the request fails the dry run, the system returns an error message. If the request passes the dry run, the system returns the `DryRunOperation` error code.
   * 
   * - **false** (default): sends a normal request. If the request passes the check, the system returns a 2xx HTTP status code and performs the operation.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The region ID of the endpoint service.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/120468.html) operation to get the region ID.
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
   * Specifies whether to enable IPv6 for the endpoint service. Valid values:
   * 
   * - **true**: Enables IPv6.
   * 
   * - **false** (default): Disables IPv6.
   * 
   * @example
   * false
   * 
   * @deprecated
   */
  serviceSupportIPv6?: boolean;
  /**
   * @remarks
   * Specifies whether to enable zone affinity for the endpoint service. Valid values:
   * 
   * - **true** (default): Enables zone affinity.
   * 
   * - **false**: Disables zone affinity.
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

