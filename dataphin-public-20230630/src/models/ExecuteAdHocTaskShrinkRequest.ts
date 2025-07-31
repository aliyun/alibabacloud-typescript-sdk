// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteAdHocTaskShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  executeCommandShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      executeCommandShrink: 'ExecuteCommand',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executeCommandShrink: 'string',
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

