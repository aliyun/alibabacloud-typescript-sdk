// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetWorkflowTemplateEffectiveVersionResponseBodySteps extends $dara.Model {
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
   * The step name. This can be empty for drafts but is required upon submission.
   * 
   * @example
   * Collect customer information
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
   * The owner type. Valid values: MEMBER (human) and AGENT (agent).
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
   * Specifies whether to manually review deliverables. This is disabled by default and can only be enabled for digital employees. Review tasks are automatically sent to the owner.
   * 
   * @example
   * false
   */
  reviewOutput?: boolean;
  /**
   * @remarks
   * The list of reviewer user IDs.
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
   * The display text derived from ordered segments. Fixed titles are not added, and it is not stored independently.
   * 
   * @example
   * Collect customer information and submit it to the owner for review
   */
  specification?: string;
  /**
   * @remarks
   * The array of ordered segments. Supports text, mention, skill, app, files, and web_search. Preserves reference identities and order.
   * 
   * @example
   * [{"type":"text","text":"Collect customer information"}]
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

export class SetWorkflowTemplateEffectiveVersionResponseBody extends $dara.Model {
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
   * 10001
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
   * The node dependency edges. Each item contains a from and to field, referencing a stable stepId.
   * 
   * @example
   * []
   */
  edges?: { [key: string]: any }[];
  /**
   * @remarks
   * The current effective version number of the template. An empty value indicates that only a draft exists and it cannot be used for work items.
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
   * The optional canvas layout, indexed by stepId. This only affects the display and does not determine dependencies.
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
   * The step name. This can be empty for drafts but is required upon submission.
   * 
   * @example
   * Customer complaint handling process
   */
  name?: string;
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
   * The template structure version. The current value is 2, which is independent of the business version vN.
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
   * [{"stepId":"collect","sortOrder":1,"name":"Collect customer information"}]
   */
  steps?: SetWorkflowTemplateEffectiveVersionResponseBodySteps[];
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
   * The version number to which the returned content belongs.
   * 
   * @example
   * v1
   */
  version?: string;
  /**
   * @remarks
   * The change description for this version. An empty value indicates that no description is provided.
   * 
   * @example
   * Added a review step
   */
  versionDescription?: string;
  /**
   * @remarks
   * The version status. Valid values: DRAFT (draft) and SUBMITTED (submitted).
   * 
   * @example
   * SUBMITTED
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
      versionDescription: 'versionDescription',
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
      steps: { 'type': 'array', 'itemType': SetWorkflowTemplateEffectiveVersionResponseBodySteps },
      templateId: 'string',
      version: 'string',
      versionDescription: 'string',
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

