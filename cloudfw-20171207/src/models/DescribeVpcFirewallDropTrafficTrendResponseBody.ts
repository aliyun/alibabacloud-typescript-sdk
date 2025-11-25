// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcFirewallDropTrafficTrendResponseBodyDataList extends $dara.Model {
  /**
   * @example
   * 12
   */
  aclDrop?: number;
  /**
   * @example
   * 2018-08-25 12:00:00
   */
  dataTime?: string;
  /**
   * @example
   * 10
   */
  dropSession?: number;
  /**
   * @example
   * 5
   */
  ipsDrop?: number;
  /**
   * @example
   * 1659405600
   */
  time?: number;
  /**
   * @example
   * 153188
   */
  totalSession?: number;
  static names(): { [key: string]: string } {
    return {
      aclDrop: 'AclDrop',
      dataTime: 'DataTime',
      dropSession: 'DropSession',
      ipsDrop: 'IpsDrop',
      time: 'Time',
      totalSession: 'TotalSession',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclDrop: 'number',
      dataTime: 'string',
      dropSession: 'number',
      ipsDrop: 'number',
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

export class DescribeVpcFirewallDropTrafficTrendResponseBody extends $dara.Model {
  dataList?: DescribeVpcFirewallDropTrafficTrendResponseBodyDataList[];
  /**
   * @example
   * 0
   */
  dropSessionMax?: number;
  /**
   * @example
   * C87C1797-02E6-5EEB-A943-4416207D****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dataList: 'DataList',
      dropSessionMax: 'DropSessionMax',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataList: { 'type': 'array', 'itemType': DescribeVpcFirewallDropTrafficTrendResponseBodyDataList },
      dropSessionMax: 'number',
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

