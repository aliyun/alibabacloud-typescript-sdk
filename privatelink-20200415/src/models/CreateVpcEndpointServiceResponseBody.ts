// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVpcEndpointServiceResponseBodySupportedRegionSet extends $dara.Model {
  /**
   * @remarks
   * The business status of the region in which the endpoint service is available. Valid values:
   * 
   * - **Normal**: normal.
   * - **FinancialLocked**: locked due to overdue payments.
   * 
   * @example
   * Normal
   */
  regionBusinessStatus?: string;
  /**
   * @remarks
   * The state of the region in which the endpoint service is available. Valid values:
   * 
   * - **Pending**: changing.
   * - **Available**: available.
   * - **Deleting**: being deleted.
   * - **Failed**: failed.
   * - **Closed**: closed.
   * 
   * @example
   * Available
   */
  regionServiceStatus?: string;
  /**
   * @deprecated
   */
  serviceRegionId?: string;
  /**
   * @remarks
   * The ID of a region in which the endpoint service is available.
   * 
   * @example
   * cn-hangzhou
   */
  supportedRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      regionBusinessStatus: 'RegionBusinessStatus',
      regionServiceStatus: 'RegionServiceStatus',
      serviceRegionId: 'ServiceRegionId',
      supportedRegionId: 'SupportedRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionBusinessStatus: 'string',
      regionServiceStatus: 'string',
      serviceRegionId: 'string',
      supportedRegionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVpcEndpointServiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The IP version. Valid values:
   * 
   * - **IPv4**: IPv4.
   * - **DualStack**: dual stack.
   * 
   * @example
   * IPv4
   */
  addressIpVersion?: string;
  /**
   * @remarks
   * Indicates whether endpoint connection requests are automatically accepted. Valid values:
   * 
   * - **true**: automatically accepts endpoint connection requests.
   * - **false**: does not automatically accept endpoint connection requests.
   * 
   * @example
   * false
   */
  autoAcceptEnabled?: boolean;
  /**
   * @remarks
   * The time when the endpoint service was created.
   * 
   * @example
   * 2022-01-02T19:11:12Z
   */
  createTime?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8D8992C1-6712-423C-BAC5-E5E817484C6B
   */
  requestId?: string;
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
   * The business status of the endpoint service. Valid values:
   * 
   * - **Normal**: normal.
   * 
   * - **FinancialLocked**: locked due to overdue payments.
   * 
   * @example
   * Normal
   */
  serviceBusinessStatus?: string;
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
   * The domain name of the endpoint service.
   * 
   * @example
   * epsrv-hp3vpx8yqxblby3i****.cn-huhehaote.privatelink.aliyuncs.com
   */
  serviceDomain?: string;
  /**
   * @remarks
   * The ID of the endpoint service.
   * 
   * @example
   * epsrv-hp3vpx8yqxblby3i****
   */
  serviceId?: string;
  /**
   * @remarks
   * The name of the endpoint service.
   * 
   * @example
   * com.aliyuncs.privatelink.cn-huhehaote.epsrv-hp3vpx8yqxblby3i****
   */
  serviceName?: string;
  /**
   * @remarks
   * The state of the endpoint service. Valid values:
   * 
   * - **Creating**: being created.
   * 
   * - **Pending**: being modified.
   * 
   * - **Active**: available.
   * 
   * - **Deleting**: being deleted.
   * 
   * @example
   * Active
   */
  serviceStatus?: string;
  /**
   * @remarks
   * Indicates whether the endpoint service supports IPv6. Valid values:
   * 
   * - **true**: yes.
   * 
   * - **false**: no.
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
  supportedRegionSet?: CreateVpcEndpointServiceResponseBodySupportedRegionSet[];
  /**
   * @remarks
   * Indicates whether zone affinity is enabled for endpoint domain name resolution. Valid values:
   * 
   * - **true**: yes.
   * - **false**: no.
   * 
   * @example
   * false
   */
  zoneAffinityEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      addressIpVersion: 'AddressIpVersion',
      autoAcceptEnabled: 'AutoAcceptEnabled',
      createTime: 'CreateTime',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      serviceBusinessStatus: 'ServiceBusinessStatus',
      serviceDescription: 'ServiceDescription',
      serviceDomain: 'ServiceDomain',
      serviceId: 'ServiceId',
      serviceName: 'ServiceName',
      serviceStatus: 'ServiceStatus',
      serviceSupportIPv6: 'ServiceSupportIPv6',
      supportedRegionSet: 'SupportedRegionSet',
      zoneAffinityEnabled: 'ZoneAffinityEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressIpVersion: 'string',
      autoAcceptEnabled: 'boolean',
      createTime: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      serviceBusinessStatus: 'string',
      serviceDescription: 'string',
      serviceDomain: 'string',
      serviceId: 'string',
      serviceName: 'string',
      serviceStatus: 'string',
      serviceSupportIPv6: 'boolean',
      supportedRegionSet: { 'type': 'array', 'itemType': CreateVpcEndpointServiceResponseBodySupportedRegionSet },
      zoneAffinityEnabled: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.supportedRegionSet)) {
      $dara.Model.validateArray(this.supportedRegionSet);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

