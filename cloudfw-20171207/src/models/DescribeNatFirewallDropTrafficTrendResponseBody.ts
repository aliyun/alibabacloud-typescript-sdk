// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNatFirewallDropTrafficTrendResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The number of blocked sessions.
   * 
   * @example
   * 10
   */
  dropSession?: number;
  /**
   * @remarks
   * The data timestamp. The value is a UNIX timestamp in seconds.
   * 
   * @example
   * 1659405600
   */
  time?: number;
  /**
   * @remarks
   * The total number of requests.
   * 
   * @example
   * 153188
   */
  totalSession?: number;
  static names(): { [key: string]: string } {
    return {
      dropSession: 'DropSession',
      time: 'Time',
      totalSession: 'TotalSession',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dropSession: 'number',
      time: 'number',
      totalSession: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNatFirewallDropTrafficTrendResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data list on the overview page.
   */
  dataList?: DescribeNatFirewallDropTrafficTrendResponseBodyDataList[];
  /**
   * @remarks
   * The maximum number of dropped sessions (peak value) within the corresponding period.
   * 
   * @example
   * 62436
   */
  dropSessionMax?: number;
  /**
   * @remarks
   * The period in which the maximum number of dropped sessions occurred. The value is a UNIX timestamp in seconds, which represents the number of seconds that have elapsed since January 1, 1970 (UTC).
   * 
   * @example
   * 1525662720
   */
  dropSessionMaxTime?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F0F82705-CFC7-5F83-86C8-A063892F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dataList: 'DataList',
      dropSessionMax: 'DropSessionMax',
      dropSessionMaxTime: 'DropSessionMaxTime',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataList: { 'type': 'array', 'itemType': DescribeNatFirewallDropTrafficTrendResponseBodyDataList },
      dropSessionMax: 'number',
      dropSessionMaxTime: 'string',
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

