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
   * The name of the agent owner.
   * 
   * @example
   * example
   */
  ownerAgentName?: string;
  /**
   * @remarks
   * The owner type. Valid values:
   * 
   * - **USER**: User. This is the default value.
   * 
   * - **APP**: App.
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
   * Specifies whether to manually review the output. By default, this feature is disabled. It can be enabled only for digital employees. Review to-do items are automatically sent to the person in charge.
   * 
   * @example
   * false
   */
  reviewOutput?: boolean;
  /**
   * @remarks
   * The list of user IDs for the reviewers. This field is valid only for digital employee executor steps and is always empty for member executor steps.
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
   * The processing instructions for the step.
   * 
   * @example
   * Collect customer information and submit it to the person in charge for review
   */
  specification?: string;
  /**
   * @remarks
   * The ordered array of segments. Supported types include text, mention, skill, app, files, and web_search. The reference identities and order are preserved.
   * 
   * @example
   * [{\\"type\\":\\"text\\",\\"text\\":\\"Collect customer information\\"}]
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
   * The node dependency edges. Each item contains from and to fields that reference stable step IDs. An explicit empty array indicates no dependencies.
   * 
   * @example
   * [{"from":"collect","to":"deliver"}]
   */
  edges?: { [key: string]: any }[];
  /**
   * @remarks
   * The current effective version number of the template. An empty value indicates that only a draft exists and the template cannot be used for work items. This field is empty because an import always creates a v1 draft.
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
   * The optional canvas layout, indexed by step ID. This field only affects the display and does not determine dependencies.
   * 
   * @example
   * {"collect":{"x":0,"y":0},"review":{"x":240,"y":0}}
   */
  layout?: { [key: string]: any };
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
   * The schema version of the template. The current value is 2, which is independent of the business version vN.
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
   * [{\\"stepId\\":\\"collect\\",\\"sortOrder\\":1,\\"name\\":\\"Collect customer information\\"}]
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
   * The version number generated by this import.
   * 
   * @example
   * v1
   */
  version?: string;
  /**
   * @remarks
   * The version status. Valid values: DRAFT and SUBMITTED. The value is fixed to DRAFT for imported templates.
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

