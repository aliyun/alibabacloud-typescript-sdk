// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The number of Simple Application Server instances to create. Valid values: 1 to 20.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  amount?: number;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal upon expiration. Valid values:
   * 
   * - true: Auto-renewal is enabled.
   * - false: Auto-renewal is disabled.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The auto-renewal period. This parameter is required only when AutoRenew is set to true. Unit: months. Valid values: 1, 3, 6, 12, 24, and 36.
   * 
   * @example
   * 3
   */
  autoRenewPeriod?: number;
  /**
   * @remarks
   * The billing method. Set the value to PrePaid. Currently, only the subscription billing method is supported.
   * 
   * Default value: PrePaid.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must make sure that the value is unique among different requests. The **ClientToken** parameter can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [Ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The size of the data cloud disk to be mounted. Unit: GB. Valid values: 0 to 16380. The value must be a multiple of 20.
   * 
   * <props="china">
   * - A value of 0 indicates that no data cloud disk is mounted.
   * 
   * - If the selected plan uses a PL0 ESSD, the minimum size of the data cloud disk is 40 GB.
   * 
   * - If the selected plan uses a standard SSD, the minimum size of the data cloud disk is 20 GB.
   * 
   * 
   * 
   * <props="intl">
   * - A value of 0 indicates that no data cloud disk is mounted.
   * 
   * - If the selected plan uses a standard SSD, the minimum size of the data cloud disk is 20 GB.
   * 
   * 
   * 
   * Default value: 0.
   * 
   * @example
   * 20
   */
  dataDiskSize?: number;
  /**
   * @remarks
   * The image ID. You can call the [ListImages](https://help.aliyun.com/document_detail/189313.html) operation to query available image IDs in a specified region.
   * 
   * This parameter is required.
   * 
   * @example
   * e2c9c365024a44369c9b955a998a****
   */
  imageId?: string;
  /**
   * @remarks
   * The subscription period of the resource. Unit: months. Valid values: 1, 3, 6, 12, 24, and 36.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The plan ID. You can call the [ListPlans](https://help.aliyun.com/document_detail/189314.html) operation to query all plans in a specified region.
   * 
   * This parameter is required.
   * 
   * @example
   * swas.s1.c1m1s40b3t05
   */
  planId?: string;
  /**
   * @remarks
   * The region ID. You can call the [ListRegions](https://help.aliyun.com/document_detail/189315.html) operation to query available regions.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      autoRenew: 'AutoRenew',
      autoRenewPeriod: 'AutoRenewPeriod',
      chargeType: 'ChargeType',
      clientToken: 'ClientToken',
      dataDiskSize: 'DataDiskSize',
      imageId: 'ImageId',
      period: 'Period',
      planId: 'PlanId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      autoRenew: 'boolean',
      autoRenewPeriod: 'number',
      chargeType: 'string',
      clientToken: 'string',
      dataDiskSize: 'number',
      imageId: 'string',
      period: 'number',
      planId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

