// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWorkflowTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The write action. Valid values: SAVE: Saves the template as a draft without taking effect. SUBMIT: Saves and submits the template and sets it as the only effective version. Default value: SUBMIT.
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
   * The complete JSON definition of the template, including name, description, and steps.
   * 
   * This parameter is required.
   * 
   * @example
   * example
   */
  definition?: { [key: string]: any };
  /**
   * @remarks
   * The tenant ID. This is a common parameter. If not specified, the default tenant of the caller is used.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'action',
      collaborationGroupId: 'collaborationGroupId',
      definition: 'definition',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      collaborationGroupId: 'string',
      definition: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      tenantId: 'string',
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

