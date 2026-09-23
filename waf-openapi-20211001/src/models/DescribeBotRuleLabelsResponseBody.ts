// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBotRuleLabelsResponseBodyRuleLabels extends $dara.Model {
  /**
   * @remarks
   * The crawler behavior corresponding to the rule tag. Valid values:
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
   * - **block**: block.
   * - **monitor**: monitor.
   * - **js**: JavaScript verification.
   * - **captcha**: slider CAPTCHA.
   * - **captcha_strict**: strict slider CAPTCHA.
   * - **bypass**: allow.
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
   * The default status of the tag rule. Valid values:
   * 
   * - **1**: enabled.
   * - **0**: disabled.
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
   * The tag status. Valid values:
   * 
   * - **online**: online.
   * - **wait_offline**: pending offline.
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
   * The collection of bot management protection scenarios to which the rule belongs. Multiple scenarios are separated by commas (,). Valid values:
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
   * The number of entries per page in a paged query. Valid values: 1 to 200. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token for the next page. If a next page exists, this field returns a value.
   * 
   * > If this parameter returns a value, a next page exists. Use the returned **NextToken** as a request parameter to retrieve the next page of data. Repeat until no value is returned, which indicates that all data has been retrieved.
   * 
   * @example
   * AAAAAGBgV9tolsLfijC4wam2htS*****D/46H3X2wIS
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
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

