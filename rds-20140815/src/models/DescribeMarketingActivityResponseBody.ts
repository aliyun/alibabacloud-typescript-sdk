// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeMarketingActivityResponseBodyItems } from "./DescribeMarketingActivityResponseBodyItems";


export class DescribeMarketingActivityResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 1979008652307170
   */
  aliUid?: number;
  /**
   * @remarks
   * *   China site: 26842
   * *   International site: 26888
   * 
   * @example
   * 26842
   */
  bid?: string;
  /**
   * @remarks
   * The activity parameters
   */
  items?: DescribeMarketingActivityResponseBodyItems[];
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shenzhen
   */
  regionId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 7D8F09DB-1124-5D78-A520-FF88FAF4351B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      bid: 'Bid',
      items: 'Items',
      regionId: 'RegionId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      bid: 'string',
      items: { 'type': 'array', 'itemType': DescribeMarketingActivityResponseBodyItems },
      regionId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

