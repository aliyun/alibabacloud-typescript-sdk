// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFirewallDropTrendResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The number of sessions blocked by the Internet firewall.
   * 
   * @example
   * 100
   */
  internetDropSession?: number;
  /**
   * @remarks
   * The number of sessions blocked by the NAT firewall.
   * 
   * @example
   * 100
   */
  natDropSession?: number;
  /**
   * @remarks
   * The time when the traffic occurred. The value is a UNIX timestamp in seconds.
   * 
   * If the data at this point in time has not been processed, the values of other fields are -1.
   * 
   * @example
   * 1758474000
   */
  time?: number;
  /**
   * @remarks
   * The total number of sessions blocked by the firewall.
   * 
   * @example
   * 300
   */
  totalDropSession?: number;
  /**
   * @remarks
   * The number of sessions blocked by the VPC firewall.
   * 
   * @example
   * 100
   */
  vpcDropSession?: number;
  static names(): { [key: string]: string } {
    return {
      internetDropSession: 'InternetDropSession',
      natDropSession: 'NatDropSession',
      time: 'Time',
      totalDropSession: 'TotalDropSession',
      vpcDropSession: 'VpcDropSession',
    };
  }

  static types(): { [key: string]: any } {
    return {
      internetDropSession: 'number',
      natDropSession: 'number',
      time: 'number',
      totalDropSession: 'number',
      vpcDropSession: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFirewallDropTrendResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data list.
   */
  dataList?: DescribeFirewallDropTrendResponseBodyDataList[];
  /**
   * @remarks
   * The maximum number of total blocked sessions.
   * 
   * @example
   * 300
   */
  maxDropSession?: number;
  /**
   * @remarks
   * The time when the maximum number of total blocked sessions occurred. The value is a UNIX timestamp in seconds, such as 1672502400.
   * 
   * @example
   * 1656837360
   */
  maxDropTime?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 75E60025-43C5-5635-B7B7-272C5246****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dataList: 'DataList',
      maxDropSession: 'MaxDropSession',
      maxDropTime: 'MaxDropTime',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataList: { 'type': 'array', 'itemType': DescribeFirewallDropTrendResponseBodyDataList },
      maxDropSession: 'number',
      maxDropTime: 'number',
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

