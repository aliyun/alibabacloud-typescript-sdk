// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateUsersStatusRequest extends $dara.Model {
  /**
   * @remarks
   * Collection of user IDs.
   * 
   * This parameter is required.
   */
  saseUserIds?: string[];
  /**
   * @remarks
   * User status. Valid values:
   * 
   * - **Enabled**: Enable the user.
   * 
   * - **Disabled**: Disable the user.
   * 
   * This parameter is required.
   * 
   * @example
   * Enabled
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      saseUserIds: 'SaseUserIds',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      saseUserIds: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.saseUserIds)) {
      $dara.Model.validateArray(this.saseUserIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

