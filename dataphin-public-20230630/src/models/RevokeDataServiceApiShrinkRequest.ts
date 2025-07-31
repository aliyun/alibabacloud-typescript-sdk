// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RevokeDataServiceApiShrinkRequest extends $dara.Model {
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
   * 
   * @example
   * 102102
   */
  projectId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  revokeCommandShrink?: string;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      projectId: 'ProjectId',
      revokeCommandShrink: 'RevokeCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      projectId: 'number',
      revokeCommandShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

