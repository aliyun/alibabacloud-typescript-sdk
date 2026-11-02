// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceListRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the resource.
   * 
   * - If this parameter is left empty, all tag keys are matched.
   * 
   * - The tag key can be up to 128 characters in length. It cannot start with aliyun or acs:, and cannot contain `http://` or `https://`.
   * 
   * @example
   * test
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the resource.
   * 
   * - If the tag key is empty, this parameter must be empty. If this parameter is left empty, all tag values are matched.
   * 
   * - The tag value can be up to 128 characters in length. It cannot start with aliyun or acs:, and cannot contain `http://` or `https://`.
   * 
   * @example
   * test
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

export class GetInstanceListRequest extends $dara.Model {
  /**
   * @remarks
   * The list of instance IDs.
   * 
   * @example
   * alikafka_post-cn-mp91gnw0p***
   */
  instanceId?: string[];
  /**
   * @remarks
   * The order ID. You can obtain the order ID from <props="china">[Orders](https://usercenter2.aliyun.com/order/list?pageIndex=1&pageSize=20)<props="intl">[Order Management](https://usercenter2-intl.aliyun.com/order/list?pageIndex=1&pageSize=20&spm=5176.12818093.top-nav.ditem-ord.36f016d0OQFmJa) in Alibaba Cloud Expenses and Costs.>Notice: Serverless instances do not support querying by order ID.
   * 
   * @example
   * 6072673****
   */
  orderId?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID. You can query the ID in the Resource Management console.
   * 
   * @example
   * rg-ac***********7q
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The instance edition identity. You can filter instances of different editions based on the edition number. Valid values:
   * - v2
   * - v3
   * - confluent
   * 
   * @example
   * v3
   */
  series?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tag?: GetInstanceListRequestTag[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      orderId: 'OrderId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      series: 'Series',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: { 'type': 'array', 'itemType': 'string' },
      orderId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      series: 'string',
      tag: { 'type': 'array', 'itemType': GetInstanceListRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.instanceId)) {
      $dara.Model.validateArray(this.instanceId);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

