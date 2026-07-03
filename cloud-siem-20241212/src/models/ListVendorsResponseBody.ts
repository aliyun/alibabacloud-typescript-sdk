// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVendorsResponseBodyVendors extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1733269771123
   */
  createTime?: number;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 1733269771123
   */
  updateTime?: number;
  /**
   * @remarks
   * The vendor ID.
   * 
   * @example
   * vd-qlsw5eocx94w9
   */
  vendorId?: string;
  /**
   * @remarks
   * The vendor name.
   * 
   * @example
   * 111
   */
  vendorName?: string;
  /**
   * @remarks
   * The vendor type. Valid values:
   * 
   * - preset
   * 
   * - custom
   * 
   * @example
   * preset
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
   * @remarks
   * The maximum number of entries returned for this request.
   * 
   * @example
   * 50
   * 
   * **if can be null:**
   * true
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to retrieve the next page of results. If this is your first query or if no next page exists, you do not need to specify this parameter. If a next page exists, set the value to the NextToken value that is returned in the last response.
   * 
   * @example
   * AAAAAUqcj6VO4E3ECWIrFczs****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 6276D891-*****-55B2-87B9-74D413F7****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 57
   */
  totalCount?: number;
  /**
   * @remarks
   * The vendors.
   */
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

