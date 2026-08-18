// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRegionsRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The EPS resource type supported by PrivateLink. The available regions vary based on the service resource type. You can specify a service resource type when querying the regions where PrivateLink is available. Valid values:
   * 
   * - **slb** (default): the service resource type is Classic Load Balancer (CLB).
   * - **alb**: the service resource type is Application Load Balancer (ALB).
   * - **nlb**: the service resource type is Network Load Balancer (NLB).
   * - **gwlb**: the service resource type is Gateway Load Balancer (GWLB).
   * 
   * - **ALL**: all of the preceding types.
   * 
   * @example
   * slb
   */
  serviceResourceType?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      serviceResourceType: 'ServiceResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

