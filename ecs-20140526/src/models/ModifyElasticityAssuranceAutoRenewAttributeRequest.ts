// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyElasticityAssuranceAutoRenewAttributeRequestPrivatePoolOptions extends $dara.Model {
  /**
   * @remarks
   * The list of elasticity assurance service IDs to modify.
   * 
   * > You can modify up to 50 elasticity assurance services at a time.
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

export class ModifyElasticityAssuranceAutoRenewAttributeRequest extends $dara.Model {
  privatePoolOptions?: ModifyElasticityAssuranceAutoRenewAttributeRequestPrivatePoolOptions;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The auto-renewal period of the instance.
   * 
   * 
   * 
   * - If `PeriodUnit` is set to `Year`, valid values: 1, 3, and 5.
   * 
   * - If `PeriodUnit` is set to `Month`, valid values: 1.
   * 
   * 
   * 
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
   * - Month: month
   * 
   * - Year: year
   * 
   * Default value: Month.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * The region ID of the elasticity assurance service. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The auto-renewal status of the instance. Valid values:
   * 
   * - AutoRenewal: Auto-renewal is enabled.
   * 
   * - Normal: Auto-renewal is disabled.
   * 
   * - NotRenewal: The instance will not be renewed. After this value is specified, the system no longer sends expiration reminders and sends only a non-renewal reminder three days before the expiration date. You can change the value for an elasticity assurance service from NotRenewal to Normal and then manually renew the service or enable auto-renewal.
   * 
   * @example
   * Normal
   */
  renewalStatus?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      privatePoolOptions: 'PrivatePoolOptions',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      regionId: 'RegionId',
      renewalStatus: 'RenewalStatus',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      privatePoolOptions: ModifyElasticityAssuranceAutoRenewAttributeRequestPrivatePoolOptions,
      ownerAccount: 'string',
      ownerId: 'number',
      period: 'number',
      periodUnit: 'string',
      regionId: 'string',
      renewalStatus: 'string',
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

