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
   * The regions in which PrivateLink is available vary based on the service resource type. When you query the regions in which PrivateLink is available, you can specify a service resource type. Valid values:
   * 
   * - **slb** (default): indicates that the service resource type is Classic Load Balancer (CLB).
   * -  **alb**: indicates that the service resource type is Application Load Balancer (ALB).
   * - **nlb**: indicates that the service resource type is Network Load Balancer (NLB).
   * - **gwlb**: indicates that the service resource type is Gateway Load Balancer (GWLB).
   * 
   * - **ALL**: indicates all of the preceding service resource types.
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

