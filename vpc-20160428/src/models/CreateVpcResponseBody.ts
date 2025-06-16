// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVpcResponseBody extends $dara.Model {
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
   * The resource group ID.
   * 
   * @example
   * rg-acfmxazb4ph6aiy****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the route table that is automatically created by the system after the VPC is created.
   * 
   * @example
   * vtb-bp145q7glnuzdv****
   */
  routeTableId?: string;
  /**
   * @remarks
   * The ID of the vRouter that is automatically created by the system after the VPC is created.
   * 
   * @example
   * vrt-bp1lhl0taikrteen8****
   */
  VRouterId?: string;
  /**
   * @remarks
   * The ID of the created VPC.
   * 
   * @example
   * vpc-bp15zckdt37pq72zv****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      routeTableId: 'RouteTableId',
      VRouterId: 'VRouterId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceGroupId: 'string',
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

