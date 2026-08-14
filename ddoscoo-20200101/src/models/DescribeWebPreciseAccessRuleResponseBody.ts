// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWebPreciseAccessRuleResponseBodyPreciseAccessConfigListRuleListConditionList extends $dara.Model {
  content?: string;
  contentList?: string[];
  field?: string;
  headerName?: string;
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
  action?: string;
  conditionList?: DescribeWebPreciseAccessRuleResponseBodyPreciseAccessConfigListRuleListConditionList[];
  expirePeriod?: number;
  expires?: number;
  name?: string;
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
  domain?: string;
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
  preciseAccessConfigList?: DescribeWebPreciseAccessRuleResponseBodyPreciseAccessConfigList[];
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

