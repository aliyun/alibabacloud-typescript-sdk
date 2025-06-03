// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeChannelAreaDistributionStatDataResponseBodyAreaStatList } from "./DescribeChannelAreaDistributionStatDataResponseBodyAreaStatList";


export class DescribeChannelAreaDistributionStatDataResponseBody extends $dara.Model {
  areaStatList?: DescribeChannelAreaDistributionStatDataResponseBodyAreaStatList[];
  /**
   * @example
   * 231470C1-ACFB-4C9F-844F-4CFE1E3804C5
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      areaStatList: 'AreaStatList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      areaStatList: { 'type': 'array', 'itemType': DescribeChannelAreaDistributionStatDataResponseBodyAreaStatList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.areaStatList)) {
      $dara.Model.validateArray(this.areaStatList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

