// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHostGroupElasticStrategyParametersRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the dedicated cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * dhg-d0dwi82293b2w9t5
   */
  dedicatedHostGroupName?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/26243.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmy****
   */
  resourceGroupId?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      dedicatedHostGroupName: 'DedicatedHostGroupName',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedHostGroupName: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

