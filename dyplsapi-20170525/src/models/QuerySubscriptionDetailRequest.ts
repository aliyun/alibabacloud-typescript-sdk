// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySubscriptionDetailRequest extends $dara.Model {
  ownerId?: number;
  /**
   * @remarks
   * The privacy number in the binding relationship, which is the X number.
   * 
   * Logon to the privacy protection console and go to the [Number Management](https://dyplsnext.console.aliyun.com/number/list) page to obtain the X number. Alternatively, check the **SecretNo** in the response parameters when you invoke number binding API operations such as [BindAxb](https://www.alibabacloud.com/help/en/pnp/developer-reference/api-dyplsapi-2017-05-25-bindaxb).
   * 
   * > When specifying the X number, make sure it is associated with the **SubsId** parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 139****1111
   */
  phoneNoX?: string;
  /**
   * @remarks
   * The key of the number pool.
   * 
   * Log on to the privacy protection console and go to the [Number Pool Management](https://dyplsnext.console.aliyun.com/number-pool?spm=a2c4g.11186623.0.0.7e6449bbtiHP8m) page to obtain the **Number Pool Key**.
   * 
   * > This parameter is required when **ProductType** is left empty.
   * 
   * @example
   * FC10000012345****
   */
  poolKey?: string;
  /**
   * @remarks
   * The product type. Valid values:
   * - **AXB_170**
   * - **AXN_170**
   * - **AXN_95**
   * - **AXN_EXTENSION_REUSE**
   * 
   * > - This parameter is applicable to former Alibaba Dayu users. Alibaba Cloud users can ignore this parameter.
   * > - This parameter is required when **PoolKey** is left empty.
   * 
   * @example
   * AXB_170
   */
  productType?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The binding relationship ID.
   * 
   * Logon to the privacy protection console, go to the [Number Management](https://dyplsnext.console.aliyun.com/number/list) page, filter the numbers, and click **Details** to view the binding relationship ID. Alternatively, check the **SubsId** in the response parameters when you invoke number binding API operations such as [BindAxb](https://www.alibabacloud.com/help/en/pnp/developer-reference/api-dyplsapi-2017-05-25-bindaxb).
   * 
   * > When specifying the binding relationship ID, make sure it is associated with the **PhoneNoX** parameter.
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

