// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMigrationZonesResponseBodyZoneList extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the instance can be migrated to the zone. Valid values:
   * - true: The instance can be migrated to the zone.
   * - false: The instance cannot be migrated to the zone because the migration conditions are not met.
   * 
   * @example
   * true
   */
  available?: boolean;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-beijing-i
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      available: 'available',
      zoneId: 'zoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      available: 'boolean',
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

export class ListMigrationZonesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum number of results returned.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next query.
   * 
   * @example
   * 11
   */
  nextToken?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 819A7F0F-2951-540F-BD94-6A41ECF0281F
   */
  requestId?: string;
  /**
   * @remarks
   * The list of zones.
   */
  zoneList?: ListMigrationZonesResponseBodyZoneList[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      requestId: 'requestId',
      zoneList: 'zoneList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      zoneList: { 'type': 'array', 'itemType': ListMigrationZonesResponseBodyZoneList },
    };
  }

  validate() {
    if(Array.isArray(this.zoneList)) {
      $dara.Model.validateArray(this.zoneList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

