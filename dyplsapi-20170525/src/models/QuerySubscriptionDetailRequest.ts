// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySubscriptionDetailRequest extends $dara.Model {
  ownerId?: number;
  /**
   * @remarks
   * The private number in the binding, that is, phone number X.
   * 
   * This parameter is required.
   * 
   * @example
   * 13900001234
   */
  phoneNoX?: string;
  /**
   * @remarks
   * The key of the phone number pool. Log on to the [Phone Number Protection console](https://dypls.console.aliyun.com/dypls.htm#/account) and view the key of the phone number pool on the **Number Pool Management** page.
   * 
   * >  This parameter is required when **ProductType** is left empty.
   * 
   * @example
   * FC123456
   */
  poolKey?: string;
  /**
   * @remarks
   * The product type. Valid values:
   * 
   * *   **AXB_170**
   * *   **AXN_170**
   * *   **AXN_95**
   * *   **AXN_EXTENSION_REUSE**
   * 
   * > 
   * 
   * *   This parameter is applicable to the original key accounts of Alibaba Cloud. This parameter can be ignored for Alibaba Cloud users.
   * 
   * *   This parameter is required when **PoolKey** is left empty.
   * 
   * @example
   * AXB_170
   */
  productType?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The binding ID.
   * 
   * Log on to the Phone Number Protection console, choose **Number and Number Pool** > **Number Management**. On the Number Management page, select the desired record and click Details to view the binding ID. Alternatively, you can view the value of the **SubsId** parameter returned by an API operation for a phone number binding such as [BindAxb](https://help.aliyun.com/document_detail/110248.html). The value of this parameter indicates a binding ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 100000076879****
   */
  subsId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      phoneNoX: 'PhoneNoX',
      poolKey: 'PoolKey',
      productType: 'ProductType',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      subsId: 'SubsId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      phoneNoX: 'string',
      poolKey: 'string',
      productType: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      subsId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

