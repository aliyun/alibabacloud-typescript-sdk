// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcFirewallAssetListRequest extends $dara.Model {
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * test
   */
  appName?: string;
  /**
   * @remarks
   * The IP address of the asset.
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
   * The traffic direction.
   * 
   * @example
   * in
   */
  direction?: string;
  /**
   * @remarks
   * The instance ID of the ECS instance.
   * 
   * @example
   * i-hp3ez3rs9bxwt034****
   */
  ecsInstanceId?: string;
  /**
   * @remarks
   * The name of the asset instance.
   * 
   * @example
   * test-ecs
   */
  ecsInstanceName?: string;
  /**
   * @remarks
   * The end time. The value is a UNIX timestamp. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1756952150
   */
  endTime?: string;
  /**
   * @remarks
   * The protocol type.
   * 
   * @example
   * tcp
   */
  IPProtocol?: string;
  /**
   * @remarks
   * Specifies whether to collect statistics only on traffic that accesses AI services.
   * 
   * @example
   * true
   */
  isAITraffic?: string;
  /**
   * @remarks
   * The language type of the request and response messages.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The sort order.
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
   * The instance ID of the peer VPC.
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
   * 5234
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
   * The sort method.
   * 
   * @example
   * SessionCount
   */
  sort?: string;
  /**
   * @remarks
   * The start time. The value is a UNIX timestamp. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1534408189
   */
  startTime?: string;
  /**
   * @remarks
   * The instance ID of the VPC-connected instance.
   * 
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

