// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckRegionSupportBackupEncryptionRequest extends $dara.Model {
  /**
   * @example
   * rm-wz91q53f9*******
   */
  DBInstanceID?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceID: 'DBInstanceID',
      regionId: 'RegionId',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceID: 'string',
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

