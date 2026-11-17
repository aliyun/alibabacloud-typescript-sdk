// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTotalSensitiveInfoResponseBodyDataCountDOListDataCountDOList extends $dara.Model {
  /**
   * @remarks
   * The statistics date, represented as a UNIX timestamp in nanoseconds. The time corresponds to midnight of the current day in the server time zone.
   * 
   * @example
   * 1788537600000000000
   */
  date?: number;
  /**
   * @remarks
   * The number of sensitive data items within the current statistics scope.
   * 
   * @example
   * 20
   */
  sensitiveCount?: number;
  /**
   * @remarks
   * The total number of items that meet the current statistics or query scope.
   * 
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
   * @remarks
   * The number of data objects that hit the detection rule.
   * 
   * @example
   * 10
   */
  ruleCount?: number;
  /**
   * @remarks
   * The ID of the matched detection rule.
   * 
   * @example
   * 1001
   */
  ruleId?: number;
  /**
   * @remarks
   * The name of the matched detection rule.
   * 
   * @example
   * Phone number
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
  /**
   * @remarks
   * The list of statistics categorized by region, template, data type, or date.
   */
  dataCountDOList?: ListTotalSensitiveInfoResponseBodyDataCountDOListDataCountDOList[];
  /**
   * @remarks
   * The statistics date, represented as a UNIX timestamp in nanoseconds. The time corresponds to midnight of the current day in the server time zone.
   * 
   * @example
   * 1788537600000000000
   */
  date?: number;
  /**
   * @remarks
   * The ID of the region where the asset resides.
   * 
   * @example
   * cn-zhangjiakou
   */
  regionId?: string;
  /**
   * @remarks
   * The list of aggregated counts by detection rule.
   */
  ruleInfoList?: ListTotalSensitiveInfoResponseBodyDataCountDOListRuleInfoList[];
  /**
   * @remarks
   * The number of S0-level data objects.
   * 
   * @example
   * 0
   */
  s0Count?: number;
  /**
   * @remarks
   * The number of S10-level data objects.
   * 
   * @example
   * 0
   */
  s10Count?: number;
  /**
   * @remarks
   * The number of S1-level data objects.
   * 
   * @example
   * 0
   */
  s1Count?: number;
  /**
   * @remarks
   * The number of S2-level data objects.
   * 
   * @example
   * 0
   */
  s2Count?: number;
  /**
   * @remarks
   * The number of S3-level data objects.
   * 
   * @example
   * 0
   */
  s3Count?: number;
  /**
   * @remarks
   * The number of S4-level data objects.
   * 
   * @example
   * 0
   */
  s4Count?: number;
  /**
   * @remarks
   * The number of S5-level data objects.
   * 
   * @example
   * 0
   */
  s5Count?: number;
  /**
   * @remarks
   * The number of S6-level data objects.
   * 
   * @example
   * 0
   */
  s6Count?: number;
  /**
   * @remarks
   * The number of S7-level data objects.
   * 
   * @example
   * 0
   */
  s7Count?: number;
  /**
   * @remarks
   * The number of S8-level data objects.
   * 
   * @example
   * 0
   */
  s8Count?: number;
  /**
   * @remarks
   * The number of S9-level data objects.
   * 
   * @example
   * 0
   */
  s9Count?: number;
  /**
   * @remarks
   * The number of sensitive data items within the current statistics scope.
   * 
   * @example
   * 20
   */
  sensitiveCount?: number;
  /**
   * @remarks
   * The type of the statistics data. Valid values:
   * - 1: Structured data.
   * - 0: Unstructured data.
   * 
   * @example
   * 1
   */
  structFlag?: number;
  /**
   * @remarks
   * The ID of the data classification and grading template.
   * 
   * @example
   * 1
   */
  templateId?: number;
  /**
   * @remarks
   * The name of the data classification and grading template.
   * 
   * @example
   * General classification and grading template
   */
  templateName?: string;
  /**
   * @remarks
   * The total number of items that meet the current statistics or query scope.
   * 
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
   * @remarks
   * The number of data objects that hit the detection rule.
   * 
   * @example
   * 10
   */
  ruleCount?: number;
  /**
   * @remarks
   * The ID of the matched detection rule.
   * 
   * @example
   * 1001
   */
  ruleId?: number;
  /**
   * @remarks
   * The name of the matched detection rule.
   * 
   * @example
   * Phone number
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
  /**
   * @remarks
   * The list of statistics categorized by region, template, data type, or date.
   */
  dataCountDOList?: ListTotalSensitiveInfoResponseBodyDataCountDOList[];
  /**
   * @remarks
   * The total number of databases.
   * 
   * @example
   * 10
   */
  dbCount?: number;
  /**
   * @remarks
   * The total number of instances.
   * 
   * @example
   * 5
   */
  instanceCount?: number;
  /**
   * @remarks
   * The request ID, which is active and can be used to locate the API you invoke.
   * 
   * @example
   * 7C6D8E9F-1234-5678-ABCD-0123456789AB
   */
  requestId?: string;
  /**
   * @remarks
   * The list of aggregated counts by detection rule.
   */
  ruleInfoList?: ListTotalSensitiveInfoResponseBodyRuleInfoList[];
  /**
   * @remarks
   * The number of S0-level data objects.
   * 
   * @example
   * 0
   */
  s0Count?: number;
  /**
   * @remarks
   * The number of S10-level data objects.
   * 
   * @example
   * 0
   */
  s10Count?: number;
  /**
   * @remarks
   * The number of S1-level data objects.
   * 
   * @example
   * 0
   */
  s1Count?: number;
  /**
   * @remarks
   * The number of S2-level data objects.
   * 
   * @example
   * 0
   */
  s2Count?: number;
  /**
   * @remarks
   * The number of S3-level data objects.
   * 
   * @example
   * 0
   */
  s3Count?: number;
  /**
   * @remarks
   * The number of S4-level data objects.
   * 
   * @example
   * 0
   */
  s4Count?: number;
  /**
   * @remarks
   * The number of S5-level data objects.
   * 
   * @example
   * 0
   */
  s5Count?: number;
  /**
   * @remarks
   * The number of S6-level data objects.
   * 
   * @example
   * 0
   */
  s6Count?: number;
  /**
   * @remarks
   * The number of S7-level data objects.
   * 
   * @example
   * 0
   */
  s7Count?: number;
  /**
   * @remarks
   * The number of S8-level data objects.
   * 
   * @example
   * 0
   */
  s8Count?: number;
  /**
   * @remarks
   * The number of S9-level data objects.
   * 
   * @example
   * 0
   */
  s9Count?: number;
  /**
   * @remarks
   * The number of sensitive data items within the current statistics scope.
   * 
   * @example
   * 20
   */
  sensitiveCount?: number;
  /**
   * @remarks
   * The number of databases that contain sensitive data.
   * 
   * @example
   * 5
   */
  sensitiveDbCount?: number;
  /**
   * @remarks
   * The number of instances that contain sensitive data.
   * 
   * @example
   * 2
   */
  sensitiveInstanceCount?: number;
  /**
   * @remarks
   * The size of sensitive unstructured data.
   * 
   * @example
   * 512
   */
  sensitiveUnStructSize?: number;
  /**
   * @remarks
   * The number of child sensitive data objects. This parameter is used for sensitive column statistics in structured data scenarios.
   * 
   * @example
   * 20
   */
  subSensitiveCount?: number;
  /**
   * @remarks
   * The total number of child data objects. This parameter is used for column-level statistics in structured data scenarios.
   * 
   * @example
   * 100
   */
  subTotalCount?: number;
  /**
   * @remarks
   * The total number of items that meet the current statistics or query scope.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  /**
   * @remarks
   * The total size of unstructured data.
   * 
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

