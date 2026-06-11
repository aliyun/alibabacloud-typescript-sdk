// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateVpcEndpointConnectionAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The bandwidth of the endpoint connection. Unit: Mbit/s.
   * 
   * > The valid values vary based on the type of service resource:
   * > - NLB: 100 to 50000.
   * > - ALB: 100 to 25000.
   * > - CLB: 100 to 10240. Default value: 3072.
   * > - GWLB: 100 to 25000.
   * 
   * @example
   * 3072
   */
  bandwidth?: number;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the value, but you must make sure that it is unique among different requests. The **ClientToken** value can contain only ASCII characters.
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe637760
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
   * - **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * - **false** (default): performs a dry run and performs the actual request. If the request passes the dry run, an HTTP 2xx status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The endpoint ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ep-hp33b2e43fays7s8****
   */
  endpointId?: string;
  /**
   * @remarks
   * The region ID of the endpoint connection bandwidth that you want to modify.
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/120468.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * eu-west-1
   */
  regionId?: string;
  /**
   * @remarks
   * The endpoint service ID.
   * 
   * This parameter is required.
   * 
   * @example
   * epsrv-hp3vpx8yqxblby3i****
   */
  serviceId?: string;
  /**
   * @remarks
   * - Scalability: auto scaling. In this mode, the bandwidth configured for the endpoint connection does not take effect.
   * 
   * - BandwidthLimit: supports setting a bandwidth upper limit for the endpoint connection. The bandwidth upper limit is the value of Bandwidth.
   *  
   * >- When the service resource is NLB, TrafficControlMode is set to Scalability by default. You can set it to BandwidthLimit and modify the Bandwidth value to provide a bandwidth upper limit.
   * >- When the service resource is CLB, TrafficControlMode can only be set to BandwidthLimit, which indicates that the service consumer provides a default rate limit for each endpoint.
   * > - When the service resource is GWLB, TrafficControlMode can only be set to Scalability.
   * 
   * @example
   * BandwidthLimit
   */
  trafficControlMode?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      endpointId: 'EndpointId',
      regionId: 'RegionId',
      serviceId: 'ServiceId',
      trafficControlMode: 'TrafficControlMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      clientToken: 'string',
      dryRun: 'boolean',
      endpointId: 'string',
      regionId: 'string',
      serviceId: 'string',
      trafficControlMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

