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
   * Customer Complaint Handling Process
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
   * Specifies whether to manually review the output. Default value: false. This can only be enabled for digital workers, and review tasks are automatically sent to the owner.
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
   * Collect customer information and submit it to the owner for review
   */
  specification?: string;
  /**
   * @remarks
   * An ordered array of segments. Supports text, mention, skill, app, files, and web_search. Preserves reference identities and order.
   * 
   * @example
   * [{"type":"text","content":"Organize input materials"}]
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
   * The node dependency edges. Each item contains from and to fields that reference stable step IDs.
   * 
   * @example
   * []
   */
  edges?: { [key: string]: any }[];
  /**
   * @remarks
   * The optional canvas layout, indexed by step ID. This only affects the display and does not determine dependencies.
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
   * Customer Complaint Handling Process
   */
  name?: string;
  /**
   * @remarks
   * The schema version of the template. The current value is 2, which is independent of the business version vN.
   * 
   * @example
   * 2
   */
  schemaVersion?: number;
  /**
   * @remarks
   * The normalized steps.
   * 
   * @example
   * [{"stepId":"collect","sortOrder":1,"name":"Collect customer information"}]
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
   * The error description.
   * 
   * @example
   * The requested resource does not exist
   */
  message?: string;
  /**
   * @remarks
   * The request tracking ID.
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
   * {"name":"Customer Complaint Handling Process","schemaVersion":2}
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

