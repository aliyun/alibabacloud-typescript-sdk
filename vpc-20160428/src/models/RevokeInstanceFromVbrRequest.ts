// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RevokeInstanceFromVbrRequest extends $dara.Model {
  /**
   * @remarks
   * The VBRs for which you want to revoke permissions on the VPC. Valid values:
   * 
   * *   **ALL**: Permissions on the VPC are revoked for all VBRs in the specified region. **VbrInstanceIds** can be left empty.
   * *   **Specify**: Permissions on the VPC are revoked for the specified VBRs. **VbrInstanceIds** must be assigned a value.
   * 
   * This parameter is required.
   * 
   * @example
   * ALL
   */
  grantType?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-bp1brjuegjc88v3u9****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the region where the VPC is deployed.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The IDs of the VBRs for which you want to revoke the permissions.
   */
  vbrInstanceIds?: string[];
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the VBR belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * 1210123456123456
   */
  vbrOwnerUid?: string;
  /**
   * @remarks
   * The ID of the region where the VBR is deployed.
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

