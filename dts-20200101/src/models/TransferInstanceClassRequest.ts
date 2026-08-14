// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TransferInstanceClassRequest extends $dara.Model {
  databaseCount?: number;
  /**
   * @remarks
   * The ID of the data migration or data synchronization task. You can call [DescribeDtsJobs](https://help.aliyun.com/document_detail/209702.html) to query the task ID.
   * 
   * This parameter is required.
   * 
   * @example
   * r4yr723m199****
   */
  dtsJobId?: string;
  /**
   * @remarks
   * The instance specifications after the upgrade. You can call [DescribeDtsJobDetail](https://help.aliyun.com/document_detail/208925.html) to query the instance specifications before the upgrade.
   * 
   * - Specifications supported by data migration instances: **xxlarge**, **xlarge**, **large**, **medium**, and **small**.
   * - Specifications supported by data synchronization instances: **large**, **medium**, **small**, and **micro**.
   * 
   * > For more information about the description and performance test results of each specification, see [Specifications of data migration instances](https://help.aliyun.com/document_detail/26606.html) and [Specifications of data synchronization instances](https://help.aliyun.com/document_detail/26605.html).
   * 
   * This parameter is required.
   * 
   * @example
   * large
   */
  instanceClass?: string;
  /**
   * @remarks
   * Set this parameter to **UPGRADE**.
   * 
   * This parameter is required.
   * 
   * @example
   * UPGRADE
   */
  orderType?: string;
  /**
   * @remarks
   * The ID of the region in which the DTS instance resides. For more information, see [List of supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmzawhxxc****
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      databaseCount: 'DatabaseCount',
      dtsJobId: 'DtsJobId',
      instanceClass: 'InstanceClass',
      orderType: 'OrderType',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseCount: 'number',
      dtsJobId: 'string',
      instanceClass: 'string',
      orderType: 'string',
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

