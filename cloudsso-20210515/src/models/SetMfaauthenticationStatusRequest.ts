// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetMFAAuthenticationStatusRequest extends $dara.Model {
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
   * The status of MFA. Valid values:
   * 
   * *   Enabled
   * *   Disabled
   * 
   * @example
   * Enabled
   */
  MFAAuthenticationStatus?: string;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
      MFAAuthenticationStatus: 'MFAAuthenticationStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
      MFAAuthenticationStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

