// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyPolicyContentRequestContentFingerPrintRuleList extends $dara.Model {
  /**
   * @remarks
   * The rule comment.
   * 
   * @example
   * comment
   */
  comment?: string;
  /**
   * @remarks
   * The end value of the destination port range. Valid values: **0** to **65535**.
   * 
   * @example
   * 65535
   */
  dstPortEnd?: number;
  /**
   * @remarks
   * The start value of the destination port range. Valid values: **0** to **65535**.
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
   * The action to take after a fingerprint match. Valid values:
   * 
   * - **permit**: Permits traffic that matches the fingerprint.
   * - **drop**: Drops traffic that matches the fingerprint.
   * - **ip_rate**: Rate-limits the source IP address of traffic that matches the fingerprint. Set the rate limit by using the **RateValue** parameter.
   * - **session_rate**: Rate-limits the source session of traffic that matches the fingerprint. Set the rate limit by using the **RateValue** parameter.
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
   * @example
   * 1500
   */
  maxPktLen?: number;
  /**
   * @remarks
   * The minimum packet length. Valid values: **1** to **1500**.
   * 
   * @example
   * 1
   */
  minPktLen?: number;
  /**
   * @remarks
   * The rule mode.
   * 
   * @example
   * 1
   */
  mode?: number;
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
   * The detection payload, represented in hexadecimal string format.
   * 
   * @example
   * abcd
   */
  payloadBytes?: string;
  /**
   * @remarks
   * The protocol type. Valid values:
   * 
   * - **tcp**: Transmission Control Protocol.
   * - **udp**: User Datagram Protocol.
   * 
   * @example
   * tcp
   */
  protocol?: string;
  /**
   * @remarks
   * The rate limit value. Valid values: **1** to **100000**.
   * 
   * > This parameter is required when the match action is source IP rate limiting or source session rate limiting (**MatchAction** is **ip_rate** or **session_rate**).
   * 
   * @example
   * 100
   */
  rateValue?: number;
  /**
   * @remarks
   * The rule.
   * 
   * @example
   * (ip.version == 4)
   */
  rule?: string;
  /**
   * @remarks
   * The priority number, expressed as an integer.
   * >A smaller number indicates a higher priority.
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
   * @example
   * 65535
   */
  srcPortEnd?: number;
  /**
   * @remarks
   * The start value of the source port range. Valid values: **0** to **65535**.
   * 
   * @example
   * 0
   */
  srcPortStart?: number;
  /**
   * @remarks
   * The type.
   * 
   * @example
   * 1
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      dstPortEnd: 'DstPortEnd',
      dstPortStart: 'DstPortStart',
      id: 'Id',
      matchAction: 'MatchAction',
      maxPktLen: 'MaxPktLen',
      minPktLen: 'MinPktLen',
      mode: 'Mode',
      offset: 'Offset',
      payloadBytes: 'PayloadBytes',
      protocol: 'Protocol',
      rateValue: 'RateValue',
      rule: 'Rule',
      seqNo: 'SeqNo',
      srcPortEnd: 'SrcPortEnd',
      srcPortStart: 'SrcPortStart',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      dstPortEnd: 'number',
      dstPortStart: 'number',
      id: 'string',
      matchAction: 'string',
      maxPktLen: 'number',
      minPktLen: 'number',
      mode: 'number',
      offset: 'number',
      payloadBytes: 'string',
      protocol: 'string',
      rateValue: 'number',
      rule: 'string',
      seqNo: 'number',
      srcPortEnd: 'number',
      srcPortStart: 'number',
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

export class ModifyPolicyContentRequestContentL4RuleListConditionListOffset extends $dara.Model {
  /**
   * @remarks
   * The end position. Valid values: **0** to **1499**.
   * 
   * > The end position must be greater than or equal to the start position.
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
   * > If the rule type is **char**, the value must be an ASCII string. If the rule type is **hex**, the value must be a hexadecimal string. Maximum length: 2048.
   * 
   * @example
   * abcd
   */
  arg?: string;
  /**
   * @remarks
   * The match content.
   * 
   * 1. When **Encode** is set to **str**, the following requirements must be met:
   * 
   * - The length of **Content** must not exceed 1500.
   * 
   * - **End** - **Start** >= the length of **Content**.
   * 
   * 2. When **Encode** is set to **hex**, the following requirements must be met:
   * 
   * - **Content** must be hexadecimal characters.
   * 
   * - The length of **Content** must be an even number.
   * 
   * - The length of **Content** must not exceed 3000.
   * 
   * - **End** - **Start** + 1 >= the length of **Content** / 2.
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
   * - **str**: string.
   * 
   * - **hex**: hexadecimal.
   * 
   * @example
   * str
   */
  encode?: string;
  /**
   * @remarks
   * The match range.
   */
  offset?: ModifyPolicyContentRequestContentL4RuleListConditionListOffset;
  /**
   * @remarks
   * The match mode. Valid values:
   * 
   * - **contain**: contains.
   * 
   * - **not_contain**: does not contain.
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
   * block
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
   * - **0**: The action is executed on a match.
   * 
   * - **1**: The action is executed on a non-match.
   * 
   * @example
   * 0
   */
  match?: string;
  /**
   * @remarks
   * The rule type. Valid values:
   * 
   * - **char**: string match.
   * 
   * - **hex**: hexadecimal match.
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
   * >A smaller value indicates a higher priority.
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
   * - **drop**: Drop.
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
   * - **tcp**: Transmission Control Protocol.
   * - **udp**: User Datagram Protocol.
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
   * >A smaller number indicates a higher priority.
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
   * Specifies whether SIP protection is enabled. Valid values:
   * 
   * - **true**: Enabled.
   * - **false**: Disabled.
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
   * - **3**: source PPS rate limiting.
   * - **4**: source bandwidth throttling.
   * - **5**: source SYN PPS rate limiting.
   * - **6**: source SYN bandwidth throttling.
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
   * The source bandwidth throttling value, in bytes per second (Byte/s).
   * 
   * @example
   * 2048
   */
  bps?: number;
  /**
   * @remarks
   * The source PPS rate limit, in packets per second (Packet/s).
   * 
   * @example
   * 64
   */
  pps?: number;
  /**
   * @remarks
   * The source SYN bandwidth throttling value, in bytes per second (Byte/s).
   * 
   * @example
   * 2048
   */
  synBps?: number;
  /**
   * @remarks
   * The source SYN PPS rate limit, in packets per second (Packet/s).
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
   * The expiration time of the IP blacklist, in UNIX timestamp format.
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
   * The list of Byte-Match Filter rules.
   */
  fingerPrintRuleList?: ModifyPolicyContentRequestContentFingerPrintRuleList[];
  /**
   * @remarks
   * The protection level of AI-based intelligent protection. Valid values:
   * 
   * - **default**: Normal.
   * - **hard**: Strict.
   * - **weak**: Loose.
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
   * - **Not specified**: Modifies the default surf mitigation engine policy.
   * - **2**: Modifies the new stream mitigation engine policy.
   * > Only port-specific mitigation policies are supported.
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

