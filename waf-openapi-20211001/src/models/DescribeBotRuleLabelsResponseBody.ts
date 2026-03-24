// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBotRuleLabelsResponseBodyRuleLabels extends $dara.Model {
  /**
   * @remarks
   * The bot behavior that corresponds to the rule label. Valid values:
   * 
   * - **malicious**: malicious bot.
   * 
   * - **suspicious**: suspected bot.
   * 
   * - **normal**: normal bot.
   * 
   * @example
   * malicious
   */
  botBehavior?: string;
  /**
   * @remarks
   * The key of the bot management rule label.
   * 
   * @example
   * malicious_crawler_python
   */
  labelKey?: string;
  /**
   * @remarks
   * The type of the bot rule label.
   * 
   * @example
   * human_machine_challenge
   */
  labelType?: string;
  /**
   * @remarks
   * The bot management scenarios to which the rule belongs. Multiple scenarios are separated by commas (,). Valid values:
   * 
   * - **web**: web protection.
   * 
   * - **app**: app protection.
   * 
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
   * @remarks
   * The maximum number of entries returned per page. Valid values: 1 to 200. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token to retrieve the next page of results. This parameter is returned if a next page exists.
   * 
   * > If a value is returned for this parameter, it indicates that more results are available. Use the returned **NextToken** value in the next request to retrieve the next page of results. Repeat this process until no value is returned for this parameter. This indicates that all results have been retrieved.
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
   * The list of bot management rule labels.
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

