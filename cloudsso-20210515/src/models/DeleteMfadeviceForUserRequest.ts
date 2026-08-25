// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteMFADeviceForUserRequest extends $dara.Model {
  /**
   * @remarks
   * The directory ID.
   * 
   * @example
   * d-00fc2p61****
   */
  directoryId?: string;
  /**
   * @remarks
   * The MFA device ID.
   * 
   * You can call [ListMFADevicesForUser](https://help.aliyun.com/document_detail/333531.html) to query the MFA device ID.
   * 
   * @example
   * mfa-00ujhet8pycljj7j****
   */
  MFADeviceId?: string;
  mfaType?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * u-00q8wbq42wiltcrk****
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
      MFADeviceId: 'MFADeviceId',
      mfaType: 'MfaType',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
      MFADeviceId: 'string',
      mfaType: 'string',
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

