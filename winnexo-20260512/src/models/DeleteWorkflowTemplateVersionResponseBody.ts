// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteWorkflowTemplateVersionResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The ID of the user who created the version.
   * 
   * @example
   * 1
   */
  createdByUserId?: number;
  /**
   * @remarks
   * The description of the template for this version. This can be used for display when version v1 has no version description.
   * 
   * @example
   * Automatically generate weekly reports
   */
  description?: string;
  /**
   * @remarks
   * The time when the version was created. The time is in the ISO 8601 format.
   * 
   * @example
   * 2026-10-19T10:00:00+08:00
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the version was modified. The time is in the ISO 8601 format.
   * 
   * @example
   * 2026-10-19T10:00:00+08:00
   */
  gmtModified?: string;
  /**
   * @remarks
   * The time when the version was submitted. The time is in the ISO 8601 format. This is empty for a draft.
   * 
   * @example
   * 2026-10-19T10:00:00+08:00
   */
  gmtSubmitted?: string;
  /**
   * @remarks
   * Indicates whether the version is the only current active version.
   * 
   * @example
   * false
   */
  isEffective?: boolean;
  /**
   * @remarks
   * The name of the template for this version.
   * 
   * @example
   * example
   */
  name?: string;
  /**
   * @remarks
   * The submitted version number on which this version is based. This is empty for a newly created v1 version. Saving or submitting a draft retains the original source version.
   * 
   * @example
   * v1
   */
  sourceVersion?: string;
  /**
   * @remarks
   * The version status. Valid values: DRAFT (draft) and SUBMITTED (submitted).
   * 
   * @example
   * DRAFT
   */
  status?: string;
  /**
   * @remarks
   * The number of steps in this version.
   * 
   * @example
   * 3
   */
  stepCount?: number;
  /**
   * @remarks
   * The ID of the user who submitted the version. This is empty for a draft.
   * 
   * @example
   * 1
   */
  submittedByUserId?: number;
  /**
   * @remarks
   * The ID of the user who last modified the version.
   * 
   * @example
   * 1
   */
  updatedByUserId?: number;
  /**
   * @remarks
   * The version number.
   * 
   * @example
   * v2
   */
  version?: string;
  /**
   * @remarks
   * The persisted version change description. An empty value indicates that no description is provided.
   * 
   * @example
   * Added an approval step
   */
  versionDescription?: string;
  static names(): { [key: string]: string } {
    return {
      createdByUserId: 'createdByUserId',
      description: 'description',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      gmtSubmitted: 'gmtSubmitted',
      isEffective: 'isEffective',
      name: 'name',
      sourceVersion: 'sourceVersion',
      status: 'status',
      stepCount: 'stepCount',
      submittedByUserId: 'submittedByUserId',
      updatedByUserId: 'updatedByUserId',
      version: 'version',
      versionDescription: 'versionDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdByUserId: 'number',
      description: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      gmtSubmitted: 'string',
      isEffective: 'boolean',
      name: 'string',
      sourceVersion: 'string',
      status: 'string',
      stepCount: 'number',
      submittedByUserId: 'number',
      updatedByUserId: 'number',
      version: 'string',
      versionDescription: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWorkflowTemplateVersionResponseBody extends $dara.Model {
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
   * The current active version number. An empty value indicates that only a draft exists.
   * 
   * @example
   * v1
   */
  effectiveVersion?: string;
  /**
   * @remarks
   * All remaining versions after deletion, sorted in descending order by version number.
   * 
   * @example
   * example
   */
  items?: DeleteWorkflowTemplateVersionResponseBodyItems[];
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
   * The request tracking ID.
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the template.
   * 
   * @example
   * tpl_example
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      effectiveVersion: 'effectiveVersion',
      items: 'items',
      message: 'message',
      requestId: 'requestId',
      templateId: 'templateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      effectiveVersion: 'string',
      items: { 'type': 'array', 'itemType': DeleteWorkflowTemplateVersionResponseBodyItems },
      message: 'string',
      requestId: 'string',
      templateId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

