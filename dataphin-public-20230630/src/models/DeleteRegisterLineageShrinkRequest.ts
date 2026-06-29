// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteRegisterLineageShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The command for deleting registered lineage.
   * 
   * This parameter is required.
   */
  deleteRegisterLineageCommandShrink?: string;
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
  static names(): { [key: string]: string } {
    return {
      deleteRegisterLineageCommandShrink: 'DeleteRegisterLineageCommand',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteRegisterLineageCommandShrink: 'string',
      opTenantId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

