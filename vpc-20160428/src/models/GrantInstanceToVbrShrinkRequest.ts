// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GrantInstanceToVbrShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The scope of VBR instances that accept the authorization. Valid values:
   * 
   * - **All**: Grants authorization of the VPC instance to all VBR instances in the specified region under the specified Alibaba Cloud account. In this case, the **VbrInstanceIds** parameter can be left empty.
   * - **Specify**: Grants authorization of the VPC instance to the specified VBR instances. In this case, the **VbrInstanceIds** parameter is required.
   * 
   * This parameter is required.
   * 
   * @example
   * All
   */
  grantType?: string;
  /**
   * @remarks
   * The ID of the VPC instance for which authorization is to be granted.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-bp1lqhq93q8evjpky****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID of the VPC instance for which authorization is to be granted.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query region IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The list of VBR instances to be granted authorization.
   * 
   * **if can be null:**
   * true
   */
  vbrInstanceIdsShrink?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID that owns the VBR instance to be granted authorization.
   * 
   * This parameter is required.
   * 
   * @example
   * 1210123456123456
   */
  vbrOwnerUid?: number;
  /**
   * @remarks
   * The region ID of the VBR instance to be granted authorization.
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

