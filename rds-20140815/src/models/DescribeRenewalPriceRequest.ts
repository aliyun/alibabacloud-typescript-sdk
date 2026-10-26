// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRenewalPriceRequest extends $dara.Model {
  /**
   * @remarks
   * The business extension parameters.
   * 
   * @example
   * 121436975448952
   */
  businessInfo?: string;
  /**
   * @remarks
   * Ensures the idempotence of the request.
   * 
   * @example
   * ETnLKlblzczshOTUbOCz****
   */
  clientToken?: string;
  /**
   * @remarks
   * The instance type. For more information about instance types, see [Primary instance types](https://help.aliyun.com/document_detail/26312.html). Default value: the current instance type.
   * 
   * @example
   * mysql.n2.medium.2c
   */
  DBInstanceClass?: string;
  /**
   * @remarks
   * Instance ID of the instance. You can call the DescribeDBInstances operation to obtain instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk5****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The order type. Valid value: **BUY**.
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
   * * **Postpaid**: pay-as-you-go.
   * * **Prepaid**: subscription.
   * 
   * @example
   * Postpaid
   */
  payType?: string;
  /**
   * @remarks
   * The number of instances. Default value: **1**.
   * 
   * @example
   * 1
   */
  quantity?: number;
  /**
   * @remarks
   * The ID of the region. You can call the DescribeRegions operation to obtain the ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group. You can call the DescribeDBInstanceAttribute operation to obtain the ID.
   * 
   * @example
   * rg-acfmx****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The unit of the subscription duration. Valid values:
   * 
   * * **Year**: year.
   * * **Month**: month.
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
   * * If the **TimeType** parameter is set to **Year**, valid values are **1 to 3**.
   * * If the **TimeType** parameter is set to **Month**, valid values are **1 to 9**.
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

