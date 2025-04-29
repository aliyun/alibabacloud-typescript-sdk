// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PurchaseElasticityAssuranceRequestPrivatePoolOptions } from "./PurchaseElasticityAssuranceRequestPrivatePoolOptions";


export class PurchaseElasticityAssuranceRequest extends $dara.Model {
  privatePoolOptions?: PurchaseElasticityAssuranceRequestPrivatePoolOptions;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The `token` can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The validity period of the elasticity assurance. The unit of the validity period is determined by the PeriodUnit value. Valid values:
   * 
   * *   When PeriodUnit is set to Month, valid values are 1, 2, 3, 4, 5, 6, 7, 8, and 9.
   * *   When PeriodUnit is set to Year, valid values are 1, 2, 3, 4, and 5.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit of the validity period of the elasticity assurance. Valid values:
   * 
   * *   Month
   * *   Year
   * 
   * Default value: Year.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * The ID of the region in which to purchase the elasticity assurance. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/2679950.html) operation to query the most recent region list.
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
   * The time when the elasticity assurance takes effect. The default value is the time when the elasticity assurance is created. Specify the time in the ISO 8601 standard in the `yyyy-MM-ddTHH:mm:ssZ` format. The time must be in UTC. For more information, see [ISO 8601](https://help.aliyun.com/document_detail/25696.html).
   * 
   * @example
   * 2024-06-18T00:00Z
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

