// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVendorListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request. Alibaba Cloud generates a unique identifier for each request, which can be used for troubleshooting and diagnostics.
   * 
   * @example
   * 340D7FC4-D575-1661-8ACD-CFA7BE57B795
   */
  requestId?: string;
  /**
   * @remarks
   * The list of vendors.
   */
  vendorNameList?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      vendorNameList: 'VendorNameList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      vendorNameList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.vendorNameList)) {
      $dara.Model.validateArray(this.vendorNameList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

