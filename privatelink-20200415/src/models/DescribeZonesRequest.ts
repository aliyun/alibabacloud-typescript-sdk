// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeZonesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether this is a cross-region scenario. Default value: false.
   * 
   * Set CrossRegion to true and use it together with CrossRegionSide in the following scenarios:
   * - **As a service consumer**: You need to create a cross-region endpoint to connect to an endpoint service in another region. To query the zones in the current region that support cross-region endpoints, set CrossRegion to true and CrossRegionSide to Endpoint.
   * 
   * - **As a service provider**: You need to share your endpoint service across regions with service consumers in other regions. To query the zones in the current region that support cross-region sharing, set CrossRegion to true and CrossRegionSide to EndpointService.
   * 
   * @example
   * false
   */
  crossRegion?: boolean;
  /**
   * @remarks
   * Specifies whether to query the active zone support for the initiator side or the service side in a cross-region connection. Valid values:
   * - **Endpoint** (default): endpoint.
   * - **EndpointService**: endpoint service.
   * 
   * > This parameter takes effect only when CrossRegion is set to true.
   * 
   * @example
   * EndpointService
   */
  crossRegionSide?: string;
  /**
   * @remarks
   * The ID of the region where the zones reside. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/120468.html) operation to obtain the region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The zone availability of PrivateLink in a region depends on the backend EPS resource type. You can specify the EPS resource type when querying the list of zones supported by PrivateLink. Valid values:
   * 
   * - **slb** (default): the EPS resource type is Classic Load Balancer (CLB).
   * - **alb**: the EPS resource type is Application Load Balancer (ALB).
   * - **nlb**: the EPS resource type is Network Load Balancer (NLB).
   * - **gwlb**: the EPS resource type is Gateway Load Balancer (GWLB).
   * 
   * @example
   * slb
   */
  serviceResourceType?: string;
  static names(): { [key: string]: string } {
    return {
      crossRegion: 'CrossRegion',
      crossRegionSide: 'CrossRegionSide',
      regionId: 'RegionId',
      serviceResourceType: 'ServiceResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      crossRegion: 'boolean',
      crossRegionSide: 'string',
      regionId: 'string',
      serviceResourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

