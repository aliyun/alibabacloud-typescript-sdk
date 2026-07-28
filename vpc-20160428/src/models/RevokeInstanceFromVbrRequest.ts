// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RevokeInstanceFromVbrRequest extends $dara.Model {
  /**
   * @remarks
   * The scope of VBR instances for which the VPC-connected instance authorization is being revoked. Valid values:
   * 
   * - **ALL**: Revokes the VPC-connected instance authorization for all VBR instances in the specified region. In this case, the **VbrInstanceIds** parameter can be left empty.
   * 
   * - **Specify**: Revokes the VPC-connected instance authorization for the specified VBR instances. In this case, the **VbrInstanceIds** parameter is required.
   * 
   * This parameter is required.
   * 
   * @example
   * ALL
   */
  grantType?: string;
  /**
   * @remarks
   * The instance ID of the VPC-connected instance for which you want to revoke the authorization.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-bp1brjuegjc88v3u9****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID of the VPC-connected instance for which you want to revoke the authorization.
   * 
   * You can invoke the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The list of VBR instance IDs for which the VPC-connected instance authorization is being revoked.
   */
  vbrInstanceIds?: string[];
  /**
   * @remarks
   * The Alibaba Cloud account ID of the VBR instance for which the authorization is being revoked.
   * 
   * This parameter is required.
   * 
   * @example
   * 1210123456123456
   */
  vbrOwnerUid?: string;
  /**
   * @remarks
   * The region ID of the VBR instance for which the VPC-connected instance authorization is being revoked.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  vbrRegionNo?: string;
  static names(): { [key: string]: string } {
    return {
      grantType: 'GrantType',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      vbrInstanceIds: 'VbrInstanceIds',
      vbrOwnerUid: 'VbrOwnerUid',
      vbrRegionNo: 'VbrRegionNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      grantType: 'string',
      instanceId: 'string',
      regionId: 'string',
      vbrInstanceIds: { 'type': 'array', 'itemType': 'string' },
      vbrOwnerUid: 'string',
      vbrRegionNo: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.vbrInstanceIds)) {
      $dara.Model.validateArray(this.vbrInstanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

