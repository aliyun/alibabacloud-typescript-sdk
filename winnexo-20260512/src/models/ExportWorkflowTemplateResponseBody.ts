// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportWorkflowTemplateResponseBodyTemplateSteps extends $dara.Model {
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
   * The owner type. Valid values:
   * - MEMBER: Human.
   * - AGENT: Agent.
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
   * The user IDs of the reviewers.
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
   * The step handling instructions.
   * 
   * @example
   * Collect customer information and submit it to the owner for review
   */
  specification?: string;
  /**
   * @remarks
   * The ordered array of fragments. Supports text, mention, skill, app, files, and web_search. Preserves referenced identities and order.
   * 
   * @example
   * [{"type":"text","content":"整理输入资料"}]
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

export class ExportWorkflowTemplateResponseBodyTemplate extends $dara.Model {
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
   * The template name.
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
   * The standardized steps.
   * 
   * @example
   * [{\\"stepId\\":\\"collect\\",\\"sortOrder\\":1,\\"name\\":\\"收集客户信息\\"}]
   */
  steps?: ExportWorkflowTemplateResponseBodyTemplateSteps[];
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
      steps: { 'type': 'array', 'itemType': ExportWorkflowTemplateResponseBodyTemplateSteps },
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

export class ExportWorkflowTemplateResponseBody extends $dara.Model {
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
  /**
   * @remarks
   * The simplified template definition that can be re-imported.
   * 
   * @example
   * {\\"name\\":\\"客户投诉处理流程\\",\\"schemaVersion\\":2}
   */
  template?: ExportWorkflowTemplateResponseBodyTemplate;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      template: 'template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      template: ExportWorkflowTemplateResponseBodyTemplate,
    };
  }

  validate() {
    if(this.template && typeof (this.template as any).validate === 'function') {
      (this.template as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

