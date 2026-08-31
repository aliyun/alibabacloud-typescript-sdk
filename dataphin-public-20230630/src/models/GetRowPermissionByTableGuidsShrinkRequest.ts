// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRowPermissionByTableGuidsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The request command.
   * 
   * This parameter is required.
   */
  getRowPermissionByTableGuidsQueryShrink?: string;
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
      getRowPermissionByTableGuidsQueryShrink: 'GetRowPermissionByTableGuidsQuery',
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      getRowPermissionByTableGuidsQueryShrink: 'string',
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

