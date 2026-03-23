// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckBackupEncryptionAuthorizedRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

