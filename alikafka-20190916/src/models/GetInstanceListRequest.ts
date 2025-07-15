// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceListRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * *   If you leave this parameter empty, the keys of all tags are matched.
   * *   The tag key can be up to 128 characters in length. It cannot start with aliyun or acs: and cannot contain `http://` or `https://`.
   * 
   * @example
   * test
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * *   If you leave Key empty, you must also leave this parameter empty. If you leave this parameter empty, the values of all tags are matched.
   * *   The tag value can be up to 128 characters in length. It cannot start with aliyun or acs: and cannot contain `http://` or `https://`.
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
   * The IDs of instances.
   * 
   * @example
   * alikafka_post-cn-mp91gnw0p***
   */
  instanceId?: string[];
  /**
   * @remarks
   * The ID of the order. You can obtain the order ID on the [Orders](https://usercenter2-intl.aliyun.com/order/list?pageIndex=1\\&pageSize=20\\&spm=5176.12818093.top-nav.ditem-ord.36f016d0OQFmJa) page in Alibaba Cloud User Center.
   * 
   * @example
   * 6072673****
   */
  orderId?: string;
  /**
   * @remarks
   * The ID of the region where the instance resides.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group. You can obtain this ID on the Resource Group page in the Resource Management console.
   * 
   * @example
   * rg-ac***********7q
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The instance version. You can use instance versions to filter different versions of instances. Valid values:
   * 
   * *   v2
   * *   v3
   * *   confluent
   * 
   * @example
   * v3
   */
  series?: string;
  /**
   * @remarks
   * The tags.
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

