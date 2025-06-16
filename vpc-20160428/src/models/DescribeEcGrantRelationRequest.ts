// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEcGrantRelationRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * *   If you set **InstanceType** to **VBR**, specify a VBR ID.
   * *   If you set **InstanceType** to **VPC**, specify a VPC ID.
   * 
   * This parameter is required.
   * 
   * @example
   * vbr-bp12mw1f8k3jgygk9****
   */
  instanceId?: string;
  /**
   * @remarks
   * The type of instance. Valid values:
   * 
   * *   **VBR**: queries the permissions that are granted to a VBR.
   * *   **VPC**: queries the permissions that are granted from a VPC.
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
   * The number of entries per page. Maximum value: **50**. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the region where the instance is deployed.
   * 
   * *   If **InstanceType** is set to **VBR**, this parameter is required.
   * *   If **InstanceType** is set to **VPC**, you can ignore this parameter.
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

