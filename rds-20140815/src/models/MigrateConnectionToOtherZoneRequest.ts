// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MigrateConnectionToOtherZoneRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  connectionString?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  DBInstanceId?: string;
  ownerId?: number;
  resourceOwnerId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      connectionString: 'ConnectionString',
      DBInstanceId: 'DBInstanceId',
      ownerId: 'OwnerId',
      resourceOwnerId: 'ResourceOwnerId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionString: 'string',
      DBInstanceId: 'string',
      ownerId: 'number',
      resourceOwnerId: 'number',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

