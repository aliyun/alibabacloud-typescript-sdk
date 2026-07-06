// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceListRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * - If you do not specify this parameter, all tag keys are matched.
   * 
   * - The tag key can be up to 128 characters in length. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
   * 
   * @example
   * test
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * - If you do not specify the `Key` parameter, you do not need to specify this parameter. If you leave this parameter empty, all tag values are matched.
   * 
   * - The tag value can be up to 128 characters in length. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
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
   * A list of instance IDs.
   * 
   * @example
   * alikafka_post-cn-mp91gnw0p***
   */
  instanceId?: string[];
  /**
   * @remarks
   * The order ID. You can find the order ID on the <props="china">[Orders](https://usercenter2.aliyun.com/order/list?pageIndex=1\\&pageSize=20) page in the Billing Management console.
   * <props="intl">[Orders](https://usercenter2-intl.aliyun.com/order/list?pageIndex=1\\&pageSize=20\\&spm=5176.12818093.top-nav.ditem-ord.36f016d0OQFmJa) page in the Billing Management console.
   * >Notice: You cannot use an order ID to query Serverless instances.
   * 
   * @example
   * 6072673****
   */
  orderId?: string;
  /**
   * @remarks
   * The ID of the region where the instance is located.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group. You can view the resource group ID in the Resource Group console.
   * 
   * @example
   * rg-ac***********7q
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The instance series. You can use this parameter to filter instances. Valid values:
   * 
   * - v2
   * 
   * - v3
   * 
   * - confluent
   * 
   * @example
   * v3
   */
  series?: string;
  /**
   * @remarks
   * A list of tags.
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

