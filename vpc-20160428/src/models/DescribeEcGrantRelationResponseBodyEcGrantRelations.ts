// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEcGrantRelationResponseBodyEcGrantRelations extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the VPC belongs.
   * 
   * @example
   * 1250123456123456
   */
  aliUid?: number;
  /**
   * @remarks
   * The time when permissions on the VPC were granted to the VBR.
   * 
   * @example
   * 2022-09-02T11:46Z
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The VBRs that have permissions on the VPC. Valid values:
   * 
   * *   **All**: VBRs that reside in the specified region and belong to the specified Alibaba Cloud account all have permissions on the VPC.
   * *   **Specify**: Only the specified VBR has permissions on the VPC.
   * 
   * @example
   * All
   */
  grantType?: string;
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * @example
   * vpc-bp1brjuegjc88v3u9****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the VPC.
   * 
   * @example
   * VPCname
   */
  instanceName?: string;
  /**
   * @remarks
   * The ID of the vRouter.
   * 
   * @example
   * vrt-bp1i0yzgjd8ra05ec****
   */
  instanceRouterId?: string;
  /**
   * @remarks
   * The ID of the region where the VPC is deployed.
   * 
   * @example
   * cn-hangzhou
   */
  regionNo?: string;
  /**
   * @remarks
   * The query result. Valid values:
   * 
   * *   **Created**: The VBR has permissions on the VPC.
   * *   **Deleted**: The VBR does not have permissions on the VPC.
   * 
   * @example
   * Created
   */
  status?: string;
  /**
   * @remarks
   * The ID of the VBR.
   * 
   * @example
   * vbr-m5ex0xf63xk8s5bob****
   */
  vbrInstanceId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the VBR belongs.
   * 
   * @example
   * 1210123456123456
   */
  vbrOwnerUid?: number;
  /**
   * @remarks
   * The ID of the region where the VBR is deployed.
   * 
   * @example
   * cn-hangzhou
   */
  vbrRegionNo?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      gmtCreate: 'GmtCreate',
      grantType: 'GrantType',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      instanceRouterId: 'InstanceRouterId',
      regionNo: 'RegionNo',
      status: 'Status',
      vbrInstanceId: 'VbrInstanceId',
      vbrOwnerUid: 'VbrOwnerUid',
      vbrRegionNo: 'VbrRegionNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      gmtCreate: 'string',
      grantType: 'string',
      instanceId: 'string',
      instanceName: 'string',
      instanceRouterId: 'string',
      regionNo: 'string',
      status: 'string',
      vbrInstanceId: 'string',
      vbrOwnerUid: 'number',
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

