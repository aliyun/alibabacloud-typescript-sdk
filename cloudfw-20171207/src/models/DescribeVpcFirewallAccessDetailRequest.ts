// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcFirewallAccessDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The IP address of the local asset. You must specify at least one of AssetIP and Port. If both are left empty, the API returns a 400 error.
   * 
   * @example
   * 192.0.XX.XX
   */
  assetIP?: string;
  /**
   * @remarks
   * The page number in a paging query. Settings this parameter to specify the current page for paging.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * The traffic direction. Valid values:
   * - **in**: inbound.
   * - **out**: outbound.
   * 
   * >If this parameter is not specified in Settings, traffic in all directions is queried.
   * 
   * @example
   * in
   */
  direction?: string;
  /**
   * @remarks
   * The end time of the query. The value is a UNIX timestamp. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1729042555
   */
  endTime?: string;
  /**
   * @remarks
   * The protocol type. Valid values:
   * - **tcp**: TCP protocol.
   * - **udp**: UDP protocol.
   * 
   * @example
   * tcp
   */
  IPProtocol?: string;
  /**
   * @remarks
   * The language type. Valid values:
   * 
   * - **zh** (default): Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The sort order. Valid values:
   * 
   * - **asc**: ascending order.
   * -  **desc** (default): descending order.
   * 
   * @example
   * desc
   */
  order?: string;
  /**
   * @remarks
   * The number of entries per page in a paging query.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The source IP address of the peer.
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
   * ecs22
   */
  peerAssetInstanceName?: string;
  /**
   * @remarks
   * The instance ID of the peer VPC.
   * 
   * @example
   * vpc-90rq0anm6t8vbwbo****
   */
  peerVpcId?: string;
  /**
   * @remarks
   * The port number. You must specify at least one of AssetIP and Port. If both are left empty, the API returns a 400 error.
   * 
   * @example
   * 80
   */
  port?: string;
  /**
   * @remarks
   * The risk assessment level.
   * 
   * @example
   * 3
   */
  riskLevel?: string;
  /**
   * @remarks
   * The sort field. Valid values:
   * 
   *  - **InBytes**
   * 
   * - **OutBytes**
   * 
   * - **TotalBytes**
   * 
   * - **InPackets**
   * 
   * - **OutPackets**
   * 
   * - **SessionCount**
   * 
   * @example
   * InBytes
   */
  sort?: string;
  /**
   * @remarks
   * The start time of the query. The value is a UNIX timestamp. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1655778046
   */
  startTime?: string;
  /**
   * @remarks
   * The VPC-connected instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-2ze4xj5kmb5udb****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      assetIP: 'AssetIP',
      currentPage: 'CurrentPage',
      direction: 'Direction',
      endTime: 'EndTime',
      IPProtocol: 'IPProtocol',
      lang: 'Lang',
      order: 'Order',
      pageSize: 'PageSize',
      peerAssetIP: 'PeerAssetIP',
      peerAssetInstanceId: 'PeerAssetInstanceId',
      peerAssetInstanceName: 'PeerAssetInstanceName',
      peerVpcId: 'PeerVpcId',
      port: 'Port',
      riskLevel: 'RiskLevel',
      sort: 'Sort',
      startTime: 'StartTime',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetIP: 'string',
      currentPage: 'string',
      direction: 'string',
      endTime: 'string',
      IPProtocol: 'string',
      lang: 'string',
      order: 'string',
      pageSize: 'string',
      peerAssetIP: 'string',
      peerAssetInstanceId: 'string',
      peerAssetInstanceName: 'string',
      peerVpcId: 'string',
      port: 'string',
      riskLevel: 'string',
      sort: 'string',
      startTime: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

