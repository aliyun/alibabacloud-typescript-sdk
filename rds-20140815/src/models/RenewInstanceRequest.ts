// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RenewInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic payment during the renewal. Valid values:
   * 
   * *   **True**: enables automatic payment. Make sure that your Alibaba Cloud account has adequate balance.
   * *   **False** (default): disables automatic payment. You have to manually pay the order in the console.
   * 
   * >  For more information about how to renew the instance in the console, see the following topics:
   * 
   * *   [Manually renew an ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/96050.html)
   * 
   * *   [Manually renew an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/96741.html)
   * 
   * *   [Manually renew an ApsaraDB RDS for SQL Server instance](https://help.aliyun.com/document_detail/95637.html)
   * 
   * *   [Manually renew an ApsaraDB RDS for MariaDB instance](https://help.aliyun.com/document_detail/97122.html)
   * 
   * @example
   * True
   */
  autoPay?: string;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal for the instance. Valid values:
   * 
   * *   **true**.
   * *   **false** (default)
   * 
   * @example
   * true
   */
  autoRenew?: string;
  /**
   * @remarks
   * Specifies whether to use a coupon. Valid values:
   * 
   * *   **true**: uses a coupon.
   * *   **false** (default): does not use a coupon.
   * 
   * @example
   * true
   */
  autoUseCoupon?: boolean;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the generated token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * ETnLKlblzczshOTUbOCzxxxxxxxxxx
   */
  clientToken?: string;
  /**
   * @remarks
   * The instance ID You can call the DescribeDBInstances operation to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk5xxxxxxxxxx
   */
  DBInstanceId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The duration of the subscription renewal. Unit: month. Valid values:
   * 
   * *   **1~9**
   * *   **12**
   * *   **24**
   * *   **36**
   * *   **48**
   * *   **60**
   * 
   * This parameter is required.
   * 
   * @example
   * 12
   */
  period?: number;
  /**
   * @remarks
   * The coupon code.
   * 
   * @example
   * 726702810223
   */
  promotionCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      autoRenew: 'AutoRenew',
      autoUseCoupon: 'AutoUseCoupon',
      clientToken: 'ClientToken',
      DBInstanceId: 'DBInstanceId',
      ownerId: 'OwnerId',
      period: 'Period',
      promotionCode: 'PromotionCode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'string',
      autoRenew: 'string',
      autoUseCoupon: 'boolean',
      clientToken: 'string',
      DBInstanceId: 'string',
      ownerId: 'number',
      period: 'number',
      promotionCode: 'string',
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

