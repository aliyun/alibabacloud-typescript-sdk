// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceAutoRenewalAttributeResponseBodyItemsItem extends $dara.Model {
  autoRenew?: string;
  DBInstanceType?: string;
  dbInstanceId?: string;
  duration?: string;
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

