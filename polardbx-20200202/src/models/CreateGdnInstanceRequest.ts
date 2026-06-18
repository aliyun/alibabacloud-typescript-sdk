// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGdnInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the primary instance.
   * 
   * This parameter is required.
   * 
   * @example
   * pxc-********
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The description of the instance.
   * 
   * @example
   * FASTJSON 2.0.x has been released, faster and more secure, recommend you upgrade.
   */
  description?: string;
  /**
   * @remarks
   * The GDN mode.
   * 
   * @example
   * gdn_mode_master_slave, gdn_mode_bidirectional
   */
  gdnMode?: string;
  /**
   * @remarks
   * The region in which the instance resides.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The conflict strategy.
   * 
   * @example
   * DIRECT_OVERWRITE, OVERWRITE, IGNORE, INTERRUPT
   */
  rplConflictStrategy?: string;
  /**
   * @remarks
   * The DML replication policy.
   * 
   * @example
   * MERGE,  SERIAL, TRANSACTION, SPLIT
   */
  rplDmlStrategy?: string;
  /**
   * @remarks
   * Specifies whether to synchronize DDL statements.
   */
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

