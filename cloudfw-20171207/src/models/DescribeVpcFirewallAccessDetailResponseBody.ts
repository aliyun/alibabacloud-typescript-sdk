// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcFirewallAccessDetailResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The number of received bytes.
   * 
   * @example
   * 17845821669.0
   */
  inBytes?: number;
  /**
   * @remarks
   * The number of sent bytes.
   * 
   * @example
   * 1123
   */
  outBytes?: number;
  /**
   * @remarks
   * The IP address of the peer asset.
   * 
   * @example
   * 10.125.1.XX
   */
  peerAssetIP?: string;
  /**
   * @remarks
   * The instance ID of the peer asset.
   * 
   * @example
   * i-123451
   */
  peerAssetInstanceId?: string;
  /**
   * @remarks
   * The instance name of the peer asset.
   * 
   * @example
   * test
   */
  peerAssetInstanceName?: string;
  /**
   * @remarks
   * The ID of the peer VPC.
   * 
   * @example
   * vpc-123411
   */
  peerVpcId?: string;
  /**
   * @remarks
   * The ID of the region where the asset is located.
   * 
   * @example
   * cn-shenzhen
   */
  regionNo?: string;
  /**
   * @remarks
   * The total number of sessions.
   * 
   * @example
   * 27
   */
  sessionCount?: number;
  /**
   * @remarks
   * The name of the peer VPC.
   * 
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
  /**
   * @remarks
   * The data entries.
   */
  dataList?: DescribeVpcFirewallAccessDetailResponseBodyDataList[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 8EAC2347-E85A-5DFF-9F49-B8E1BAFB****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
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

