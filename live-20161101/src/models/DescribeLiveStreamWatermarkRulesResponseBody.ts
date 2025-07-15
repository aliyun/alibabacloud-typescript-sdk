// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveStreamWatermarkRulesResponseBodyRuleInfoListRuleInfo extends $dara.Model {
  /**
   * @remarks
   * The name of the application to which the live stream belongs.
   * 
   * @example
   * liveApp****
   */
  app?: string;
  /**
   * @remarks
   * The description of the custom rule.
   * 
   * @example
   * my rule
   */
  description?: string;
  /**
   * @remarks
   * The streaming domain.
   * 
   * @example
   * example.aliyundoc.com
   */
  domain?: string;
  /**
   * @remarks
   * The name of the custom rule.
   * 
   * @example
   * WatermarkRule****
   */
  name?: string;
  /**
   * @remarks
   * The ID of the watermark rule.
   * 
   * >  You can obtain the rule ID by checking the value of the RuleId parameter that is returned by the [AddLiveStreamWatermarkRule](https://help.aliyun.com/document_detail/2848100.html) operation.
   * 
   * @example
   * 445409ec-7eaa-461d -8f29-4bec2eb9****
   */
  ruleId?: string;
  /**
   * @remarks
   * The name of the live stream. The following matching rules apply:
   * 
   * *   A stream name can be exactly matched. Example: liveStreamA.
   * *   Fuzzy match is also supported. The use of an asterisk (`*`) allows all approximate matches to be found.
   * *   You can place the asterisk before or after an approximate string.
   * 
   * > 
   * 
   * *   Fuzzy match: Only one asterisk (`*`) before or after an approximate string is allowed. The approximate string must be enclosed in `()`. Separate multiple strings with vertical bars (`|`).
   * 
   * *   For example, `*(t1|t2)` matches all streams whose name has the `t1` or `t2` suffix, and `(abc|123)*` matches all streams whose name has the `abc` or `123` prefix.
   * 
   * @example
   * liveStreamA
   */
  stream?: string;
  /**
   * @remarks
   * The ID of the watermark template.
   * 
   * >  You can obtain the template ID by checking the value of the TemplateId parameter that is returned by the [AddLiveStreamWatermark](https://help.aliyun.com/document_detail/2848096.html) operation.
   * 
   * @example
   * 445409ec-7eaa-461d-8f29-4bec2eb9 ****
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      app: 'App',
      description: 'Description',
      domain: 'Domain',
      name: 'Name',
      ruleId: 'RuleId',
      stream: 'Stream',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      app: 'string',
      description: 'string',
      domain: 'string',
      name: 'string',
      ruleId: 'string',
      stream: 'string',
      templateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamWatermarkRulesResponseBodyRuleInfoList extends $dara.Model {
  ruleInfo?: DescribeLiveStreamWatermarkRulesResponseBodyRuleInfoListRuleInfo[];
  static names(): { [key: string]: string } {
    return {
      ruleInfo: 'RuleInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleInfo: { 'type': 'array', 'itemType': DescribeLiveStreamWatermarkRulesResponseBodyRuleInfoListRuleInfo },
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

export class DescribeLiveStreamWatermarkRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5c6a2a0df228-4a64- af62-20e91b9676b3
   */
  requestId?: string;
  /**
   * @remarks
   * The watermark rules.
   */
  ruleInfoList?: DescribeLiveStreamWatermarkRulesResponseBodyRuleInfoList;
  /**
   * @remarks
   * The total number of entries that meet the specified conditions.
   * 
   * @example
   * 100
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ruleInfoList: 'RuleInfoList',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ruleInfoList: DescribeLiveStreamWatermarkRulesResponseBodyRuleInfoList,
      total: 'number',
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

