// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RenewInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The subscription duration of the DTS instance after renewal. Default value: 1.
   * 
   * *   If **Period** is set to **Year**, the valid values are **1 to 5**.
   * *   If **Period** is set to **Month**, the valid values are **1 to 60**.
   * 
   * @example
   * 1
   */
  buyCount?: string;
  /**
   * @remarks
   * The billing method of the DTS instance. Set the value to **PREPAY**, which specifies the subscription billing method.
   * 
   * This parameter is required.
   * 
   * @example
   * PREPAY
   */
  chargeType?: string;
  /**
   * @remarks
   * The ID of the data synchronization or change tracking task. You can call the [DescribeDtsJobs](https://help.aliyun.com/document_detail/209702.html) operation to query the task ID.
   * 
   * This parameter is required.
   * 
   * @example
   * qi0r643lc31****
   */
  dtsJobId?: string;
  /**
   * @remarks
   * The billing cycle of the DTS instance after renewal. Valid values:
   * 
   * *   **Year**
   * *   **Month** (default)
   * 
   * @example
   * Month
   */
  period?: string;
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
   * Resource group ID.
   * 
   * @example
   * rg-acfmzawhxxc****
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      buyCount: 'BuyCount',
      chargeType: 'ChargeType',
      dtsJobId: 'DtsJobId',
      period: 'Period',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buyCount: 'string',
      chargeType: 'string',
      dtsJobId: 'string',
      period: 'string',
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

