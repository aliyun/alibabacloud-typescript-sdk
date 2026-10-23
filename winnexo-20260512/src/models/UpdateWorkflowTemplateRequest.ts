// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWorkflowTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The write action. Valid values:
   * - SAVE: Saves the template as a draft without taking effect.
   * - SUBMIT: Saves and submits the template, setting it as the only effective version.
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
   * group_example
   */
  collaborationGroupId?: string;
  /**
   * @remarks
   * The complete JSON definition of the template to overwrite the existing one.
   * 
   * This parameter is required.
   * 
   * @example
   * example
   */
  definition?: { [key: string]: any };
  /**
   * @remarks
   * The submitted version number on which the new version is based. This parameter is mutually exclusive with the version parameter. If not specified, the current effective version is used as the fallback.
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
   * tpl_example
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
   * The draft template version number to write. The format is a lowercase v followed by a positive integer, such as v1. Submitted versions cannot be written. If not specified, a new version is generated.
   * 
   * @example
   * v2
   */
  version?: string;
  /**
   * @remarks
   * The version description. The maximum length is 500 characters. When writing a draft, if this parameter is not specified or is null, the original value is retained. An empty string clears the value.
   * 
   * @example
   * Add a review step
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

