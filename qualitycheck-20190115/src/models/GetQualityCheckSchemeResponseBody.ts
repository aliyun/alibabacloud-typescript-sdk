// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RulesInfo } from "./RulesInfo";


export class GetQualityCheckSchemeResponseBodyDataSchemeCheckTypeList extends $dara.Model {
  /**
   * @remarks
   * The name of the quality check dimension.
   * 
   * @example
   * 服务规范性检测
   */
  checkName?: string;
  /**
   * @remarks
   * The ID of the quality check dimension type.
   * 
   * @example
   * 0
   */
  checkType?: number;
  /**
   * @remarks
   * The status. Valid values: 0 (disabled) and 1 (enabled).
   * 
   * @example
   * 1
   */
  enable?: number;
  /**
   * @remarks
   * The quality check plan ID.
   * 
   * @example
   * 32
   */
  schemeId?: number;
  /**
   * @remarks
   * The score of the quality check dimension.
   * 
   * @example
   * 20
   */
  score?: number;
  /**
   * @remarks
   * The original score.
   * 
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
   * @remarks
   * The time when the task was created.
   * 
   * @example
   * 1616113198000
   */
  createTime?: string;
  /**
   * @remarks
   * The username of the creator.
   * 
   * @example
   * xxx
   */
  createUserName?: string;
  /**
   * @remarks
   * The data type of the quality check plan. Valid values: 0 (text) and 1 (audio).
   * 
   * @example
   * 1
   */
  dataType?: number;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * 售前使用
   */
  description?: string;
  /**
   * @remarks
   * The total score of the quality check plan.
   * 
   * @example
   * 100
   */
  initScore?: string;
  /**
   * @remarks
   * The name of the quality check plan.
   * 
   * @example
   * xxx
   */
  name?: string;
  /**
   * @remarks
   * The list of associated rule IDs.
   */
  ruleIds?: string[];
  /**
   * @remarks
   * The list of rules.
   */
  ruleList?: RulesInfo[];
  /**
   * @remarks
   * The list of quality check dimensions.
   */
  schemeCheckTypeList?: GetQualityCheckSchemeResponseBodyDataSchemeCheckTypeList[];
  /**
   * @remarks
   * The quality check plan ID.
   * 
   * @example
   * 112**
   */
  schemeId?: number;
  /**
   * @remarks
   * The quality check plan template ID.
   * 
   * @example
   * 1
   */
  schemeTemplateId?: number;
  /**
   * @remarks
   * The status. Valid values: 0 (deleted), 1 (published), 2 (unpublished), and 3 (updated but not published). Default value: 2.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The type of the quality check plan template. Valid values: 1 (system-built) and 2 (custom).
   * 
   * @example
   * 1
   */
  templateType?: number;
  /**
   * @remarks
   * The type of the quality check plan. Valid values: 0 (system-built) and 1 (custom).
   * 
   * @example
   * 1
   */
  type?: number;
  /**
   * @remarks
   * The time when the plan was last updated.
   * 
   * @example
   * 1616113198000
   */
  updateTime?: string;
  /**
   * @remarks
   * The username of the user who last updated the plan.
   * 
   * @example
   * xxx
   */
  updateUserName?: string;
  /**
   * @remarks
   * The version number.
   * 
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
   * @remarks
   * The result code. A value of 200 indicates success. Other values indicate failure. Use this code to determine the cause of a failure.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The QualityCheckScheme object. This is the JSON object of the quality check plan. For more information, see [`Description of quality check task objects`](https://help.aliyun.com/document_detail/453292.html).
   */
  data?: GetQualityCheckSchemeResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * If an error occurs, this field provides details about the error. If the request is successful, the value is **successful**.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The list of returned messages.
   */
  messages?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 96138D8D-8D26-4E41-BFF4-77AED1088BBD
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. A value of true indicates success. A value of false or null indicates failure.
   * 
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

