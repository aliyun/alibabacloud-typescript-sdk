// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachCommonBandwidthPackageToLoadBalancerRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Internet Shared Bandwidth instance to be associated.
   * 
   * This parameter is required.
   * 
   * @example
   * cbwp-bp1pzf0ym72pu3y76****
   */
  bandwidthPackageId?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the value, but you must ensure that it is unique among different requests. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request is unique.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665*****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * - **true**: performs a dry run and does not associate the Internet Shared Bandwidth instance with the load balancing instance. The system checks whether the required parameters are specified, the request format is valid, and the service limits are met. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * - **false** (default): sends a normal request. If the request passes the check, an HTTP 2xx status code is returned and the operation is performed.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the Application Load Balancer instance.
   * 
   * This parameter is required.
   * 
   * @example
   * alb-d676fho813rmu3****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The region ID of the Application Load Balancer instance. 
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/448570.html) operation to query region IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidthPackageId: 'BandwidthPackageId',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      loadBalancerId: 'LoadBalancerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidthPackageId: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      loadBalancerId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

