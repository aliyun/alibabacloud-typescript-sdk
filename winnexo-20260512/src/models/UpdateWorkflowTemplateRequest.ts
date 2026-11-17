// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWorkflowTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The write action. Valid values:
   * - SAVE: Saves the template as a draft without taking effect, allowing node names and executors to be left empty.
   * - SUBMIT: Requires complete nodes, and saves and submits the template as the only effective version.
   * Default value: SUBMIT.
   * 
   * @example
   * SUBMIT
   */
  action?: string;
  /**
   * @remarks
   * The collaboration workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cg_9401
   */
  collaborationGroupId?: string;
  /**
   * @remarks
   * The complete JSON definition of the template for full overwriting.
   * 
   * This parameter is required.
   * 
   * @example
   * {"name":"Customer Complaint Handling Process","schemaVersion":2,"steps":[{"stepId":"collect","sortOrder":1,"name":"Collect Customer Information"}]}
   */
  definition?: { [key: string]: any };
  /**
   * @remarks
   * The submitted version number on which the new version is based. This parameter is mutually exclusive with version. If not specified, the system falls back to the current effective version.
   * 
   * @example
   * v1
   */
  sourceVersion?: string;
  /**
   * @remarks
   * The template ID.
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
   * Added review step
   */
  versionDescription?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'action',
      collaborationGroupId: 'collaborationGroupId',
      definition: 'definition',
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
      definition: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      sourceVersion: 'string',
      templateId: 'string',
      tenantId: 'string',
      version: 'string',
      versionDescription: 'string',
    };
  }

  validate() {
    if(this.definition) {
      $dara.Model.validateMap(this.definition);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

