// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveStreamWatermarkRulesResponseBodyRuleInfoListRuleInfo extends $dara.Model {
  app?: string;
  description?: string;
  domain?: string;
  name?: string;
  ruleId?: string;
  stream?: string;
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

