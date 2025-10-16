// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNetworkInstanceListResponseBodyNetworkInstanceList extends $dara.Model {
  /**
   * @example
   * vpc-m5ewlqkuf7or****
   */
  networkInstanceId?: string;
  /**
   * @example
   * vpc-test
   */
  networkInstanceName?: string;
  /**
   * @example
   * vpc
   */
  networkInstanceType?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionNo?: string;
  static names(): { [key: string]: string } {
    return {
      networkInstanceId: 'NetworkInstanceId',
      networkInstanceName: 'NetworkInstanceName',
      networkInstanceType: 'NetworkInstanceType',
      regionNo: 'RegionNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkInstanceId: 'string',
      networkInstanceName: 'string',
      networkInstanceType: 'string',
      regionNo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkInstanceListResponseBody extends $dara.Model {
  networkInstanceList?: DescribeNetworkInstanceListResponseBodyNetworkInstanceList[];
  /**
   * @example
   * D2373503-3921-59F2-93A6-3DA7FB7****
   */
  requestId?: string;
  /**
   * @example
   * 21
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      networkInstanceList: 'NetworkInstanceList',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkInstanceList: { 'type': 'array', 'itemType': DescribeNetworkInstanceListResponseBodyNetworkInstanceList },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.networkInstanceList)) {
      $dara.Model.validateArray(this.networkInstanceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

