// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeChildInstanceRegionsRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values: zh-CN (Chinese, which is the default language), en-US (English), and ja (Japanese).
   * 
   * @example
   * zh-CN
   */
  acceptLanguage?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The type of the network instance. Valid values:
   * 
   * *   **VPC**: virtual private cloud (VPC)
   * *   **VBR**: virtual border router (VBR)
   * *   **CCN**: Cloud Connect Network (CCN) instance
   * 
   * @example
   * VPC
   */
  productType?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      productType: 'ProductType',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      productType: 'string',
      resourceOwnerAccount: 'string',
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

