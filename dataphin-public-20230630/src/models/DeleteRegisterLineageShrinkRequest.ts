// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteRegisterLineageShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The command for deleting registered data lineage.
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
  /**
   * @example
   * 30001011
   */
  opUserId?: string;
  static names(): { [key: string]: string } {
    return {
      deleteRegisterLineageCommandShrink: 'DeleteRegisterLineageCommand',
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteRegisterLineageCommandShrink: 'string',
      opTenantId: 'number',
      opUserId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

