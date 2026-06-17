// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcFirewallAccessDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The IP address of the local asset.
   * 
   * @example
   * 192.0.XX.XX
   */
  assetIP?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * The traffic direction. Valid values:
   * 
   * - **in**: inbound
   * 
   * - **out**: outbound
   * 
   * > If you do not specify this parameter, traffic in all directions is queried.
   * 
   * @example
   * in
   */
  direction?: string;
  /**
   * @remarks
   * The end of the time range to query. This value is a UNIX timestamp that is accurate to the second.
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
   * 
   * - **tcp**: TCP
   * 
   * - **udp**: UDP
   * 
   * @example
   * tcp
   */
  IPProtocol?: string;
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * - **zh** (default): Chinese
   * 
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
   * - **asc**: ascending
   * 
   * - **desc** (default): descending
   * 
   * @example
   * desc
   */
  order?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: string;
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
   * ecs22
   */
  peerAssetInstanceName?: string;
  /**
   * @remarks
   * The ID of the peer VPC.
   * 
   * @example
   * vpc-90rq0anm6t8vbwbo****
   */
  peerVpcId?: string;
  /**
   * @remarks
   * The port number.
   * 
   * @example
   * 80
   */
  port?: string;
  /**
   * @remarks
   * The risk level.
   * 
   * @example
   * 3
   */
  riskLevel?: string;
  /**
   * @remarks
   * The sorting criterion. Valid values are:
   * 
   * - **InBytes**
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
   * The start of the time range to query. This value is a UNIX timestamp that is accurate to the second.
   * 
   * This parameter is required.
   * 
   * @example
   * 1655778046
   */
  startTime?: string;
  /**
   * @remarks
   * The ID of the VPC.
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

