// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RevokeInstanceFromVbrShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The scope of VBR instances from which the authorization of the VPC-connected instance is revoked. Valid values:
   * 
   * - **ALL**: revokes the authorization between the VPC-connected instance and all VBR instances in the specified region. In this case, the **VbrInstanceIds** parameter can be left empty.
   * 
   * - **Specify**: revokes the authorization between the VPC-connected instance and the specified VBR instances. In this case, the **VbrInstanceIds** parameter is required.
   * 
   * This parameter is required.
   * 
   * @example
   * ALL
   */
  grantType?: string;
  /**
   * @remarks
   * The VPC-connected instance ID for which you want to revoke the authorization.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-bp1brjuegjc88v3u9****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID of the VPC-connected instance for which you want to revoke the authorization. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query region IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The list of VBR instance IDs from which the authorization of the VPC-connected instance is revoked.
   */
  vbrInstanceIdsShrink?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that owns the VBR instance from which the authorization is revoked.
   * 
   * This parameter is required.
   * 
   * @example
   * 1210123456123456
   */
  vbrOwnerUid?: string;
  /**
   * @remarks
   * The region ID of the VBR instance from which the authorization of the VPC-connected instance is revoked.
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
      vbrInstanceIdsShrink: 'VbrInstanceIds',
      vbrOwnerUid: 'VbrOwnerUid',
      vbrRegionNo: 'VbrRegionNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      grantType: 'string',
      instanceId: 'string',
      regionId: 'string',
      vbrInstanceIdsShrink: 'string',
      vbrOwnerUid: 'string',
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

