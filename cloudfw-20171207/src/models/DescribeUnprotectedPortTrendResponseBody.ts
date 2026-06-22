// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUnprotectedPortTrendResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The number of blocked requests.
   * 
   * @example
   * 1
   */
  count?: number;
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
      count: 'Count',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
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

export class DescribeUnprotectedPortTrendResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data list.
   */
  dataList?: DescribeUnprotectedPortTrendResponseBodyDataList[];
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
   * The request ID.
   * 
   * @example
   * E599A84E-CD22-5E42-A2A9-01A254AC****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dataList: 'DataList',
      interval: 'Interval',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataList: { 'type': 'array', 'itemType': DescribeUnprotectedPortTrendResponseBodyDataList },
      interval: 'number',
      requestId: 'string',
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

