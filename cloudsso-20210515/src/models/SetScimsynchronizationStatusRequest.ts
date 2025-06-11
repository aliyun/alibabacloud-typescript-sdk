// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetSCIMSynchronizationStatusRequest extends $dara.Model {
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
   * The status of SCIM synchronization. Valid values:
   * 
   * *   Enabled
   * *   Disabled
   * 
   * @example
   * Enabled
   */
  SCIMSynchronizationStatus?: string;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
      SCIMSynchronizationStatus: 'SCIMSynchronizationStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
      SCIMSynchronizationStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

