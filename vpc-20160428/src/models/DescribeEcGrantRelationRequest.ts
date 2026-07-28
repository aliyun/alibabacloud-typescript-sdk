// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEcGrantRelationRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the instance for which you want to query authorization relationships.
   * 
   * - If **InstanceType** is set to **VBR**, set this parameter to the VBR instance ID.
   * 
   * - If **InstanceType** is set to **VPC**, set this parameter to the VPC-connected instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * vbr-bp12mw1f8k3jgygk9****
   */
  instanceId?: string;
  /**
   * @remarks
   * The type of instance for which you want to query authorization relationships. Valid values:
   * 
   * - **VBR**: Virtual Border Router (VBR) instance. Queries the VPC-connected instances that have granted authorization to the VBR instance.
   * - **VPC**: virtual private cloud (VPC) instance. Queries the VBR instances to which the VPC-connected instance has granted authorization.
   * 
   * This parameter is required.
   * 
   * @example
   * VBR
   */
  instanceType?: string;
  /**
   * @remarks
   * The page number of the list. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page in a paged query. Maximum value: **50**. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the VBR instance for which you want to query authorization relationships.
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

