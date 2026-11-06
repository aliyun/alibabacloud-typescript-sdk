// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateWorkflowTemplateDraftResponseBodyDraftSteps extends $dara.Model {
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
   * The name of the step.
   * 
   * @example
   * Customer complaint handling process
   */
  name?: string;
  /**
   * @remarks
   * The name of the agent owner.
   * 
   * @example
   * example
   */
  ownerAgentName?: string;
  /**
   * @remarks
   * The type of the owner. Valid values:
   * - MEMBER: human
   * - AGENT: agent
   * 
   * @example
   * MEMBER
   */
  ownerType?: string;
  /**
   * @remarks
   * The user ID of the human owner.
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
   * The list of user IDs of the reviewers.
   * 
   * @example
   * example
   */
  reviewerUserIds?: number[];
  /**
   * @remarks
   * The sort order of the step.
   * 
   * @example
   * 1
   */
  sortOrder?: number;
  /**
   * @remarks
   * The processing instructions of the step.
   * 
   * @example
   * Collect customer information and submit it to the owner for review
   */
  specification?: string;
  /**
   * @remarks
   * The ordered array of fragments. Supported types include text, mention, skill, app, files, and web_search. The referenced identities and order are preserved.
   * 
   * @example
   * [{\\"type\\":\\"text\\",\\"text\\":\\"收集客户信息\\"}]
   */
  specificationJson?: { [key: string]: any }[];
  /**
   * @remarks
   * The ID of the step.
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

export class GenerateWorkflowTemplateDraftResponseBodyDraft extends $dara.Model {
  /**
   * @remarks
   * The description of the template.
   * 
   * @example
   * Standard process for handling customer complaints
   */
  description?: string;
  /**
   * @remarks
   * 节点依赖边；每项包含from/to，引用稳定stepId
   * 
   * @example
   * []
   */
  edges?: { [key: string]: any }[];
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
   * The name of the template.
   * 
   * @example
   * Customer complaint handling process
   */
  name?: string;
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
  steps?: GenerateWorkflowTemplateDraftResponseBodyDraftSteps[];
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      edges: 'edges',
      layout: 'layout',
      name: 'name',
      schemaVersion: 'schemaVersion',
      steps: 'steps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      edges: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      layout: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      name: 'string',
      schemaVersion: 'number',
      steps: { 'type': 'array', 'itemType': GenerateWorkflowTemplateDraftResponseBodyDraftSteps },
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

export class GenerateWorkflowTemplateDraftResponseBody extends $dara.Model {
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
   * The generated non-persistent template draft.
   * 
   * @example
   * {\\"schemaVersion\\":2,\\"steps\\":[]}
   */
  draft?: GenerateWorkflowTemplateDraftResponseBodyDraft;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The requested resource does not exist
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      draft: 'draft',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      draft: GenerateWorkflowTemplateDraftResponseBodyDraft,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.draft && typeof (this.draft as any).validate === 'function') {
      (this.draft as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

