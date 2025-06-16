// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDefaultVpcResponseBody extends $dara.Model {
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
   * The route table ID that is automatically created by the system after you create a default VPC.
   * 
   * @example
   * vtb-bp1q1uirugzb1x32m****
   */
  routeTableId?: string;
  /**
   * @remarks
   * The vRouter ID that is automatically created by the system after you create a default VPC.
   * 
   * @example
   * vrt-bp1lhl0taikrteen8****
   */
  VRouterId?: string;
  /**
   * @remarks
   * The ID of the default VPC.
   * 
   * @example
   * vpc-bp15zckdt37pq72zv****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      routeTableId: 'RouteTableId',
      VRouterId: 'VRouterId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      routeTableId: 'string',
      VRouterId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

