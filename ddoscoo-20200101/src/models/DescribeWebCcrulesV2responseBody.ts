// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWebCCRulesV2ResponseBodyWebCCRulesRuleDetailCondition extends $dara.Model {
  /**
   * @remarks
   * The match content.
   * 
   * @example
   * 192.0.XX.XX
   */
  content?: string;
  /**
   * @remarks
   * The match content when the match method is Equals to One of Multiple Values.
   * 
   * @example
   * ["2","3","ad"]
   */
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
   * The match method.
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

export class DescribeWebCCRulesV2ResponseBodyWebCCRulesRuleDetailRateLimit extends $dara.Model {
  /**
   * @remarks
   * The statistical period. Unit: seconds.
   * 
   * @example
   * 60
   */
  interval?: number;
  /**
   * @remarks
   * The name of the field. This parameter is required only when the Target parameter is set to header.
   * 
   * @example
   * action
   */
  subKey?: string;
  /**
   * @remarks
   * The statistical method. Valid values:
   * 
   * *   **ip**
   * *   **header**
   * 
   * @example
   * ip
   */
  target?: string;
  /**
   * @remarks
   * The trigger threshold.
   * 
   * @example
   * 20
   */
  threshold?: number;
  /**
   * @remarks
   * The blocking duration. Unit: seconds.
   * 
   * @example
   * 15
   */
  ttl?: number;
  static names(): { [key: string]: string } {
    return {
      interval: 'Interval',
      subKey: 'SubKey',
      target: 'Target',
      threshold: 'Threshold',
      ttl: 'Ttl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      interval: 'number',
      subKey: 'string',
      target: 'string',
      threshold: 'number',
      ttl: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebCCRulesV2ResponseBodyWebCCRulesRuleDetailStatistics extends $dara.Model {
  /**
   * @remarks
   * The statistical method. Valid values:
   * 
   * *   **ip**
   * *   **header**
   * *   **uri**
   * 
   * @example
   * uri
   */
  field?: string;
  /**
   * @remarks
   * The name of the header. This parameter is required only when the Field parameter is set to header.
   * 
   * @example
   * hello
   */
  headerName?: string;
  /**
   * @remarks
   * Indicates whether the system collects statistics after deduplication. Valid values:
   * 
   * *   **count**: The system collects statistics before deduplication.
   * *   **distinct**: The system collects statistics after deduplication.
   * 
   * @example
   * count
   */
  mode?: string;
  static names(): { [key: string]: string } {
    return {
      field: 'Field',
      headerName: 'HeaderName',
      mode: 'Mode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      field: 'string',
      headerName: 'string',
      mode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebCCRulesV2ResponseBodyWebCCRulesRuleDetailStatusCode extends $dara.Model {
  /**
   * @remarks
   * The status code. Valid values: **100** to **599**.
   * 
   * *   **200**: The request was successful.
   * *   Other codes: The request failed.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * If a ratio is not used, the handling action is triggered only when the number of requests of the corresponding status code reaches the value of **CountThreshold**. Valid values: **2** to **50000**.
   * 
   * @example
   * 10
   */
  countThreshold?: number;
  /**
   * @remarks
   * Indicates whether the status code is enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * If a ratio is used, the handling action is triggered only when the number of requests of the corresponding status code reaches the value of **RatioThreshold**. Valid values: **1** to **100**.
   * 
   * @example
   * 10
   */
  ratioThreshold?: number;
  /**
   * @remarks
   * Indicates whether to use a ratio.
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  useRatio?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      countThreshold: 'CountThreshold',
      enabled: 'Enabled',
      ratioThreshold: 'RatioThreshold',
      useRatio: 'UseRatio',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      countThreshold: 'number',
      enabled: 'boolean',
      ratioThreshold: 'number',
      useRatio: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebCCRulesV2ResponseBodyWebCCRulesRuleDetail extends $dara.Model {
  /**
   * @remarks
   * The action triggered if the rule is matched. Valid values:
   * 
   * *   **accept**: The requests that match the rule are allowed.
   * *   **block**: The requests that match the rule are blocked.
   * *   **challenge**: Completely Automated Public Turing test to tell Computers and Humans Apart (CAPTCHA) verification for the requests that match the rule is implemented.
   * *   **watch**: The requests that match the rule are recorded in logs and allowed.
   * 
   * @example
   * block
   */
  action?: string;
  /**
   * @remarks
   * The match conditions.
   */
  condition?: DescribeWebCCRulesV2ResponseBodyWebCCRulesRuleDetailCondition[];
  /**
   * @remarks
   * The parameter is deprecated.
   * 
   * @example
   * 废弃
   */
  count?: number;
  /**
   * @remarks
   * The parameter is deprecated.
   * 
   * @example
   * 60
   */
  interval?: number;
  /**
   * @remarks
   * The parameter is deprecated.
   * 
   * @example
   * 废弃
   */
  mode?: string;
  /**
   * @remarks
   * The name of the rule.
   * 
   * @example
   * ccauto14
   */
  name?: string;
  /**
   * @remarks
   * The frequency statistics.
   */
  rateLimit?: DescribeWebCCRulesV2ResponseBodyWebCCRulesRuleDetailRateLimit;
  /**
   * @remarks
   * The statistics after deduplication. By default, the system collects statistics before deduplication.
   */
  statistics?: DescribeWebCCRulesV2ResponseBodyWebCCRulesRuleDetailStatistics;
  /**
   * @remarks
   * The status codes.
   */
  statusCode?: DescribeWebCCRulesV2ResponseBodyWebCCRulesRuleDetailStatusCode;
  /**
   * @remarks
   * The parameter is deprecated.
   * 
   * @example
   * 300
   */
  ttl?: number;
  /**
   * @remarks
   * The parameter is deprecated.
   * 
   * @example
   * /p3shijihao
   */
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      condition: 'Condition',
      count: 'Count',
      interval: 'Interval',
      mode: 'Mode',
      name: 'Name',
      rateLimit: 'RateLimit',
      statistics: 'Statistics',
      statusCode: 'StatusCode',
      ttl: 'Ttl',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      condition: { 'type': 'array', 'itemType': DescribeWebCCRulesV2ResponseBodyWebCCRulesRuleDetailCondition },
      count: 'number',
      interval: 'number',
      mode: 'string',
      name: 'string',
      rateLimit: DescribeWebCCRulesV2ResponseBodyWebCCRulesRuleDetailRateLimit,
      statistics: DescribeWebCCRulesV2ResponseBodyWebCCRulesRuleDetailStatistics,
      statusCode: DescribeWebCCRulesV2ResponseBodyWebCCRulesRuleDetailStatusCode,
      ttl: 'number',
      uri: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.condition)) {
      $dara.Model.validateArray(this.condition);
    }
    if(this.rateLimit && typeof (this.rateLimit as any).validate === 'function') {
      (this.rateLimit as any).validate();
    }
    if(this.statistics && typeof (this.statistics as any).validate === 'function') {
      (this.statistics as any).validate();
    }
    if(this.statusCode && typeof (this.statusCode as any).validate === 'function') {
      (this.statusCode as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebCCRulesV2ResponseBodyWebCCRules extends $dara.Model {
  /**
   * @remarks
   * The validity period of the rule. Unit: seconds. If the Action parameter is set to block, the system blocks the requests that match the rule within the validity period of the rule. The value 0 indicates that the rule is permanently valid.
   * 
   * @example
   * 0
   */
  expires?: number;
  /**
   * @remarks
   * The name of the rule.
   * 
   * @example
   * wq
   */
  name?: string;
  /**
   * @remarks
   * The method used to create the rule. Valid values:
   * 
   * *   **manual** (default): manually created.
   * *   **clover**: automatically created.
   * 
   * @example
   * manual
   */
  owner?: string;
  /**
   * @remarks
   * The details of the rule.
   */
  ruleDetail?: DescribeWebCCRulesV2ResponseBodyWebCCRulesRuleDetail;
  static names(): { [key: string]: string } {
    return {
      expires: 'Expires',
      name: 'Name',
      owner: 'Owner',
      ruleDetail: 'RuleDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expires: 'number',
      name: 'string',
      owner: 'string',
      ruleDetail: DescribeWebCCRulesV2ResponseBodyWebCCRulesRuleDetail,
    };
  }

  validate() {
    if(this.ruleDetail && typeof (this.ruleDetail as any).validate === 'function') {
      (this.ruleDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebCCRulesV2ResponseBody extends $dara.Model {
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
   * The request ID.
   * 
   * @example
   * CF33B4C3-196E-4015-AADD-5CAD00057B80
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned custom frequency control rules.
   * 
   * @example
   * 12
   */
  totalCount?: string;
  /**
   * @remarks
   * The custom frequency control rules.
   */
  webCCRules?: DescribeWebCCRulesV2ResponseBodyWebCCRules[];
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      webCCRules: 'WebCCRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      requestId: 'string',
      totalCount: 'string',
      webCCRules: { 'type': 'array', 'itemType': DescribeWebCCRulesV2ResponseBodyWebCCRules },
    };
  }

  validate() {
    if(Array.isArray(this.webCCRules)) {
      $dara.Model.validateArray(this.webCCRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

