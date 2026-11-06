// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVendorsResponseBodyVendors extends $dara.Model {
  createTime?: number;
  updateTime?: number;
  vendorId?: string;
  vendorName?: string;
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
   * **if can be null:**
   * true
   */
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
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

