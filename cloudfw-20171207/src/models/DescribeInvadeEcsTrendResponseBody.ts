// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInvadeEcsTrendResponseBodyDataList extends $dara.Model {
  /**
   * @example
   * 27
   */
  ecsCount?: number;
  /**
   * @example
   * 1659405600
   */
  time?: number;
  static names(): { [key: string]: string } {
    return {
      ecsCount: 'EcsCount',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecsCount: 'number',
      time: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvadeEcsTrendResponseBody extends $dara.Model {
  dataList?: DescribeInvadeEcsTrendResponseBodyDataList[];
  /**
   * @example
   * 1736820365
   */
  endTime?: number;
  /**
   * @example
   * 60
   */
  interval?: number;
  /**
   * @example
   * 2
   */
  invadeEcsCount?: number;
  /**
   * @example
   * F90E816D-BEE7-5BD6-95ED-474F54****
   */
  requestId?: string;
  /**
   * @example
   * 1742177725
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      dataList: 'DataList',
      endTime: 'EndTime',
      interval: 'Interval',
      invadeEcsCount: 'InvadeEcsCount',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataList: { 'type': 'array', 'itemType': DescribeInvadeEcsTrendResponseBodyDataList },
      endTime: 'number',
      interval: 'number',
      invadeEcsCount: 'number',
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

