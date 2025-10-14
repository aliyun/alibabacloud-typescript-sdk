// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGdnInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pxc-********
   */
  DBInstanceName?: string;
  /**
   * @example
   * FASTJSON 2.0.x has been released, faster and more secure, recommend you upgrade.
   */
  description?: string;
  gdnMode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  rplConflictStrategy?: string;
  rplDmlStrategy?: string;
  rplSyncDdl?: boolean;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      description: 'Description',
      gdnMode: 'GdnMode',
      regionId: 'RegionId',
      rplConflictStrategy: 'RplConflictStrategy',
      rplDmlStrategy: 'RplDmlStrategy',
      rplSyncDdl: 'RplSyncDdl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      description: 'string',
      gdnMode: 'string',
      regionId: 'string',
      rplConflictStrategy: 'string',
      rplDmlStrategy: 'string',
      rplSyncDdl: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

