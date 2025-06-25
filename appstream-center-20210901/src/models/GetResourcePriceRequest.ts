// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResourcePriceRequest extends $dara.Model {
  /**
   * @remarks
   * The number of resources to purchase.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  amount?: number;
  /**
   * @remarks
   * The type ID of the sessions that you purchase. You can call the `ListAppInstanceType` operation to obtain the ID.
   * 
   * You must specify one of AppInstanceType and NodeInstanceType. If you specify both of the parameters, the value of NodeInstanceType takes effect.
   * 
   * @example
   * appstreaming.general
   */
  appInstanceType?: string;
  /**
   * @remarks
   * The ID of the region where the delivery group resides. For information about the supported regions, see [Limits](https://help.aliyun.com/document_detail/426036.html).
   * 
   * Valid values:
   * 
   * *   cn-shanghai: China (Shanghai).
   * *   cn-hangzhou: China (Hangzhou)
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @remarks
   * The billing method.
   * 
   * Valid values:
   * 
   * *   PostPaid: pay-as-you-go
   * *   PrePaid: subscription
   * 
   * This parameter is required.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The ID of the resource type that you purchase. You can call the [ListNodeInstanceType](https://help.aliyun.com/document_detail/428502.html) to obtain the ID.
   * 
   * You must specify one of AppInstanceType and NodeInstanceType. If you specify both of the parameters, the value of NodeInstanceType takes effect.
   * 
   * Valid values:
   * 
   * *   appstreaming.vgpu.8c16g.4g: WUYING - Graphics - 8 vCPUs, 16 GiB Memory, 4 GiB GPU Memory
   * *   appstreaming.general.8c16g: WUYING - General - 8 vCPUs, 16 GiB Memory
   * *   appstreaming.general.4c8g: WUYING - General - 4 vCPUs, 8 GiB Memory
   * *   appstreaming.vgpu.14c93g.12g: WUYING - Graphics - 14 vCPUs, 93 GiB Memory, 12 GiB GPU Memory.
   * *   appstreaming.vgpu.8c31g.16g: WUYING - Graphics - 8 vCPUs, 31 GiB Memory, 16 GiB GPU Memory
   * 
   * @example
   * appstreaming.vgpu.4c8g.2g
   */
  nodeInstanceType?: string;
  /**
   * @remarks
   * The subscription duration of resources. This parameter must be configured together with `PeriodUnit`.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit of the subscription duration. This parameter must be configured together with `Period`. The following items describe valid values for the combinations of `Period` and `PeriodUnit`:
   * 
   * *   1 Week
   * *   1 Month
   * *   2 Month
   * *   3 Month
   * *   6 Month
   * *   1 Year
   * *   2 Year
   * *   3 Year
   * 
   * >  The value of this parameter is case-insensitive. For example, `Week` is valid and `week` is invalid. If you specify a value combination other than the preceding combinations, such as `2 Week`, the operation can still be called. However, an error occurs when you place the order.
   * 
   * This parameter is required.
   * 
   * @example
   * Week
   */
  periodUnit?: string;
  /**
   * @remarks
   * The product type.
   * 
   * Valid value:
   * 
   * *   CloudApp: App Streaming
   * 
   * This parameter is required.
   * 
   * @example
   * CloudApp
   */
  productType?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      appInstanceType: 'AppInstanceType',
      bizRegionId: 'BizRegionId',
      chargeType: 'ChargeType',
      nodeInstanceType: 'NodeInstanceType',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      productType: 'ProductType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      appInstanceType: 'string',
      bizRegionId: 'string',
      chargeType: 'string',
      nodeInstanceType: 'string',
      period: 'number',
      periodUnit: 'string',
      productType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

