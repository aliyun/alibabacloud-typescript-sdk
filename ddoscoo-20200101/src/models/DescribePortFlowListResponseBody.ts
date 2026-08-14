// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePortFlowListResponseBodyPortFlowList extends $dara.Model {
  attackBps?: number;
  attackPps?: number;
  inBps?: number;
  inPps?: number;
  index?: number;
  outBps?: number;
  outPps?: number;
  region?: string;
  slaBpsDropBps?: number;
  slaBpsDropPps?: number;
  slaConnDropBps?: number;
  slaConnDropPps?: number;
  slaCpsDropBps?: number;
  slaCpsDropPps?: number;
  slaPpsDropBps?: number;
  slaPpsDropPps?: number;
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
  portFlowList?: DescribePortFlowListResponseBodyPortFlowList[];
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

