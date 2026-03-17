// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeQosCarsRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the traffic throttling rule.
   * 
   * @example
   * testdesc
   */
  description?: string;
  /**
   * @remarks
   * The sorting method of the traffic throttling rules. Valid values:
   * 
   * *   **asc**: sorted in ascending order. This is the default value.
   * *   **desc**: sorted in descending order.
   * 
   * By default, traffic throttling rules are sorted in ascending order of priority.
   * 
   * @example
   * asc
   */
  order?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The number of the page to return. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return per page. Valid values: **1** to **50**. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the traffic throttling rule.
   * 
   * @example
   * qoscar-n5k8g97lihlph****
   */
  qosCarId?: string;
  /**
   * @remarks
   * The ID of the QoS policy.
   * 
   * This parameter is required.
   * 
   * @example
   * qos-awfxl1adxeqyk****
   */
  qosId?: string;
  /**
   * @remarks
   * The ID of the region where the QoS policy is created.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      order: 'Order',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      qosCarId: 'QosCarId',
      qosId: 'QosId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      order: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      qosCarId: 'string',
      qosId: 'string',
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

