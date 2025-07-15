// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveAIProduceRulesResponseBodyRuleInfoListRuleInfo extends $dara.Model {
  /**
   * @remarks
   * The name of the application to which the live stream belongs.
   * 
   * @example
   * App Name
   */
  app?: string;
  /**
   * @remarks
   * The description of the rule.
   * 
   * @example
   * live AI subtitle template
   */
  description?: string;
  /**
   * @remarks
   * The streaming domain.
   * 
   * @example
   * demo.aliyundoc.com
   */
  domain?: string;
  /**
   * @remarks
   * The last time when the rule was modified. The value is a timestamp.
   * 
   * @example
   * 1715594344000
   */
  gmtModifyTime?: string;
  /**
   * @remarks
   * Indicates whether the rule takes effect when stream pulling starts.
   * 
   * @example
   * true
   */
  isLazy?: boolean;
  /**
   * @remarks
   * The specification of the exported subtitles.
   * 
   * @example
   * lp_ld
   */
  liveTemplate?: string;
  /**
   * @remarks
   * The ID of the subtitle rule.
   * 
   * @example
   * 72fba656-2cc2-40fd-923c-2a10c3b9****
   */
  rulesId?: string;
  /**
   * @remarks
   * The name of the virtual background template.
   * 
   * @example
   * test0708
   */
  studioName?: string;
  /**
   * @remarks
   * The name of the subtitle template.
   * 
   * @example
   * sub1
   */
  subtitleName?: string;
  /**
   * @remarks
   * The suffix of the subtitle rule.
   * 
   * @example
   * test0506
   */
  suffixName?: string;
  static names(): { [key: string]: string } {
    return {
      app: 'App',
      description: 'Description',
      domain: 'Domain',
      gmtModifyTime: 'GmtModifyTime',
      isLazy: 'IsLazy',
      liveTemplate: 'LiveTemplate',
      rulesId: 'RulesId',
      studioName: 'StudioName',
      subtitleName: 'SubtitleName',
      suffixName: 'SuffixName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      app: 'string',
      description: 'string',
      domain: 'string',
      gmtModifyTime: 'string',
      isLazy: 'boolean',
      liveTemplate: 'string',
      rulesId: 'string',
      studioName: 'string',
      subtitleName: 'string',
      suffixName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveAIProduceRulesResponseBodyRuleInfoList extends $dara.Model {
  ruleInfo?: DescribeLiveAIProduceRulesResponseBodyRuleInfoListRuleInfo[];
  static names(): { [key: string]: string } {
    return {
      ruleInfo: 'RuleInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleInfo: { 'type': 'array', 'itemType': DescribeLiveAIProduceRulesResponseBodyRuleInfoListRuleInfo },
    };
  }

  validate() {
    if(Array.isArray(this.ruleInfo)) {
      $dara.Model.validateArray(this.ruleInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveAIProduceRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 5c6a2a0df228-4a64- af62-20e91b96****
   */
  requestId?: string;
  /**
   * @remarks
   * The subtitle rules.
   */
  ruleInfoList?: DescribeLiveAIProduceRulesResponseBodyRuleInfoList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ruleInfoList: 'RuleInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ruleInfoList: DescribeLiveAIProduceRulesResponseBodyRuleInfoList,
    };
  }

  validate() {
    if(this.ruleInfoList && typeof (this.ruleInfoList as any).validate === 'function') {
      (this.ruleInfoList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

