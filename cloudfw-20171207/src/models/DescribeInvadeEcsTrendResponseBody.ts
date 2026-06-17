// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInvadeEcsTrendResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The number of ECS instances.
   * 
   * @example
   * 27
   */
  ecsCount?: number;
  /**
   * @remarks
   * The timestamp.
   * 
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
  /**
   * @remarks
   * The data list.
   */
  dataList?: DescribeInvadeEcsTrendResponseBodyDataList[];
  /**
   * @remarks
   * The end of the time range. This is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1736820365
   */
  endTime?: number;
  /**
   * @remarks
   * The time interval.
   * 
   * @example
   * 60
   */
  interval?: number;
  /**
   * @remarks
   * The total number of compromised hosts.
   * 
   * @example
   * 2
   */
  invadeEcsCount?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F90E816D-BEE7-5BD6-95ED-474F54****
   */
  requestId?: string;
  /**
   * @remarks
   * The start of the time range. This is a UNIX timestamp. Unit: seconds.
   * 
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

