// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddDataServiceProjectMemberShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The command to add project members.
   * 
   * This parameter is required.
   */
  addCommandShrink?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * The data service project ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 102102
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      addCommandShrink: 'AddCommand',
      opTenantId: 'OpTenantId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addCommandShrink: 'string',
      opTenantId: 'number',
      projectId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

