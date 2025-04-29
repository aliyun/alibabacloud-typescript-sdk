// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RenewElasticityAssurancesRequestPrivatePoolOptions } from "./RenewElasticityAssurancesRequestPrivatePoolOptions";


export class RenewElasticityAssurancesRequest extends $dara.Model {
  privatePoolOptions?: RenewElasticityAssurancesRequestPrivatePoolOptions;
  /**
   * @remarks
   * Specifies whether to enable automatic payment. Valid values:
   * 
   * *   true
   * *   false
   * 
   * Default value: true.
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal for the elasticity assurance. Valid values:
   * 
   * *   true
   * *   false
   * 
   * Default value: false.
   * 
   * @example
   * true
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The auto-renewal period. Unit: month. Valid values: 1, 2, 3, 6, 12, 24, and 36.
   * 
   * *   If you set `PeriodUnit` to Month, the default value is 1.
   * *   If you set `PeriodUnit` to Year, the default value is 12.
   * 
   * >  This parameter is required if you set `AutoRenew` to `true`.
   * 
   * @example
   * 1
   */
  autoRenewPeriod?: number;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests.
   * 
   * The `token` can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The renewal duration. The unit of the renewal duration is determined by the `PeriodUnit` value. Valid values:
   * 
   * *   Valid values if you set `PeriodUnit` to `Month`: 1, 2, 3, 4, 5, 6, 7, 8, and 9.
   * *   Valid values if you set `PeriodUnit` to `Year`: 1, 2, and 3.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit of the renewal duration. Valid values:
   * 
   * *   Month
   * *   Year
   * 
   * Default value: Year.
   * 
   * @example
   * Year
   */
  periodUnit?: string;
  /**
   * @remarks
   * The region ID of the elasticity assurance.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/2680071.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      privatePoolOptions: 'PrivatePoolOptions',
      autoPay: 'AutoPay',
      autoRenew: 'AutoRenew',
      autoRenewPeriod: 'AutoRenewPeriod',
      clientToken: 'ClientToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      privatePoolOptions: RenewElasticityAssurancesRequestPrivatePoolOptions,
      autoPay: 'boolean',
      autoRenew: 'boolean',
      autoRenewPeriod: 'number',
      clientToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      period: 'number',
      periodUnit: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    if(this.privatePoolOptions && typeof (this.privatePoolOptions as any).validate === 'function') {
      (this.privatePoolOptions as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

