// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAgentListResponseBodyAgentListTags extends $dara.Model {
  tagId?: number;
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagId: 'TagId',
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagId: 'number',
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentListResponseBodyAgentList extends $dara.Model {
  /**
   * @example
   * rmagent_2ze68o4fden9o1s****
   */
  agentId?: string;
  /**
   * @example
   * Windows
   */
  agentOs?: string;
  /**
   * @example
   * 49046
   */
  agentPort?: string;
  /**
   * @example
   * 1
   */
  agentStatus?: number;
  /**
   * @example
   * 3.2.5.3-1
   */
  agentVersion?: string;
  /**
   * @example
   * i-2zel0147166****
   */
  ecsId?: string;
  /**
   * @example
   * 2020-09-29 11:05:22
   */
  firstLoginTime?: string;
  /**
   * @example
   * 2020-09-29 15:50:22
   */
  lastActiveTime?: string;
  osCpu?: number;
  osMem?: number;
  /**
   * @example
   * 5
   */
  pktLoss?: number;
  /**
   * @example
   * 192.168.XX.XX
   */
  privateIp?: string;
  /**
   * @example
   * 1
   */
  publicIp?: string;
  /**
   * @example
   * 5
   */
  rmagentCpu?: number;
  /**
   * @example
   * 5
   */
  rmagentMem?: number;
  /**
   * @example
   * 1000000
   */
  sendByteCount?: number;
  /**
   * @example
   * 100000
   */
  sendBytes?: number;
  /**
   * @example
   * 1000000
   */
  sendPacketCount?: number;
  /**
   * @example
   * 100000
   */
  sendPackets?: number;
  sysConfig?: string;
  tags?: GetAgentListResponseBodyAgentListTags[];
  /**
   * @example
   * v-asd2rrddgs****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      agentOs: 'AgentOs',
      agentPort: 'AgentPort',
      agentStatus: 'AgentStatus',
      agentVersion: 'AgentVersion',
      ecsId: 'EcsId',
      firstLoginTime: 'FirstLoginTime',
      lastActiveTime: 'LastActiveTime',
      osCpu: 'OsCpu',
      osMem: 'OsMem',
      pktLoss: 'PktLoss',
      privateIp: 'PrivateIp',
      publicIp: 'PublicIp',
      rmagentCpu: 'RmagentCpu',
      rmagentMem: 'RmagentMem',
      sendByteCount: 'SendByteCount',
      sendBytes: 'SendBytes',
      sendPacketCount: 'SendPacketCount',
      sendPackets: 'SendPackets',
      sysConfig: 'SysConfig',
      tags: 'Tags',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      agentOs: 'string',
      agentPort: 'string',
      agentStatus: 'number',
      agentVersion: 'string',
      ecsId: 'string',
      firstLoginTime: 'string',
      lastActiveTime: 'string',
      osCpu: 'number',
      osMem: 'number',
      pktLoss: 'number',
      privateIp: 'string',
      publicIp: 'string',
      rmagentCpu: 'number',
      rmagentMem: 'number',
      sendByteCount: 'number',
      sendBytes: 'number',
      sendPacketCount: 'number',
      sendPackets: 'number',
      sysConfig: 'string',
      tags: { 'type': 'array', 'itemType': GetAgentListResponseBodyAgentListTags },
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentListResponseBody extends $dara.Model {
  agentList?: GetAgentListResponseBodyAgentList[];
  /**
   * @example
   * 1B217656-2267-4FBF-B26C-CDD201BDC3B8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      agentList: 'AgentList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentList: { 'type': 'array', 'itemType': GetAgentListResponseBodyAgentList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.agentList)) {
      $dara.Model.validateArray(this.agentList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

