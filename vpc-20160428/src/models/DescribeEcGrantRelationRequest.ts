// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEcGrantRelationRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the instance for which you want to query the authorization relationship.
   * 
   * - If **InstanceType** is set to **VBR**, set this parameter to the instance ID of the VBR instance.
   * 
   * - If **InstanceType** is set to **VPC**, set this parameter to the instance ID of the VPC-connected instance.
   * 
   * This parameter is required.
   * 
   * @example
   * vbr-bp12mw1f8k3jgygk9****
   */
  instanceId?: string;
  /**
   * @remarks
   * The type of the instance for which you want to query the authorization relationship. Valid values:
   * 
   * - **VBR**: Virtual Border vRouter (VBR) instance used for routing. Queries the VPC-connected instances that have authorized the VBR instance.
   * - **VPC**: Virtual Private Cloud (VPC) instance. Queries the VBR instances that the VPC-connected instance has authorized.
   * 
   * This parameter is required.
   * 
   * @example
   * VBR
   */
  instanceType?: string;
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page for paging in a paged query. Maximum value: **50**. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the VBR instance for which you want to query the authorization relationship.
   * 
   * - If **InstanceType** is set to **VBR**, this parameter is required.
   * 
   * - If **InstanceType** is set to **VPC**, this parameter is not required.
   * 
   * @example
   * cn-hangzhou
   */
  vbrRegionNo?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      vbrRegionNo: 'VbrRegionNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      vbrRegionNo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

