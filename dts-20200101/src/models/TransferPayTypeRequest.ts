// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TransferPayTypeRequest extends $dara.Model {
  autoPay?: boolean;
  /**
   * @remarks
   * The subscription duration of the instance.
   * - If Period is set to **Year**, valid values are **1** to **5**.
   * - If Period is set to **Month**, valid values are **1** to **60**.
   * 
   * > This parameter is valid and required only when ChargeType is set to **Prepaid**.
   * 
   * @example
   * 5
   */
  buyCount?: string;
  /**
   * @remarks
   * The billing method after conversion. Valid values:
   * - **PrePaid**: subscription.
   * - **PostPaid**: pay-as-you-go.
   * <props="china">
   * - **sync_serverless**: pay-as-you-go Serverless..
   * 
   * This parameter is required.
   * 
   * @example
   * PostPaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The ID of the data synchronization or change tracking task. You can call [DescribeDtsJobs](https://help.aliyun.com/document_detail/209702.html) to query the task ID.
   * 
   * This parameter is required.
   * 
   * @example
   * o4nh3g7jg56****
   */
  dtsJobId?: string;
  instanceClass?: string;
  /**
   * @remarks
   * The maximum number of DUs for the Serverless instance. Valid values: 2, 4, 8, and 16.
   * <props="intl">
   * > This feature is currently not supported. Do not specify this parameter.
   * <props="china">
   * > This parameter is valid and required only when ChargeType is set to **sync_serverless**..
   * 
   * @example
   * 16
   */
  maxDu?: number;
  /**
   * @remarks
   * The minimum number of DTS Units (DUs) for the Serverless instance. Valid values: 1, 2, 4, 8, and 16.
   * 
   * <props="intl">
   * > This feature is currently not supported. Do not specify this parameter.
   * <props="china">
   * > This parameter is valid and required only when ChargeType is set to **sync_serverless**..
   * 
   * @example
   * 1
   */
  minDu?: number;
  /**
   * @remarks
   * The billing method of the subscription instance. Valid values:
   * - **Year**: annual subscription.
   * - **Month**: monthly subscription.
   * 
   * > This parameter is valid and required only when ChargeType is set to **PrePaid** (subscription).
   * 
   * @example
   * Year
   */
  period?: string;
  /**
   * @remarks
   * The region ID of the instance. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
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

