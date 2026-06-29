// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveDataServiceAppMemberShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Tenant ID
   * 
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * Remove regular members from a data service application
   * 
   * This parameter is required.
   */
  removeCommandShrink?: string;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      removeCommandShrink: 'RemoveCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      removeCommandShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

