// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PurchaseStorageCapacityUnitRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the SCU. The tag key cannot be an empty string. It can be up to 128 characters in length, and cannot start with `aliyun` or `acs:`, or contain `http://` or `https://`.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the SCU. The tag value can be an empty string. It can be up to 128 characters in length, and cannot start with `acs:`, or contain `http://` or `https://`.
   * 
   * @example
   * TestValue
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PurchaseStorageCapacityUnitRequest extends $dara.Model {
  /**
   * @remarks
   * The number of SCUs that you want to purchase. Valid values: 1 to 20.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  amount?: number;
  /**
   * @remarks
   * The capacity of the SCU. Unit: GiB. Valid values: 20, 40, 100, 200, 500, 1024, 2048, 5210, 10240, 20480, and 52100.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  capacity?: number;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the SCU. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * ScuPurchaseDemo
   */
  description?: string;
  /**
   * @remarks
   * The source of the request. Default value: OpenAPI. You do not need to manually specify this parameter.
   * 
   * @example
   * OpenAPI
   */
  fromApp?: string;
  /**
   * @remarks
   * The name of the SCU. The name must be 2 to 128 characters in length and can contain letters, digits, colons (:), underscores (_), and hyphens (-). It must start with a letter or a Chinese character and cannot start with `http://` or `https://`.
   * 
   * @example
   * ScuPurchaseDemo
   */
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The validity period of the SCU. Valid values:
   * 
   * - Valid values when PeriodUnit is set to Month: 1, 2, 3, and 6.
   * - Valid values when PeriodUnit is set to Year: 1, 3, and 5.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit of the validity period of the SCU. Valid values:
   * 
   * - Month
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
   * The region ID of the SCU. After the region is specified, the SCU can be used to offset only the pay-as-you-go bills of disks in this region. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the storage capacity unit (SCU) belongs. You can specify only the ID of a resource group to which you have permissions.
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The effective period of the SCU. The effective period cannot be more than 180 days after the creation time. Specify the time in the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddTHHZ format. The time must be in UTC.
   * 
   * Default value: none, which indicates that the SCU takes effect from the creation time.
   * 
   * @example
   * 2020-09-09T02Z
   */
  startTime?: string;
  /**
   * @remarks
   * The tags. Array length: 1 to 20.
   */
  tag?: PurchaseStorageCapacityUnitRequestTag[];
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      capacity: 'Capacity',
      clientToken: 'ClientToken',
      description: 'Description',
      fromApp: 'FromApp',
      name: 'Name',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      startTime: 'StartTime',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      capacity: 'number',
      clientToken: 'string',
      description: 'string',
      fromApp: 'string',
      name: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      period: 'number',
      periodUnit: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      startTime: 'string',
      tag: { 'type': 'array', 'itemType': PurchaseStorageCapacityUnitRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

