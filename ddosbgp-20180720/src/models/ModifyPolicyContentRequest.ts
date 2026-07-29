// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyPolicyContentRequestContentFingerPrintRuleList extends $dara.Model {
  /**
   * @remarks
   * The end value of the destination port range. Valid values: **0** to **65535**.
   * 
   * This parameter is required.
   * 
   * @example
   * 65535
   */
  dstPortEnd?: number;
  /**
   * @remarks
   * The start value of the destination port range. Valid values: **0** to **65535**.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  dstPortStart?: number;
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * 83967609-7ea5-4f6d-a6ea-380b09e****
   */
  id?: string;
  /**
   * @remarks
   * The action to take when a fingerprint match is found. Valid values:
   * 
   * This parameter is required.
   * 
   * @example
   * drop
   */
  matchAction?: string;
  /**
   * @remarks
   * The maximum packet length. Valid values: **1** to **1500**.
   * 
   * This parameter is required.
   * 
   * @example
   * 1500
   */
  maxPktLen?: number;
  /**
   * @remarks
   * The minimum packet length. Valid values: **1** to **1500**.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  minPktLen?: number;
  /**
   * @remarks
   * The offset. Valid values: **0** to **1500**.
   * 
   * @example
   * 0
   */
  offset?: number;
  /**
   * @remarks
   * The detection payload, expressed in hexadecimal string format.
   * 
   * @example
   * abcd
   */
  payloadBytes?: string;
  /**
   * @remarks
   * The protocol type. Valid values:
   * 
   * This parameter is required.
   * 
   * @example
   * tcp
   */
  protocol?: string;
  /**
   * @remarks
   * The rate limit value. Valid values: **1** to **100000**.
   * 
   * @example
   * 100
   */
  rateValue?: number;
  /**
   * @remarks
   * The priority number, expressed as an integer.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  seqNo?: number;
  /**
   * @remarks
   * The end value of the source port range. Valid values: **0** to **65535**.
   * 
   * This parameter is required.
   * 
   * @example
   * 65535
   */
  srcPortEnd?: number;
  /**
   * @remarks
   * The start value of the source port range. Valid values: **0** to **65535**.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  srcPortStart?: number;
  static names(): { [key: string]: string } {
    return {
      dstPortEnd: 'DstPortEnd',
      dstPortStart: 'DstPortStart',
      id: 'Id',
      matchAction: 'MatchAction',
      maxPktLen: 'MaxPktLen',
      minPktLen: 'MinPktLen',
      offset: 'Offset',
      payloadBytes: 'PayloadBytes',
      protocol: 'Protocol',
      rateValue: 'RateValue',
      seqNo: 'SeqNo',
      srcPortEnd: 'SrcPortEnd',
      srcPortStart: 'SrcPortStart',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dstPortEnd: 'number',
      dstPortStart: 'number',
      id: 'string',
      matchAction: 'string',
      maxPktLen: 'number',
      minPktLen: 'number',
      offset: 'number',
      payloadBytes: 'string',
      protocol: 'string',
      rateValue: 'number',
      seqNo: 'number',
      srcPortEnd: 'number',
      srcPortStart: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPolicyContentRequestContentL4RuleListConditionListOffset extends $dara.Model {
  /**
   * @remarks
   * The end position. Valid values: **0** to **1499**.
   * 
   * @example
   * 1499
   */
  end?: number;
  /**
   * @remarks
   * The start position. Valid values: **0** to **1499**.
   * 
   * @example
   * 0
   */
  start?: number;
  static names(): { [key: string]: string } {
    return {
      end: 'End',
      start: 'Start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      end: 'number',
      start: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPolicyContentRequestContentL4RuleListConditionList extends $dara.Model {
  /**
   * @remarks
   * The detection content.
   * 
   * @example
   * abcd
   */
  arg?: string;
  /**
   * @remarks
   * The matching content.
   * 
   * @example
   * test**
   */
  content?: string;
  /**
   * @remarks
   * The detection window length. Valid values: **1** to **2048**.
   * 
   * @example
   * 1200
   */
  depth?: number;
  /**
   * @remarks
   * The character type. Valid values:
   * 
   * @example
   * str
   */
  encode?: string;
  /**
   * @remarks
   * The matching range.
   */
  offset?: ModifyPolicyContentRequestContentL4RuleListConditionListOffset;
  /**
   * @remarks
   * The matching pattern. Valid values:
   * 
   * @example
   * contain
   */
  pattern?: string;
  /**
   * @remarks
   * The detection start position. Valid values: **0** to **2047**.
   * 
   * @example
   * 0
   */
  position?: number;
  static names(): { [key: string]: string } {
    return {
      arg: 'Arg',
      content: 'Content',
      depth: 'Depth',
      encode: 'Encode',
      offset: 'Offset',
      pattern: 'Pattern',
      position: 'Position',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arg: 'string',
      content: 'string',
      depth: 'number',
      encode: 'string',
      offset: ModifyPolicyContentRequestContentL4RuleListConditionListOffset,
      pattern: 'string',
      position: 'number',
    };
  }

  validate() {
    if(this.offset && typeof (this.offset as any).validate === 'function') {
      (this.offset as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPolicyContentRequestContentL4RuleList extends $dara.Model {
  /**
   * @remarks
   * The action.
   * 
   * @example
   * 2
   */
  action?: string;
  /**
   * @remarks
   * The list of detection conditions.
   */
  conditionList?: ModifyPolicyContentRequestContentL4RuleListConditionList[];
  /**
   * @remarks
   * The minimum number of bytes in a session flow that triggers rule matching. Valid values: **0** to **2048**.
   * 
   * @example
   * 0
   */
  limited?: number;
  /**
   * @remarks
   * The logical operator. Valid values:
   * 
   * @example
   * 0
   */
  match?: string;
  /**
   * @remarks
   * The rule type. Valid values:
   * 
   * @example
   * char
   */
  method?: string;
  /**
   * @remarks
   * The rule name.
   * 
   * This parameter is required.
   * 
   * @example
   * test**
   */
  name?: string;
  /**
   * @remarks
   * The rule priority. Valid values: 1 to 100.
   * 
   * @example
   * 1
   */
  priority?: number;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      conditionList: 'ConditionList',
      limited: 'Limited',
      match: 'Match',
      method: 'Method',
      name: 'Name',
      priority: 'Priority',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      conditionList: { 'type': 'array', 'itemType': ModifyPolicyContentRequestContentL4RuleListConditionList },
      limited: 'number',
      match: 'string',
      method: 'string',
      name: 'string',
      priority: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.conditionList)) {
      $dara.Model.validateArray(this.conditionList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPolicyContentRequestContentPortRuleList extends $dara.Model {
  /**
   * @remarks
   * The end value of the destination port range. Valid values: **0** to **65535**.
   * 
   * This parameter is required.
   * 
   * @example
   * 65535
   */
  dstPortEnd?: number;
  /**
   * @remarks
   * The start value of the destination port range. Valid values: **0** to **65535**.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  dstPortStart?: number;
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * 412a7312-58ff-4e32-a202-0ab0*******
   */
  id?: string;
  /**
   * @remarks
   * The match action. Valid values:
   * 
   * This parameter is required.
   * 
   * @example
   * drop
   */
  matchAction?: string;
  /**
   * @remarks
   * The protocol type. Valid values:
   * 
   * This parameter is required.
   * 
   * @example
   * tcp
   */
  protocol?: string;
  /**
   * @remarks
   * The priority number, expressed as an integer.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  seqNo?: number;
  /**
   * @remarks
   * The end value of the source port range. Valid values: **0** to **65535**.
   * 
   * This parameter is required.
   * 
   * @example
   * 65535
   */
  srcPortEnd?: number;
  /**
   * @remarks
   * The start value of the source port range. Valid values: **0** to **65535**.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  srcPortStart?: number;
  static names(): { [key: string]: string } {
    return {
      dstPortEnd: 'DstPortEnd',
      dstPortStart: 'DstPortStart',
      id: 'Id',
      matchAction: 'MatchAction',
      protocol: 'Protocol',
      seqNo: 'SeqNo',
      srcPortEnd: 'SrcPortEnd',
      srcPortStart: 'SrcPortStart',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dstPortEnd: 'number',
      dstPortStart: 'number',
      id: 'string',
      matchAction: 'string',
      protocol: 'string',
      seqNo: 'number',
      srcPortEnd: 'number',
      srcPortStart: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPolicyContentRequestContentSipDefense extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable SIP protection. Valid values:
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The SIP protection level.
   * 
   * @example
   * normal
   */
  level?: string;
  /**
   * @remarks
   * Specifies whether to enable SIP defense mode.
   */
  sipDefend?: boolean;
  /**
   * @remarks
   * Specifies whether to enable SIP learning mode.
   */
  sipLearn?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the SIP source rate limiting module.
   */
  sipModule?: boolean;
  /**
   * @remarks
   * The SIP protection port. Valid values: **1** to **65535**.
   * 
   * @example
   * 5060
   */
  sipPort?: string;
  /**
   * @remarks
   * The SIP source rate limit value in PPS.
   * 
   * @example
   * 1000
   */
  sipRate?: number;
  /**
   * @remarks
   * The SIP activation threshold in Mbit/s.
   * 
   * @example
   * 100
   */
  sipStartMbps?: number;
  /**
   * @remarks
   * The SIP activation threshold in PPS.
   * 
   * @example
   * 500
   */
  sipStartPps?: number;
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
      level: 'Level',
      sipDefend: 'SipDefend',
      sipLearn: 'SipLearn',
      sipModule: 'SipModule',
      sipPort: 'SipPort',
      sipRate: 'SipRate',
      sipStartMbps: 'SipStartMbps',
      sipStartPps: 'SipStartPps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      level: 'string',
      sipDefend: 'boolean',
      sipLearn: 'boolean',
      sipModule: 'boolean',
      sipPort: 'string',
      sipRate: 'number',
      sipStartMbps: 'number',
      sipStartPps: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPolicyContentRequestContentSourceBlockList extends $dara.Model {
  /**
   * @remarks
   * The duration for which the source IP address is added to the blacklist. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 120
   */
  blockExpireSeconds?: number;
  /**
   * @remarks
   * The statistical period for source rate limiting blacklisting. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 60
   */
  everySeconds?: number;
  /**
   * @remarks
   * The number of times the source IP address exceeds the rate limit within one statistical period.
   * 
   * This parameter is required.
   * 
   * @example
   * 5
   */
  exceedLimitTimes?: number;
  /**
   * @remarks
   * The source rate limiting type. Valid values:
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      blockExpireSeconds: 'BlockExpireSeconds',
      everySeconds: 'EverySeconds',
      exceedLimitTimes: 'ExceedLimitTimes',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockExpireSeconds: 'number',
      everySeconds: 'number',
      exceedLimitTimes: 'number',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPolicyContentRequestContentSourceLimit extends $dara.Model {
  /**
   * @remarks
   * The source bandwidth throttling value, in bytes per second.
   * 
   * @example
   * 2048
   */
  bps?: number;
  /**
   * @remarks
   * The source PPS rate limit, in packets per second.
   * 
   * @example
   * 64
   */
  pps?: number;
  /**
   * @remarks
   * The source SYN bandwidth throttling value, in bytes per second.
   * 
   * @example
   * 2048
   */
  synBps?: number;
  /**
   * @remarks
   * The source SYN PPS rate limit, in packets per second.
   * 
   * @example
   * 64
   */
  synPps?: number;
  static names(): { [key: string]: string } {
    return {
      bps: 'Bps',
      pps: 'Pps',
      synBps: 'SynBps',
      synPps: 'SynPps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bps: 'number',
      pps: 'number',
      synBps: 'number',
      synPps: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPolicyContentRequestContent extends $dara.Model {
  /**
   * @remarks
   * The expiration time of the IP blacklist (UNIX timestamp).
   * 
   * @example
   * 1716878000
   */
  blackIpListExpireAt?: number;
  /**
   * @remarks
   * Specifies whether to disable the ICMP protocol.
   * 
   * @example
   * true
   */
  enableDropIcmp?: boolean;
  /**
   * @remarks
   * Specifies whether to enable AI-based intelligent protection.
   * 
   * @example
   * true
   */
  enableIntelligence?: boolean;
  /**
   * @remarks
   * Specifies whether to enable port protection.
   * 
   * @example
   * true
   */
  enableL4Defense?: boolean;
  /**
   * @remarks
   * The list of byte-match filter rules.
   */
  fingerPrintRuleList?: ModifyPolicyContentRequestContentFingerPrintRuleList[];
  /**
   * @remarks
   * The protection level of AI-based intelligent protection. Valid values:
   * 
   * @example
   * default
   */
  intelligenceLevel?: string;
  /**
   * @remarks
   * The list of port-specific mitigation rules.
   */
  l4RuleList?: ModifyPolicyContentRequestContentL4RuleList[];
  /**
   * @remarks
   * The list of port blocking rules.
   */
  portRuleList?: ModifyPolicyContentRequestContentPortRuleList[];
  /**
   * @remarks
   * The list of ports filtered by reflection attack prevention.
   */
  reflectBlockUdpPortList?: number[];
  /**
   * @remarks
   * The list of countries for location blacklist.
   */
  regionBlockCountryList?: number[];
  /**
   * @remarks
   * The list of provinces for location blacklist.
   */
  regionBlockProvinceList?: number[];
  /**
   * @remarks
   * The SIP Protection Settings.
   */
  sipDefense?: ModifyPolicyContentRequestContentSipDefense;
  /**
   * @remarks
   * The source rate limiting blacklist.
   */
  sourceBlockList?: ModifyPolicyContentRequestContentSourceBlockList[];
  /**
   * @remarks
   * The source rate limiting configuration.
   */
  sourceLimit?: ModifyPolicyContentRequestContentSourceLimit;
  /**
   * @remarks
   * Specifies whether to whitelist the back-to-origin IP addresses of Anti-DDoS Pro and Anti-DDoS Premium (the Chinese mainland & outside the Chinese mainland).
   * 
   * @example
   * false
   */
  whitenGfbrNets?: boolean;
  static names(): { [key: string]: string } {
    return {
      blackIpListExpireAt: 'BlackIpListExpireAt',
      enableDropIcmp: 'EnableDropIcmp',
      enableIntelligence: 'EnableIntelligence',
      enableL4Defense: 'EnableL4Defense',
      fingerPrintRuleList: 'FingerPrintRuleList',
      intelligenceLevel: 'IntelligenceLevel',
      l4RuleList: 'L4RuleList',
      portRuleList: 'PortRuleList',
      reflectBlockUdpPortList: 'ReflectBlockUdpPortList',
      regionBlockCountryList: 'RegionBlockCountryList',
      regionBlockProvinceList: 'RegionBlockProvinceList',
      sipDefense: 'SipDefense',
      sourceBlockList: 'SourceBlockList',
      sourceLimit: 'SourceLimit',
      whitenGfbrNets: 'WhitenGfbrNets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blackIpListExpireAt: 'number',
      enableDropIcmp: 'boolean',
      enableIntelligence: 'boolean',
      enableL4Defense: 'boolean',
      fingerPrintRuleList: { 'type': 'array', 'itemType': ModifyPolicyContentRequestContentFingerPrintRuleList },
      intelligenceLevel: 'string',
      l4RuleList: { 'type': 'array', 'itemType': ModifyPolicyContentRequestContentL4RuleList },
      portRuleList: { 'type': 'array', 'itemType': ModifyPolicyContentRequestContentPortRuleList },
      reflectBlockUdpPortList: { 'type': 'array', 'itemType': 'number' },
      regionBlockCountryList: { 'type': 'array', 'itemType': 'number' },
      regionBlockProvinceList: { 'type': 'array', 'itemType': 'number' },
      sipDefense: ModifyPolicyContentRequestContentSipDefense,
      sourceBlockList: { 'type': 'array', 'itemType': ModifyPolicyContentRequestContentSourceBlockList },
      sourceLimit: ModifyPolicyContentRequestContentSourceLimit,
      whitenGfbrNets: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.fingerPrintRuleList)) {
      $dara.Model.validateArray(this.fingerPrintRuleList);
    }
    if(Array.isArray(this.l4RuleList)) {
      $dara.Model.validateArray(this.l4RuleList);
    }
    if(Array.isArray(this.portRuleList)) {
      $dara.Model.validateArray(this.portRuleList);
    }
    if(Array.isArray(this.reflectBlockUdpPortList)) {
      $dara.Model.validateArray(this.reflectBlockUdpPortList);
    }
    if(Array.isArray(this.regionBlockCountryList)) {
      $dara.Model.validateArray(this.regionBlockCountryList);
    }
    if(Array.isArray(this.regionBlockProvinceList)) {
      $dara.Model.validateArray(this.regionBlockProvinceList);
    }
    if(this.sipDefense && typeof (this.sipDefense as any).validate === 'function') {
      (this.sipDefense as any).validate();
    }
    if(Array.isArray(this.sourceBlockList)) {
      $dara.Model.validateArray(this.sourceBlockList);
    }
    if(this.sourceLimit && typeof (this.sourceLimit as any).validate === 'function') {
      (this.sourceLimit as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPolicyContentRequest extends $dara.Model {
  /**
   * @remarks
   * The policy content.
   */
  content?: ModifyPolicyContentRequestContent;
  /**
   * @remarks
   * The policy ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 83967609-7ea5-4f6d-a6ea-380b09e****
   */
  id?: string;
  /**
   * @remarks
   * The policy name.
   * 
   * @example
   * demo**
   */
  name?: string;
  /**
   * @remarks
   * The version of the port-specific mitigation policy. Valid values:
   * 
   * @example
   * 2
   */
  portVersion?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      id: 'Id',
      name: 'Name',
      portVersion: 'PortVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: ModifyPolicyContentRequestContent,
      id: 'string',
      name: 'string',
      portVersion: 'string',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

