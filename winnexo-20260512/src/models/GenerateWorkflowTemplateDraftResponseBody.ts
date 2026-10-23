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
   * example
   */
  name?: string;
  /**
   * @remarks
   * The name of the responsible agent.
   * 
   * @example
   * example
   */
  ownerAgentName?: string;
  /**
   * @remarks
   * The type of the owner. Valid values: MEMBER: Human. AGENT: Agent.
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
   * The list of user IDs of the reviewers.
   * 
   * @example
   * example
   */
  reviewerUserIds?: number[];
  /**
   * @remarks
   * The order of the step.
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
   * example
   */
  specification?: string;
  /**
   * @remarks
   * The array of structured segments for the step instructions. Supported types include text, mention, skill, app, files, and web_search. The fields and nested attachments of each segment are retained as returned by the backend.
   * 
   * @example
   * [{"type":"text","content":"Organize input materials"}]
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
   * example
   */
  description?: string;
  /**
   * @remarks
   * The name of the template.
   * 
   * @example
   * example
   */
  name?: string;
  /**
   * @remarks
   * The ordered steps.
   * 
   * @example
   * example
   */
  steps?: GenerateWorkflowTemplateDraftResponseBodyDraftSteps[];
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      name: 'name',
      steps: 'steps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      steps: { 'type': 'array', 'itemType': GenerateWorkflowTemplateDraftResponseBodyDraftSteps },
    };
  }

  validate() {
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
   * example
   */
  draft?: GenerateWorkflowTemplateDraftResponseBodyDraft;
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

