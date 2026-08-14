// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWebCCRulesV2ResponseBodyWebCCRulesRuleDetailCondition extends $dara.Model {
  /**
   * @example
   * 192.0.XX.XX
   */
  content?: string;
  contentList?: string[];
  /**
   * @example
   * ip
   */
  field?: string;
  /**
   * @example
   * null
   */
  headerName?: string;
  /**
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
   * @example
   * 60
   */
  interval?: number;
  /**
   * @example
   * action
   */
  subKey?: string;
  /**
   * @example
   * ip
   */
  target?: string;
  /**
   * @example
   * 20
   */
  threshold?: number;
  /**
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
   * @example
   * uri
   */
  field?: string;
  /**
   * @example
   * hello
   */
  headerName?: string;
  /**
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
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * 10
   */
  countThreshold?: number;
  /**
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @example
   * 10
   */
  ratioThreshold?: number;
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
   * @example
   * block
   */
  action?: string;
  condition?: DescribeWebCCRulesV2ResponseBodyWebCCRulesRuleDetailCondition[];
  /**
   * @example
   * 废弃
   */
  count?: number;
  /**
   * @example
   * 60
   */
  interval?: number;
  /**
   * @example
   * 废弃
   */
  mode?: string;
  /**
   * @example
   * ccauto14
   */
  name?: string;
  rateLimit?: DescribeWebCCRulesV2ResponseBodyWebCCRulesRuleDetailRateLimit;
  statistics?: DescribeWebCCRulesV2ResponseBodyWebCCRulesRuleDetailStatistics;
  statusCode?: DescribeWebCCRulesV2ResponseBodyWebCCRulesRuleDetailStatusCode;
  /**
   * @example
   * 300
   */
  ttl?: number;
  /**
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
   * @example
   * 0
   */
  expires?: number;
  /**
   * @example
   * wq
   */
  name?: string;
  /**
   * @example
   * manual
   */
  owner?: string;
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
   * @example
   * www.aliyun.com
   */
  domain?: string;
  /**
   * @example
   * CF33B4C3-196E-4015-AADD-5CAD00057B80
   */
  requestId?: string;
  /**
   * @example
   * 12
   */
  totalCount?: string;
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

