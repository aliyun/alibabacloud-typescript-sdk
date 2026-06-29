// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OfflineStandardShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The offline instruction.
   * 
   * This parameter is required.
   */
  offlineCommandShrink?: string;
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
      offlineCommandShrink: 'OfflineCommand',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      offlineCommandShrink: 'string',
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

