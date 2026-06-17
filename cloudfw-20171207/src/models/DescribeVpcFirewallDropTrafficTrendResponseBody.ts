// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcFirewallDropTrafficTrendResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The number of sessions blocked by the access control list (ACL).
   * 
   * @example
   * 12
   */
  aclDrop?: number;
  /**
   * @remarks
   * The data timestamp. The value is a string in the YYYY-MM-DD HH:mm:ss format.
   * 
   * @example
   * 2018-08-25 12:00:00
   */
  dataTime?: string;
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
   * The number of sessions blocked by the intrusion prevention system (IPS).
   * 
   * @example
   * 5
   */
  ipsDrop?: number;
  /**
   * @remarks
   * The data timestamp. This value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1659405600
   */
  time?: number;
  /**
   * @remarks
   * The total number of sessions.
   * 
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
  /**
   * @remarks
   * The list of returned data.
   */
  dataList?: DescribeVpcFirewallDropTrafficTrendResponseBodyDataList[];
  /**
   * @remarks
   * The maximum number of blocked connections.
   * 
   * @example
   * 0
   */
  dropSessionMax?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
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

