// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateUserStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the directory.
   * 
   * @example
   * d-00fc2p61****
   */
  directoryId?: string;
  /**
   * @remarks
   * The new status of the user. Valid values:
   * 
   * *   Enabled: The logon of the user is enabled.
   * *   Disabled: The logon of the user is disabled.
   * 
   * @example
   * Disabled
   */
  newStatus?: string;
  /**
   * @remarks
   * The ID of the user.
   * 
   * @example
   * u-00q8wbq42wiltcrk****
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
      newStatus: 'NewStatus',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
      newStatus: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

