// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNetworkInstanceListResponseBodyNetworkInstanceList extends $dara.Model {
  /**
   * @remarks
   * The ID of the network instance.
   * 
   * @example
   * vpc-m5ewlqkuf7or****
   */
  networkInstanceId?: string;
  /**
   * @remarks
   * The name of the network instance.
   * 
   * @example
   * vpc-test
   */
  networkInstanceName?: string;
  /**
   * @remarks
   * The type of the network instance.
   * 
   * @example
   * vpc
   */
  networkInstanceType?: string;
  /**
   * @remarks
   * The region ID.
   * 
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
  /**
   * @remarks
   * The details of the network instances.
   */
  networkInstanceList?: DescribeNetworkInstanceListResponseBodyNetworkInstanceList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D2373503-3921-59F2-93A6-3DA7FB7****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
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

