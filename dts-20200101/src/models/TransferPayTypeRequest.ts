// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TransferPayTypeRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically renew the DTS instance when it expires. Valid values:
   * 
   * *   **false**: does not automatically renew the DTS instance when it expires. This is the default value.
   * *   **true**: automatically renews the DTS instance when it expires.
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The subscription length.
   * 
   * *   If the **Period** parameter is set to **Year**, the value range is **1** to **5**.
   * *   If the **Period** parameter is set to **Month**, the value range is **1** to **60**.
   * 
   * >  You must specify this parameter only if you set the **ChargeType** parameter to **PrePaid**.
   * 
   * @example
   * 5
   */
  buyCount?: string;
  /**
   * @remarks
   * The new billing method. Valid values:
   * 
   * *   **PrePaid**: subscription.
   * *   **PostPaid**: pay-as-you-go.
   * 
   * This parameter is required.
   * 
   * @example
   * PostPaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The ID of the data synchronization or change tracking task. You can call the [DescribeDtsJobs](https://help.aliyun.com/document_detail/209702.html) operation to query the task ID.
   * 
   * This parameter is required.
   * 
   * @example
   * o4nh3g7jg56****
   */
  dtsJobId?: string;
  /**
   * @remarks
   * The new instance class of the DTS instance. You can call the [DescribeDtsJobDetail](https://help.aliyun.com/document_detail/208925.html) operation to query the original instance class of the DTS instance.
   * 
   * *   DTS supports the following instance classes for a data migration instance: **xxlarge**, **xlarge**, **large**, **medium**, and **small**.
   * *   DTS supports the following instance classes for a data synchronization instance: **large**, **medium**, **small**, and **micro**.
   * 
   * > For more information about the test performance of each instance class, see [Specifications of data migration instances](https://help.aliyun.com/document_detail/26606.html) and [Specifications of data synchronization channels](https://help.aliyun.com/document_detail/26605.html).
   * 
   * @example
   * small
   */
  instanceClass?: string;
  /**
   * @remarks
   * The maximum number of DUs in a serverless instance. Valid values: 2, 4, 8, and 16.
   * 
   * >  This feature is not supported. Do not specify this parameter.
   * 
   * @example
   * 16
   */
  maxDu?: number;
  /**
   * @remarks
   * The minimum number of DTS Units (DUs) in a serverless instance. Valid values: 1, 2, 4, 8, and 16.
   * 
   * >  This feature is not supported. Do not specify this parameter.
   * 
   * @example
   * 1
   */
  minDu?: number;
  /**
   * @remarks
   * The billing cycle of the subscription instance. Valid values:
   * 
   * *   **Year**
   * *   **Month** (default value)
   * 
   * >  You must specify this parameter only if you set the **ChargeType** parameter to **PrePaid**.
   * 
   * @example
   * Year
   */
  period?: string;
  /**
   * @remarks
   * The ID of the region where the DTS instance resides. For more information, see [List of supported regions](https://help.aliyun.com/document_detail/141033.html).
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
      autoPay: 'AutoPay',
      buyCount: 'BuyCount',
      chargeType: 'ChargeType',
      dtsJobId: 'DtsJobId',
      instanceClass: 'InstanceClass',
      maxDu: 'MaxDu',
      minDu: 'MinDu',
      period: 'Period',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      buyCount: 'string',
      chargeType: 'string',
      dtsJobId: 'string',
      instanceClass: 'string',
      maxDu: 'number',
      minDu: 'number',
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

