// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCasterRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * TestValue
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCasterRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the production studio.
   * 
   * @example
   * liveCaster****
   */
  casterName?: string;
  /**
   * @remarks
   * The preset resolution of the production studio. If the subscription billing method is used, this parameter supports the following valid values:
   * 
   * *   **lp_ld**: low definition
   * *   **lp_sd**: standard definition
   * *   **lp_hd**: high definition
   * *   **lp_ud**: ultra high definition
   * *   **lp_ld_v**: low definition (portrait mode)
   * *   **lp_sd_v**: standard definition (portrait mode)
   * *   **lp_hd_v**: high definition (portrait mode)
   * *   **lp_ud_v**: ultra high definition (portrait mode)
   * 
   * >  If the pay-as-you-go billing method is used, you must call the [SetCasterConfig](https://help.aliyun.com/document_detail/60271.html) operation to specify the resolution.
   * 
   * @example
   * lp_sd
   */
  casterTemplate?: string;
  /**
   * @remarks
   * The billing method. Only the pay-as-you-go billing method is supported.**** Valid values:
   * 
   * *   **PrePaid**: subscription. This billing method is not yet supported.
   * *   **PostPaid**: pay-as-you-go
   * 
   * This parameter is required.
   * 
   * @example
   * PostPaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can specify a custom value for this parameter, but you must make sure that the value is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * 53200b81-b761-4c10-842a-a0726d97****
   */
  clientToken?: string;
  /**
   * @remarks
   * The expiration time of the production studio. Specify the time in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * >  This parameter is valid only if you set the **ChargeType** parameter to **PrePaid**.
   * 
   * @example
   * 2017-08-22T12:10:10Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The type of the production studio. Valid values:
   * 
   * *   **1**: general mode
   * *   **6**: playlist mode (for carousel playback)
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  normType?: number;
  ownerId?: number;
  /**
   * @remarks
   * The time when the production studio was purchased. Specify the time in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * >  This parameter is valid only if you set the **ChargeType** parameter to **PrePaid**.
   * 
   * @example
   * 2017-08-20T12:10:10Z
   */
  purchaseTime?: string;
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group. For more information about resource groups, see [Resource groups](https://help.aliyun.com/document_detail/2381067.html).
   * 
   * @example
   * rg-aekzw******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags.
   */
  tag?: CreateCasterRequestTag[];
  static names(): { [key: string]: string } {
    return {
      casterName: 'CasterName',
      casterTemplate: 'CasterTemplate',
      chargeType: 'ChargeType',
      clientToken: 'ClientToken',
      expireTime: 'ExpireTime',
      normType: 'NormType',
      ownerId: 'OwnerId',
      purchaseTime: 'PurchaseTime',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      casterName: 'string',
      casterTemplate: 'string',
      chargeType: 'string',
      clientToken: 'string',
      expireTime: 'string',
      normType: 'number',
      ownerId: 'number',
      purchaseTime: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': CreateCasterRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

