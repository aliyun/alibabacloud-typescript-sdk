// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTotalSensitiveInfoResponseBodyDataCountDOListDataCountDOList extends $dara.Model {
  /**
   * @remarks
   * The statistics date, represented as a UNIX timestamp in nanoseconds. The time corresponds to midnight of the day in the server time zone.
   * 
   * @example
   * 1788537600000000000
   */
  date?: number;
  /**
   * @remarks
   * The number of sensitive data objects within the current statistics scope.
   * 
   * @example
   * 20
   */
  sensitiveCount?: number;
  /**
   * @remarks
   * The total number of data objects that match the current statistics or query scope.
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
   * The number of data objects that match the detection rule.
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
   * The list of statistics grouped by region, template, data type, or date.
   */
  dataCountDOList?: ListTotalSensitiveInfoResponseBodyDataCountDOListDataCountDOList[];
  /**
   * @remarks
   * The statistics date, represented as a UNIX timestamp in nanoseconds. The time corresponds to midnight of the day in the server time zone.
   * 
   * @example
   * 1788537600000000000
   */
  date?: number;
  /**
   * @remarks
   * The region ID of the asset.
   * 
   * @example
   * cn-zhangjiakou
   */
  regionId?: string;
  /**
   * @remarks
   * The list of counts aggregated by detection rule.
   */
  ruleInfoList?: ListTotalSensitiveInfoResponseBodyDataCountDOListRuleInfoList[];
  /**
   * @remarks
   * The number of data objects at the S0 sensitivity level.
   * 
   * @example
   * 0
   */
  s0Count?: number;
  /**
   * @remarks
   * The number of data objects at the S10 sensitivity level.
   * 
   * @example
   * 0
   */
  s10Count?: number;
  /**
   * @remarks
   * The number of data objects at the S1 sensitivity level.
   * 
   * @example
   * 0
   */
  s1Count?: number;
  /**
   * @remarks
   * The number of data objects at the S2 sensitivity level.
   * 
   * @example
   * 0
   */
  s2Count?: number;
  /**
   * @remarks
   * The number of data objects at the S3 sensitivity level.
   * 
   * @example
   * 0
   */
  s3Count?: number;
  /**
   * @remarks
   * The number of data objects at the S4 sensitivity level.
   * 
   * @example
   * 0
   */
  s4Count?: number;
  /**
   * @remarks
   * The number of data objects at the S5 sensitivity level.
   * 
   * @example
   * 0
   */
  s5Count?: number;
  /**
   * @remarks
   * The number of data objects at the S6 sensitivity level.
   * 
   * @example
   * 0
   */
  s6Count?: number;
  /**
   * @remarks
   * The number of data objects at the S7 sensitivity level.
   * 
   * @example
   * 0
   */
  s7Count?: number;
  /**
   * @remarks
   * The number of data objects at the S8 sensitivity level.
   * 
   * @example
   * 0
   */
  s8Count?: number;
  /**
   * @remarks
   * The number of data objects at the S9 sensitivity level.
   * 
   * @example
   * 0
   */
  s9Count?: number;
  /**
   * @remarks
   * The number of sensitive data objects within the current statistics scope.
   * 
   * @example
   * 20
   */
  sensitiveCount?: number;
  /**
   * @remarks
   * The data type of the statistics. Valid values:
   * 
   * - 1: structured data.
   * - 0: unstructured data.
   * 
   * @example
   * 1
   */
  structFlag?: number;
  /**
   * @remarks
   * The ID of the data classification template.
   * 
   * @example
   * 1
   */
  templateId?: number;
  /**
   * @remarks
   * The name of the data classification template.
   * 
   * @example
   * General classification template
   */
  templateName?: string;
  /**
   * @remarks
   * The total number of data objects that match the current statistics or query scope.
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
   * The number of data objects that match the detection rule.
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
   * The list of statistics grouped by region, template, data type, or date.
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
   * The request ID, which can be used to locate this API call.
   * 
   * @example
   * 7C6D8E9F-1234-5678-ABCD-0123456789AB
   */
  requestId?: string;
  /**
   * @remarks
   * The list of counts aggregated by detection rule.
   */
  ruleInfoList?: ListTotalSensitiveInfoResponseBodyRuleInfoList[];
  /**
   * @remarks
   * The number of data objects at the S0 sensitivity level.
   * 
   * @example
   * 0
   */
  s0Count?: number;
  /**
   * @remarks
   * The number of data objects at the S10 sensitivity level.
   * 
   * @example
   * 0
   */
  s10Count?: number;
  /**
   * @remarks
   * The number of data objects at the S1 sensitivity level.
   * 
   * @example
   * 0
   */
  s1Count?: number;
  /**
   * @remarks
   * The number of data objects at the S2 sensitivity level.
   * 
   * @example
   * 0
   */
  s2Count?: number;
  /**
   * @remarks
   * The number of data objects at the S3 sensitivity level.
   * 
   * @example
   * 0
   */
  s3Count?: number;
  /**
   * @remarks
   * The number of data objects at the S4 sensitivity level.
   * 
   * @example
   * 0
   */
  s4Count?: number;
  /**
   * @remarks
   * The number of data objects at the S5 sensitivity level.
   * 
   * @example
   * 0
   */
  s5Count?: number;
  /**
   * @remarks
   * The number of data objects at the S6 sensitivity level.
   * 
   * @example
   * 0
   */
  s6Count?: number;
  /**
   * @remarks
   * The number of data objects at the S7 sensitivity level.
   * 
   * @example
   * 0
   */
  s7Count?: number;
  /**
   * @remarks
   * The number of data objects at the S8 sensitivity level.
   * 
   * @example
   * 0
   */
  s8Count?: number;
  /**
   * @remarks
   * The number of data objects at the S9 sensitivity level.
   * 
   * @example
   * 0
   */
  s9Count?: number;
  /**
   * @remarks
   * The number of sensitive data objects within the current statistics scope.
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
   * The number of child-level sensitive data objects. In structured data scenarios, this value is used for sensitive column statistics.
   * 
   * @example
   * 20
   */
  subSensitiveCount?: number;
  /**
   * @remarks
   * The total number of child-level data objects. In structured data scenarios, this value is used for column-level statistics.
   * 
   * @example
   * 100
   */
  subTotalCount?: number;
  /**
   * @remarks
   * The total number of data objects that match the current statistics or query scope.
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

