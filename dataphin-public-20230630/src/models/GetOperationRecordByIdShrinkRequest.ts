// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOperationRecordByIdShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The query command.
   * 
   * This parameter is required.
   */
  detailCommandShrink?: string;
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
      detailCommandShrink: 'DetailCommand',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detailCommandShrink: 'string',
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

