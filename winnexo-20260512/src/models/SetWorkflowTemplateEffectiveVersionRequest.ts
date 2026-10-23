// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetWorkflowTemplateEffectiveVersionRequest extends $dara.Model {
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
   * The tenant ID. This is a common parameter. If this parameter is not specified, the default tenant of the caller is used.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  /**
   * @remarks
   * The submitted template version number to be set as effective. The format is a lowercase v followed by a positive integer, such as v1.
   * 
   * This parameter is required.
   * 
   * @example
   * v1
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      collaborationGroupId: 'collaborationGroupId',
      templateId: 'templateId',
      tenantId: 'tenantId',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collaborationGroupId: 'string',
      templateId: 'string',
      tenantId: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

