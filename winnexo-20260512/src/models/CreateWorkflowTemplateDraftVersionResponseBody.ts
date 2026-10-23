// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWorkflowTemplateDraftVersionResponseBodySteps extends $dara.Model {
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
   * The name of the digital employee executor. This parameter is required when ownerType is set to AGENT.
   * 
   * @example
   * example
   */
  ownerAgentName?: string;
  /**
   * @remarks
   * The type of the executor. Valid values: MEMBER (workspace member) and AGENT (digital employee).
   * 
   * @example
   * MEMBER
   */
  ownerType?: string;
  /**
   * @remarks
   * The user ID of the member executor. This parameter is required when ownerType is set to MEMBER.
   * 
   * @example
   * 1
   */
  ownerUserId?: number;
  /**
   * @remarks
   * The list of user IDs for the owners (formerly reviewers). This parameter is valid only for steps with a digital employee executor and is always empty for steps with a member executor.
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
   * The array of ordered step description segments. Supported types include text, mention, skill, app, files, and web_search. When plain text is entered, a single text segment is returned. The fields and nested attachments of each segment are retained as-is from the backend.
   * 
   * @example
   * [{"type":"text","content":"Organize input materials"}]
   */
  specification?: string;
  /**
   * @remarks
   * The array of structured step description segments. Supported types include text, mention, skill, app, files, and web_search. The fields and nested attachments of each segment are retained as-is from the backend.
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

export class CreateWorkflowTemplateDraftVersionResponseBody extends $dara.Model {
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
   * The description of the template.
   * 
   * @example
   * example
   */
  description?: string;
  /**
   * @remarks
   * The current effective version number of the template. An empty value indicates that only a draft exists and the template cannot be used for work items.
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
   * example
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The modification time in ISO 8601 format.
   * 
   * @example
   * example
   */
  gmtModified?: string;
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
   * The name of the template.
   * 
   * @example
   * example
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
   * The ordered steps.
   * 
   * @example
   * example
   */
  steps?: CreateWorkflowTemplateDraftVersionResponseBodySteps[];
  /**
   * @remarks
   * The ID of the template.
   * 
   * @example
   * tpl_example
   */
  templateId?: string;
  /**
   * @remarks
   * The version number to which the returned content belongs.
   * 
   * @example
   * v2
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
   * DRAFT
   */
  versionStatus?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      createdByUserId: 'createdByUserId',
      description: 'description',
      effectiveVersion: 'effectiveVersion',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      message: 'message',
      name: 'name',
      requestId: 'requestId',
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
      effectiveVersion: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      message: 'string',
      name: 'string',
      requestId: 'string',
      steps: { 'type': 'array', 'itemType': CreateWorkflowTemplateDraftVersionResponseBodySteps },
      templateId: 'string',
      version: 'string',
      versionDescription: 'string',
      versionStatus: 'string',
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

