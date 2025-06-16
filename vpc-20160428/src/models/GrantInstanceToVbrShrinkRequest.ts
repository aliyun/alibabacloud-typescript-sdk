// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GrantInstanceToVbrShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The VBRs that need to acquire permissions on the VPC. Valid values:
   * 
   * *   **All**: Permissions on the VPC are granted to all VBRs that belong to the specified region and Alibaba Cloud account. In this case, you can leave **VbrInstanceIds** empty.
   * *   **Specify**: Permissions on the VPC are granted to the specified VBRs. **VbrInstanceIds** must be assigned a value.
   * 
   * This parameter is required.
   * 
   * @example
   * All
   */
  grantType?: string;
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-bp1lqhq93q8evjpky****
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
   * The information about the VBRs.
   * 
   * **if can be null:**
   * true
   */
  vbrInstanceIdsShrink?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the VBR belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * 1210123456123456
   */
  vbrOwnerUid?: number;
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

