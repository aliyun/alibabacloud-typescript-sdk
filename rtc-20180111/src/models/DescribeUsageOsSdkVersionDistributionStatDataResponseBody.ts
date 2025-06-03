// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeUsageOsSdkVersionDistributionStatDataResponseBodyUsageOsSdkVersionStatList } from "./DescribeUsageOsSdkVersionDistributionStatDataResponseBodyUsageOsSdkVersionStatList";


export class DescribeUsageOsSdkVersionDistributionStatDataResponseBody extends $dara.Model {
  /**
   * @example
   * 231470C1-ACFB-4C9F-844F-4CFE1E3804C5
   */
  requestId?: string;
  usageOsSdkVersionStatList?: DescribeUsageOsSdkVersionDistributionStatDataResponseBodyUsageOsSdkVersionStatList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      usageOsSdkVersionStatList: 'UsageOsSdkVersionStatList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      usageOsSdkVersionStatList: { 'type': 'array', 'itemType': DescribeUsageOsSdkVersionDistributionStatDataResponseBodyUsageOsSdkVersionStatList },
    };
  }

  validate() {
    if(Array.isArray(this.usageOsSdkVersionStatList)) {
      $dara.Model.validateArray(this.usageOsSdkVersionStatList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

