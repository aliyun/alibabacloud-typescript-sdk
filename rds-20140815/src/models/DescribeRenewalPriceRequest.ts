// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRenewalPriceRequest extends $dara.Model {
  /**
   * @remarks
   * The additional business information about the instance.
   * 
   * @example
   * 121436975448952
   */
  businessInfo?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * @example
   * ETnLKlblzczshOTUbOCzxxxxxxxxxx
   */
  clientToken?: string;
  /**
   * @remarks
   * The instance type of the instance. For more information, see [Primary instance types](https://help.aliyun.com/document_detail/26312.html). By default, the current instance type applies.
   * 
   * @example
   * mysql.n2.medium.2c
   */
  DBInstanceClass?: string;
  /**
   * @remarks
   * The instance ID. You can call the DescribeDBInstances operation to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk5xxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The type of order. Set the value to **BUY**.
   * 
   * @example
   * BUY
   */
  orderType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * *   **Postpaid**: pay-as-you-go
   * *   **Prepaid**: subscription
   * 
   * @example
   * Postpaid
   */
  payType?: string;
  /**
   * @remarks
   * The number of the instances. Default value: **1**.
   * 
   * @example
   * 1
   */
  quantity?: number;
  /**
   * @remarks
   * The region ID. You can call the DescribeRegions operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID. You can call the DescribeDBInstanceAttribute operation to query the resource group ID.
   * 
   * @example
   * rg-acfmx****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The renewal cycle of the instance. Valid values:
   * 
   * *   **Year**
   * *   **Month**
   * 
   * This parameter is required.
   * 
   * @example
   * Year
   */
  timeType?: string;
  /**
   * @remarks
   * The subscription duration of the instance. Valid values:
   * 
   * *   If you set the **TimeType** parameter to **Year**, the value of the UsedTime parameter is within the range of **1 to 3**.
   * *   If you set the **TimeType** parameter to **Month**, the value of the UsedTime parameter is within the range of **1 to 9**.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  usedTime?: number;
  static names(): { [key: string]: string } {
    return {
      businessInfo: 'BusinessInfo',
      clientToken: 'ClientToken',
      DBInstanceClass: 'DBInstanceClass',
      DBInstanceId: 'DBInstanceId',
      orderType: 'OrderType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      payType: 'PayType',
      quantity: 'Quantity',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      timeType: 'TimeType',
      usedTime: 'UsedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessInfo: 'string',
      clientToken: 'string',
      DBInstanceClass: 'string',
      DBInstanceId: 'string',
      orderType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      payType: 'string',
      quantity: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      timeType: 'string',
      usedTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

