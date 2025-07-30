// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSkillGroupConfigResponseBodyDataAllRuleListRuleNameInfo extends $dara.Model {
  /**
   * @example
   * 12
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

export class GetSkillGroupConfigResponseBodyDataAllRuleList extends $dara.Model {
  ruleNameInfo?: GetSkillGroupConfigResponseBodyDataAllRuleListRuleNameInfo[];
  static names(): { [key: string]: string } {
    return {
      ruleNameInfo: 'RuleNameInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleNameInfo: { 'type': 'array', 'itemType': GetSkillGroupConfigResponseBodyDataAllRuleListRuleNameInfo },
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

export class GetSkillGroupConfigResponseBodyDataRuleListRuleNameInfo extends $dara.Model {
  /**
   * @example
   * 222
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

export class GetSkillGroupConfigResponseBodyDataRuleList extends $dara.Model {
  ruleNameInfo?: GetSkillGroupConfigResponseBodyDataRuleListRuleNameInfo[];
  static names(): { [key: string]: string } {
    return {
      ruleNameInfo: 'RuleNameInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleNameInfo: { 'type': 'array', 'itemType': GetSkillGroupConfigResponseBodyDataRuleListRuleNameInfo },
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

export class GetSkillGroupConfigResponseBodyData extends $dara.Model {
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
  allRuleList?: GetSkillGroupConfigResponseBodyDataAllRuleList;
  /**
   * @example
   * 2020-12-01T15:12Z
   */
  createTime?: string;
  /**
   * @example
   * 1212
   */
  id?: number;
  /**
   * @example
   * xxx
   */
  instanceId?: string;
  /**
   * @example
   * 1321
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
   * 2332
   */
  rid?: string;
  ruleList?: GetSkillGroupConfigResponseBodyDataRuleList;
  /**
   * @example
   * 0
   */
  skillGroupFrom?: number;
  /**
   * @example
   * 111
   */
  skillGroupId?: string;
  /**
   * @example
   * xxx
   */
  skillGroupName?: string;
  /**
   * @example
   * 0
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
   * 123
   */
  vocabId?: number;
  /**
   * @example
   * test
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
      skillGroupFrom: 'SkillGroupFrom',
      skillGroupId: 'SkillGroupId',
      skillGroupName: 'SkillGroupName',
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
      allRuleList: GetSkillGroupConfigResponseBodyDataAllRuleList,
      createTime: 'string',
      id: 'number',
      instanceId: 'string',
      modelId: 'number',
      modelName: 'string',
      name: 'string',
      qualityCheckType: 'number',
      rid: 'string',
      ruleList: GetSkillGroupConfigResponseBodyDataRuleList,
      skillGroupFrom: 'number',
      skillGroupId: 'string',
      skillGroupName: 'string',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillGroupConfigResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: GetSkillGroupConfigResponseBodyData;
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
      data: GetSkillGroupConfigResponseBodyData,
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

