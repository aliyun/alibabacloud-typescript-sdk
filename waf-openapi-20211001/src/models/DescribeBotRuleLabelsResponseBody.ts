// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBotRuleLabelsResponseBodyRuleLabels extends $dara.Model {
  /**
   * @remarks
   * The crawler behavior corresponding to the rule tag.
   * 
   * - **malicious**: malicious crawler.
   * - **suspicious**: suspected crawler.
   * - **normal**: normal crawler.
   * 
   * @example
   * malicious
   */
  botBehavior?: string;
  /**
   * @remarks
   * The default action. Valid values:
   * 
   * - **block**: Block.
   * - **monitor**: Monitor.
   * - **js**: JavaScript verification.
   * - **captcha**: slider CAPTCHA.
   * - **captcha_strict**: strict slider CAPTCHA.
   * - **bypass**: Allow.
   * 
   * @example
   * block
   */
  defaultAction?: string;
  /**
   * @remarks
   * The default configurations corresponding to the label.
   * 
   * @example
   * {"crawlerStatusMap":{"360":1,"bytedance":1}}
   */
  defaultConfig?: string;
  /**
   * @remarks
   * The default status of the tag rule.
   * 
   * - **1**: The rule is enabled.
   * - **0**: The rule is disabled.
   * 
   * @example
   * 1
   */
  defaultStatus?: number;
  /**
   * @remarks
   * The bot management rule tag.
   * 
   * @example
   * malicious_crawler_python
   */
  labelKey?: string;
  /**
   * @remarks
   * The tag status.
   * 
   * - **online**: Online.
   * - **wait_offline**: Pending offline.
   * 
   * @example
   * online
   */
  labelStatus?: string;
  /**
   * @remarks
   * The type of the bot rule tag.
   * 
   * @example
   * human_machine_challenge
   */
  labelType?: string;
  /**
   * @remarks
   * The set of bot management protection scenarios to which the rule belongs. Multiple scenarios are separated by commas (,). Valid values:
   * 
   * - **web**: Web protection scenario.
   * - **app**: App protection scenario.
   * 
   * @example
   * web,app
   */
  subScene?: string;
  static names(): { [key: string]: string } {
    return {
      botBehavior: 'BotBehavior',
      defaultAction: 'DefaultAction',
      defaultConfig: 'DefaultConfig',
      defaultStatus: 'DefaultStatus',
      labelKey: 'LabelKey',
      labelStatus: 'LabelStatus',
      labelType: 'LabelType',
      subScene: 'SubScene',
    };
  }

  static types(): { [key: string]: any } {
    return {
      botBehavior: 'string',
      defaultAction: 'string',
      defaultConfig: 'string',
      defaultStatus: 'number',
      labelKey: 'string',
      labelStatus: 'string',
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
   * @remarks
   * The number of entries per page in a paged query. Valid values: 1 to 200. Default value: 20. This parameter is used for paging.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token for the next page. If a value is returned for this parameter, the next page exists.
   * 
   * > If this parameter has a return value, the next page exists. Use the returned NextToken value as a request parameter to retrieve the next page of data. Repeat until no value is returned, which indicates that all data has been retrieved.
   * 
   * @example
   * AAAAAGBgV9tolsLfijC4wam2htS*****D/46H3X2wIS
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D7861F61-5B61-46CE-A47C-6B19****5EB0
   */
  requestId?: string;
  /**
   * @remarks
   * The list of bot management rule tags.
   */
  ruleLabels?: DescribeBotRuleLabelsResponseBodyRuleLabels[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
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

