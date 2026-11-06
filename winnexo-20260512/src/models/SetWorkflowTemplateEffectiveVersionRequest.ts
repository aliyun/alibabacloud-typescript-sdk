// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetWorkflowTemplateEffectiveVersionRequest extends $dara.Model {
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
   * The version number of the returned content.
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

