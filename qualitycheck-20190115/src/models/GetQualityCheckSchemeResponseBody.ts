// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RulesInfo } from "./RulesInfo";


export class GetQualityCheckSchemeResponseBodyDataSchemeCheckTypeList extends $dara.Model {
  checkName?: string;
  /**
   * @example
   * 0
   */
  checkType?: number;
  /**
   * @example
   * 1
   */
  enable?: number;
  /**
   * @example
   * 32
   */
  schemeId?: number;
  /**
   * @example
   * 20
   */
  score?: number;
  /**
   * @example
   * 10
   */
  sourceScore?: number;
  static names(): { [key: string]: string } {
    return {
      checkName: 'CheckName',
      checkType: 'CheckType',
      enable: 'Enable',
      schemeId: 'SchemeId',
      score: 'Score',
      sourceScore: 'SourceScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkName: 'string',
      checkType: 'number',
      enable: 'number',
      schemeId: 'number',
      score: 'number',
      sourceScore: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityCheckSchemeResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1616113198000
   */
  createTime?: string;
  /**
   * @example
   * xxx
   */
  createUserName?: string;
  /**
   * @example
   * 1
   */
  dataType?: number;
  description?: string;
  initScore?: string;
  /**
   * @example
   * xxx
   */
  name?: string;
  ruleIds?: string[];
  ruleList?: RulesInfo[];
  schemeCheckTypeList?: GetQualityCheckSchemeResponseBodyDataSchemeCheckTypeList[];
  /**
   * @example
   * 112**
   */
  schemeId?: number;
  /**
   * @example
   * 1
   */
  schemeTemplateId?: number;
  /**
   * @example
   * 1
   */
  status?: number;
  /**
   * @example
   * 1
   */
  templateType?: number;
  /**
   * @example
   * 1
   */
  type?: number;
  /**
   * @example
   * 1616113198000
   */
  updateTime?: string;
  /**
   * @example
   * xxx
   */
  updateUserName?: string;
  /**
   * @example
   * 1616113198000
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createUserName: 'CreateUserName',
      dataType: 'DataType',
      description: 'Description',
      initScore: 'InitScore',
      name: 'Name',
      ruleIds: 'RuleIds',
      ruleList: 'RuleList',
      schemeCheckTypeList: 'SchemeCheckTypeList',
      schemeId: 'SchemeId',
      schemeTemplateId: 'SchemeTemplateId',
      status: 'Status',
      templateType: 'TemplateType',
      type: 'Type',
      updateTime: 'UpdateTime',
      updateUserName: 'UpdateUserName',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      createUserName: 'string',
      dataType: 'number',
      description: 'string',
      initScore: 'string',
      name: 'string',
      ruleIds: { 'type': 'array', 'itemType': 'string' },
      ruleList: { 'type': 'array', 'itemType': RulesInfo },
      schemeCheckTypeList: { 'type': 'array', 'itemType': GetQualityCheckSchemeResponseBodyDataSchemeCheckTypeList },
      schemeId: 'number',
      schemeTemplateId: 'number',
      status: 'number',
      templateType: 'number',
      type: 'number',
      updateTime: 'string',
      updateUserName: 'string',
      version: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.ruleIds)) {
      $dara.Model.validateArray(this.ruleIds);
    }
    if(Array.isArray(this.ruleList)) {
      $dara.Model.validateArray(this.ruleList);
    }
    if(Array.isArray(this.schemeCheckTypeList)) {
      $dara.Model.validateArray(this.schemeCheckTypeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityCheckSchemeResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: GetQualityCheckSchemeResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  messages?: string[];
  /**
   * @example
   * 96138D8D-8D26-4E41-BFF4-77AED1088BBD
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
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      messages: 'Messages',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetQualityCheckSchemeResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      messages: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    if(Array.isArray(this.messages)) {
      $dara.Model.validateArray(this.messages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

