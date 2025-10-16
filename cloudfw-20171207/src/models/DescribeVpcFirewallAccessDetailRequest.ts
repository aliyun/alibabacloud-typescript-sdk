// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcFirewallAccessDetailRequest extends $dara.Model {
  /**
   * @example
   * 192.0.XX.XX
   */
  assetIP?: string;
  /**
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @example
   * in
   */
  direction?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1729042555
   */
  endTime?: string;
  /**
   * @example
   * tcp
   */
  IPProtocol?: string;
  /**
   * @example
   * zh
   */
  lang?: string;
  /**
   * @example
   * desc
   */
  order?: string;
  /**
   * @example
   * 10
   */
  pageSize?: string;
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
   * ecs22
   */
  peerAssetInstanceName?: string;
  /**
   * @example
   * vpc-90rq0anm6t8vbwbo****
   */
  peerVpcId?: string;
  /**
   * @example
   * 80
   */
  port?: string;
  /**
   * @example
   * 3
   */
  riskLevel?: string;
  /**
   * @example
   * InBytes
   */
  sort?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1655778046
   */
  startTime?: string;
  /**
   * @remarks
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

