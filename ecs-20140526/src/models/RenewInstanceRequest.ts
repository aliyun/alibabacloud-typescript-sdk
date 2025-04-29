// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RenewInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The **token** can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe637760
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies the [unified expiration date](https://help.aliyun.com/document_detail/63396.html). Valid values: 1 to 28.
   * 
   * To use this parameter, you must [specify a unified expiration date for the ECS instance](~~63396#694cb636c0rp6~~). The value of this parameter must be the same as the specified unified expiration date. Otherwise, the call fails.
   * 
   * >  You must specify the renewal period-related parameter pair (`Period` and `PeriodUnit`) or `ExpectedRenewDay`, but not both.
   * 
   * @example
   * 5
   */
  expectedRenewDay?: number;
  /**
   * @remarks
   * The ID of the instance that you want to renew.
   * 
   * This parameter is required.
   * 
   * @example
   * i-bp67acfmxazb4p****
   */
  instanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The renewal period of the subscription instance. If `DedicatedHostId` is specified, the value of Period cannot exceed the subscription period of the specified dedicated host.
   * 
   * Valid values when PeriodUnit is set to Month: 1, 2, 3, 4, 5, 6, 7, 8, 9, and 12.
   * 
   * > The renewal period-related parameter pair (`Period` and `PeriodUnit`) and `ExpectedRenewDay` are mutually exclusive.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit of the renewal period. Valid values:
   * 
   * Month
   * 
   * Default value: Month.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      expectedRenewDay: 'ExpectedRenewDay',
      instanceId: 'InstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      expectedRenewDay: 'number',
      instanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      period: 'number',
      periodUnit: 'string',
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

