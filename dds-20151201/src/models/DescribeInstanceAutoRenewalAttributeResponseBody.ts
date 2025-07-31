// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceAutoRenewalAttributeResponseBodyItemsItem extends $dara.Model {
  /**
   * @remarks
   * Indicates whether auto-renewal is enabled for the instance. Valid values:
   * 
   * *   **true**: Auto-renewal is enabled for the instance.
   * *   **false**: Auto-renewal is disabled for the instance.
   * 
   * @example
   * true
   */
  autoRenew?: string;
  /**
   * @remarks
   * The category of the instance. Valid values:
   * 
   * *   **replicate**: the standalone or replica set instance
   * *   **sharding**: the sharded cluster instance
   * 
   * @example
   * replicate
   */
  DBInstanceType?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * dds-bp2568*****
   */
  dbInstanceId?: string;
  /**
   * @remarks
   * The auto-renewal period. Unit: months.
   * 
   * > * This parameter is ruturned only when the returned value of the **AutoRenew** parameter is **true**.
   * > * You can call the [ModifyInstanceAutoRenewalAttribute](https://help.aliyun.com/document_detail/145979.html) operation to modify the auto-renewal period.
   * 
   * @example
   * 1
   */
  duration?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'AutoRenew',
      DBInstanceType: 'DBInstanceType',
      dbInstanceId: 'DbInstanceId',
      duration: 'Duration',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'string',
      DBInstanceType: 'string',
      dbInstanceId: 'string',
      duration: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAutoRenewalAttributeResponseBodyItems extends $dara.Model {
  item?: DescribeInstanceAutoRenewalAttributeResponseBodyItemsItem[];
  static names(): { [key: string]: string } {
    return {
      item: 'Item',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: { 'type': 'array', 'itemType': DescribeInstanceAutoRenewalAttributeResponseBodyItemsItem },
    };
  }

  validate() {
    if(Array.isArray(this.item)) {
      $dara.Model.validateArray(this.item);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAutoRenewalAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details about returned entries.
   */
  items?: DescribeInstanceAutoRenewalAttributeResponseBodyItems;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
  itemsNumbers?: number;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries that were returned on the current page.
   * 
   * @example
   * 2
   */
  pageRecordCount?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * FAB5CB3B-DB9D-473A-9DF1-F57B6B9CB949
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      itemsNumbers: 'ItemsNumbers',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: DescribeInstanceAutoRenewalAttributeResponseBodyItems,
      itemsNumbers: 'number',
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
    };
  }

  validate() {
    if(this.items && typeof (this.items as any).validate === 'function') {
      (this.items as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

