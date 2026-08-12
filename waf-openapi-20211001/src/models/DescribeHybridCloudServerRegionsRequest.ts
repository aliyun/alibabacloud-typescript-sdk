// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHybridCloudServerRegionsRequest extends $dara.Model {
  /**
   * @remarks
   * Instance ID of the WAF instance.
   * 
   * > You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query instance ID of the current WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_v3prepaid_public_cn-5yd****7009
   */
  instanceId?: string;
  /**
   * @remarks
   * The region code.>Notice: This parameter is required when RegionType is set to region. The value is the code of the selected continent.</notice>
   * 
   * @example
   * 410
   */
  regionCode?: string;
  /**
   * @remarks
   * The region where the WAF instance is deployed. Valid values:
   * 
   * - **cn-hangzhou**: the Chinese mainland.
   * 
   * - **ap-southeast-1**: outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The region type.
   * 
   * This parameter is required.
   * 
   * @example
   * region
   */
  regionType?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionCode: 'RegionCode',
      regionId: 'RegionId',
      regionType: 'RegionType',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionCode: 'string',
      regionId: 'string',
      regionType: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

