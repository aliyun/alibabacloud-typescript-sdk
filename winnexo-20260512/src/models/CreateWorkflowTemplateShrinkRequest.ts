// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWorkflowTemplateShrinkRequest extends $dara.Model {
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
  definitionShrink?: string;
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
      definitionShrink: 'definition',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      collaborationGroupId: 'string',
      definitionShrink: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

