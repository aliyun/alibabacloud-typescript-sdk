// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RenewElasticityAssurancesRequestPrivatePoolOptions extends $dara.Model {
  /**
   * @remarks
   * The list of elasticity assurance service IDs.
   * 
   * **Limit**: You can renew up to 20 elasticity assurance services at a time.
   * 
   * You can call [DescribeElasticityAssurances](https://help.aliyun.com/document_detail/2679748.html) to query purchased elasticity assurance services.
   */
  id?: string[];
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.id)) {
      $dara.Model.validateArray(this.id);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewElasticityAssurancesRequest extends $dara.Model {
  privatePoolOptions?: RenewElasticityAssurancesRequestPrivatePoolOptions;
  /**
   * @remarks
   * Specifies whether to enable automatic payment. Valid values:
   * - true: Automatic payment is enabled.
   * - false: Automatic payment is not enabled.
   * 
   * Default value: true.
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal. Valid values:
   * 
   * - true: Auto-renewal is enabled.
   * 
   * - false: Auto-renewal is not enabled.
   * 
   * Default value: false.
   * 
   * @example
   * true
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The auto-renewal period. Unit: months. Valid values: 1, 2, 3, 6, 12, 24, and 36.
   * 
   * - When `PeriodUnit=Month`, the default value is 1.
   * 
   * - When `PeriodUnit=Year`, the default value is 12.
   * 
   * 
   * >This parameter is required when `AutoRenew` is set to `true`.
   * 
   * @example
   * 1
   */
  autoRenewPeriod?: number;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but make sure that the token is unique among different requests.
   * 
   * `ClientToken` supports only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The renewal period. The unit of the renewal period is determined by the `PeriodUnit` parameter. Valid values:
   * 
   * - When `PeriodUnit` is set to `Weekly`: 1, 2, and 3.
   * 
   * 
   * - When `PeriodUnit` is set to `Month`: 1, 2, 3, 4, 5, 6, 7, 8, and 9.
   * 
   * - When `PeriodUnit` is set to `Year`: 1, 2, 3, 4, and 5.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit of the renewal period. Valid values:
   * 
   * - Weekly: week
   * 
   * - Month: month
   * 
   * - Year: year
   * 
   * Default value: Year.
   * 
   * @example
   * Year
   */
  periodUnit?: string;
  /**
   * @remarks
   * The region ID of the elasticity assurance service.
   * 
   * You can call [DescribeRegions](https://help.aliyun.com/document_detail/2680071.html) to query the most recent region list.
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

