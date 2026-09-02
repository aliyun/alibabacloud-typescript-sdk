// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPolicyResponseBodyPolicyListContentFingerPrintRuleList extends $dara.Model {
  /**
   * @remarks
   * The remarks of the rule.
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
   * 2c0b09cd-a565-4481-9acb-418b********
   */
  id?: string;
  /**
   * @remarks
   * The match action. Valid values:
   * 
   * - **accept**: Allow traffic that matches the fingerprint.
   * - **drop**: Drop traffic that matches the fingerprint.
   * - **ip_rate**: Apply rate limiting to the source IP address of traffic that matches the fingerprint. The rate limit is specified by the **RateValue** parameter.
   * - **session_rate**: Apply rate limiting to the source session of traffic that matches the fingerprint. The rate limit is specified by the **RateValue** parameter.
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
   * The detection payload, represented as a hexadecimal string.
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
   * udp
   */
  protocol?: string;
  /**
   * @remarks
   * The rate limit. Valid values: **1** to **100000**.
   * 
   * > This parameter is required when the match action is source IP rate limiting or source session rate limiting (**MatchAction** is **ip_rate** or **session_rate**).
   * 
   * @example
   * 1000
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
   * The priority of the rule, represented as an integer.
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

export class ListPolicyResponseBodyPolicyListContentL4RuleListConditionListOffset extends $dara.Model {
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

export class ListPolicyResponseBodyPolicyListContentL4RuleListConditionList extends $dara.Model {
  /**
   * @remarks
   * The detection content.
   * > If the rule type is **char**, the value must be an ASCII string. If the rule type is **hex**, the value must be a hexadecimal string. Maximum length: 2048.
   * 
   * @example
   * test
   */
  arg?: string;
  /**
   * @remarks
   * The match content.
   * 
   * 1. When **Encode** is set to **str**, the following requirements must be met:
   * 
   * - The length of **Content** cannot exceed 1500.
   * 
   * - **End** - **Start** >= the length of **Content**.
   * 
   * 2. When **Encode** is set to **hex**, the following requirements must be met:
   * 
   * - **Content** must be hexadecimal characters.
   * 
   * - The length of **Content** must be an even number.
   * 
   * - The length of **Content** cannot exceed 3000.
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
   * 32
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
  offset?: ListPolicyResponseBodyPolicyListContentL4RuleListConditionListOffset;
  /**
   * @remarks
   * The match pattern. Valid values:
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
   * The start position of detection. Valid values: **0** to **2047**.
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
      offset: ListPolicyResponseBodyPolicyListContentL4RuleListConditionListOffset,
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

export class ListPolicyResponseBodyPolicyListContentL4RuleList extends $dara.Model {
  /**
   * @remarks
   * The action. Valid values:
   * 
   * - **2**: Drop.
   * 
   * @example
   * 2
   */
  action?: string;
  /**
   * @remarks
   * The list of detection conditions.
   */
  conditionList?: ListPolicyResponseBodyPolicyListContentL4RuleListConditionList[];
  /**
   * @remarks
   * The minimum number of bytes in a session flow to trigger rule matching. Valid values: **0** to **2048**.
   * 
   * @example
   * 0
   */
  limited?: number;
  /**
   * @remarks
   * The logical operator. Valid values:
   * 
   * - **0**: Execute the action when the rule is matched.
   * 
   * - **1**: Execute the action when the rule is not matched.
   * 
   * @example
   * 1
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
   * @example
   * test**
   */
  name?: string;
  /**
   * @remarks
   * The rule priority.
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
      conditionList: { 'type': 'array', 'itemType': ListPolicyResponseBodyPolicyListContentL4RuleListConditionList },
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

export class ListPolicyResponseBodyPolicyListContentPortRuleList extends $dara.Model {
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
   * 8f3c3062-6c20-425d-8405-2bd1********
   */
  id?: string;
  /**
   * @remarks
   * The match action. Valid values:
   * 
   * - **drop**: Drop.
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
   * @example
   * udp
   */
  protocol?: string;
  /**
   * @remarks
   * The priority of the rule, represented as an integer.
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

export class ListPolicyResponseBodyPolicyListContentSipDefense extends $dara.Model {
  /**
   * @remarks
   * Indicates whether SIP protection is enabled. Valid values:
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
   * Indicates whether SIP defense mode is enabled.
   */
  sipDefend?: boolean;
  /**
   * @remarks
   * Indicates whether SIP learning mode is enabled.
   */
  sipLearn?: boolean;
  /**
   * @remarks
   * Indicates whether the SIP source rate limiting module is enabled.
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
   * The SIP source rate limit value (PPS).
   * 
   * @example
   * 1000
   */
  sipRate?: number;
  /**
   * @remarks
   * The SIP activation threshold (Mbit/s).
   * 
   * @example
   * 100
   */
  sipStartMbps?: number;
  /**
   * @remarks
   * The SIP activation threshold (PPS).
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

export class ListPolicyResponseBodyPolicyListContentSourceBlockList extends $dara.Model {
  /**
   * @remarks
   * The duration for which the source IP address is added to the blacklist. Unit: seconds.
   * 
   * @example
   * 120
   */
  blockExpireSeconds?: number;
  /**
   * @remarks
   * The statistical period for source rate limiting and blacklisting. Unit: seconds.
   * 
   * @example
   * 60
   */
  everySeconds?: number;
  /**
   * @remarks
   * The number of times that the source IP address exceeds the rate limit within a single statistical period.
   * 
   * @example
   * 5
   */
  exceedLimitTimes?: number;
  /**
   * @remarks
   * The type of source rate limiting. Valid values:
   * 
   * - **3**: source PPS rate limiting.
   * 
   * - **4**: source bandwidth throttling.
   * 
   * - **5**: source SYN PPS rate limiting.
   * 
   * - **6**: source SYN bandwidth throttling.
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

export class ListPolicyResponseBodyPolicyListContentSourceLimit extends $dara.Model {
  /**
   * @remarks
   * The source bandwidth throttling value. Unit: bytes per second.
   * 
   * @example
   * 2048
   */
  bps?: number;
  /**
   * @remarks
   * The source PPS rate limit. Unit: packets per second.
   * 
   * @example
   * 64
   */
  pps?: number;
  /**
   * @remarks
   * The source SYN bandwidth throttling value. Unit: bytes per second.
   * 
   * @example
   * 2048
   */
  synBps?: number;
  /**
   * @remarks
   * The source SYN PPS rate limit. Unit: packets per second.
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

export class ListPolicyResponseBodyPolicyListContent extends $dara.Model {
  /**
   * @remarks
   * The expiration time of the IP blacklist. The value is a UNIX timestamp.
   * 
   * @example
   * 1716878000
   */
  blackIpListExpireAt?: number;
  /**
   * @remarks
   * Indicates whether ICMP Blocking is enabled.
   * 
   * @example
   * false
   */
  enableDropIcmp?: boolean;
  /**
   * @remarks
   * Indicates whether AI-based intelligent analysis is enabled.
   * 
   * @example
   * true
   */
  enableIntelligence?: boolean;
  /**
   * @remarks
   * Indicates whether port-specific mitigation is enabled.
   * 
   * @example
   * true
   */
  enableL4Defense?: boolean;
  /**
   * @remarks
   * The list of Byte-Match Filter rules.
   */
  fingerPrintRuleList?: ListPolicyResponseBodyPolicyListContentFingerPrintRuleList[];
  /**
   * @remarks
   * The protection level of AI-based intelligent analysis. Valid values:
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
  l4RuleList?: ListPolicyResponseBodyPolicyListContentL4RuleList[];
  /**
   * @remarks
   * The list of Port Blocking rules.
   */
  portRuleList?: ListPolicyResponseBodyPolicyListContentPortRuleList[];
  /**
   * @remarks
   * The version of the port-specific mitigation policy. Valid values:
   * 
   * - **Empty**: the default surf protection engine policy.
   * - **2**: the new stream protection engine policy.
   * > Only port-specific mitigation policies are supported.
   * 
   * @example
   * 2
   */
  portVersion?: string;
  /**
   * @remarks
   * The list of ports filtered by the reflection attack prevention feature.
   */
  reflectBlockUdpPortList?: number[];
  /**
   * @remarks
   * The list of countries for the location blacklist.
   */
  regionBlockCountryList?: number[];
  /**
   * @remarks
   * The list of provinces for the location blacklist.
   */
  regionBlockProvinceList?: number[];
  /**
   * @remarks
   * The SIP protection settings.
   */
  sipDefense?: ListPolicyResponseBodyPolicyListContentSipDefense;
  /**
   * @remarks
   * The list of source rate limiting and blacklisting rules.
   */
  sourceBlockList?: ListPolicyResponseBodyPolicyListContentSourceBlockList[];
  /**
   * @remarks
   * The source rate limiting configuration.
   */
  sourceLimit?: ListPolicyResponseBodyPolicyListContentSourceLimit;
  /**
   * @remarks
   * Indicates whether the back-to-origin CIDR blocks of Anti-DDoS Pro and Anti-DDoS Premium (the Chinese mainland & outside the Chinese mainland) are added to the whitelist.
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
      portVersion: 'PortVersion',
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
      fingerPrintRuleList: { 'type': 'array', 'itemType': ListPolicyResponseBodyPolicyListContentFingerPrintRuleList },
      intelligenceLevel: 'string',
      l4RuleList: { 'type': 'array', 'itemType': ListPolicyResponseBodyPolicyListContentL4RuleList },
      portRuleList: { 'type': 'array', 'itemType': ListPolicyResponseBodyPolicyListContentPortRuleList },
      portVersion: 'string',
      reflectBlockUdpPortList: { 'type': 'array', 'itemType': 'number' },
      regionBlockCountryList: { 'type': 'array', 'itemType': 'number' },
      regionBlockProvinceList: { 'type': 'array', 'itemType': 'number' },
      sipDefense: ListPolicyResponseBodyPolicyListContentSipDefense,
      sourceBlockList: { 'type': 'array', 'itemType': ListPolicyResponseBodyPolicyListContentSourceBlockList },
      sourceLimit: ListPolicyResponseBodyPolicyListContentSourceLimit,
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

export class ListPolicyResponseBodyPolicyList extends $dara.Model {
  /**
   * @remarks
   * The number of protected objects that are associated with the policy.
   * 
   * @example
   * 0
   */
  attachedCount?: number;
  /**
   * @remarks
   * The policy content.
   */
  content?: ListPolicyResponseBodyPolicyListContent;
  /**
   * @remarks
   * The policy ID.
   * 
   * @example
   * 877afbdf-3982-4d36-9886-f043********
   */
  id?: string;
  /**
   * @remarks
   * The policy name.
   * 
   * @example
   * test**
   */
  name?: string;
  /**
   * @remarks
   * The remarks of the policy.
   * 
   * @example
   * test
   */
  remark?: string;
  /**
   * @remarks
   * The policy type. Valid values:
   * - **default**: default mitigation policy.
   * - **l3**: IP-specific mitigation policy.
   * - **l4**: port-specific mitigation policy.
   * 
   * @example
   * l3
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      attachedCount: 'AttachedCount',
      content: 'Content',
      id: 'Id',
      name: 'Name',
      remark: 'Remark',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachedCount: 'number',
      content: ListPolicyResponseBodyPolicyListContent,
      id: 'string',
      name: 'string',
      remark: 'string',
      type: 'string',
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

export class ListPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of policies.
   */
  policyList?: ListPolicyResponseBodyPolicyList[];
  /**
   * @remarks
   * The ID of the request. Alibaba Cloud generates a unique identifier for each request. You can use the ID to troubleshoot issues.
   * 
   * @example
   * B4B379C2-9319-4C6B-B579-FE36831B09F4
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of policies.
   * 
   * @example
   * 10
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      policyList: 'PolicyList',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyList: { 'type': 'array', 'itemType': ListPolicyResponseBodyPolicyList },
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.policyList)) {
      $dara.Model.validateArray(this.policyList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

