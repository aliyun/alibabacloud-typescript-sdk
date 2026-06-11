// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetachResourceFromVpcEndpointServiceRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * Generate a unique token for each request. The token can contain only ASCII characters.
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe637760
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * - **true**: Performs a dry run. The system checks the request for potential issues, including missing required parameters, incorrect request format, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * 
   * - **false** (default): Sends the request. If the request passes the check, an HTTP 2xx status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the region where the endpoint service is deployed. Call the [DescribeRegions](https://help.aliyun.com/document_detail/120468.html) operation to get a region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the service resource.
   * 
   * This parameter is required.
   * 
   * @example
   * lb-hp32z1wp5peaoox2q****
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of the service resource.
   * 
   * - **slb**: Classic Load Balancer (CLB).
   * 
   * - **alb**: Application Load Balancer (ALB).
   * 
   * - **nlb**: Network Load Balancer (NLB).
   * 
   * - **gwlb**: Gateway Load Balancer (GWLB).
   * 
   * @example
   * slb
   */
  resourceType?: string;
  /**
   * @remarks
   * The ID of the endpoint service from which you want to remove the service resource.
   * 
   * This parameter is required.
   * 
   * @example
   * epsrv-hp3vpx8yqxblby3i****
   */
  serviceId?: string;
  /**
   * @remarks
   * The ID of the zone. This parameter is required if the service resource is an ALB, a NLB, or a GWLB. Call the [DescribeRegions](https://help.aliyun.com/document_detail/120468.html) operation to get a zone ID.
   * 
   * @example
   * cn-hangzhou-c
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      serviceId: 'ServiceId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      regionId: 'string',
      resourceId: 'string',
      resourceType: 'string',
      serviceId: 'string',
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

