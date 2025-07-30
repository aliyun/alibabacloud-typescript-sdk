// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSkillGroupConfigResponseBodyDataSkillGroupConfigAllRuleListRuleNameInfo extends $dara.Model {
  /**
   * @example
   * 221
   */
  rid?: number;
  /**
   * @example
   * test
   */
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      rid: 'Rid',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rid: 'number',
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

export class ListSkillGroupConfigResponseBodyDataSkillGroupConfigAllRuleList extends $dara.Model {
  ruleNameInfo?: ListSkillGroupConfigResponseBodyDataSkillGroupConfigAllRuleListRuleNameInfo[];
  static names(): { [key: string]: string } {
    return {
      ruleNameInfo: 'RuleNameInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleNameInfo: { 'type': 'array', 'itemType': ListSkillGroupConfigResponseBodyDataSkillGroupConfigAllRuleListRuleNameInfo },
    };
  }

  validate() {
    if(Array.isArray(this.ruleNameInfo)) {
      $dara.Model.validateArray(this.ruleNameInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupConfigResponseBodyDataSkillGroupConfigRuleListRuleNameInfo extends $dara.Model {
  /**
   * @example
   * 2221
   */
  rid?: number;
  /**
   * @example
   * x\\"x\\"x
   */
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      rid: 'Rid',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rid: 'number',
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

export class ListSkillGroupConfigResponseBodyDataSkillGroupConfigRuleList extends $dara.Model {
  ruleNameInfo?: ListSkillGroupConfigResponseBodyDataSkillGroupConfigRuleListRuleNameInfo[];
  static names(): { [key: string]: string } {
    return {
      ruleNameInfo: 'RuleNameInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleNameInfo: { 'type': 'array', 'itemType': ListSkillGroupConfigResponseBodyDataSkillGroupConfigRuleListRuleNameInfo },
    };
  }

  validate() {
    if(Array.isArray(this.ruleNameInfo)) {
      $dara.Model.validateArray(this.ruleNameInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupConfigResponseBodyDataSkillGroupConfigSkillGroupScreensSkillGroupScreen extends $dara.Model {
  /**
   * @example
   * 0
   */
  dataType?: number;
  /**
   * @example
   * customerName
   */
  name?: string;
  /**
   * @example
   * 1
   */
  symbol?: number;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      dataType: 'DataType',
      name: 'Name',
      symbol: 'Symbol',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataType: 'number',
      name: 'string',
      symbol: 'number',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupConfigResponseBodyDataSkillGroupConfigSkillGroupScreens extends $dara.Model {
  skillGroupScreen?: ListSkillGroupConfigResponseBodyDataSkillGroupConfigSkillGroupScreensSkillGroupScreen[];
  static names(): { [key: string]: string } {
    return {
      skillGroupScreen: 'SkillGroupScreen',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skillGroupScreen: { 'type': 'array', 'itemType': ListSkillGroupConfigResponseBodyDataSkillGroupConfigSkillGroupScreensSkillGroupScreen },
    };
  }

  validate() {
    if(Array.isArray(this.skillGroupScreen)) {
      $dara.Model.validateArray(this.skillGroupScreen);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupConfigResponseBodyDataSkillGroupConfig extends $dara.Model {
  /**
   * @example
   * 1
   */
  allContentQualityCheck?: number;
  /**
   * @example
   * 223
   */
  allRids?: string;
  allRuleList?: ListSkillGroupConfigResponseBodyDataSkillGroupConfigAllRuleList;
  /**
   * @example
   * 2020-12-01T15:12Z
   */
  createTime?: string;
  /**
   * @example
   * 221
   */
  id?: number;
  /**
   * @example
   * xxx
   */
  instanceId?: string;
  /**
   * @example
   * 211
   */
  modelId?: number;
  /**
   * @example
   * xxx
   */
  modelName?: string;
  /**
   * @example
   * xxx
   */
  name?: string;
  /**
   * @example
   * 0
   */
  qualityCheckType?: number;
  /**
   * @example
   * 2221
   */
  rid?: string;
  ruleList?: ListSkillGroupConfigResponseBodyDataSkillGroupConfigRuleList;
  /**
   * @example
   * true
   */
  screenSwitch?: boolean;
  /**
   * @example
   * 0
   */
  skillGroupFrom?: number;
  /**
   * @example
   * 123
   */
  skillGroupId?: string;
  /**
   * @example
   * xxx
   */
  skillGroupName?: string;
  skillGroupScreens?: ListSkillGroupConfigResponseBodyDataSkillGroupConfigSkillGroupScreens;
  /**
   * @example
   * 1
   */
  status?: number;
  /**
   * @example
   * 1
   */
  type?: number;
  /**
   * @example
   * 2020-12-01T19:28Z
   */
  updateTime?: string;
  /**
   * @example
   * 323
   */
  vocabId?: number;
  /**
   * @example
   * xxx
   */
  vocabName?: string;
  static names(): { [key: string]: string } {
    return {
      allContentQualityCheck: 'AllContentQualityCheck',
      allRids: 'AllRids',
      allRuleList: 'AllRuleList',
      createTime: 'CreateTime',
      id: 'Id',
      instanceId: 'InstanceId',
      modelId: 'ModelId',
      modelName: 'ModelName',
      name: 'Name',
      qualityCheckType: 'QualityCheckType',
      rid: 'Rid',
      ruleList: 'RuleList',
      screenSwitch: 'ScreenSwitch',
      skillGroupFrom: 'SkillGroupFrom',
      skillGroupId: 'SkillGroupId',
      skillGroupName: 'SkillGroupName',
      skillGroupScreens: 'SkillGroupScreens',
      status: 'Status',
      type: 'Type',
      updateTime: 'UpdateTime',
      vocabId: 'VocabId',
      vocabName: 'VocabName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allContentQualityCheck: 'number',
      allRids: 'string',
      allRuleList: ListSkillGroupConfigResponseBodyDataSkillGroupConfigAllRuleList,
      createTime: 'string',
      id: 'number',
      instanceId: 'string',
      modelId: 'number',
      modelName: 'string',
      name: 'string',
      qualityCheckType: 'number',
      rid: 'string',
      ruleList: ListSkillGroupConfigResponseBodyDataSkillGroupConfigRuleList,
      screenSwitch: 'boolean',
      skillGroupFrom: 'number',
      skillGroupId: 'string',
      skillGroupName: 'string',
      skillGroupScreens: ListSkillGroupConfigResponseBodyDataSkillGroupConfigSkillGroupScreens,
      status: 'number',
      type: 'number',
      updateTime: 'string',
      vocabId: 'number',
      vocabName: 'string',
    };
  }

  validate() {
    if(this.allRuleList && typeof (this.allRuleList as any).validate === 'function') {
      (this.allRuleList as any).validate();
    }
    if(this.ruleList && typeof (this.ruleList as any).validate === 'function') {
      (this.ruleList as any).validate();
    }
    if(this.skillGroupScreens && typeof (this.skillGroupScreens as any).validate === 'function') {
      (this.skillGroupScreens as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupConfigResponseBodyData extends $dara.Model {
  skillGroupConfig?: ListSkillGroupConfigResponseBodyDataSkillGroupConfig[];
  static names(): { [key: string]: string } {
    return {
      skillGroupConfig: 'SkillGroupConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skillGroupConfig: { 'type': 'array', 'itemType': ListSkillGroupConfigResponseBodyDataSkillGroupConfig },
    };
  }

  validate() {
    if(Array.isArray(this.skillGroupConfig)) {
      $dara.Model.validateArray(this.skillGroupConfig);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupConfigResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: ListSkillGroupConfigResponseBodyData;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 3CEA0495-341B-4482-9AD9-8191EF4***
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListSkillGroupConfigResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

