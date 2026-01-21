// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWebPreciseAccessRuleResponseBodyPreciseAccessConfigListRuleListConditionList extends $dara.Model {
  /**
   * @remarks
   * The match content.
   * 
   * @example
   * 1.1.1.1
   */
  content?: string;
  contentList?: string[];
  /**
   * @remarks
   * The match field.
   * 
   * @example
   * ip
   */
  field?: string;
  /**
   * @remarks
   * The custom HTTP request header.
   * 
   * >  This parameter takes effect only when **Field** is set to **header**.
   * 
   * @example
   * null
   */
  headerName?: string;
  /**
   * @remarks
   * The logical operator.
   * 
   * @example
   * belong
   */
  matchMethod?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      contentList: 'ContentList',
      field: 'Field',
      headerName: 'HeaderName',
      matchMethod: 'MatchMethod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      contentList: { 'type': 'array', 'itemType': 'string' },
      field: 'string',
      headerName: 'string',
      matchMethod: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.contentList)) {
      $dara.Model.validateArray(this.contentList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebPreciseAccessRuleResponseBodyPreciseAccessConfigListRuleList extends $dara.Model {
  /**
   * @remarks
   * The action triggered if the rule is matched. Valid values:
   * 
   * *   **accept**: The requests that match the rule are allowed.
   * *   **block**: The requests that match the rule are blocked.
   * *   **challenge**: Completely Automated Public Turing test to tell Computers and Humans Apart (CAPTCHA) verification for the requests that match the rule is implemented.
   * 
   * @example
   * accept
   */
  action?: string;
  /**
   * @remarks
   * The match conditions.
   */
  conditionList?: DescribeWebPreciseAccessRuleResponseBodyPreciseAccessConfigListRuleListConditionList[];
  expirePeriod?: number;
  /**
   * @remarks
   * The validity period of the rule. Unit: seconds. This parameter takes effect only when **action** of a rule is **block**. Access requests that match the rule are blocked within the specified validity period of the rule. The value **0** indicates that the whitelist takes effect all the time.
   * 
   * @example
   * 0
   */
  expires?: number;
  /**
   * @remarks
   * The name of the scheduling rule.
   * 
   * @example
   * testrule
   */
  name?: string;
  /**
   * @remarks
   * The source of the rule. Valid values:
   * 
   * *   **manual** (default): manually created.
   * *   **auto**: automatically generated.
   * 
   * @example
   * manual
   */
  owner?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      conditionList: 'ConditionList',
      expirePeriod: 'ExpirePeriod',
      expires: 'Expires',
      name: 'Name',
      owner: 'Owner',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      conditionList: { 'type': 'array', 'itemType': DescribeWebPreciseAccessRuleResponseBodyPreciseAccessConfigListRuleListConditionList },
      expirePeriod: 'number',
      expires: 'number',
      name: 'string',
      owner: 'string',
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

export class DescribeWebPreciseAccessRuleResponseBodyPreciseAccessConfigList extends $dara.Model {
  /**
   * @remarks
   * The domain name of the website.
   * 
   * @example
   * www.aliyun.com
   */
  domain?: string;
  /**
   * @remarks
   * The scheduling rules.
   */
  ruleList?: DescribeWebPreciseAccessRuleResponseBodyPreciseAccessConfigListRuleList[];
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      ruleList: 'RuleList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      ruleList: { 'type': 'array', 'itemType': DescribeWebPreciseAccessRuleResponseBodyPreciseAccessConfigListRuleList },
    };
  }

  validate() {
    if(Array.isArray(this.ruleList)) {
      $dara.Model.validateArray(this.ruleList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebPreciseAccessRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The configuration of the accurate access control rule that is created for the website.
   */
  preciseAccessConfigList?: DescribeWebPreciseAccessRuleResponseBodyPreciseAccessConfigList[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 209EEFBF-B0C7-441E-8C28-D0945A57A638
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      preciseAccessConfigList: 'PreciseAccessConfigList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      preciseAccessConfigList: { 'type': 'array', 'itemType': DescribeWebPreciseAccessRuleResponseBodyPreciseAccessConfigList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.preciseAccessConfigList)) {
      $dara.Model.validateArray(this.preciseAccessConfigList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

