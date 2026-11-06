// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWorkflowTemplateShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The write action. Valid values:
   * - SAVE: Saves the template as a draft. The changes do not take effect. Node names and assignees can be left empty.
   * - SUBMIT: Requires complete nodes. Saves and submits the template as the only effective version.
   * Default value: SUBMIT.
   * 
   * @example
   * SUBMIT
   */
  action?: string;
  /**
   * @remarks
   * The ID of the collaboration workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * cg_9401
   */
  collaborationGroupId?: string;
  /**
   * @remarks
   * The complete JSON definition of the template. This overwrites the existing definition.
   * 
   * This parameter is required.
   * 
   * @example
   * {"name":"Customer Complaint Handling Process","schemaVersion":2,"steps":[{"stepId":"collect","sortOrder":1,"name":"Collect Customer Information"}]}
   */
  definitionShrink?: string;
  /**
   * @remarks
   * The submitted version number on which the new version is based. This parameter is mutually exclusive with version. If you do not specify this parameter, the current effective version is used.
   * 
   * @example
   * v1
   */
  sourceVersion?: string;
  /**
   * @remarks
   * The ID of the template.
   * 
   * This parameter is required.
   * 
   * @example
   * tpl_9401
   */
  templateId?: string;
  /**
   * @remarks
   * The tenant ID. This is a common parameter. If not specified, the default tenant of the caller is used.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  /**
   * @remarks
   * The version number to which the content belongs.
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
  static names(): { [key: string]: string } {
    return {
      action: 'action',
      collaborationGroupId: 'collaborationGroupId',
      definitionShrink: 'definition',
      sourceVersion: 'sourceVersion',
      templateId: 'templateId',
      tenantId: 'tenantId',
      version: 'version',
      versionDescription: 'versionDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      collaborationGroupId: 'string',
      definitionShrink: 'string',
      sourceVersion: 'string',
      templateId: 'string',
      tenantId: 'string',
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

