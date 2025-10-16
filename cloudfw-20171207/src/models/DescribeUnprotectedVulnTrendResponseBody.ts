// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUnprotectedVulnTrendResponseBodyDataList extends $dara.Model {
  /**
   * @example
   * 3
   */
  protectedVulnCnt?: number;
  /**
   * @example
   * 1525833105
   */
  time?: number;
  /**
   * @example
   * 2
   */
  unprotectedVulnCnt?: number;
  static names(): { [key: string]: string } {
    return {
      protectedVulnCnt: 'ProtectedVulnCnt',
      time: 'Time',
      unprotectedVulnCnt: 'UnprotectedVulnCnt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      protectedVulnCnt: 'number',
      time: 'number',
      unprotectedVulnCnt: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUnprotectedVulnTrendResponseBody extends $dara.Model {
  /**
   * @example
   * 7
   */
  curProtectedCnt?: number;
  /**
   * @example
   * 8
   */
  curUnprotectedCnt?: number;
  dataList?: DescribeUnprotectedVulnTrendResponseBodyDataList[];
  /**
   * @example
   * 1731551104
   */
  endTime?: number;
  /**
   * @example
   * 60
   */
  interval?: number;
  /**
   * @example
   * 05BEF2B5-EAAA-509D-9824-E3C7DC17****
   */
  requestId?: string;
  /**
   * @example
   * 1749434787
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      curProtectedCnt: 'CurProtectedCnt',
      curUnprotectedCnt: 'CurUnprotectedCnt',
      dataList: 'DataList',
      endTime: 'EndTime',
      interval: 'Interval',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      curProtectedCnt: 'number',
      curUnprotectedCnt: 'number',
      dataList: { 'type': 'array', 'itemType': DescribeUnprotectedVulnTrendResponseBodyDataList },
      endTime: 'number',
      interval: 'number',
      requestId: 'string',
      startTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dataList)) {
      $dara.Model.validateArray(this.dataList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

