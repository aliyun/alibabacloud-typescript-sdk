// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSkillGroupConfigResponseBodyDataAllRuleListRuleNameInfo extends $dara.Model {
  rid?: number;
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
  rid?: number;
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
   * @remarks
   * Indicates whether to perform a full-text quality check after the real-time quality check is complete. Valid values:
   * 
   * - 1: yes
   * 
   * - 0: no
   * 
   * @example
   * 1
   */
  allContentQualityCheck?: number;
  /**
   * @remarks
   * The ID of the rule used for the full-text quality check.
   * 
   * @example
   * 223
   */
  allRids?: string;
  allRuleList?: GetSkillGroupConfigResponseBodyDataAllRuleList;
  /**
   * @remarks
   * The time when the configuration was created.
   * 
   * @example
   * 2020-12-01T15:12Z
   */
  createTime?: string;
  /**
   * @remarks
   * The configuration ID.
   * 
   * @example
   * 1212
   */
  id?: number;
  /**
   * @remarks
   * This is an internal parameter. You can ignore it.
   * 
   * @example
   * xxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The language model ID.
   * 
   * @example
   * 1321
   */
  modelId?: number;
  /**
   * @remarks
   * The language model name.
   * 
   * @example
   * xxx
   */
  modelName?: string;
  /**
   * @remarks
   * The configuration name.
   * 
   * @example
   * xxx
   */
  name?: string;
  /**
   * @remarks
   * The quality check type. Valid values:
   * 
   * - 0: offline
   * 
   * - 1: real-time
   * 
   * @example
   * 0
   */
  qualityCheckType?: number;
  /**
   * @remarks
   * The quality check rule ID.
   * 
   * @example
   * 2332
   */
  rid?: string;
  ruleList?: GetSkillGroupConfigResponseBodyDataRuleList;
  /**
   * @remarks
   * The source of the skill group. The value is fixed at 0.
   * 
   * @example
   * 0
   */
  skillGroupFrom?: number;
  /**
   * @remarks
   * The skill group ID.
   * 
   * @example
   * 111
   */
  skillGroupId?: string;
  /**
   * @remarks
   * The skill group name.
   * 
   * @example
   * xxx
   */
  skillGroupName?: string;
  /**
   * @remarks
   * The status of the configuration. Valid values: 0 (disabled) and 1 (enabled).
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * The configuration type. Valid values: 1 (custom configuration) and 0 (built-in configuration).
   * 
   * @example
   * 1
   */
  type?: number;
  /**
   * @remarks
   * The time when the configuration was last updated.
   * 
   * @example
   * 2020-12-01T19:28Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The hotword ID.
   * 
   * @example
   * 123
   */
  vocabId?: number;
  /**
   * @remarks
   * The hotword name.
   * 
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
   * @remarks
   * The response code. A value of **200** indicates a successful response.
   * 
   * > Other values indicate a failed response. You can use this field to identify the cause of the failure.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The details of the skill group rule configuration.
   */
  data?: GetSkillGroupConfigResponseBodyData;
  /**
   * @remarks
   * The response message. If the request is successful, a value of **successful** is returned. If the request fails, an error message is returned.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3CEA0495-341B-4482-9AD9-8191EF4***
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * The caller can use this field to determine whether the request was successful:
   * 
   * - **true**: The request was successful.
   * 
   * - false or **null**: The request failed.
   * 
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

