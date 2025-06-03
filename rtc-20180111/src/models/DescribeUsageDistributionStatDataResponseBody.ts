// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeUsageDistributionStatDataResponseBodyUsageStatList } from "./DescribeUsageDistributionStatDataResponseBodyUsageStatList";


export class DescribeUsageDistributionStatDataResponseBody extends $dara.Model {
  /**
   * @example
   * 231470C1-ACFB-4C9F-844F-4CFE1E3804C5
   */
  requestId?: string;
  usageStatList?: DescribeUsageDistributionStatDataResponseBodyUsageStatList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      usageStatList: 'UsageStatList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      usageStatList: { 'type': 'array', 'itemType': DescribeUsageDistributionStatDataResponseBodyUsageStatList },
    };
  }

  validate() {
    if(Array.isArray(this.usageStatList)) {
      $dara.Model.validateArray(this.usageStatList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

