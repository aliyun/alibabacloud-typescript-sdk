// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeZonesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether this is a cross-region scenario. Default value: false.
   * 
   * @example
   * false
   */
  crossRegion?: boolean;
  /**
   * @remarks
   * Specifies whether to query the active zones for the initiator side or the service side in a cross-region connection. Valid values:
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
   * The ID of the region where the zones reside. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/120468.html) operation to query the region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The zones supported by PrivateLink in a region depend on the backend service resource type. You can specify the service resource type when querying the zones supported by PrivateLink. Valid values:
   * 
   * - **slb** (default): Classic Load Balancer (CLB), the service resource type is classic load balancing.
   * - **alb**: Application Load Balancer (ALB), the service resource type is application load balancing.
   * - **nlb**: Network Load Balancer (NLB), the service resource type is network load balancing.
   * - **gwlb**: Gateway Load Balancer (GWLB), the service resource type is gateway load balancing.
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

