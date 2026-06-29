// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ParseBatchTaskDependencyShrinkRequest extends $dara.Model {
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
   * The parse request.
   * 
   * This parameter is required.
   */
  parseCommandShrink?: string;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      parseCommandShrink: 'ParseCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      parseCommandShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

