// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportWorkflowTemplateResponseBodySteps extends $dara.Model {
  /**
   * @remarks
   * The model tier.
   * 
   * @example
   * standard
   */
  modelMode?: string;
  /**
   * @remarks
   * The step name.
   * 
   * @example
   * Customer Complaint Handling Process
   */
  name?: string;
  /**
   * @remarks
   * The name of the digital employee executor.
   * 
   * @example
   * example
   */
  ownerAgentName?: string;
  /**
   * @remarks
   * The executor type. Valid values:
   * - MEMBER: workspace member.
   * - AGENT: digital employee.
   * 
   * @example
   * MEMBER
   */
  ownerType?: string;
  /**
   * @remarks
   * The user ID of the employee executor.
   * 
   * @example
   * 1
   */
  ownerUserId?: number;
  /**
   * @remarks
   * 是否人工审核产出物，默认关闭；仅数字员工可开启，审核待办自动发负责人
   * 
   * @example
   * false
   */
  reviewOutput?: boolean;
  /**
   * @remarks
   * The list of user IDs of the persons in charge. This field is valid only for steps with a digital employee executor and is always empty for steps with a member executor.
   * 
   * @example
   * example
   */
  reviewerUserIds?: number[];
  /**
   * @remarks
   * The step order.
   * 
   * @example
   * 1
   */
  sortOrder?: number;
  /**
   * @remarks
   * The step processing instructions.
   * 
   * @example
   * Collect customer information and submit it to the person in charge for review
   */
  specification?: string;
  /**
   * @remarks
   * The ordered array of fragments, which supports text, mention, skill, app, files, and web_search. The referenced identities and order are retained.
   * 
   * @example
   * [{\\"type\\":\\"text\\",\\"text\\":\\"收集客户信息\\"}]
   */
  specificationJson?: { [key: string]: any }[];
  /**
   * @remarks
   * The step ID.
   * 
   * @example
   * collect
   */
  stepId?: string;
  static names(): { [key: string]: string } {
    return {
      modelMode: 'modelMode',
      name: 'name',
      ownerAgentName: 'ownerAgentName',
      ownerType: 'ownerType',
      ownerUserId: 'ownerUserId',
      reviewOutput: 'reviewOutput',
      reviewerUserIds: 'reviewerUserIds',
      sortOrder: 'sortOrder',
      specification: 'specification',
      specificationJson: 'specificationJson',
      stepId: 'stepId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelMode: 'string',
      name: 'string',
      ownerAgentName: 'string',
      ownerType: 'string',
      ownerUserId: 'number',
      reviewOutput: 'boolean',
      reviewerUserIds: { 'type': 'array', 'itemType': 'number' },
      sortOrder: 'number',
      specification: 'string',
      specificationJson: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      stepId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.reviewerUserIds)) {
      $dara.Model.validateArray(this.reviewerUserIds);
    }
    if(Array.isArray(this.specificationJson)) {
      $dara.Model.validateArray(this.specificationJson);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportWorkflowTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business status code. A value of 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The user ID of the creator.
   * 
   * @example
   * 1
   */
  createdByUserId?: number;
  /**
   * @remarks
   * The template description.
   * 
   * @example
   * Standard process for handling customer complaints
   */
  description?: string;
  /**
   * @remarks
   * 节点依赖边；每项包含from/to，引用稳定stepId；显式空数组表示没有依赖
   * 
   * @example
   * [{"from":"collect","to":"deliver"}]
   */
  edges?: { [key: string]: any }[];
  /**
   * @remarks
   * The current effective version number of the template. An empty value indicates that only a draft exists and it cannot be used for work items. For imported templates, a v1 draft is created and this field is empty.
   * 
   * @example
   * v1
   */
  effectiveVersion?: string;
  /**
   * @remarks
   * The creation time in ISO 8601 format.
   * 
   * @example
   * 2026-11-05T08:00:00Z
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The modification time in ISO 8601 format.
   * 
   * @example
   * 2026-11-05T08:00:00Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * 可选画布布局，按stepId索引；只影响展示，不决定依赖
   * 
   * @example
   * {"collect":{"x":0,"y":0},"review":{"x":240,"y":0}}
   */
  layout?: { [key: string]: any };
  /**
   * @remarks
   * The error description.
   * 
   * @example
   * The requested resource does not exist
   */
  message?: string;
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * Customer Complaint Handling Process
   */
  name?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * 模板结构版本，当前为2，与业务版本vN独立
   * 
   * @example
   * 2
   */
  schemaVersion?: number;
  /**
   * @remarks
   * The ordered steps.
   * 
   * @example
   * [{\\"stepId\\":\\"collect\\",\\"sortOrder\\":1,\\"name\\":\\"收集客户信息\\"}]
   */
  steps?: ImportWorkflowTemplateResponseBodySteps[];
  /**
   * @remarks
   * The template ID.
   * 
   * @example
   * tpl_9401
   */
  templateId?: string;
  /**
   * @remarks
   * The version number generated for this import.
   * 
   * @example
   * v1
   */
  version?: string;
  /**
   * @remarks
   * The version status. Valid values:
   * - DRAFT: draft.
   * - SUBMITTED: submitted.
   * The value is fixed to DRAFT for imported templates.
   * 
   * @example
   * DRAFT
   */
  versionStatus?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      createdByUserId: 'createdByUserId',
      description: 'description',
      edges: 'edges',
      effectiveVersion: 'effectiveVersion',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      layout: 'layout',
      message: 'message',
      name: 'name',
      requestId: 'requestId',
      schemaVersion: 'schemaVersion',
      steps: 'steps',
      templateId: 'templateId',
      version: 'version',
      versionStatus: 'versionStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      createdByUserId: 'number',
      description: 'string',
      edges: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      effectiveVersion: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      layout: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      name: 'string',
      requestId: 'string',
      schemaVersion: 'number',
      steps: { 'type': 'array', 'itemType': ImportWorkflowTemplateResponseBodySteps },
      templateId: 'string',
      version: 'string',
      versionStatus: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.edges)) {
      $dara.Model.validateArray(this.edges);
    }
    if(this.layout) {
      $dara.Model.validateMap(this.layout);
    }
    if(Array.isArray(this.steps)) {
      $dara.Model.validateArray(this.steps);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

