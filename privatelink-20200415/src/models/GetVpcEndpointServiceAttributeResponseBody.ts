// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVpcEndpointServiceAttributeResponseBodySupportedRegionSet extends $dara.Model {
  regionBusinessStatus?: string;
  regionServiceStatus?: string;
  serviceRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      regionBusinessStatus: 'RegionBusinessStatus',
      regionServiceStatus: 'RegionServiceStatus',
      serviceRegionId: 'ServiceRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionBusinessStatus: 'string',
      regionServiceStatus: 'string',
      serviceRegionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVpcEndpointServiceAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The protocol. Valid values:
   * 
   * *   **IPv4**
   * *   **DualStack**
   * 
   * @example
   * IPv4
   */
  addressIpVersion?: string;
  /**
   * @remarks
   * Indicates whether endpoint connection requests are automatically accepted. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  autoAcceptEnabled?: boolean;
  /**
   * @remarks
   * The default maximum bandwidth of the endpoint connection. Unit: Mbit/s. Valid values: **100** to 10240.
   * 
   * @example
   * 1024
   */
  connectBandwidth?: number;
  /**
   * @remarks
   * The time when the endpoint service was created.
   * 
   * @example
   * 2020-01-02T19:11:12Z
   */
  createTime?: string;
  /**
   * @remarks
   * The maximum bandwidth of the endpoint connection. Unit: Mbit/s.
   * 
   * @example
   * 1024
   */
  maxBandwidth?: number;
  /**
   * @remarks
   * The minimum bandwidth of the endpoint connection. Unit: Mbit/s.
   * 
   * @example
   * 100
   */
  minBandwidth?: number;
  /**
   * @remarks
   * The payer of the endpoint service. Valid values:
   * 
   * *   **Endpoint**: the service consumer.
   * *   **EndpointService**: the service provider.
   * 
   * @example
   * Endpoint
   */
  payer?: string;
  /**
   * @remarks
   * The region ID of the endpoint service.
   * 
   * @example
   * cn-huhehaote
   */
  regionId?: string;
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
   * The resource group ID.
   * 
   * @example
   * rg-acfmy*****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The service status of the endpoint service. Valid values:
   * 
   * *   **Normal**: The endpoint service runs as expected.
   * *   **FinancialLocked**: The endpoint service is locked due to overdue payments.
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
   * The endpoint service ID.
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
   * The type of the service resource. Valid values:
   * 
   * *   **slb**: a CLB instance.
   * *   **alb**: an ALB instance.
   * 
   * @example
   * slb
   */
  serviceResourceType?: string;
  /**
   * @remarks
   * The state of the endpoint service. Valid values:
   * 
   * *   **Creating**: The endpoint service is being created.
   * *   **Pending**: The endpoint service is being modified.
   * *   **Active**: The endpoint service is available.
   * *   **Deleting**: The endpoint service is being deleted.
   * *   **Inactive**: The endpoint service is unavailable.
   * 
   * @example
   * Active
   */
  serviceStatus?: string;
  /**
   * @remarks
   * Specifies whether the endpoint service supports IPv6. Valid values:
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
   * The type of the endpoint.
   * 
   * Only **Interface** is returned. The value indicates the interface endpoint. Then, you can specify ALB and CLB instances as service resources for the endpoint service.
   * 
   * @example
   * Interface
   */
  serviceType?: string;
  supportedRegionSet?: GetVpcEndpointServiceAttributeResponseBodySupportedRegionSet[];
  /**
   * @remarks
   * Indicates whether the domain name of the nearest endpoint that is associated with the endpoint service is resolved first. Valid values:
   * 
   * *   **true** (default)
   * *   **false**
   * 
   * @example
   * true
   */
  zoneAffinityEnabled?: boolean;
  /**
   * @remarks
   * The zones to which the service resources belong.
   */
  zones?: string[];
  static names(): { [key: string]: string } {
    return {
      addressIpVersion: 'AddressIpVersion',
      autoAcceptEnabled: 'AutoAcceptEnabled',
      connectBandwidth: 'ConnectBandwidth',
      createTime: 'CreateTime',
      maxBandwidth: 'MaxBandwidth',
      minBandwidth: 'MinBandwidth',
      payer: 'Payer',
      regionId: 'RegionId',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      serviceBusinessStatus: 'ServiceBusinessStatus',
      serviceDescription: 'ServiceDescription',
      serviceDomain: 'ServiceDomain',
      serviceId: 'ServiceId',
      serviceName: 'ServiceName',
      serviceResourceType: 'ServiceResourceType',
      serviceStatus: 'ServiceStatus',
      serviceSupportIPv6: 'ServiceSupportIPv6',
      serviceType: 'ServiceType',
      supportedRegionSet: 'SupportedRegionSet',
      zoneAffinityEnabled: 'ZoneAffinityEnabled',
      zones: 'Zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressIpVersion: 'string',
      autoAcceptEnabled: 'boolean',
      connectBandwidth: 'number',
      createTime: 'string',
      maxBandwidth: 'number',
      minBandwidth: 'number',
      payer: 'string',
      regionId: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      serviceBusinessStatus: 'string',
      serviceDescription: 'string',
      serviceDomain: 'string',
      serviceId: 'string',
      serviceName: 'string',
      serviceResourceType: 'string',
      serviceStatus: 'string',
      serviceSupportIPv6: 'boolean',
      serviceType: 'string',
      supportedRegionSet: { 'type': 'array', 'itemType': GetVpcEndpointServiceAttributeResponseBodySupportedRegionSet },
      zoneAffinityEnabled: 'boolean',
      zones: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.supportedRegionSet)) {
      $dara.Model.validateArray(this.supportedRegionSet);
    }
    if(Array.isArray(this.zones)) {
      $dara.Model.validateArray(this.zones);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

