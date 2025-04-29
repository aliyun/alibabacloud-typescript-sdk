// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeScalingGroupDetailResponseBodyScalingGroupAlbServerGroups extends $dara.Model {
  /**
   * @remarks
   * The ID of the Application Load Balancer (ALB) server group.
   * 
   * @example
   * sgp-ddwb0y0g6y9bjm****
   */
  albServerGroupId?: string;
  /**
   * @remarks
   * The port number used by an ECS instance as a backend server in the ALB server group.
   * 
   * @example
   * 80
   */
  port?: number;
  /**
   * @remarks
   * The weight of an ECS instance as a backend server in the ALB server group.
   * 
   * @example
   * 100
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      albServerGroupId: 'AlbServerGroupId',
      port: 'Port',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      albServerGroupId: 'string',
      port: 'number',
      weight: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

