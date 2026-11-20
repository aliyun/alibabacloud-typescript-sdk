// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnbindSubs700Request extends $dara.Model {
  /**
   * @remarks
   * Optional. The Industrial Internet identification code, which has a one-to-one mapping with the OrderID. The code supports characters such as periods (.) and forward slashes (/) to separate code domains. The code must not contain non-printable characters, such as spaces or line feeds. This field is required when the service consumer generates the Industrial Internet identification code.
   * 
   * @example
   * 700.100.1/12345678
   */
  industrialId?: string;
  /**
   * @remarks
   * The order ID. This parameter is required in practice. Encrypt the order ID for reporting to the regulatory platform.
   * 
   * @example
   * 12345678
   */
  orderId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The number pool key.
   * 
   * To obtain the **number pool key**, go to the [Number pool management](https://dyplsnext.console.aliyun.com/number-pool) page in the Phone Number Privacy Protection console.
   * 
   * This parameter is required.
   * 
   * @example
   * FC10000016848****
   */
  poolKey?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The number binding ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 100000****
   */
  subsId?: number;
  /**
   * @remarks
   * The intermediate number X. If the service consumer does not specify number X, the application platform assigns a number from the number pool as number X.
   * 
   * This parameter is required.
   * 
   * @example
   * 700********0000
   */
  telX?: string;
  static names(): { [key: string]: string } {
    return {
      industrialId: 'IndustrialId',
      orderId: 'OrderId',
      ownerId: 'OwnerId',
      poolKey: 'PoolKey',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      subsId: 'SubsId',
      telX: 'TelX',
    };
  }

  static types(): { [key: string]: any } {
    return {
      industrialId: 'string',
      orderId: 'string',
      ownerId: 'number',
      poolKey: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      subsId: 'number',
      telX: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

