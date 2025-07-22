// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeChannelDistributionStatDataResponseBodyStatList extends $dara.Model {
  /**
   * @example
   * 1
   */
  callUserCount?: number;
  /**
   * @example
   * 1.0000
   */
  callUserRatio?: string;
  /**
   * @example
   * OS
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      callUserCount: 'CallUserCount',
      callUserRatio: 'CallUserRatio',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callUserCount: 'number',
      callUserRatio: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelDistributionStatDataResponseBody extends $dara.Model {
  /**
   * @example
   * 231470C1-ACFB-4C9F-844F-4CFE1E3804C5
   */
  requestId?: string;
  statList?: DescribeChannelDistributionStatDataResponseBodyStatList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      statList: 'StatList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      statList: { 'type': 'array', 'itemType': DescribeChannelDistributionStatDataResponseBodyStatList },
    };
  }

  validate() {
    if(Array.isArray(this.statList)) {
      $dara.Model.validateArray(this.statList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

