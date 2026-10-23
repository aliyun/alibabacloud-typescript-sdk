// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportWorkflowTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The collaboration workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * group_example
   */
  collaborationGroupId?: string;
  /**
   * @remarks
   * The portable template JSON. The stepId and sortOrder fields can be omitted.
   * 
   * This parameter is required.
   * 
   * @example
   * example
   */
  template?: { [key: string]: any };
  /**
   * @remarks
   * The tenant ID. This is a common parameter. If omitted, the default tenant of the caller is used.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      collaborationGroupId: 'collaborationGroupId',
      template: 'template',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collaborationGroupId: 'string',
      template: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      tenantId: 'string',
    };
  }

  validate() {
    if(this.template) {
      $dara.Model.validateMap(this.template);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

