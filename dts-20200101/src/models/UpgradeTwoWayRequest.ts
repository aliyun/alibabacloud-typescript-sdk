// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeTwoWayRequest extends $dara.Model {
  /**
   * @remarks
   * The instance class for two-way synchronization. Valid values: **large**, **medium**, **micro**, and **small**.
   * > For more information about instance classes, see [Specifications of data synchronization links](https://help.aliyun.com/document_detail/26605.html).
   * 
   * This parameter is required.
   * 
   * @example
   * large
   */
  instanceClass?: string;
  /**
   * @remarks
   * The ID of the instance. You can call the [DescribeDtsJobs](https://help.aliyun.com/document_detail/209702.html) operation to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dtsh77p49x4k28****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID of the DTS instance. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmzawhxxc****
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceClass: 'InstanceClass',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceClass: 'string',
      instanceId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

