// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachResourceToVpcEndpointServiceRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The **ClientToken** can contain only ASCII characters.
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe637760
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * - **true**: Performs a dry run to check the request for potential issues, including required parameters, request format, and service limits. The system does not add the service resource. If the check fails, an error message is returned. If the check passes, the `DryRunOperation` error code is returned.
   * 
   * - **false** (default): Sends a normal request. After the request passes the check, an HTTP 2xx status code is returned and the service resource is added.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the region where the endpoint service is deployed.
   * 
   * Call the [DescribeRegions](https://help.aliyun.com/document_detail/448570.html) operation to obtain the region ID.
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
   * The type of the service resource. Valid values:
   * 
   * - **slb**: Classic Load Balancer (CLB).
   * 
   * - **alb**: Application Load Balancer (ALB).
   * 
   * - **nlb**: Network Load Balancer (NLB).
   * 
   * - **gwlb**: Gateway Load Balancer (GWLB).
   * 
   * This parameter is required.
   * 
   * @example
   * slb
   */
  resourceType?: string;
  /**
   * @remarks
   * The endpoint service to which you want to add the service resource.
   * 
   * This parameter is required.
   * 
   * @example
   * epsrv-hp3vpx8yqxblby3i****
   */
  serviceId?: string;
  /**
   * @remarks
   * The zone where the service resource is located. This parameter is required if the service resource is an ALB, NLB, or GWLB instance.
   * 
   * @example
   * cn-hangzhou-j
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

