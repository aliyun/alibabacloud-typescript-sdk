// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWorkflowTemplateResponseBodySteps extends $dara.Model {
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
   * The owner type. Valid values: MEMBER: Human. AGENT: Agent.
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
   * The step processing instructions.
   * 
   * @example
   * example
   */
  specification?: string;
  /**
   * @remarks
   * The array of structured segments for step instructions. Supports text, mention, skill, app, files, and web_search. Segment fields and nested attachments are preserved as returned by the backend.
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

export class CreateWorkflowTemplateResponseBody extends $dara.Model {
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
   * example
   */
  description?: string;
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
   * The template name.
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
  steps?: CreateWorkflowTemplateResponseBodySteps[];
  /**
   * @remarks
   * The template ID.
   * 
   * @example
   * tpl_example
   */
  templateId?: string;
  /**
   * @remarks
   * The version number of the returned content.
   * 
   * @example
   * v1
   */
  version?: string;
  /**
   * @remarks
   * The change description for this version. If this field is empty for v1, the template description is displayed.
   * 
   * @example
   * Initial template creation
   */
  versionDescription?: string;
  /**
   * @remarks
   * The version status. Valid values: DRAFT: Draft. SUBMITTED: Submitted.
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
      steps: { 'type': 'array', 'itemType': CreateWorkflowTemplateResponseBodySteps },
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

