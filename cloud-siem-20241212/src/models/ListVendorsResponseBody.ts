// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVendorsResponseBodyVendors extends $dara.Model {
  /**
   * @example
   * 1733269771123。
   */
  createTime?: number;
  /**
   * @example
   * 1733269771123。
   */
  updateTime?: number;
  /**
   * @example
   * vd-qlsw5eocx94w9。
   */
  vendorId?: string;
  /**
   * @example
   * 111。
   */
  vendorName?: string;
  /**
   * @example
   * preset。
   */
  vendorType?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      updateTime: 'UpdateTime',
      vendorId: 'VendorId',
      vendorName: 'VendorName',
      vendorType: 'VendorType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      updateTime: 'number',
      vendorId: 'string',
      vendorName: 'string',
      vendorType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVendorsResponseBody extends $dara.Model {
  /**
   * @example
   * 50。
   * 
   * **if can be null:**
   * true
   */
  maxResults?: number;
  /**
   * @example
   * AAAAAUqcj6VO4E3ECWIrFczs****。
   */
  nextToken?: string;
  /**
   * @example
   * 6276D891-*****-55B2-87B9-74D413F7****。
   */
  requestId?: string;
  /**
   * @example
   * 57。
   */
  totalCount?: number;
  vendors?: ListVendorsResponseBodyVendors[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      vendors: 'Vendors',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
      vendors: { 'type': 'array', 'itemType': ListVendorsResponseBodyVendors },
    };
  }

  validate() {
    if(Array.isArray(this.vendors)) {
      $dara.Model.validateArray(this.vendors);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

