// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRowPermissionByUserIdShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  listRowPermissionByUserIdQueryShrink?: string;
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
      listRowPermissionByUserIdQueryShrink: 'ListRowPermissionByUserIdQuery',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listRowPermissionByUserIdQueryShrink: 'string',
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

