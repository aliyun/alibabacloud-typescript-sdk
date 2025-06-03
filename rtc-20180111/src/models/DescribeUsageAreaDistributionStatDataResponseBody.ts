// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeUsageAreaDistributionStatDataResponseBodyUsageAreaStatList } from "./DescribeUsageAreaDistributionStatDataResponseBodyUsageAreaStatList";


export class DescribeUsageAreaDistributionStatDataResponseBody extends $dara.Model {
  /**
   * @example
   * 231470C1-ACFB-4C9F-844F-4CFE1E3804C5
   */
  requestId?: string;
  usageAreaStatList?: DescribeUsageAreaDistributionStatDataResponseBodyUsageAreaStatList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      usageAreaStatList: 'UsageAreaStatList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      usageAreaStatList: { 'type': 'array', 'itemType': DescribeUsageAreaDistributionStatDataResponseBodyUsageAreaStatList },
    };
  }

  validate() {
    if(Array.isArray(this.usageAreaStatList)) {
      $dara.Model.validateArray(this.usageAreaStatList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

