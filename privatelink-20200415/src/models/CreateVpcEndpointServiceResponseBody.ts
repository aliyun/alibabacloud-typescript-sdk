// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVpcEndpointServiceResponseBody extends $dara.Model {
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
   * Indicates whether the endpoint service automatically accepts endpoint connection requests. Valid values:
   * 
   * *   **true**
   * *   **false**
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
   * The resource group ID.
   * 
   * @example
   * rg-acfmy*****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The service state of the endpoint service. Valid values:
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
   * The state of the endpoint service. Valid values:
   * 
   * *   **Creating**: The endpoint service is being created.
   * *   **Pending**: The endpoint service is being modified.
   * *   **Active**: The endpoint service is available.
   * *   **Deleting**: The endpoint service is being deleted.
   * 
   * @example
   * Active
   */
  serviceStatus?: string;
  /**
   * @remarks
   * Indicates whether IPv6 was enabled for the endpoint service. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   * 
   * @deprecated
   */
  serviceSupportIPv6?: boolean;
  /**
   * @remarks
   * Indicates whether the domain name of the nearest endpoint that is associated with the endpoint service is resolved first. Valid values:
   * 
   * *   **true**
   * *   **false**
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
      zoneAffinityEnabled: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

