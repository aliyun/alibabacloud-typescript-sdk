// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReplaceProjectWhiteListsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1030111021
   */
  id?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  replaceCommandShrink?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      opTenantId: 'OpTenantId',
      replaceCommandShrink: 'ReplaceCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      opTenantId: 'number',
      replaceCommandShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

