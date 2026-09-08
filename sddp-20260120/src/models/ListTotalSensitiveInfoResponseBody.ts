// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTotalSensitiveInfoResponseBodyDataCountDOListDataCountDOList extends $dara.Model {
  /**
   * @example
   * 1788537600000000000
   */
  date?: number;
  /**
   * @example
   * 20
   */
  sensitiveCount?: number;
  /**
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      sensitiveCount: 'SensitiveCount',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'number',
      sensitiveCount: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTotalSensitiveInfoResponseBodyDataCountDOListRuleInfoList extends $dara.Model {
  /**
   * @example
   * 10
   */
  ruleCount?: number;
  /**
   * @example
   * 1001
   */
  ruleId?: number;
  /**
   * @example
   * 手机号
   */
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      ruleCount: 'RuleCount',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleCount: 'number',
      ruleId: 'number',
      ruleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTotalSensitiveInfoResponseBodyDataCountDOList extends $dara.Model {
  dataCountDOList?: ListTotalSensitiveInfoResponseBodyDataCountDOListDataCountDOList[];
  /**
   * @example
   * 1788537600000000000
   */
  date?: number;
  /**
   * @example
   * cn-zhangjiakou
   */
  regionId?: string;
  ruleInfoList?: ListTotalSensitiveInfoResponseBodyDataCountDOListRuleInfoList[];
  /**
   * @example
   * 0
   */
  s0Count?: number;
  /**
   * @example
   * 0
   */
  s10Count?: number;
  /**
   * @example
   * 0
   */
  s1Count?: number;
  /**
   * @example
   * 0
   */
  s2Count?: number;
  /**
   * @example
   * 0
   */
  s3Count?: number;
  /**
   * @example
   * 0
   */
  s4Count?: number;
  /**
   * @example
   * 0
   */
  s5Count?: number;
  /**
   * @example
   * 0
   */
  s6Count?: number;
  /**
   * @example
   * 0
   */
  s7Count?: number;
  /**
   * @example
   * 0
   */
  s8Count?: number;
  /**
   * @example
   * 0
   */
  s9Count?: number;
  /**
   * @example
   * 20
   */
  sensitiveCount?: number;
  /**
   * @example
   * 1
   */
  structFlag?: number;
  /**
   * @example
   * 1
   */
  templateId?: number;
  /**
   * @example
   * 通用分类分级模板
   */
  templateName?: string;
  /**
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dataCountDOList: 'DataCountDOList',
      date: 'Date',
      regionId: 'RegionId',
      ruleInfoList: 'RuleInfoList',
      s0Count: 'S0Count',
      s10Count: 'S10Count',
      s1Count: 'S1Count',
      s2Count: 'S2Count',
      s3Count: 'S3Count',
      s4Count: 'S4Count',
      s5Count: 'S5Count',
      s6Count: 'S6Count',
      s7Count: 'S7Count',
      s8Count: 'S8Count',
      s9Count: 'S9Count',
      sensitiveCount: 'SensitiveCount',
      structFlag: 'StructFlag',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataCountDOList: { 'type': 'array', 'itemType': ListTotalSensitiveInfoResponseBodyDataCountDOListDataCountDOList },
      date: 'number',
      regionId: 'string',
      ruleInfoList: { 'type': 'array', 'itemType': ListTotalSensitiveInfoResponseBodyDataCountDOListRuleInfoList },
      s0Count: 'number',
      s10Count: 'number',
      s1Count: 'number',
      s2Count: 'number',
      s3Count: 'number',
      s4Count: 'number',
      s5Count: 'number',
      s6Count: 'number',
      s7Count: 'number',
      s8Count: 'number',
      s9Count: 'number',
      sensitiveCount: 'number',
      structFlag: 'number',
      templateId: 'number',
      templateName: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dataCountDOList)) {
      $dara.Model.validateArray(this.dataCountDOList);
    }
    if(Array.isArray(this.ruleInfoList)) {
      $dara.Model.validateArray(this.ruleInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTotalSensitiveInfoResponseBodyRuleInfoList extends $dara.Model {
  /**
   * @example
   * 10
   */
  ruleCount?: number;
  /**
   * @example
   * 1001
   */
  ruleId?: number;
  /**
   * @example
   * 手机号
   */
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      ruleCount: 'RuleCount',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleCount: 'number',
      ruleId: 'number',
      ruleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTotalSensitiveInfoResponseBody extends $dara.Model {
  dataCountDOList?: ListTotalSensitiveInfoResponseBodyDataCountDOList[];
  /**
   * @example
   * 10
   */
  dbCount?: number;
  /**
   * @example
   * 5
   */
  instanceCount?: number;
  /**
   * @example
   * 7C6D8E9F-1234-5678-ABCD-0123456789AB
   */
  requestId?: string;
  ruleInfoList?: ListTotalSensitiveInfoResponseBodyRuleInfoList[];
  /**
   * @example
   * 0
   */
  s0Count?: number;
  /**
   * @example
   * 0
   */
  s10Count?: number;
  /**
   * @example
   * 0
   */
  s1Count?: number;
  /**
   * @example
   * 0
   */
  s2Count?: number;
  /**
   * @example
   * 0
   */
  s3Count?: number;
  /**
   * @example
   * 0
   */
  s4Count?: number;
  /**
   * @example
   * 0
   */
  s5Count?: number;
  /**
   * @example
   * 0
   */
  s6Count?: number;
  /**
   * @example
   * 0
   */
  s7Count?: number;
  /**
   * @example
   * 0
   */
  s8Count?: number;
  /**
   * @example
   * 0
   */
  s9Count?: number;
  /**
   * @example
   * 20
   */
  sensitiveCount?: number;
  /**
   * @example
   * 5
   */
  sensitiveDbCount?: number;
  /**
   * @example
   * 2
   */
  sensitiveInstanceCount?: number;
  /**
   * @example
   * 512
   */
  sensitiveUnStructSize?: number;
  /**
   * @example
   * 20
   */
  subSensitiveCount?: number;
  /**
   * @example
   * 100
   */
  subTotalCount?: number;
  /**
   * @example
   * 100
   */
  totalCount?: number;
  /**
   * @example
   * 1024
   */
  unStructSize?: number;
  static names(): { [key: string]: string } {
    return {
      dataCountDOList: 'DataCountDOList',
      dbCount: 'DbCount',
      instanceCount: 'InstanceCount',
      requestId: 'RequestId',
      ruleInfoList: 'RuleInfoList',
      s0Count: 'S0Count',
      s10Count: 'S10Count',
      s1Count: 'S1Count',
      s2Count: 'S2Count',
      s3Count: 'S3Count',
      s4Count: 'S4Count',
      s5Count: 'S5Count',
      s6Count: 'S6Count',
      s7Count: 'S7Count',
      s8Count: 'S8Count',
      s9Count: 'S9Count',
      sensitiveCount: 'SensitiveCount',
      sensitiveDbCount: 'SensitiveDbCount',
      sensitiveInstanceCount: 'SensitiveInstanceCount',
      sensitiveUnStructSize: 'SensitiveUnStructSize',
      subSensitiveCount: 'SubSensitiveCount',
      subTotalCount: 'SubTotalCount',
      totalCount: 'TotalCount',
      unStructSize: 'UnStructSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataCountDOList: { 'type': 'array', 'itemType': ListTotalSensitiveInfoResponseBodyDataCountDOList },
      dbCount: 'number',
      instanceCount: 'number',
      requestId: 'string',
      ruleInfoList: { 'type': 'array', 'itemType': ListTotalSensitiveInfoResponseBodyRuleInfoList },
      s0Count: 'number',
      s10Count: 'number',
      s1Count: 'number',
      s2Count: 'number',
      s3Count: 'number',
      s4Count: 'number',
      s5Count: 'number',
      s6Count: 'number',
      s7Count: 'number',
      s8Count: 'number',
      s9Count: 'number',
      sensitiveCount: 'number',
      sensitiveDbCount: 'number',
      sensitiveInstanceCount: 'number',
      sensitiveUnStructSize: 'number',
      subSensitiveCount: 'number',
      subTotalCount: 'number',
      totalCount: 'number',
      unStructSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dataCountDOList)) {
      $dara.Model.validateArray(this.dataCountDOList);
    }
    if(Array.isArray(this.ruleInfoList)) {
      $dara.Model.validateArray(this.ruleInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

