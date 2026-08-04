// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateClientUserStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The user ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1495
   */
  id?: string;
  /**
   * @remarks
   * The status of the user. Valid values:
   * 
   * - **Enabled**: The user is enabled.
   * 
   * - **Disabled**: The user is disabled.
   * 
   * This parameter is required.
   * 
   * @example
   * Enabled
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
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

