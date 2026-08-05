// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCasterRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
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
   * The preset resolution of the production studio. This parameter is available only for the subscription billing method. Valid values:
   * 
   * - **lp_ld**: low definition.
   * 
   * - **lp_sd**: standard definition.
   * 
   * - **lp_hd**: high definition.
   * 
   * - **lp_ud**: ultra-high definition.
   * 
   * - **lp_ld_v**: vertical low definition.
   * 
   * - **lp_sd_v**: vertical standard definition.
   * 
   * - **lp_hd_v**: vertical high definition.
   * 
   * - **lp_ud_v**: vertical ultra-high definition.
   * 
   * > If you use the pay-as-you-go billing method, call the [SetCasterConfig](https://help.aliyun.com/document_detail/60271.html) operation to set the resolution.
   * 
   * @example
   * lp_sd
   */
  casterTemplate?: string;
  /**
   * @remarks
   * The billing method. Only **PostPaid** is supported. Valid values:
   * 
   * - **PrePaid**: subscription (not supported).
   * 
   * - **PostPaid**: pay-as-you-go.
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
   * Generate a token on your client and ensure that the token is unique among different requests. The token can be up to 64 ASCII characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * 53200b81-b761-4c10-842a-a0726d97****
   */
  clientToken?: string;
  /**
   * @remarks
   * The expiration time of the production studio. The time is in the \\`yyyy-MM-ddTHH:mm:ssZ\\` format and is displayed in UTC.
   * 
   * > This parameter is available only if you set **ChargeType** to **PrePaid**.
   * 
   * @example
   * 2017-08-22T12:10:10Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The type of the production studio. Valid values:
   * 
   * <props="china">
   * 
   * - **1**: Standard.
   * 
   * - **3**: Lightweight Carousel.
   * 
   * - **4**: Virtual Studio.
   * 
   * - **6**: Carousel (New Playlist).
   * 
   * 
   * 
   * <props="intl">
   * 
   * - **1**: Standard.
   * 
   * - **6**: Carousel (New Playlist).
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
   * The purchase time of the production studio. The time is in the \\`yyyy-MM-ddTHH:mm:ssZ\\` format and is displayed in UTC.
   * 
   * > This parameter is available only if you set **ChargeType** to **PrePaid**.
   * 
   * @example
   * 2017-08-20T12:10:10Z
   */
  purchaseTime?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group. For more information, see [What is a resource group?](https://help.aliyun.com/document_detail/2381067.html).
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

