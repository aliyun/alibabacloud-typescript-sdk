// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GrantInstanceToVbrRequest extends $dara.Model {
  /**
   * @remarks
   * The scope of VBR instances to receive the authorization. Valid values:
   * 
   * - **All**: grants the VPC-connected instance authorization to all VBR instances in the specified region under the specified Alibaba Cloud account. In this case, the **VbrInstanceIds** parameter can be left empty.
   * - **Specify**: grants the VPC-connected instance authorization to the specified VBR instances. In this case, the **VbrInstanceIds** parameter is required.
   * 
   * This parameter is required.
   * 
   * @example
   * All
   */
  grantType?: string;
  /**
   * @remarks
   * The instance ID of the VPC-connected instance to grant authorization for.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-bp1lqhq93q8evjpky****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID of the VPC-connected instance to grant authorization for.
   * 
   * You can invoke the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query region IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The list of VBR instances to be authorized.
   * 
   * **if can be null:**
   * true
   */
  vbrInstanceIds?: string[];
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that owns the VBR instance to be authorized. This account must be different from the caller\\"s account. Do not specify the caller\\"s own account ID. This operation is used for cross-account authorization.
   * 
   * This parameter is required.
   * 
   * @example
   * 1210123456123456
   */
  vbrOwnerUid?: number;
  /**
   * @remarks
   * The region ID of the VBR instance to be authorized.
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
      vbrOwnerUid: 'number',
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

