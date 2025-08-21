// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePortFlowListResponseBodyPortFlowList extends $dara.Model {
  /**
   * @remarks
   * The bandwidth of attack traffic. Unit: bit/s.
   * 
   * @example
   * 0
   */
  attackBps?: number;
  /**
   * @remarks
   * The packet forwarding rate of attack traffic. Unit: pps.
   * 
   * @example
   * 0
   */
  attackPps?: number;
  /**
   * @remarks
   * The inbound bandwidth. Unit: bit/s.
   * 
   * @example
   * 2176000
   */
  inBps?: number;
  /**
   * @remarks
   * The packet forwarding rate of inbound traffic. Unit: packets per second.
   * 
   * @example
   * 2934
   */
  inPps?: number;
  /**
   * @remarks
   * The index number of the returned data.
   * 
   * @example
   * 0
   */
  index?: number;
  /**
   * @remarks
   * The outbound bandwidth. Unit: bit/s.
   * 
   * @example
   * 4389
   */
  outBps?: number;
  /**
   * @remarks
   * The packet forwarding rate of outbound traffic. Unit: packets per second (pps).
   * 
   * @example
   * 5
   */
  outPps?: number;
  /**
   * @remarks
   * The source region of the traffic. Valid values:
   * 
   * *   **cn**: mainland China
   * *   **alb-ap-northeast-1-gf-x**: Japan (Tokyo)
   * *   **alb-ap-southeast-gf-x**: Singapore
   * *   **alb-cn-hongkong-gf-x**: Hong Kong (China)
   * *   **alb-eu-central-1-gf-x**: Germany (Frankfurt)
   * *   **alb-us-west-1-gf-x**: US (Silicon Valley)
   * 
   * > The values except **cn** are returned only when **RegionId** is set to **ap-southeast-1**.
   * 
   * @example
   * cn
   */
  region?: string;
  slaBpsDropBps?: number;
  slaBpsDropPps?: number;
  slaConnDropBps?: number;
  slaConnDropPps?: number;
  slaCpsDropBps?: number;
  slaCpsDropPps?: number;
  slaPpsDropBps?: number;
  slaPpsDropPps?: number;
  /**
   * @remarks
   * The time when the data was collected. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1582992000
   */
  time?: number;
  static names(): { [key: string]: string } {
    return {
      attackBps: 'AttackBps',
      attackPps: 'AttackPps',
      inBps: 'InBps',
      inPps: 'InPps',
      index: 'Index',
      outBps: 'OutBps',
      outPps: 'OutPps',
      region: 'Region',
      slaBpsDropBps: 'SlaBpsDropBps',
      slaBpsDropPps: 'SlaBpsDropPps',
      slaConnDropBps: 'SlaConnDropBps',
      slaConnDropPps: 'SlaConnDropPps',
      slaCpsDropBps: 'SlaCpsDropBps',
      slaCpsDropPps: 'SlaCpsDropPps',
      slaPpsDropBps: 'SlaPpsDropBps',
      slaPpsDropPps: 'SlaPpsDropPps',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attackBps: 'number',
      attackPps: 'number',
      inBps: 'number',
      inPps: 'number',
      index: 'number',
      outBps: 'number',
      outPps: 'number',
      region: 'string',
      slaBpsDropBps: 'number',
      slaBpsDropPps: 'number',
      slaConnDropBps: 'number',
      slaConnDropPps: 'number',
      slaCpsDropBps: 'number',
      slaCpsDropPps: 'number',
      slaPpsDropBps: 'number',
      slaPpsDropPps: 'number',
      time: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePortFlowListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned traffic data.
   */
  portFlowList?: DescribePortFlowListResponseBodyPortFlowList[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * FFC77501-BDF8-4BC8-9BF5-B295FBC3189B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      portFlowList: 'PortFlowList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      portFlowList: { 'type': 'array', 'itemType': DescribePortFlowListResponseBodyPortFlowList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.portFlowList)) {
      $dara.Model.validateArray(this.portFlowList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

