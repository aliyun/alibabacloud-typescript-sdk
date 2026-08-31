// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataAssetsGovernObjectShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The query instruction.
   * 
   * This parameter is required.
   */
  commandShrink?: string;
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
   * The ID of the operation user.
   * 
   * @example
   * 30001011
   */
  opUserId?: string;
  static names(): { [key: string]: string } {
    return {
      commandShrink: 'Command',
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandShrink: 'string',
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

