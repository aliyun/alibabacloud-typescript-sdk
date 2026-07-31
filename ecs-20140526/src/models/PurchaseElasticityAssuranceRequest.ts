// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PurchaseElasticityAssuranceRequestPrivatePoolOptions extends $dara.Model {
  /**
   * @remarks
   * The ID of the elastic capacity reservation service.
   * 
   * This parameter is required.
   * 
   * @example
   * eap-bp67acfmxazb4****
   */
  id?: string;
  /**
   * @remarks
   * The matching mode of the elastic capacity reservation service. Valid values:
   * 
   * - Open: open mode. The system automatically matches the capacity of open private pools when instances are started. If no matching private pool capacity is available, public pool resources are used to start the instances.
   * - Target: targeted mode. Instances are started by using the capacity of the specified private pool. If the specified private pool capacity is unavailable, the instances fail to start.
   * 
   * Default value: Open.
   * 
   * @example
   * Open
   */
  matchCriteria?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      matchCriteria: 'MatchCriteria',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      matchCriteria: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PurchaseElasticityAssuranceRequest extends $dara.Model {
  privatePoolOptions?: PurchaseElasticityAssuranceRequestPrivatePoolOptions;
  /**
   * @remarks
   * Ensures the idempotence of the request. The value is generated from your client and must be unique among different requests. The ClientToken value can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The purchase duration. The unit of the duration is determined by the PeriodUnit parameter. Valid values:
   * 
   * - If PeriodUnit is set to Month: 1, 2, 3, 4, 5, 6, 7, 8, and 9.
   * - If PeriodUnit is set to Year: 1, 2, 3, 4, and 5.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit of the purchase duration. Valid values:
   * 
   * - Month: month.
   * - Year: year.
   * 
   * Default value: Year.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * The region ID of the elastic capacity reservation service. You can call [DescribeRegions](https://help.aliyun.com/document_detail/2679950.html) to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The effective period of the elastic capacity reservation service. By default, the service takes effect when this operation is invoked. Specify the time in the ISO 8601 standard in the `yyyy-MM-ddTHH:mm:ssZ` format. The time must be in UTC. For more information, see [ISO 8601](https://help.aliyun.com/document_detail/25696.html).
   * 
   * @example
   * 2024-06-18T00:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      privatePoolOptions: 'PrivatePoolOptions',
      clientToken: 'ClientToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      privatePoolOptions: PurchaseElasticityAssuranceRequestPrivatePoolOptions,
      clientToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      period: 'number',
      periodUnit: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      startTime: 'string',
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

