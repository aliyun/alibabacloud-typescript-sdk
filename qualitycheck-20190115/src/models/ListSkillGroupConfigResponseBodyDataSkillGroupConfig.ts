// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListSkillGroupConfigResponseBodyDataSkillGroupConfigAllRuleList } from "./ListSkillGroupConfigResponseBodyDataSkillGroupConfigAllRuleList";
import { ListSkillGroupConfigResponseBodyDataSkillGroupConfigRuleList } from "./ListSkillGroupConfigResponseBodyDataSkillGroupConfigRuleList";
import { ListSkillGroupConfigResponseBodyDataSkillGroupConfigSkillGroupScreens } from "./ListSkillGroupConfigResponseBodyDataSkillGroupConfigSkillGroupScreens";


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

