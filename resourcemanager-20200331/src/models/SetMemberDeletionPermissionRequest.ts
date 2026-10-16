// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetMemberDeletionPermissionRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable or disable the member deletion permission. Valid values:
   * 
   * - Enabled: enables the member deletion permission.
   * - Disabled: disables the member deletion permission.
   * 
   * This parameter is required.
   * 
   * @example
   * Enabled
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

