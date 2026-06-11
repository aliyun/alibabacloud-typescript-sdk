// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVpcEndpointResponseBody extends $dara.Model {
  /**
   * @remarks
   * The IP version of the endpoint. Valid values:
   * 
   * - **IPv4**: IPv4 (default).
   * 
   * - **DualStack**: Dual-stack.
   * 
   * @example
   * IPv4
   */
  addressIpVersion?: string;
  /**
   * @remarks
   * The bandwidth of the endpoint connection, in Mbps.
   * 
   * @example
   * 200
   */
  bandwidth?: number;
  /**
   * @remarks
   * The connection status of the endpoint. Valid values:
   * 
   * - **Pending**: The endpoint is being modified.
   * 
   * - **Connecting**: The endpoint is being connected.
   * 
   * - **Connected**: The endpoint is connected.
   * 
   * - **Disconnecting**: The endpoint is being disconnected.
   * 
   * - **Disconnected**: The endpoint is disconnected.
   * 
   * - **Deleting**: The endpoint is being deleted.
   * 
   * @example
   * Disconnected
   */
  connectionStatus?: string;
  /**
   * @remarks
   * The time the endpoint was created.
   * 
   * @example
   * 2022-01-02T19:11:12Z
   */
  createTime?: string;
  /**
   * @remarks
   * The cross-region bandwidth in Mbps. This parameter is returned only when the endpoint and the endpoint service are in different regions.
   * 
   * @example
   * 1000
   */
  crossRegionBandwidth?: number;
  /**
   * @remarks
   * The business status of the endpoint. Valid values:
   * 
   * - **Normal**: The endpoint is running as expected.
   * 
   * - **FinancialLocked**: The endpoint is locked due to overdue payments.
   * 
   * @example
   * Normal
   */
  endpointBusinessStatus?: string;
  /**
   * @remarks
   * The description of the endpoint.
   * 
   * @example
   * This is my Endpoint.
   */
  endpointDescription?: string;
  /**
   * @remarks
   * The endpoint domain name.
   * 
   * @example
   * ep-hp33b2e43fays7s8****.epsrv-hp3xdsq46ael67lo****.cn-huhehaote.privatelink.aliyuncs.com
   */
  endpointDomain?: string;
  /**
   * @remarks
   * The ID of the endpoint.
   * 
   * @example
   * ep-hp33b2e43fays7s8****
   */
  endpointId?: string;
  /**
   * @remarks
   * The name of the endpoint.
   * 
   * @example
   * test
   */
  endpointName?: string;
  /**
   * @remarks
   * The status of the endpoint. Valid values:
   * 
   * - **Creating**: The endpoint is being created.
   * 
   * - **Active**: The endpoint is available.
   * 
   * - **Pending**: The endpoint is being modified.
   * 
   * - **Deleting**: The endpoint is being deleted.
   * 
   * @example
   * Active
   */
  endpointStatus?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0ED8D006-F706-4D23-88ED-E11ED28DCAC0
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the associated endpoint service.
   * 
   * @example
   * epsrv-hp3vpx8yqxblby3i****
   */
  serviceId?: string;
  /**
   * @remarks
   * The name of the associated endpoint service.
   * 
   * @example
   * com.aliyuncs.privatelink.cn-huhehaote.epsrv-hp3xdsq46ael67lo****
   */
  serviceName?: string;
  /**
   * @remarks
   * The region ID of the endpoint service.
   * 
   * @example
   * cn-huhehaote
   */
  serviceRegionId?: string;
  /**
   * @remarks
   * The ID of the VPC that contains the endpoint.
   * 
   * @example
   * vpc-hp356stwkxg3fn2xe****
   */
  vpcId?: string;
  /**
   * @remarks
   * Indicates whether zone affinity is enabled. Valid values:
   * 
   * - **true**: Zone affinity is enabled.
   * 
   * - **false**: Zone affinity is disabled.
   * 
   * @example
   * false
   */
  zoneAffinityEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      addressIpVersion: 'AddressIpVersion',
      bandwidth: 'Bandwidth',
      connectionStatus: 'ConnectionStatus',
      createTime: 'CreateTime',
      crossRegionBandwidth: 'CrossRegionBandwidth',
      endpointBusinessStatus: 'EndpointBusinessStatus',
      endpointDescription: 'EndpointDescription',
      endpointDomain: 'EndpointDomain',
      endpointId: 'EndpointId',
      endpointName: 'EndpointName',
      endpointStatus: 'EndpointStatus',
      requestId: 'RequestId',
      serviceId: 'ServiceId',
      serviceName: 'ServiceName',
      serviceRegionId: 'ServiceRegionId',
      vpcId: 'VpcId',
      zoneAffinityEnabled: 'ZoneAffinityEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressIpVersion: 'string',
      bandwidth: 'number',
      connectionStatus: 'string',
      createTime: 'string',
      crossRegionBandwidth: 'number',
      endpointBusinessStatus: 'string',
      endpointDescription: 'string',
      endpointDomain: 'string',
      endpointId: 'string',
      endpointName: 'string',
      endpointStatus: 'string',
      requestId: 'string',
      serviceId: 'string',
      serviceName: 'string',
      serviceRegionId: 'string',
      vpcId: 'string',
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

