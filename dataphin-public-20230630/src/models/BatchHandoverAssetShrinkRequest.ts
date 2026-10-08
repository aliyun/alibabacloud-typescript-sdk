// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchHandoverAssetShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  handoverCommandShrink?: string;
  /**
   * @remarks
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
      handoverCommandShrink: 'HandoverCommand',
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      handoverCommandShrink: 'string',
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

