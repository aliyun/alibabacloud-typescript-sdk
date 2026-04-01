// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MigrateConnectionToOtherZoneRequest extends $dara.Model {
  /**
   * @remarks
   * The endpoint of the instance. The endpoint is specified when you create the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-bp1oypo6ky19y****
   */
  connectionString?: string;
  /**
   * @remarks
   * The instance ID. You can call the DescribeDBInstances operation to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-bp1oypo6ky19y****
   */
  DBInstanceId?: string;
  ownerId?: number;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the zone.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-i
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

