// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyElasticityAssuranceAutoRenewAttributeRequestPrivatePoolOptions extends $dara.Model {
  /**
   * @remarks
   * The IDs of the elasticity assurances to be modified. This parameter is required. If this parameter is not specified, the MissingParameter.PrivatePoolOptionsId error is returned.
   * 
   * > You can modify up to 50 elasticity assurances at a time.
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
   * Specifies the auto-renewal duration for the instance.
   * 
   * - If `PeriodUnit` is set to `Year`, valid values are 1, 3, and 5.
   * 
   * - If `PeriodUnit` is set to `Month`, the valid value is 1.
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
   * - Month
   * 
   * - Year
   * 
   * Default value: Month.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * The region ID of the elasticity assurance. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
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
   * - AutoRenewal: enables auto-renewal.
   * 
   * - Normal: disables auto-renewal.
   * 
   * - NotRenewal: does not renew the instance. If you set this parameter to NotRenewal, the system no longer sends expiration reminders and sends a non-renewal reminder only three days before expiration. You can change the status of an elasticity assurance that is set to NotRenewal to Normal, and then manually renew it or enable auto-renewal.
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

