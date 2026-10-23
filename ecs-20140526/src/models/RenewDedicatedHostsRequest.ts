// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RenewDedicatedHostsRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must ensure that it is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The list of dedicated host IDs. You can enter up to 100 subscription dedicated host IDs. Specify multiple IDs in a JSON array formatted as `["dh-xxxxxxxxx", "dh-yyyyyyyyy", … "dh-zzzzzzzzz"]`. Separate multiple IDs with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * dh-bp199lyny9b3****
   */
  dedicatedHostIds?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The renewal period. Valid values:
   * 
   * <props="china">
   * - When PeriodUnit is set to Week: 1, 2, 3, and 4.
   * - When PeriodUnit is set to Month: 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36, 48, and 60.
   * - When PeriodUnit is set to Year: 1, 2, 3, 4, and 5.
   * 
   * 
   * 
   * <props="intl">
   * - When PeriodUnit is set to Month: 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36, 48, and 60.
   * - When PeriodUnit is set to Year: 1, 2, 3, 4, and 5.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit of the renewal period. Valid values:
   * 
   * <props="china">
   * - Week
   * - Month
   * - Year
   * 
   * 
   * 
   * <props="intl">
   * - Month
   * - Year
   * 
   * 
   * 
   * Default value: Month.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * The region ID of the dedicated host. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dedicatedHostIds: 'DedicatedHostIds',
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
      clientToken: 'string',
      dedicatedHostIds: 'string',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

