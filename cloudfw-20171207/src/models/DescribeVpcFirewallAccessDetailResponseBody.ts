// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcFirewallAccessDetailResponseBodyDataList extends $dara.Model {
  /**
   * @example
   * 17845821669.0
   */
  inBytes?: number;
  /**
   * @example
   * 1123
   */
  outBytes?: number;
  /**
   * @example
   * 10.125.1.XX
   */
  peerAssetIP?: string;
  /**
   * @example
   * i-123451
   */
  peerAssetInstanceId?: string;
  /**
   * @example
   * test
   */
  peerAssetInstanceName?: string;
  /**
   * @example
   * vpc-123411
   */
  peerVpcId?: string;
  /**
   * @example
   * cn-shenzhen
   */
  regionNo?: string;
  /**
   * @example
   * 27
   */
  sessionCount?: number;
  /**
   * @example
   * vpc-test
   */
  peerVpcName?: string;
  static names(): { [key: string]: string } {
    return {
      inBytes: 'InBytes',
      outBytes: 'OutBytes',
      peerAssetIP: 'PeerAssetIP',
      peerAssetInstanceId: 'PeerAssetInstanceId',
      peerAssetInstanceName: 'PeerAssetInstanceName',
      peerVpcId: 'PeerVpcId',
      regionNo: 'RegionNo',
      sessionCount: 'SessionCount',
      peerVpcName: 'peerVpcName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inBytes: 'number',
      outBytes: 'number',
      peerAssetIP: 'string',
      peerAssetInstanceId: 'string',
      peerAssetInstanceName: 'string',
      peerVpcId: 'string',
      regionNo: 'string',
      sessionCount: 'number',
      peerVpcName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallAccessDetailResponseBody extends $dara.Model {
  dataList?: DescribeVpcFirewallAccessDetailResponseBodyDataList[];
  /**
   * @example
   * 8EAC2347-E85A-5DFF-9F49-B8E1BAFB****
   */
  requestId?: string;
  /**
   * @example
   * 9
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dataList: 'DataList',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataList: { 'type': 'array', 'itemType': DescribeVpcFirewallAccessDetailResponseBodyDataList },
      requestId: 'string',
      totalCount: 'number',
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

