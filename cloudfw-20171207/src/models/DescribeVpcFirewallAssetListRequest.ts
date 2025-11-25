// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcFirewallAssetListRequest extends $dara.Model {
  /**
   * @example
   * test
   */
  appName?: string;
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
   * @example
   * i-hp3ez3rs9bxwt034****
   */
  ecsInstanceId?: string;
  /**
   * @example
   * test-ecs
   */
  ecsInstanceName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1756952150
   */
  endTime?: string;
  /**
   * @example
   * tcp
   */
  IPProtocol?: string;
  /**
   * @example
   * true
   */
  isAITraffic?: string;
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
   * vpc-90rq0anm6t8vbwbo****
   */
  peerVpcId?: string;
  /**
   * @example
   * 5234
   */
  port?: string;
  /**
   * @example
   * 3
   */
  riskLevel?: string;
  /**
   * @example
   * SessionCount
   */
  sort?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1534408189
   */
  startTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vpc-wz9ulqcvly23w31zkh8sm****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      assetIP: 'AssetIP',
      currentPage: 'CurrentPage',
      direction: 'Direction',
      ecsInstanceId: 'EcsInstanceId',
      ecsInstanceName: 'EcsInstanceName',
      endTime: 'EndTime',
      IPProtocol: 'IPProtocol',
      isAITraffic: 'IsAITraffic',
      lang: 'Lang',
      order: 'Order',
      pageSize: 'PageSize',
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
      appName: 'string',
      assetIP: 'string',
      currentPage: 'string',
      direction: 'string',
      ecsInstanceId: 'string',
      ecsInstanceName: 'string',
      endTime: 'string',
      IPProtocol: 'string',
      isAITraffic: 'string',
      lang: 'string',
      order: 'string',
      pageSize: 'string',
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

