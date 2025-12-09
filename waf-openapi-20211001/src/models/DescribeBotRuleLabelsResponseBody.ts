// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBotRuleLabelsResponseBodyRuleLabels extends $dara.Model {
  /**
   * @example
   * malicious
   */
  botBehavior?: string;
  /**
   * @example
   * malicious_crawler_python
   */
  labelKey?: string;
  /**
   * @example
   * human_machine_challenge
   */
  labelType?: string;
  /**
   * @example
   * Web,app
   */
  subScene?: string;
  static names(): { [key: string]: string } {
    return {
      botBehavior: 'BotBehavior',
      labelKey: 'LabelKey',
      labelType: 'LabelType',
      subScene: 'SubScene',
    };
  }

  static types(): { [key: string]: any } {
    return {
      botBehavior: 'string',
      labelKey: 'string',
      labelType: 'string',
      subScene: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBotRuleLabelsResponseBody extends $dara.Model {
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * AAAAAGBgV9tolsLfijC4wam2htS*****D/46H3X2wIS
   */
  nextToken?: string;
  /**
   * @example
   * D7861F61-5B61-46CE-A47C-6B19****5EB0
   */
  requestId?: string;
  ruleLabels?: DescribeBotRuleLabelsResponseBodyRuleLabels[];
  /**
   * @example
   * 8
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      ruleLabels: 'RuleLabels',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      ruleLabels: { 'type': 'array', 'itemType': DescribeBotRuleLabelsResponseBodyRuleLabels },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.ruleLabels)) {
      $dara.Model.validateArray(this.ruleLabels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

